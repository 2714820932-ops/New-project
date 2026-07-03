const projects = [
  {
    title: 'AI生成艺术系列',
    category: 'AIGC · 视觉设计',
    desc: '基于Stable Diffusion与Midjourney的AI艺术创作系列，探索人机协作的视觉可能性。',
    tags: ['AI绘画', 'ComfyUI', '后期调色'],
    gradient: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
  },
  {
    title: '短片影像作品',
    category: '影视后期 · 剪辑',
    desc: '独立完成的商业短片与创意视频项目，涵盖剪辑、调色、动态图形与音效设计。',
    tags: ['Premiere', 'After Effects', 'Davinci'],
    gradient: 'linear-gradient(135deg, #0d0d0d, #1a1a2e, #16213e)',
  },
  {
    title: '三维场景建模',
    category: '3D · 视觉特效',
    desc: '使用Blender与C4D制作的三维场景与产品可视化项目，注重光影质感与细节表现。',
    tags: ['Blender', 'Cinema 4D', 'Redshift'],
    gradient: 'linear-gradient(135deg, #0f0f0f, #1b1b2f, #1a2a3a)',
  },
  {
    title: 'UI/UX设计案例',
    category: '界面设计 · 交互',
    desc: '移动端与Web端产品界面设计，关注用户体验与视觉语言的统一性。',
    tags: ['Figma', '界面设计', '原型制作'],
    gradient: 'linear-gradient(135deg, #0a0a0a, #12124a, #0a2a2a)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-label">精选项目</div>
        <div className="section-header-row">
          <h2 className="section-title">代表作品</h2>
          <p className="section-subtitle">
            涵盖AI视觉生成、影视后期、三维建模与UI设计，每一件作品都代表一次新的探索。
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <BorderGlow key={i} glowColor="186 100 60" backgroundColor="transparent" borderRadius={20} glowRadius={35} edgeSensitivity={25} animated={true} colors={['#00d4ff', '#7b61ff', '#0891b2']}>
              <div className="project-card">
                <div className="project-visual" style={{ background: p.gradient }}>
                  <div className="project-visual-overlay" />
                  <div className="project-visual-content">
                    <div className="project-category">{p.category}</div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-tags">
                      {p.tags.map(t => (
                        <span key={t} className="project-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
import BorderGlow from './BorderGlow';
