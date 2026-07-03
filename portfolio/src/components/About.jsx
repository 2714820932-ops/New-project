import BorderGlow from './BorderGlow';

export default function About() {
  const stats = [
    { value: '3+', label: '年创作经验' },
    { value: '50+', label: '完成项目' },
    { value: '15+', label: '合作客户' },
    { value: '8', label: '获奖荣誉' },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-label">关于我</div>
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-avatar-wrapper">
              <div className="about-avatar">
                <span className="avatar-initials">CW</span>
              </div>
              <div className="avatar-ring" />
            </div>
            <div className="about-contact-row">
              <div className="contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                18200175771
              </div>
              <div className="contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                2714820932@qq.com
              </div>
            </div>
          </div>
          <div className="about-info">
            <h2 className="section-title">
              数字媒体技术 · 新锐创作者
            </h2>
            <p className="about-bio">
              现就读于乐山师范学院数字媒体技术专业，本科。具备UI设计、三维建模、影视后期、Unity游戏引擎应用等综合能力。曾获全国计算机设计大赛国家二等奖、数字文化设计大赛全省二等奖，并于新东方教培机构担任助教组长及HR面试官，在成都名匠有限公司担任AIGC抽卡师与剪辑师。
            </p>
            <div className="about-details">
              <BorderGlow glowColor="186 60 40" backgroundColor="transparent" borderRadius={12} glowRadius={20} edgeSensitivity={20} colors={['#00d4ff', '#0891b2', '#155e75']}>
                <div className="detail-item">
                  <span className="detail-label">院校</span>
                  <span className="detail-value">乐山师范学院</span>
                </div>
              </BorderGlow>
              <BorderGlow glowColor="186 60 40" backgroundColor="transparent" borderRadius={12} glowRadius={20} edgeSensitivity={20} colors={['#00d4ff', '#0891b2', '#155e75']}>
                <div className="detail-item">
                  <span className="detail-label">专业</span>
                  <span className="detail-value">数字媒体技术</span>
                </div>
              </BorderGlow>
              <BorderGlow glowColor="186 60 40" backgroundColor="transparent" borderRadius={12} glowRadius={20} edgeSensitivity={20} colors={['#00d4ff', '#0891b2', '#155e75']}>
                <div className="detail-item">
                  <span className="detail-label">学历</span>
                  <span className="detail-value">本科</span>
                </div>
              </BorderGlow>
              <BorderGlow glowColor="186 60 40" backgroundColor="transparent" borderRadius={12} glowRadius={20} edgeSensitivity={20} colors={['#00d4ff', '#0891b2', '#155e75']}>
                <div className="detail-item">
                  <span className="detail-label">地区</span>
                  <span className="detail-value">四川 · 成都</span>
                </div>
              </BorderGlow>
            </div>
            <div className="stats-row">
              {stats.map(s => (
                <div key={s.label} className="stat-item">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
