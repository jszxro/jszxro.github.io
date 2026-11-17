import './HomeShowcase.css'
import './ProjectUniverse.css'
import './ProjectRibbon.css'
import './LaptopShowcase.css'
import ProjectCollection from './ProjectCollection'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { otherProjects } from '../data/portfolio'

const galleryProjects = [
  { title: 'Geomate', category: 'Interactive learning', cover: '/images/projects/geomate/geomate-cover.png', href: '#/projects/geomate' },
  ...otherProjects,
]

const projectNotes: Record<string, { title: string; description: string }> = {
  Geomate: { title: '직접 움직이며 이해하는 도형', description: '사진 속 문제를 탐구 공간으로 연결하고,\n예측부터 힌트·확인까지 학습 흐름을 설계했습니다.' },
  Dodam: { title: '금융 정보에서 다음 행동으로', description: '흩어진 금융 데이터를 이해하기 쉽게 정리하고,\n나에게 맞는 목표와 행동으로 연결했습니다.' },
  Projectree: { title: '아이디어가 다음 협업으로', description: '회의 속 아이디어를 구조화하고,\n기록과 피드백이 이어지는 화면을 구현했습니다.' },
  Dit: { title: '나에게 맞는 프로젝트 발견', description: '개발 성향과 경험을 바탕으로,\n프로젝트를 탐색하고 추천받는 흐름을 만들었습니다.' },
  '상추 (Sangchu)': { title: '데이터로 살펴보는 상권', description: '부산 지역 상권을 비교하고,\n상가 조건에 따른 월세 예측을 연결했습니다.' },
}

