import './ProjectDetailVisual.css'
import './DodamArtDirection.css'
import './ProjectArtDirection.css'
import { useEffect, useRef } from 'react'
import ProjectStack from './ProjectStack'

type ProjectId = 'geomate' | 'dodam' | 'projectree' | 'dit' | 'sangchu'
const projects = {
  geomate: {
    number: '01', name: 'Geomate', korean: '지오메이트', category: 'INTERACTIVE LEARNING · TABLET APP',
    headline: ['도형을 움직이며,', '이해를 발견하다.'],
    description: '사진 속 문제에서 직접 탐구하는 학습 공간으로.\n예측과 조작, 힌트와 기록을 하나의 흐름으로 연결했습니다.',
    period: '2026.10 — 11', role: 'Frontend · UI/UX · API Integration', team: 'SSAFY D103 · 6명', stack: 'React Native · Expo · TypeScript',
    notes: [['직접 만지는 학습', '문제와 도형, 필기를 한 화면에.'], ['다시 이어지는 생각', '저장한 풀이에서 학습을 이어갑니다.']],
    link: 'https://m.onestore.co.kr/v2/ko-kr/app/0001012470', linkLabel: '원스토어에서 보기',
  },
  dodam: {
    number: '02', name: 'Dodam', korean: '도담', category: 'PERSONAL FINANCE · MOBILE APP',
    headline: ['오늘의 이해가,', '내일의 여유로.'],
    description: '흩어진 금융 정보를 나에게 맞는 판단 기준으로.\n진단에서 목표와 실천까지 이어지는 금융 코칭 서비스입니다.',
    period: '2026.08 — 09', role: 'Frontend · UX Flow · API Integration', team: 'SSAFY 특화 프로젝트 · D105', stack: 'React Native · Expo · TypeScript',
    notes: [['금융 상태를 한눈에', '숫자 뒤에 있는 나의 상황을 읽습니다.'], ['작은 행동부터 차근차근', '금융 진단을 목표와 실천으로 연결합니다.']],
    link: '', linkLabel: '',
  },
  projectree: {
    number: '03', name: 'Projectree', korean: '프로젝트리', category: 'TEAM COLLABORATION · WEB',
    headline: ['흩어진 생각이,', '함께 자라는 기록으로.'],
    description: '회의 속 아이디어를 구조화하고,\n기록과 피드백을 다음 협업으로 연결합니다.',
    period: '2026.07 — 08', role: 'Frontend · UX Flow · API Integration', team: 'SSAFY 프로젝트 · D205', stack: 'React · TypeScript · Zustand · SSE',
    notes: [['생각 사이의 연결', '회의에서 나온 아이디어를 구조화합니다.'], ['회의 이후까지', '기록과 피드백이 다음 협업으로 이어집니다.']],
    link: '', linkLabel: '',
  },
  dit: {
    number: '04', name: 'Dit', korean: '딧', category: 'AI PROJECT DISCOVERY · WEB',
    headline: ['나를 이해하고,', '다음 프로젝트를 찾다.'],
    description: '개발 성향과 경험에서 시작하는 프로젝트 탐색.\nAI 추천을 구체적인 기획과 다음 행동으로 연결했습니다.',
    period: '2026.06.16 — 06.25', role: 'Full-stack · UX Flow · AI Integration', team: 'SSAFY 프로젝트 · 2인 팀', stack: 'Vue 3 · JavaScript · Django REST · Pinia',
    notes: [['나에게 맞는 출발점', '성향과 경험을 추천의 맥락으로 사용합니다.'], ['아이디어를 넘어 기획으로', '추천 이유와 구체적인 시작점을 함께.']],
    link: 'https://github.com/jszxro/Dit', linkLabel: 'GitHub에서 보기',
  },
  sangchu: {
    number: '05', name: 'Sangchu', korean: '상추', category: 'COMMERCIAL INSIGHT · DATA & WEB',
    headline: ['지역을 읽고,', '가능성을 발견하다.'],
    description: '부산의 상권 데이터에서 매물 탐색과 월세 예측까지.\n흩어진 지표를 하나의 판단 흐름으로 정리했습니다.',
    period: '2023.11.09 — 12.29', role: 'Data Analysis · ML Integration · Django', team: '6인 팀 프로젝트', stack: 'Python · Django · Pandas · scikit-learn',
    notes: [['데이터로 보는 부산', '지역별 상권의 맥락을 비교합니다.'], ['분석에서 선택까지', '매물 탐색과 예상 월세를 연결합니다.']],
    link: 'https://github.com/offensivesoup/Sangchu_Final_PJT', linkLabel: 'GitHub에서 보기',
  },
} satisfies Record<ProjectId, object>

