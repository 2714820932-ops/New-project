import GradualBlur from './GradualBlur';
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-curtain" />
      <div className="hero-bg">
        <video
          className="hero-video"
          src="/hero-bg.mp4"
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='100%25' height='100%25' fill='%23080808'/%3E%3C/svg%3E"
        />
        <div className="hero-grid" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content container">
        <div className="hero-badge">
          <span className="badge-dot" />
          数字媒体创作者
        </div>
        <h1 className="hero-title">
          <span className="hero-line">Catwisen</span>
          <span className="hero-line hero-line-accent">AI · 影像 · 特效</span>
        </h1>
        <p className="hero-desc">
          AI设计师 / 摄影师 / 特效师 —— 用技术与创意构建数字视觉体验
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            查看作品
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn-outline">联系我</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>向下滚动</span>
        <div className="scroll-line" />
      </div>
    <GradualBlur preset="footer" strength={2} height="8rem" divCount={6} opacity={0.8} />
    </section>
  );
}
