import { experience } from '../data/portfolio'
import './ExperienceSection.css'

const chapters = ['교육', '연구', '교육', '교육 · 프로젝트']

function AwardMark() {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path className="award-handles" d="M9 7H5v3a6 6 0 0 0 6 6M23 7h4v3a6 6 0 0 1-6 6" /><path className="award-cup-fill" d="M9 4h14v8a7 7 0 0 1-14 0V4Z" /><path className="award-cup-side" d="M16 4h7v8a7 7 0 0 1-7 7V4Z" /><path className="award-base" d="M14.5 18h3v6h-3zM11 24h10a2 2 0 0 1 2 2v2H9v-2a2 2 0 0 1 2-2Z" /><path className="award-cup-star" d="m16 7 1.1 2.3 2.5.4-1.8 1.8.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.8 2.5-.4Z" /><path className="award-rim" d="M9 4h14" /></svg>
}

export default function ExperienceSection() {
  return <section className="background-story" id="experience" aria-labelledby="background-title">
    <header className="background-heading"><div><span>03 / BACKGROUND</span><h2 id="background-title">Experience</h2></div><p>교육 · 연구 · 수상</p></header>
    <ol className="background-chapters">{[...experience].reverse().map((item, index) => <li key={item.title} className={index === 3 ? 'chapter-current' : undefined} tabIndex={0}>
      <div className="chapter-time"><span>{item.period.split(' — ')[0]}</span><small>{item.period.includes('Present') ? '— 현재' : item.period.includes(' — ') ? '— 2025' : ''}</small></div>
      <div className="chapter-rail" aria-hidden="true"><i /></div>
      <div className="chapter-body"><span className="chapter-number">{chapters[index]}</span><h3>{item.title}</h3><p>{item.detail.replace(/ · (특화 프로젝트 우수상|표창장 수상)/, '')}</p>{(index === 0 || index === 3) && <span className="chapter-recognition"><span className="award-emblem"><AwardMark /></span><span className="award-copy"><small>{index === 0 ? 'DSBA · 2023' : 'SSAFY · 2026'}</small><strong>{index === 0 ? '표창장 수상' : '특화 프로젝트 우수상'}</strong></span></span>}</div>
    </li>)}</ol>
  </section>
}
