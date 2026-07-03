import { useEffect, useRef, useCallback } from 'react';
import './ElectricBorder.css';

const ElectricBorder = ({
  children,
  color = '#5227FF',
  speed = 1,
  chaos = 0.12,
  borderRadius = 24,
  className,
  style
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  const random = useCallback(x => (Math.sin(x * 12.9898) * 43758.5453) % 1, []);

  const noise2D = useCallback((x, y) => {
    const i = Math.floor(x), j = Math.floor(y);
    const fx = x - i, fy = y - j;
    const a = random(i + j * 57), b = random(i + 1 + j * 57);
    const c = random(i + (j + 1) * 57), d = random(i + 1 + (j + 1) * 57);
    const ux = fx * fx * (3.0 - 2.0 * fx);
    const uy = fy * fy * (3.0 - 2.0 * fy);
    return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
  }, [random]);

  const octavedNoise = useCallback((x, octaves, lacunarity, gain, baseAmplitude, baseFrequency, time, seed, baseFlatness) => {
    let y = 0, amplitude = baseAmplitude, frequency = baseFrequency;
    for (let i = 0; i < octaves; i++) {
      let octaveAmplitude = amplitude;
      if (i === 0) octaveAmplitude *= baseFlatness;
      y += octaveAmplitude * noise2D(frequency * x + seed * 100, time * frequency * 0.3);
      frequency *= lacunarity; amplitude *= gain;
    }
    return y;
  }, [noise2D]);

  const getCornerPoint = useCallback((cx, cy, r, startA, arcL, p) => {
    const a = startA + p * arcL;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  }, []);

  const getRoundedRectPoint = useCallback((t, left, top, w, h, r) => {
    const sw = w - 2 * r, sh = h - 2 * r;
    const cornerArc = (Math.PI * r) / 2;
    const total = 2 * sw + 2 * sh + 4 * cornerArc;
    let d = t * total, acc = 0;
    if (d <= acc + sw) return { x: left + r + (d - acc) / sw * sw, y: top }; acc += sw;
    if (d <= acc + cornerArc) return getCornerPoint(left + w - r, top + r, r, -Math.PI / 2, Math.PI / 2, (d - acc) / cornerArc); acc += cornerArc;
    if (d <= acc + sh) return { x: left + w, y: top + r + (d - acc) / sh * sh }; acc += sh;
    if (d <= acc + cornerArc) return getCornerPoint(left + w - r, top + h - r, r, 0, Math.PI / 2, (d - acc) / cornerArc); acc += cornerArc;
    if (d <= acc + sw) return { x: left + w - r - (d - acc) / sw * sw, y: top + h }; acc += sw;
    if (d <= acc + cornerArc) return getCornerPoint(left + r, top + h - r, r, Math.PI / 2, Math.PI / 2, (d - acc) / cornerArc); acc += cornerArc;
    if (d <= acc + sh) return { x: left, y: top + h - r - (d - acc) / sh * sh }; acc += sh;
    return getCornerPoint(left + r, top + r, r, Math.PI, Math.PI / 2, (d - acc) / cornerArc);
  }, [getCornerPoint]);

  useEffect(() => {
    const canvas = canvasRef.current, container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const octaves = 10, lacunarity = 1.6, gain = 0.7;
    const amplitude = chaos, frequency = 10, baseFlatness = 0;
    const displacement = 60, borderOffset = 60;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width + borderOffset * 2, h = rect.height + borderOffset * 2;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      return { w, h };
    };

    let { w, h } = updateSize();
    let lastDpr = Math.min(window.devicePixelRatio || 1, 2);

    function drawBorder(currentTime) {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (dpr !== lastDpr) { lastDpr = dpr; const s = updateSize(); w = s.w; h = s.h; }
      const dt = (currentTime - lastFrameTimeRef.current) / 1000;
      timeRef.current += dt * speed;
      lastFrameTimeRef.current = currentTime;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);
      ctx.strokeStyle = color; ctx.lineWidth = 1;
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';

      const scale = displacement, left = borderOffset, top = borderOffset;
      const bw = w - 2 * borderOffset, bh = h - 2 * borderOffset;
      const rad = Math.min(borderRadius, Math.min(bw, bh) / 2);
      const approxPerim = 2 * (bw + bh) + 2 * Math.PI * rad;
      const samples = Math.floor(approxPerim / 2);
      ctx.beginPath();

      for (let i = 0; i <= samples; i++) {
        const prog = i / samples;
        const pt = getRoundedRectPoint(prog, left, top, bw, bh, rad);
        const xn = octavedNoise(prog * 8, octaves, lacunarity, gain, amplitude, frequency, timeRef.current, 0, baseFlatness);
        const yn = octavedNoise(prog * 8, octaves, lacunarity, gain, amplitude, frequency, timeRef.current, 1, baseFlatness);
        const dx = pt.x + xn * scale, dy = pt.y + yn * scale;
        i === 0 ? ctx.moveTo(dx, dy) : ctx.lineTo(dx, dy);
      }
      ctx.closePath();
      ctx.stroke();
      animationRef.current = requestAnimationFrame(drawBorder);
    }

    const ro = new ResizeObserver(() => { const s = updateSize(); w = s.w; h = s.h; });
    ro.observe(container);
    animationRef.current = requestAnimationFrame(drawBorder);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      ro.disconnect();
    };
  }, [color, speed, chaos, borderRadius, octavedNoise, getRoundedRectPoint]);

  return (
    <div ref={containerRef} className={`electric-border ${className ?? ''}`} style={{ '--electric-border-color': color, borderRadius, ...style }}>
      <div className="eb-canvas-container">
        <canvas ref={canvasRef} className="eb-canvas" />
      </div>
      <div className="eb-layers">
        <div className="eb-glow-1" />
        <div className="eb-glow-2" />
        <div className="eb-background-glow" />
      </div>
      <div className="eb-content">{children}</div>
    </div>
  );
};

export default ElectricBorder;