function Device({ project, screen, kind, className = '', priority = false }: { project: string; screen: string; kind: 'phone' | 'tablet'; className?: string; priority?: boolean }) {
  return <figure className={`detail-device detail-device-${kind} ${className}`}>
    <img src={`/images/projects/${project}/screens/${screen}.png`} alt={`${project === 'dodam' ? '도담' : '지오메이트'} ${screen} 실제 앱 화면`} loading={priority ? 'eager' : 'lazy'} />
  </figure>
}

function Leader({ className = '' }: { className?: string }) {
  return <svg className={`detail-leader ${className}`} viewBox="0 0 180 80" fill="none" aria-hidden="true"><path d="M2 74h42c46 0 55-66 104-66h28" /><circle cx="176" cy="8" r="3" /></svg>
}

function ProjectProductCover({ project }: { project: Exclude<ProjectId, 'dodam'> }) {
  const data = projects[project]
  return <div className={`project-art-cover project-art-${project}`}>
    <div className="project-art-header"><h1>{data.name}<span>{data.korean}</span></h1><span>{data.category}</span></div>
    <div className="project-art-visual">{project === 'geomate' ? <>
      <Device project={project} screen="workspace" kind="tablet" className="project-art-tablet-main" priority />
      <Device project={project} screen="home" kind="tablet" className="project-art-tablet-secondary" />
    </> : <figure className="project-art-browser"><div className="project-art-chrome" aria-hidden="true"><i /><i /><i /><span>{data.name.toLowerCase()} / project</span><b>↗</b></div><img src={`/images/projects/${project}/${project}-cover.png`} alt={`${data.name} 프로젝트 대표 화면`} fetchPriority="high" /></figure>}</div>
    <div className="project-art-copy"><span className="project-art-eyebrow">{data.korean} / PRODUCT EXPERIENCE</span><h2>{data.headline.map(line => <span key={line}>{line}</span>)}</h2><p>{data.description}</p><div className="project-art-annotations">{data.notes.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div>{index === 0 && <Leader />}</article>)}</div></div>
    <div className="project-art-footer"><span>{project === 'geomate' ? 'LEARN — EXPLORE — REVIEW' : 'CONTEXT — EXPERIENCE — CONNECTION'}</span><span>{project === 'geomate' ? '실제 태블릿 앱 화면' : '프로젝트 대표 화면'} <b aria-hidden="true">↓</b></span></div>
  </div>
}

function GeomateScreenGallery() {
  return <div className="project-tablet-gallery">{[
    { screen: 'home', number: '01', title: '문제에서 출발하기', description: '예제로 시작하거나 사진·PDF로 내 문제를 가져옵니다.' },
    { screen: 'workspace', number: '02', title: '생각을 직접 확인하기', description: '도형 조작과 필기, 힌트와 답 확인을 한 화면에서.' },
    { screen: 'history', number: '03', title: '나의 풀이로 돌아오기', description: '학습 기록과 저장한 풀이에서 다시 이어갑니다.' },
  ].map(item => <article key={item.number}><Device project="geomate" screen={item.screen} kind="tablet" /><div className="project-gallery-caption"><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div></article>)}</div>
}

