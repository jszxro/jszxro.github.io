import type { ReactNode } from 'react'
import { portfolioSections } from '../../data/overviewStories'

export function OverviewSlide({ number, label, title, children, className = '' }: { number: number; label: string; title?: ReactNode; children: ReactNode; className?: string }) {
  return <section className={`overview-slide ${className}`} id={`portfolio-page-${number}`} aria-label={`${number}. ${portfolioSections[number - 1].title}`} data-page={number}>
    <header className="overview-spread-heading">
      <div><p className="overview-eyebrow">{label}</p>{title && <h2>{title}</h2>}</div>
      <span className="overview-wordmark">seoyoung<span>.log</span></span>
    </header>
    <div className="overview-spread-body">{children}</div>
    <div className="overview-spread-footer"><span>JEONG SEOYOUNG <i> / </i> {portfolioSections[number - 1].group}</span><span>{String(number).padStart(2, '0')} <i>/ {String(portfolioSections.length).padStart(2, '0')}</i></span></div>
  </section>
}

export function Screen({ project, name, label, phone = false }: { project: string; name: string; label: string; phone?: boolean }) {
  return <figure className={`overview-device${phone ? ' overview-phone' : ''}`}><img src={`/images/projects/${project}/screens/${name}.png`} alt={label} loading="eager" /></figure>
}

export function Tags({ values }: { values: string[] }) {
  return <ul className="overview-tags" aria-label="사용 기술">{values.map(value => <li key={value}>{value}</li>)}</ul>
}

export function ProjectLink({ slug, children = '구현 과정 자세히 보기' }: { slug: string; children?: ReactNode }) {
  return <a className="overview-text-link" href={`https://jszxro.github.io/#/projects/${slug}`}>{children} <span aria-hidden="true">↗</span></a>
}

export function ReaderIcon({ name }: { name: 'left' | 'right' | 'download' | 'chevron' }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'left' && <path d="m14 6-6 6 6 6" />}
    {name === 'right' && <path d="m10 6 6 6-6 6" />}
    {name === 'chevron' && <path d="m7 10 5 5 5-5" />}
    {name === 'download' && <><path d="M12 3v12m-4-4 4 4 4-4" /><path d="M5 15v5h14v-5" /></>}
  </svg>
}
