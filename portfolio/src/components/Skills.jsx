import BorderGlow from './BorderGlow';
const skills = [
  {
    title: 'AI 视觉生成',
    items: ['Stable Diffusion', 'Midjourney', 'ComfyUI', 'ControlNet'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5-4 9-10 9S2 17 2 12a10 10 0 0 1 10-10z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: '影视后期',
    items: ['Premiere Pro', 'After Effects', 'Davinci Resolve', '调色合成'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    title: '三维建模',
    items: ['Blender', 'Cinema 4D', 'Redshift', '产品可视化'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="21 8 21 16 12 21 3 16 3 8 12 3 21 8"/>
        <line x1="12" y1="21" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'UI / UX 设计',
    items: ['Figma', '界面设计', '用户体验', '原型制作'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
      </svg>
    ),
  },
  {
    title: '游戏引擎',
    items: ['Unity 3D', 'C# 脚本', '粒子特效', '场景搭建'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
        <line x1="12" y1="22" x2="12" y2="15.5"/>
        <polyline points="22 8.5 12 15.5 2 8.5"/>
      </svg>
    ),
  },
  {
    title: 'AIGC 工作流',
    items: ['提示词工程', 'LoRA训练', '图生视频', '批量生成'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-label">个人优势</div>
        <div className="section-header-row">
          <h2 className="section-title">核心能力</h2>
          <p className="section-subtitle">
            从AI生成到三维视觉，多种技能组合构建完整的数字创作工作流。
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <BorderGlow key={i} glowColor="186 80 50" backgroundColor="#141414" borderRadius={12} glowRadius={30} edgeSensitivity={25} colors={['#00d4ff', '#0891b2', '#0e7490']}>
              <div className="skill-card">
                <div className="skill-icon">{s.icon}</div>
                <h3 className="skill-title">{s.title}</h3>
                <ul className="skill-list">
                  {s.items.map(item => (
                    <li key={item} className="skill-item">{item}</li>
                  ))}
                </ul>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
