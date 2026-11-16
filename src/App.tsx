import { type PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from 'react'
import './App.css'
import './HomeRefresh.css'
import PortfolioOverview from './pages/PortfolioOverview'
import { otherProjects as projects, experience } from './data/portfolio'
import AnbamPage from './pages/AnbamPage'
import DodamPage from './pages/DodamPage'
import GeomatePage from './pages/GeomatePage'
import DitPage from './pages/DitPage'
import MoodlogPage from './pages/MoodlogPage'
import ProjectreePage from './pages/ProjectreePage'
import SangchuPage from './pages/SangchuPage'


function ImagePlaceholder({ label, src }: { label: string; src?: string }) {
  return (
    <div className={`image-placeholder${src ? ' has-image' : ''}`}>
      {src ? (
        <img src={src} alt={`${label} 프로젝트 대표 화면`} />
      ) : (
        <><span className="placeholder-icon" aria-hidden="true">▧</span><strong>{label}</strong><small>PROJECT IMAGE · 16:9</small></>
      )}
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return 'light'
  })
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [route, setRoute] = useState(() => window.location.hash)
  const isOverviewPage = route === '#/overview'
  const isGeomatePage = route === '#/projects/geomate'
  const isDodamPage = route === '#/projects/dodam'
  const isDitPage = route === '#/projects/dit'
  const isMoodlogPage = route === '#/projects/moodlog'
  const isAnbamPage = route === '#/projects/anbam'
  const isProjectreePage = route === '#/projects/projectree'
  const isSangchuPage = route === '#/projects/sangchu'
  const isProjectDetailPage = isOverviewPage || isGeomatePage || isDodamPage || isDitPage || isMoodlogPage || isAnbamPage || isProjectreePage || isSangchuPage
  const scrollTrackRef = useRef<HTMLDivElement>(null)
  const scrollThumbRef = useRef<HTMLDivElement>(null)
  const profileTriggerRef = useRef<HTMLButtonElement>(null)
  const profileCloseRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let frame = 0
    const updateScrollbar = () => {
      const track = scrollTrackRef.current
      const thumb = scrollThumbRef.current
      if (!track || !thumb) return
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const thumbHeight = Math.max(52, track.clientHeight * (window.innerHeight / document.documentElement.scrollHeight))
      const travel = track.clientHeight - thumbHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      thumb.style.height = `${thumbHeight}px`
      thumb.style.transform = `translateY(${travel * progress}px)`
      frame = 0
    }
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollbar)
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -45px' },
    )
    if (!isProjectDetailPage) {
      document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    }
    updateScrollbar()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [isProjectDetailPage])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (isProjectDetailPage) window.scrollTo({ top: 0 })
      else if (route && !route.startsWith('#/')) document.querySelector(route)?.scrollIntoView()
      window.dispatchEvent(new Event('resize'))
    })
  }, [isProjectDetailPage, route])

  useEffect(() => {
    if (!isProfileOpen) return
    const previousOverflow = document.body.style.overflow
    const profileTrigger = profileTriggerRef.current
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsProfileOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeWithEscape)
    window.requestAnimationFrame(() => profileCloseRef.current?.focus())

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeWithEscape)
      profileTrigger?.focus()
    }
  }, [isProfileOpen])

  const handleThumbPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = scrollTrackRef.current
    const thumb = scrollThumbRef.current
    if (!track || !thumb) return
    event.preventDefault()
    const startY = event.clientY
    const startScroll = window.scrollY
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const travel = track.clientHeight - thumb.offsetHeight
    const onMove = (moveEvent: PointerEvent) => {
      const nextScroll = startScroll + (moveEvent.clientY - startY) * (scrollable / Math.max(travel, 1))
      window.scrollTo({ top: nextScroll })
    }
    const onUp = () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      document.body.classList.remove('is-dragging-scrollbar')
    }
    document.body.classList.add('is-dragging-scrollbar')
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
  }

  return (
    <div className={`site${isOverviewPage ? ' site-overview' : !isProjectDetailPage ? ' site-home' : ''}`} id="top">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top">seoyoung<span>.log</span></a>
          <nav aria-label="주요 메뉴">
            <a className="nav-overview" href="#/overview" aria-current={isOverviewPage ? 'page' : undefined}>한눈에 보기 <span aria-hidden="true">↗</span></a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <a className="nav-github" href="https://github.com/jszxro" target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
      </header>
      <div className="custom-scrollbar" ref={scrollTrackRef} aria-hidden="true">
        <div className="custom-scrollbar-thumb" ref={scrollThumbRef} onPointerDown={handleThumbPointerDown} />
      </div>

      <main>
        {isOverviewPage ? <PortfolioOverview /> : isGeomatePage ? <GeomatePage /> : isDodamPage ? <DodamPage /> : isProjectreePage ? <ProjectreePage /> : isDitPage ? <DitPage /> : isMoodlogPage ? <MoodlogPage /> : isAnbamPage ? <AnbamPage /> : isSangchuPage ? <SangchuPage /> : (
          <>
        <div className="home-edition"><span>SEOYOUNG / SELECTED WORK</span><span>기획의 의도에서, 작동하는 경험까지.</span><button type="button" onClick={() => setTheme(current => current === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}>{theme === 'light' ? 'Dark' : 'Light'} <span aria-hidden="true">◐</span></button></div>

        <article className="document">
          <section className="home-hero">
            <div className="hero-copy">
              <div className="page-icon" aria-hidden="true">S<span>Y</span></div>
              <p className="breadcrumb">JEONG SEOYOUNG · PORTFOLIO</p>
              <h1>기획과 구현 사이를<br /><strong>연결합니다.</strong> <span className="wave">✦</span></h1>
              <p className="subtitle">사용자가 서비스를 이용하는 모든 순간을 고민하고,<br />더 직관적이고 편리한 경험으로 구현합니다.</p>
              <div className="hero-tags"><span>Product Planning</span><span>Frontend</span><span>Full-stack</span></div><div className="home-hero-actions"><a href="#/overview">포트폴리오 한눈에 보기 <span aria-hidden="true">↗</span></a><a href="#projects">프로젝트 살펴보기 <span aria-hidden="true">↓</span></a></div>
            </div>

            <aside className="hero-profile-card" aria-label="정서영 프로필 요약">
              <button ref={profileTriggerRef} className="profile-card-trigger" type="button" onClick={() => setIsProfileOpen(true)} aria-haspopup="dialog" aria-label="정서영 상세 프로필 열기" title="상세 프로필 보기" />
              <div className="profile-top"><img className="profile-photo" src="/images/profile/profile.png" alt="정서영 프로필 사진" /><span className="profile-status"><i /> Available</span></div>
              <p className="profile-label">PROFILE</p><h2>정서영</h2><p className="profile-role">기획과 구현을 연결하는<br />프론트엔드 개발자</p>
              <dl><div><dt>Based in</dt><dd>Gumi, Korea</dd></div><div><dt>Focus</dt><dd>React · UX · Product</dd></div></dl>
              <div className="profile-actions"><a href="mailto:jszxro@naver.com">Email ↗</a><a href="https://github.com/jszxro" target="_blank" rel="noreferrer">GitHub ↗</a></div>
              <span className="profile-open-hint" aria-hidden="true">자세히 보기 +</span>
            </aside>
          </section>

          <section className="doc-section about" id="about" data-reveal>
            <h2>About me<span className="home-heading-ko">소개</span></h2>
            <p className="lead">사용자의 문제를 발견하고, 직관적인 경험으로 풀어냅니다.</p>
            <p>좋은 서비스는 사용자의 상황을 세심하게 이해하는 데서 시작한다고 생각합니다. 복잡한 정보와 선택지를 그대로 보여주기보다, 사용자가 자신의 상황을 이해하고 스스로 더 나은 결정을 내릴 수 있도록 화면과 흐름을 설계합니다.</p>
            <aside className="callout"><span aria-hidden="true">✦</span><p><strong>이해에서 더 나은 선택까지</strong><br />사용자의 눈높이에서 정보를 풀어내고, 필요한 판단 기준이 자연스럽게 보이는 경험을 만듭니다.</p></aside>
          </section>

          <section className="doc-section" id="projects" data-reveal>
            <div className="section-title-row">
              <div><p className="eyebrow">SELECTED WORK</p><h2>Featured project<span className="home-heading-ko">대표 프로젝트</span></h2></div>
              <span className="count">01 / 07</span>
            </div>
            <article className="featured-project">
              <a className="featured-card-hitarea" href="#/projects/geomate" aria-label="지오메이트 프로젝트 상세 페이지 보기" />
              <ImagePlaceholder label="Geomate" src="/images/projects/geomate/geomate-cover.png" />
              <div className="featured-body">
                <p className="project-meta">FEATURED · TABLET LEARNING APP</p>
                <h3>Geomate</h3>
                <p>사진 속 도형 문제를 직접 움직이는 학습 공간으로 연결하고, 예측부터 진단·힌트·확인·기록까지 이어가는 태블릿 학습 서비스입니다.</p>
                <dl><div><dt>My role</dt><dd>프론트엔드 · UI/UX · API 연동 · 실기기 QA</dd></div><div><dt>Stack</dt><dd>React Native · Expo · TypeScript · TanStack Query · Zustand</dd></div></dl>
                <a href="#/projects/geomate">프로젝트 자세히 보기 <span>→</span></a>
              </div>
            </article>
          </section>

          <section className="doc-section archive" data-reveal>
            <div className="section-title-row"><div><p className="eyebrow">ARCHIVE</p><h2>More projects<span className="home-heading-ko">함께 만든 경험</span></h2></div></div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  {project.href && <a className="project-card-hitarea" href={project.href} aria-label={`${project.title} 프로젝트 상세 페이지 보기`} />}
                  <div className={`card-image ${project.tone}`}><ImagePlaceholder label={project.title} src={project.cover} /></div>
                  <div className="card-body"><p className="project-meta">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><small>{project.contribution}</small><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
                </article>
              ))}
            </div>
          </section>

          <section className="doc-section" id="experience" data-reveal>
            <p className="eyebrow">BACKGROUND</p>
            <h2>Experience<span className="home-heading-ko">경험</span></h2>
            <div className="timeline">{experience.map((item) => <article key={item.title}><time>{item.period}</time><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div>
          </section>

          <section className="doc-section toolbox" data-reveal>
            <p className="eyebrow">TOOLBOX</p>
            <h2>Skills & tools</h2>
            <div className="skill-table"><div><strong>Frontend</strong><p>React · Vue · TypeScript · JavaScript · HTML/CSS</p></div><div><strong>Backend</strong><p>Spring Boot · Django REST · JPA · WebSocket</p></div><div><strong>Data & Infra</strong><p>MySQL · Oracle · Redis · AWS · Docker</p></div><div><strong>Product</strong><p>Figma · 요구사항 분석 · 사용자 흐름 · 화면 설계</p></div></div>
          </section>
        </article>
          </>
        )}
      </main>

      {!isProjectDetailPage && isProfileOpen && (
        <div className="profile-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsProfileOpen(false) }}>
          <section className="profile-modal" role="dialog" aria-modal="true" aria-labelledby="profile-modal-title" aria-describedby="profile-modal-description">
            <button ref={profileCloseRef} className="profile-modal-close" type="button" onClick={() => setIsProfileOpen(false)} aria-label="상세 프로필 닫기">×</button>
            <div className="profile-modal-portrait">
              <img src="/images/profile/profile.png" alt="정서영 프로필 사진" />
              <div><span><i /> AVAILABLE</span><p>Gumi, Korea</p></div>
            </div>
            <div className="profile-modal-content">
              <p className="profile-modal-eyebrow">PROFILE · FRONTEND DEVELOPER</p>
              <h2 id="profile-modal-title"><span className="typing-greeting">안녕하세요,</span><br /><strong className="typing-name">정서영입니다.</strong></h2>
              <p className="profile-modal-lead" id="profile-modal-description">사용자가 서비스를 이용하는 모든 순간을 고민하고,<br />더 직관적이고 편리한 경험으로 구현합니다.</p>
              <p className="profile-modal-about">데이터 분석에서 시작해 백엔드와 프론트엔드를 경험했습니다. 여러 관점에서 서비스를 이해한 경험을 바탕으로, 이제는 기획의 의도를 놓치지 않는 프론트엔드 개발에 집중하고 있습니다.</p>

              <div className="profile-principles">
                <p><i>01</i><span><b>문제부터 바라보기</b><small>기능보다 사용자가 겪는 불편을 먼저 살핍니다.</small></span></p>
                <p><i>02</i><span><b>흐름으로 설계하기</b><small>정보와 행동이 자연스럽게 이어지도록 구조화합니다.</small></span></p>
                <p><i>03</i><span><b>끝까지 구현하기</b><small>아이디어가 실제 경험이 될 때까지 직접 만듭니다.</small></span></p>
              </div>

              <div className="profile-modal-tags"><span>React</span><span>TypeScript</span><span>UX</span><span>Product Planning</span><span>Full-stack</span></div>
              <div className="profile-modal-actions"><a href="mailto:jszxro@naver.com">Email 보내기 ↗</a><a href="https://github.com/jszxro" target="_blank" rel="noreferrer">GitHub 보기 ↗</a></div>
            </div>
          </section>
        </div>
      )}

      <footer id="contact" className="site-footer">
        <div className="footer-inner"><p className="eyebrow">CONTACT</p><h2>함께 만들고 싶은<br />이야기가 있다면.</h2><a href="mailto:jszxro@naver.com">jszxro@naver.com <span>↗</span></a><div className="footer-meta"><span>© 2026 SEOYOUNG</span><span>React · TypeScript · Vite</span><a href="#top">Back to top ↑</a></div></div>
      </footer>
    </div>
  )
}

export default App