export default function HomeShowcase({ onProfile, onTheme, theme }: { onProfile: () => void; onTheme: () => void; theme: string }) {
  const [paused, setPaused] = useState(false)
  const [position, setPosition] = useState(0)
  const positionRef = useRef(0)
  const momentumFrame = useRef(0)
  const [coasting, setCoasting] = useState(false)
  const [settled, setSettled] = useState(false)
  const count = galleryProjects.length
  const activeProject = ((Math.round(position) % count) + count) % count
  const moveTo = (next: number) => { positionRef.current = next; setPosition(next) }
  const setActiveProject = (next: number | ((value: number) => number)) => {
    cancelAnimationFrame(momentumFrame.current)
    setCoasting(false)
    const target = typeof next === 'function' ? next(activeProject) : next
    const delta = ((target - activeProject + count + Math.floor(count / 2)) % count) - Math.floor(count / 2)
    moveTo(Math.round(positionRef.current) + delta)
  }
  const [hovered, setHovered] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [dragging, setDragging] = useState(false)
  const drag = useRef<{ id: number; x: number; time: number; velocity: number; moved: boolean; step: number } | null>(null)
  const suppressClick = useRef(false)
  useEffect(() => {
    if (dragging || coasting) return
    const timer = window.setTimeout(() => setSettled(true), 650)
    return () => window.clearTimeout(timer)
  }, [activeProject, dragging, coasting])
  useEffect(() => { setSettled(false) }, [activeProject, dragging, coasting])
  useEffect(() => () => cancelAnimationFrame(momentumFrame.current), [])
  const releaseDrag = (cancelled = false) => {
    const gesture = drag.current
    suppressClick.current = Boolean(gesture?.moved)
    drag.current = null
    setDragging(false)
    if (!gesture?.moved) return
    let velocity = cancelled || reducedMotion || performance.now() - gesture.time > 120 ? 0 : gesture.velocity
    let previous = performance.now()
    setCoasting(true)
    const coast = (now: number) => {
      const elapsed = Math.min(now - previous, 32)
      previous = now
      velocity *= Math.exp(-elapsed / 360)
      const next = positionRef.current + velocity * elapsed
      moveTo(next)
      if (Math.abs(velocity) > .00015) momentumFrame.current = requestAnimationFrame(coast)
      else { moveTo(Math.round(next)); setCoasting(false) }
    }
    momentumFrame.current = requestAnimationFrame(coast)
  }
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(preference.matches)
    update()
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])
  useEffect(() => {
    if (paused || hovered || reducedMotion || dragging || coasting) return
    const timer = window.setTimeout(() => { const next = Math.round(positionRef.current) + 1; positionRef.current = next; setPosition(next) }, 2200)
    return () => window.clearTimeout(timer)
  }, [activeProject, paused, hovered, reducedMotion, dragging, coasting])
  const currentProject = galleryProjects[activeProject]
  return <>
    <section className="intro-studio" id="about">
      <div className="intro-topline"><span>JEONG SEOYOUNG / PORTFOLIO</span><button onClick={onTheme}>{theme === 'light' ? 'Dark' : 'Light'} ◐</button></div>
      <div className="intro-layout"><div><p className="intro-kicker">생각을 설계하고, 경험을 구현하는</p><h1>안녕하세요.<br /><span>정서영</span>입니다.</h1><p className="intro-description">사용자가 어디에서 망설이는지 살피고,<br />다음 행동으로 자연스럽게 이어지는 화면을 만듭니다.</p><div className="intro-links"><a href="#projects">작업 살펴보기 ↘</a><a href="#/overview">포트폴리오 한눈에 보기 ↗</a></div></div><aside className="intro-person"><button onClick={onProfile} aria-label="정서영 상세 프로필 열기"><img src="/images/profile/profile.png" alt="정서영" /><span>ABOUT ME <b>↗</b></span></button><p>기획의 의도를 놓치지 않는<br /><strong>Frontend Developer</strong></p></aside></div>
      <div className="intro-bottom"><span>Product thinking. Thoughtful interfaces.</span><span>React · TypeScript · UI / UX</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
    <section className={`project-universe${paused ? ' is-paused' : ''}`} aria-labelledby="universe-title">
      <div className="universe-heading"><span>MY PROJECTS / 0{count}</span><h2 id="universe-title">만들어 온 경험들.</h2><p>학습에서 금융, 일상과 협업까지.<br />서로 다른 문제를 화면으로 풀어낸 기록입니다.</p></div>
      <button className="universe-toggle" type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused} aria-label={paused ? '프로젝트 애니메이션 재생' : '프로젝트 애니메이션 일시정지'}>{paused ? '재생 ▷' : '일시정지 Ⅱ'}</button>
      <div className={`single-phone-stage${dragging ? ' is-dragging' : ''}${coasting ? ' is-coasting' : ''}${settled && !dragging && !coasting ? ' is-settled' : ''}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocus={() => setHovered(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false) }}
        onPointerDown={event => {
          if (event.button !== 0 || (event.target as HTMLElement).closest('.project-navigation')) return
          suppressClick.current = false
          cancelAnimationFrame(momentumFrame.current)
          setCoasting(false)
          const viewport = window.innerWidth
          const step = viewport <= 720 ? viewport * .83 : Math.max(320, Math.min(viewport * .41, 640))
          drag.current = { id: event.pointerId, x: event.clientX, time: performance.now(), velocity: 0, moved: false, step }
        }}
        onPointerMove={event => {
          const gesture = drag.current
          if (!gesture || gesture.id !== event.pointerId) return
          const delta = gesture.x - event.clientX
          if (!gesture.moved && Math.abs(delta) < 7) return
          if (!gesture.moved) {
            gesture.moved = true
            event.currentTarget.setPointerCapture(event.pointerId)
            setDragging(true)
          }
          gesture.x = event.clientX
          const now = performance.now()
          const speed = delta / gesture.step / Math.max(now - gesture.time, 8)
          gesture.velocity = Math.max(-.025, Math.min(.025, gesture.velocity * .25 + speed * .75))
          gesture.time = now
          moveTo(positionRef.current + delta / gesture.step)
        }}
        onPointerUp={() => releaseDrag()}
        onPointerCancel={() => releaseDrag(true)}
        onLostPointerCapture={() => { if (drag.current) releaseDrag(true) }}
        onClickCapture={event => { if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false } }}
        onDragStart={event => event.preventDefault()}>
        <div className="single-phone-halo" aria-hidden="true" />
        <div className="project-screen-ribbon" aria-label="이어지는 프로젝트 화면">
          {galleryProjects.map((project, index) => {
            const offset = (((index - position + count / 2) % count) + count) % count - count / 2
            return <button type="button" key={project.title} className="ribbon-screen" style={{ '--offset': offset, opacity: Math.abs(offset) < .5 ? 0 : Math.max(.2, .65 - Math.abs(offset) * .13) } as CSSProperties} onClick={() => setActiveProject(index)} aria-label={`${project.title} 노트북에서 보기`} tabIndex={index === activeProject ? -1 : 0} aria-hidden={index === activeProject}>
              <img src={project.cover} alt="" /><span><small>0{index + 1}</small>{project.title}<b>↗</b></span>
            </button>
          })}
        </div>
        <div className="single-phone laptop-mockup">
          <div className="device-metal"><div className="device-display">
            <span className="laptop-camera" aria-hidden="true" />
            <div className="phone-slides">
              {galleryProjects.map((project, index) => <a key={project.title} className={`phone-slide${activeProject === index ? ' is-active' : ''}`} href={project.href} aria-hidden={activeProject !== index} tabIndex={activeProject === index ? 0 : -1} inert={activeProject !== index} aria-label={`${project.title} 프로젝트 자세히 보기`}>
                <div className="phone-slide-image"><img src={project.cover} alt={`${project.title} 대표 화면`} /></div>
              </a>)}
            </div>
          </div></div>
          <div className="laptop-base" aria-hidden="true"><span /></div>
          <aside className="selected-project-note" aria-hidden={!settled || dragging || coasting}>
            <svg className="project-note-arrow" viewBox="0 0 100 60" fill="none" aria-hidden="true"><path d="M97 8C60 6 63 47 9 47M19 37 8 47l13 8" /></svg>
            <span className="project-note-index">0{activeProject + 1} / PROJECT NOTE</span>
            <strong>{projectNotes[currentProject.title]?.title}</strong>
            <p>{projectNotes[currentProject.title]?.description}</p>
          </aside>
        </div>
        <div className="project-navigation">
          <a className="project-navigation-title" href={currentProject.href}><span>SELECTED PROJECT <small>0{activeProject + 1} / 0{count}</small></span><strong>{currentProject.title}<b aria-hidden="true">↗</b></strong></a>
        <div className="phone-controls" aria-label="프로젝트 전환">
          <button type="button" onClick={() => setActiveProject(value => (value + count - 1) % count)} aria-label="이전 프로젝트">←</button>
          <div className="phone-dots">{galleryProjects.map((project, index) => <button type="button" key={project.title} onClick={() => setActiveProject(index)} aria-label={`${project.title} 보기`} aria-current={index === activeProject ? 'true' : undefined} />)}</div>
          <button type="button" onClick={() => setActiveProject(value => (value + 1) % count)} aria-label="다음 프로젝트">→</button>
        </div>
        </div>
      </div>
      <div className="universe-footer"><span>아이디어에서, 작동하는 경험으로.</span><span>프로젝트를 선택해 자세히 살펴보세요 ↗</span></div>
    </section>
    <ProjectCollection />
  </>
}