function DodamProductCover() {
  return <div className="dodam-art-cover">
    <div className="dodam-art-header"><h1>Dodam<span>도담</span></h1><span>PERSONAL FINANCE / MOBILE APP</span></div>
    <div className="dodam-art-phones">
      <Device project="dodam" screen="report-overview" kind="phone" className="dodam-art-report" />
      <Device project="dodam" screen="home" kind="phone" className="dodam-art-home" priority />
    </div>
    <div className="dodam-art-copy"><span className="dodam-art-eyebrow">금융을 읽는 나만의 기준</span><h2>오늘을 이해하고,<br /><span>내일을 준비하는 일.</span></h2><p>흩어진 자산과 소비를 한눈에 살피고,<br />금융 진단이 목표와 실천으로 이어지도록.</p>
      <div className="dodam-art-annotations"><article><span>01</span><div><h3>숫자에서 나의 상황으로</h3><p>금융 상태와 비교 근거를 함께 확인합니다.</p></div><Leader /></article><article><span>02</span><div><h3>작은 행동부터 차근차근</h3><p>진단을 나에게 맞는 목표와 실천으로 연결합니다.</p></div></article></div>
    </div>
    <div className="dodam-art-footer"><span>HOME <i>—</i> REPORT <i>—</i> GOAL</span><span>일상의 금융을 연결하는 화면 <b aria-hidden="true">↓</b></span></div>
  </div>
}

function DodamScreenGallery() {
  return <div className="dodam-screen-gallery">{[
    { screen: 'report-indicators', number: '01', title: '나의 상태를 이해하고', description: '진단 수치와 비교 근거를 함께.' },
    { screen: 'discovery-detail', number: '02', title: '다음 행동을 발견하고', description: '지금 실천할 수 있는 금융 행동으로.' },
    { screen: 'goals', number: '03', title: '목표로 이어가기', description: '선택한 행동을 목표와 변화 추적으로.' },
  ].map(item => <article key={item.number}><div className="dodam-gallery-device"><Device project="dodam" screen={item.screen} kind="phone" /></div><div className="dodam-gallery-caption"><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div></article>)}</div>
}

export function ProjectDetailHero({ project }: { project: ProjectId }) {
  const data = projects[project]
  const openingRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const root = openingRef.current?.closest('.detail-project')
    if (!root || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('detail-in-view')
        observer.unobserve(entry.target)
      }
    }, { threshold: .12 })
    root.querySelectorAll('.detail-visual-story, .geomate-feature-list>article, .dodam-feature-list>article, .detail-facts').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [project])
  return <header ref={openingRef} className={`detail-opening detail-theme-${project}`}>
    <div className="detail-opening-inner">
      <div className="detail-topline"><a href="#projects">← All projects</a><span>SELECTED WORK / {data.number}</span></div>
      {project === 'dodam' ? <DodamProductCover /> : <ProjectProductCover project={project} />}
      <div className="detail-facts"><dl>{[['PERIOD', data.period], ['MY ROLE', data.role], ['TEAM', data.team]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><ProjectStack project={project} /><div className="detail-external-links">{project === 'dit' && <a href="https://www.figma.com/design/TI5BRliQ3FlMklHJ0buURt/Dit-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?t=mXHWJPnA3wBWy783-1" target="_blank" rel="noreferrer">Figma <span aria-hidden="true">↗</span></a>}{data.link && <a href={data.link} target="_blank" rel="noreferrer">{data.linkLabel} <span aria-hidden="true">↗</span></a>}</div></div>
    </div>
  </header>
}

export function ProjectVisualStory({ project }: { project: ProjectId }) {
  const data = projects[project]
  const titles = { geomate: '문제에서 시작해, 학습 기록으로 돌아오기.', dodam: '진단을 이해하고, 실천으로 이어가기.', projectree: '회의의 전후를 연결하는 프로젝트 경험.', dit: '나에게 맞는 프로젝트를 구체적인 기획으로.', sangchu: '상권 분석에서 매물 탐색과 월세 예측까지.' }
  return <section className={`detail-visual-story detail-theme-${project}`} aria-label={`${data.name} 주요 경험`}>
    <div className="detail-story-heading"><span className="detail-eyebrow">PRODUCT CLOSE-UP</span><h2>{titles[project]}</h2></div>
    {project === 'dodam' ? <DodamScreenGallery /> : project === 'geomate' ? <GeomateScreenGallery /> : <div className="detail-web-editorial"><div className="detail-editorial-visual" aria-hidden="true"><img src={`/images/projects/${project}/${project}-cover.png`} alt="" /></div><div className="detail-editorial-notes">{data.notes.map(([title, text], index) => <article key={title}><span className="detail-note-number">0{index + 1} / {index === 0 ? 'CONTEXT' : 'CONNECTION'}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>}
  </section>
}
