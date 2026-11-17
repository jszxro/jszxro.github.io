import './SkillsContact.css'
import SkillLogo from './SkillLogo'

const toolsets = [
  { name: 'Frontend', caption: '화면과 인터랙션', type: 'screen', tools: ['React', 'React Native', 'Vue', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { name: 'Backend', caption: '데이터와 서비스 연결', type: 'server', tools: ['Spring Boot', 'Django REST', 'JPA', 'WebSocket'] },
  { name: 'Data & Infra', caption: '데이터 처리와 실행 환경', type: 'data', tools: ['MySQL', 'Oracle', 'Docker'] },
  { name: 'Product & Design', caption: '기획에서 화면 설계까지', type: 'design', tools: ['Figma', '요구사항 분석', '사용자 흐름', '화면 설계'] },
]

function ToolIcon({ type }: { type: string }) {
  return <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
    {type === 'screen' ? <><rect x="4" y="5" width="20" height="15" rx="2" /><path d="M4 10h20M10 24h8M14 20v4M8 7.5h.1m3 0h.1" /></>
      : type === 'server' ? <><rect x="5" y="4" width="18" height="8" rx="2" /><rect x="5" y="16" width="18" height="8" rx="2" /><path d="M9 8h.1M9 20h.1M14 8h5M14 20h5M14 12v4" /></>
        : type === 'data' ? <><ellipse cx="14" cy="6" rx="9" ry="3" /><path d="M5 6v8c0 4 18 4 18 0V6M5 14v8c0 4 18 4 18 0v-8" /></>
          : <><path d="m6 4 16 10-8 2-3 8L6 4Z" /><path d="m16 17 5 6M21 3v5M18.5 5.5h5" /></>}
  </svg>
}

export function SkillsSection() {
  return <section className="skills-studio" aria-labelledby="skills-title">
    <header className="skills-studio-heading"><div><span>04 / TOOLBOX</span><h2 id="skills-title">Skills & tools</h2></div><p>프로젝트에서 사용한 기술과 도구</p></header>
    <div className="toolset-grid">{toolsets.map((group, index) => <article className={`toolset toolset-${group.type}`} key={group.name}>
      <div className="toolset-top"><span className="toolset-icon"><ToolIcon type={group.type} /></span><span className="toolset-index">0{index + 1}</span></div>
      <div className="toolset-title"><h3>{group.name}</h3><p>{group.caption}</p></div>
      <ul className="toolset-items">{group.tools.map(tool => <li key={tool}><span className="skill-logo"><SkillLogo name={tool} /></span><span>{tool}</span></li>)}</ul>
    </article>)}</div>
  </section>
}

export function ContactFooter() {
  return <footer id="contact" className="site-footer contact-studio">
    <div className="contact-studio-inner">
      <div className="contact-finale">
        <div className="contact-heading">
          <span className="contact-label">05 / GET IN TOUCH</span>
          <span className="contact-signature">정서영 <span>Frontend Developer</span></span>
        </div>
        <h2 className="contact-wordmark">Contact<span>.</span></h2>
        <a className="contact-primary" href="mailto:jszxro@naver.com">
          <span className="contact-email-caption">EMAIL ME</span>
          <span className="contact-email-value">jszxro<span className="contact-email-domain">@naver.com</span></span>
          <span className="contact-send" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M8 24 24 8M8 8h16v16" /></svg></span>
        </a>
        <a className="contact-github" href="https://github.com/jszxro" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.83c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>GitHub <span aria-hidden="true">↗</span></a>
      </div>
      <div className="contact-colophon"><span>© 2026 SEOYOUNG</span><span>React · TypeScript · Vite</span><a href="#top">맨 위로 <span aria-hidden="true">↑</span></a></div>
    </div>
  </footer>
}
