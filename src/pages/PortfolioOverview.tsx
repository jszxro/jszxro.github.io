import { useEffect, useRef, useState } from 'react'
import { experience } from '../data/portfolio'
import { portfolioSections, selectedProjects, workingSteps } from '../data/overviewStories'
import { OverviewSlide as Spread, ProjectLink, ReaderIcon, Screen, Tags } from './portfolioOverview/OverviewSlide'
import './PortfolioOverview.css'

const storeUrl = 'https://m.onestore.co.kr/v2/ko-kr/app/0001012470'
const waitFor = (promise: Promise<unknown>, ms: number) => Promise.race([promise, new Promise(resolve => window.setTimeout(resolve, ms))])

export default function PortfolioOverview() {
  const [currentPage, setCurrentPage] = useState(1)
  const [printing, setPrinting] = useState(false)
  const [notice, setNotice] = useState('')
  const printingRef = useRef(false)
  const deckRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previousTitle = document.title
    document.title = '정서영_포트폴리오'
    const slides = [...(deckRef.current?.querySelectorAll<HTMLElement>('.overview-slide') ?? [])]
    let frame = 0
    const updatePage = () => {
      frame = 0
      const readingLine = Math.min(window.innerHeight * .35, 250)
      const page = slides.find(slide => { const rect = slide.getBoundingClientRect(); return rect.top <= readingLine && rect.bottom > readingLine })
      if (page) setCurrentPage(Number(page.dataset.page))
    }
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(updatePage) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
      document.title = previousTitle
    }
  }, [])

  function goToPage(page: number) {
    const next = Math.max(1, Math.min(portfolioSections.length, page))
    document.getElementById(`portfolio-page-${next}`)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' })
    setCurrentPage(next)
  }

  async function savePdf() {
    if (printingRef.current) return
    printingRef.current = true
    setPrinting(true)
    setNotice('')
    try {
      const images = [...(deckRef.current?.querySelectorAll('img') ?? [])]
      await waitFor(Promise.allSettled([document.fonts.ready, ...images.map(image => image.decode())]), 8000)
      if (images.some(image => !image.complete || !image.naturalWidth)) {
        setNotice('이미지가 아직 준비되지 않았어요. 잠시 후 다시 눌러 주세요.')
        return
      }
      window.print()
    } catch {
      setNotice('인쇄 창을 열지 못했어요. 브라우저의 인쇄 메뉴를 이용해 주세요.')
    } finally {
      printingRef.current = false
      setPrinting(false)
    }
  }

  return <article className="overview-reader">
    <div className="overview-reader-chrome">
      <div className="overview-toolbar">
        <a className="overview-back" href="#projects"><ReaderIcon name="left" /><span>웹 포트폴리오</span></a>
        <div className="overview-page-control">
          <button type="button" aria-label="이전 페이지" disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}><ReaderIcon name="left" /></button>
          <label className="overview-page-select"><span className="overview-page-position">{String(currentPage).padStart(2, '0')}<i>/ {portfolioSections.length}</i></span><span className="overview-sr-only">페이지 선택</span><select value={currentPage} onChange={event => goToPage(Number(event.target.value))}>{portfolioSections.map((section, index) => <option key={section.title} value={index + 1}>{section.title}</option>)}</select><ReaderIcon name="chevron" /></label>
          <button type="button" aria-label="다음 페이지" disabled={currentPage === portfolioSections.length} onClick={() => goToPage(currentPage + 1)}><ReaderIcon name="right" /></button>
        </div>
        <button className="overview-pdf-button" type="button" disabled={printing} onClick={() => void savePdf()}><ReaderIcon name="download" />{printing ? '준비 중' : 'PDF 저장'}</button>
      </div>
      {notice && <p className="overview-notice" role="status">{notice}</p>}
    </div>

    <div className="overview-deck" ref={deckRef}>
      <Spread number={1} label="PORTFOLIO / FRONTEND & PRODUCT" className="overview-cover">
        <div className="editorial-cover-copy"><p className="overview-cover-name">정서영 <span>JEONG SEOYOUNG</span></p><h1>사용자의 다음 행동을<br /><em>설계하고 구현합니다.</em></h1><p className="editorial-cover-intro">기획에서는 선택의 이유를 정리하고,<br />개발에서는 그 선택이 끝까지 이어지게 만듭니다.</p><div className="editorial-cover-bottom"><span>PRODUCT-MINDED<br />FRONTEND DEVELOPER</span><a href="https://jszxro.github.io">jszxro.github.io ↗</a></div></div>
        <div className="editorial-cover-aside"><div className="editorial-cover-identity"><img src="/images/profile/profile.png" alt="정서영 프로필 사진" loading="eager" /><p>사용자 흐름 · 화면과 API<br />저장과 복귀 · 실제 기기 검증</p></div><div className="editorial-cover-work"><img src="/images/projects/geomate/geomate-cover.png" alt="대표 프로젝트 Geomate" loading="eager" /><span>SELECTED WORK <b>Geomate</b><i>2026</i></span></div></div>
      </Spread>

      <Spread number={2} label="01 / MY APPROACH" title={<>선택의 이유를 기획하고,<br /><em>다음 상태까지 구현합니다.</em></>} className="editorial-approach">
        <div className="editorial-approach-grid"><div className="editorial-belief"><span>WHAT I CARE ABOUT</span><p>사용자가 지금의 상황을 이해하고,<br /><strong>스스로 다음 행동을<br />선택할 수 있는 서비스.</strong></p><small>기능의 시작뿐 아니라 대기·실패·복귀까지<br />하나의 사용 경험으로 다루고 싶습니다.</small></div><div className="editorial-principles"><section><p className="editorial-label">PLANNING</p><h3>사용자가 판단할 기준을 먼저 정합니다.</h3><p>어떤 기능을 넣을지 결정하기 전에, 사용자가 이 화면에서 무엇을 이해하고 선택해야 하는지 정리합니다. 필요한 정보와 근거를 읽는 순서에 맞춰 배치합니다.</p><aside><b>Dodam</b> 자산 조회를 상태 해석과 금융 행동 선택의 흐름으로 연결</aside></section><section><p className="editorial-label">ENGINEERING</p><h3>그 선택이 이어질 조건을 구현합니다.</h3><p>화면 상태와 API 계약을 맞추고, 저장·캐시·세션의 기준을 구분합니다. 실제 기기에서 입력과 이동, 재진입까지 확인하며 경험의 빈틈을 좁힙니다.</p><aside><b>Geomate</b> 학습을 나갔다 돌아와도 상태와 필기를 복원하는 기준 정리</aside></section></div></div>
      </Spread>

      <Spread number={3} label="02 / HOW I WORK" title={<>막히는 순간을 찾고,<br /><em>판단의 근거를 구현에 남깁니다.</em></>} className="editorial-process">
        <p className="editorial-page-intro">기획의 질문을 화면·데이터·검증의 기준으로 옮기는 방식입니다.</p>
        <div className="editorial-process-grid">{workingSteps.map(step => <section key={step.number}><span className="editorial-step-number">{step.number}</span><h3>{step.title}</h3><p className="editorial-process-question">{step.question}</p><p>{step.work}</p><aside>{step.evidence}</aside></section>)}</div>
        <div className="editorial-process-conclusion"><span>WORKING PRINCIPLE</span><p>구현 중 발견한 빈 데이터와 예외 상태도 다시 기획에 반영하고,<br /><strong>정의한 흐름이 실제로 작동하는지 끝까지 확인합니다.</strong></p></div>
      </Spread>

      <Spread number={4} label="03 / SELECTED PROJECTS" title={<>다섯 프로젝트에서 풀어온,<br /><em>서로 다른 연결의 문제.</em></>}>
        <ol className="editorial-project-index">{selectedProjects.map((project, index) => <li key={project.title}><span className="editorial-index-number">{String(index + 1).padStart(2, '0')}</span><img src={project.cover} alt="" loading="eager" /><div><a href={`https://jszxro.github.io/${project.href}`}>{project.title}<span aria-hidden="true">↗</span></a><p>{project.detail}</p></div><div className="editorial-index-description"><strong>{project.question}</strong><p>{project.role}</p></div><time>{project.period}</time></li>)}</ol>
      </Spread>

      <Spread number={5} label="PROJECT 01 / GEOMATE" title={<>문제에서 시작해,<br /><em>생각을 확인하는 학습까지.</em></>}>
        <div className="editorial-project-layout"><div className="editorial-project-copy"><p className="editorial-project-summary">사진 속 도형을 2D·3D로 복원해 직접 조작하며 이해하는 Android 태블릿 학습 앱입니다.</p><dl className="editorial-facts"><div><dt>기간 / 팀</dt><dd>2026.10 — 11 / SSAFY D103 · 6명</dd></div><div><dt>담당 역할</dt><dd>Frontend · 학생 UI/UX · API 연동</dd></div></dl><div className="editorial-contribution"><span>MY CONTRIBUTION</span><p>학생 홈, 문제 등록·문제함·조건 확인·설정을 구현하고, 학습 공간의 패널·필기·답 제출 UI를 개선했습니다.</p><p>해석 상태와 학습 진입·복귀를 연결하고, Android 태블릿과 릴리스 APK에서 주요 흐름을 확인했습니다.</p></div><Tags values={['React Native', 'Expo', 'TypeScript', 'TanStack Query', 'Zustand']} /><a className="overview-text-link" href={storeUrl}>원스토어에서 앱 보기 ↗</a></div><div className="editorial-project-visual"><Screen project="geomate" name="workspace" label="Geomate 실제 도형 학습 공간" /><p className="overview-caption">문제·힌트·도형·필기를 함께 펼치는 가로형 학습 공간</p><div className="editorial-outcome"><span>DESIGN FOCUS</span><p>화면 사이를 이동해도<br /><strong>학습의 맥락이 이어지도록.</strong></p></div></div></div>
      </Spread>

      <Spread number={6} label="GEOMATE / PLANNING → INTERACTION" title={<>학생의 다음 행동을,<br /><em>서버 상태와 함께 설계했습니다.</em></>}>
        <div className="editorial-flow-layout"><div className="editorial-flow-screen"><Screen project="geomate" name="home" label="시작과 재진입을 연결하는 학생 홈" /><p className="overview-caption">예제로 시작하기 · 내 문제 가져오기 · 이어 풀기 · 복습</p></div><div className="editorial-flow-copy"><section><span className="editorial-label">사용자의 목표</span><h3>지금 풀 문제를 고르고, 하던 학습으로 돌아오기</h3><p>진입 경로마다 예제 ID·문제 ID·학습 시도 ID의 의미가 달랐습니다. 새 학습과 기존 시도 재개를 구분해 올바른 화면으로 연결했습니다.</p></section><section><span className="editorial-label">기획과 구현의 접점</span><h3>‘기다리는 중’에도 다음 행동을 알 수 있게</h3><p>등록·해석·조건 확인을 서버 상태에 맞춰 보여주고, 실패 시 수정 내용과 재시도 경로를 유지했습니다. 복귀하면 관련 데이터를 다시 확인합니다.</p></section></div></div><ol className="editorial-flow-strip">{['문제 가져오기', '해석 상태 확인', '원본·조건 확인', '예측·조작', '저장·복습'].map((title, index) => <li key={title}><span>0{index + 1}</span>{title}</li>)}</ol><p className="editorial-scope-note">AI 해석·기하 계산은 공용 엔진을 사용하고, 프론트엔드에서는 결과를 확인하고 이어가는 화면과 상태 흐름을 담당했습니다.</p>
      </Spread>

      <Spread number={7} label="GEOMATE / ENGINEERING CASE 01" title={<>필기가 어긋난 원인을,<br /><em>좌표의 기준에서 찾았습니다.</em></>}>
        <div className="editorial-case-layout"><div className="editorial-case-narrative"><section><span>PROBLEM</span><h3>패널을 접거나 재진입하면 도형과 필기가 어긋남</h3><p>화면 크기와 패널 너비가 바뀔 때, 화면 픽셀로 저장한 필기와 도형을 배치하는 변환이 서로 달라졌습니다.</p></section><section><span>DECISION</span><h3>도형 뷰포트 기준으로 저장·복원 경로 통일</h3><p>필기 좌표를 뷰포트 기준으로 변환해 저장하고 복원할 때도 같은 기준을 적용했습니다. 화면 배치와 저장 데이터를 분리했습니다.</p></section><section><span>VALIDATION</span><h3>계속 풀기와 완료 후 재진입을 함께 점검</h3><p>패널 열기·닫기, 화면 크기 변화, 이어 풀기와 학습 완료 후 재진입까지 확인했습니다.</p></section></div><div className="editorial-case-evidence"><Screen project="geomate" name="workspace" label="필기·패널·도형이 함께 있는 학습 공간" /><div className="editorial-coordinate-flow"><span>저장된 필기</span><i>→</i><span>뷰포트 변환</span><i>→</i><strong>같은 렌더 기준</strong></div><blockquote>화면의 배치가 달라져도<br /><strong>사용자의 생각은 같은 자리에 남아야 했습니다.</strong></blockquote></div></div>
      </Spread>

      <Spread number={8} label="GEOMATE / ENGINEERING CASE 02" title={<>응답을 놓친 순간에도,<br /><em>안전하게 이어갈 수 있도록.</em></>} className="editorial-request-case">
        <div className="editorial-request-top"><p>서버가 요청을 접수한 뒤 응답만 유실되면, 사용자의 재시도가 중복 해석 요청으로 이어질 수 있었습니다. 화면 내부의 가드만으로는 재진입 이후를 막기 어려웠습니다.</p><div><span>MY DECISION</span><strong>요청 실패와 처리 실패를 구분하고,<br />서버 작업 상태를 확인하는 경로를 연결했습니다.</strong></div></div>
        <div className="editorial-state-grid"><section><span>01 / PROCESSING</span><h3>처리 중</h3><p>서버 작업 상태를 조회하고 진행 중 요청을 반복 생성하지 않도록 제어합니다.</p></section><section><span>02 / UNCERTAIN</span><h3>접수 여부 불확실</h3><p>일반적인 실패와 분리해 재전송을 방어하고, 최신 작업을 확인하는 흐름으로 연결합니다.</p></section><section><span>03 / FINISHED</span><h3>처리 종료</h3><p>종료 상태에서 polling을 멈추고 결과 확인 또는 가능한 재시도를 안내합니다.</p></section></div>
        <div className="editorial-request-bottom"><section><h3>계정과 관리자 모드도 응답의 경계로</h3><p>계정·세션·모드가 달라졌을 때 늦은 응답과 이전 캐시가 새 화면에 섞이지 않도록 검사와 정리를 보완했습니다.</p></section><section><h3>알림을 숨기는 행동과 작업 취소를 분리</h3><p>UI를 닫는 것과 서버 작업을 중단하는 것은 다른 동작입니다. 화면의 안내가 서버의 실제 상태를 오해하게 하지 않도록 구분했습니다.</p></section></div>
      </Spread>

      <Spread number={9} label="PROJECT 02 / DODAM" title={<>금융 데이터를 읽고,<br /><em>다음 행동을 고를 수 있도록.</em></>}>
        <div className="editorial-project-layout editorial-project-dodam"><div className="editorial-project-copy"><p className="editorial-project-summary">흩어진 자산·소비 정보를 사용자 상황에 맞게 해석하고, 실천할 금융 행동으로 연결하는 금융 코칭 서비스입니다.</p><dl className="editorial-facts"><div><dt>기간 / 팀</dt><dd>2026.08 — 09 / SSAFY D105</dd></div><div><dt>담당 역할</dt><dd>Frontend · UX Flow · API Integration</dd></div></dl><div className="editorial-contribution"><span>MY CONTRIBUTION</span><p>홈·가계부·자산·목표 화면을 구현하고, 발견·리포트의 UI와 API 연동을 개선했습니다.</p><p>화면에 없던 로딩·빈 데이터·분석 전 상태를 기획·백엔드와 함께 정의하고, 실제 Android 환경에서 확인했습니다.</p></div><Tags values={['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Reanimated']} /><ProjectLink slug="dodam" /></div><div className="editorial-dodam-phones"><Screen project="dodam" name="home" label="도담 홈" phone /><Screen project="dodam" name="report-overview" label="도담 금융 상태 리포트" phone /></div></div>
      </Spread>

      <Spread number={10} label="DODAM / PLANNING & IMPLEMENTATION" title={<>무엇을 보여줄지에 앞서,<br /><em>어떤 판단을 도울지 정했습니다.</em></>}>
        <div className="editorial-dodam-planning"><div className="editorial-planning-copy"><section><span className="editorial-label">기획의 기준</span><h3>현재 상태 → 비교 근거 → 실천할 행동</h3><p>정보의 양보다 사용자가 판단하는 순서를 우선했습니다. 진단 이후 목표 설정과 변화 추적으로 이어지게 화면의 연결을 정리했습니다.</p></section><section><span className="editorial-label">구현의 기준</span><h3>서버의 수치와 UI의 의미를 함께 보존</h3><p>같은 404라도 분석 전과 실제 오류를 구분했습니다. 진단의 비중과 소비 변동성을 같은 백분율로 취급하지 않고 각 값의 단위와 표시 조건을 분리했습니다.</p></section><aside>데이터가 부족할 때는 이유를 설명하고,<br /><strong>확인되지 않은 금융 판단을 UI에서 덧붙이지 않았습니다.</strong></aside></div><div className="editorial-dodam-evidence"><Screen project="dodam" name="report-indicators" label="진단 근거와 지표를 확인하는 도담 리포트" phone /><Screen project="dodam" name="discovery" label="실천할 행동을 탐색하는 도담 발견 화면" phone /></div></div><div className="editorial-bottom-note"><span>WHAT I LEARNED</span><p>API의 숫자를 표시하는 일에는, 그 숫자가 사용자의 선택에서 어떤 의미를 갖는지 확인하는 책임이 함께 있었습니다.</p></div>
      </Spread>

      <Spread number={11} label="PROJECT 03 / PROJECTREE" title={<>기다림을 줄이면서,<br /><em>정보의 유효함도 지키기.</em></>}>
        <div className="editorial-secondary-layout"><div className="editorial-secondary-copy"><p className="editorial-project-summary">회의에서 나온 아이디어를 구조화하고, 회의록·피드백과 다음 협업을 연결하는 서비스입니다.</p><p className="editorial-period">2026.07 — 08 · Frontend / UX Flow / API Integration</p><section><span className="editorial-label">담당한 일</span><p>프로젝트 생성·검색·관리, 팀 초대와 회의록·개인 피드백을 연결하고 로딩·빈 상태·오류 이후 행동을 정의했습니다.</p></section><section><span className="editorial-label">구현에서의 선택</span><p>응답 캐시와 진행 중 Promise를 분리해 동일 요청을 공유했습니다. 변경·로그아웃 시 캐시를 갱신하고, 무효화 이전의 응답이 다시 저장되지 않도록 방어했습니다.</p></section><Tags values={['React', 'TypeScript', 'Zustand', 'SSE']} /></div><div className="editorial-secondary-evidence"><figure className="editorial-web-frame"><img src="/images/projects/projectree/projectree-cover.png" alt="Projectree 프로젝트 대표 화면" loading="eager" /></figure><div className="editorial-mini-flow"><span>조회 조건별 요청 키</span><i>→</i><span>진행 요청 공유</span><i>→</i><span>변경 시 무효화</span></div><p>빠른 전환과 최신 데이터는 함께 설계해야 했습니다.</p><ProjectLink slug="projectree" /></div></div>
      </Spread>

      <Spread number={12} label="PROJECT 04 / DIT" title={<>AI의 응답을,<br /><em>선택할 수 있는 정보로 바꾸기.</em></>}>
        <div className="editorial-secondary-layout"><div className="editorial-secondary-copy"><p className="editorial-project-summary">개발 성향과 경험, 희망 조건을 바탕으로 프로젝트와 추천 이유를 제안하는 서비스입니다.</p><p className="editorial-period">2026.06.16 — 25 · Full-stack / UX Flow / AI Integration</p><section><span className="editorial-label">기획과 구현</span><p>빠른 선택지와 자유 입력을 함께 제공하고, 추천 이유·카드·상세 기획으로 응답을 나눴습니다. 인증·추천·저장·커뮤니티를 하나의 여정으로 연결했습니다.</p></section><section><span className="editorial-label">계약과 유효성</span><p>AI 응답을 JSON 계약으로 정의해 서버에서 파싱했습니다. 추천 상태는 세션에 보존하되, DBTI와 프로필 snapshot이 바뀌면 초기화했습니다.</p></section><Tags values={['Vue 3', 'Django REST', 'Pinia', 'OpenAI 연동']} /></div><div className="editorial-secondary-evidence"><figure className="editorial-web-frame"><img src="/images/projects/dit/dit-cover.png" alt="Dit 프로젝트 추천 서비스" loading="eager" /></figure><div className="editorial-evidence-pair"><span>입력의 자유<br /><b>선택지 + 직접 질문</b></span><span>결과의 유효성<br /><b>응답 계약 + 프로필 기준</b></span></div><p>사용자의 맥락이 달라지면 추천의 유효 조건도 달라집니다.</p><ProjectLink slug="dit" /></div></div>
      </Spread>

      <Spread number={13} label="PROJECT 05 / SANGCHU" title={<>분석 결과가,<br /><em>실제 탐색에 쓰이는 경험.</em></>}>
        <div className="editorial-secondary-layout"><div className="editorial-secondary-copy"><p className="editorial-project-summary">부산 지역의 상권 지표와 매물 조건을 비교하고, 입력 조건에 따른 월세를 예측하는 서비스입니다.</p><p className="editorial-period">Data / ML Integration · Django 서비스 연동</p><section><span className="editorial-label">담당한 일</span><p>지역명과 지표 배열의 순서를 맞춰 차트용 응답을 만들고, 월세 예측 모델을 Django JSON API로 연결했습니다.</p></section><section><span className="editorial-label">화면과 모델 사이의 기준</span><p>사용자가 이해할 입력 항목과 모델 입력 순서를 명시했습니다. 예측 결과와 오류를 화면으로 돌려 분석이 실제 사용 흐름에서 동작하도록 구현했습니다.</p></section><Tags values={['Python', 'Django', 'Pandas', 'scikit-learn']} /></div><div className="editorial-secondary-evidence"><figure className="editorial-web-frame"><img src="/images/projects/sangchu/sangchu-cover.png" alt="상추 상권 분석 서비스" loading="eager" /></figure><div className="editorial-mini-flow"><span>지역 비교</span><i>→</i><span>조건 입력</span><i>→</i><span>예측 결과 확인</span></div><p>데이터의 구조를 정리하는 일이 사용자의 비교를 돕는 일이 되었습니다.</p><ProjectLink slug="sangchu" /></div></div>
      </Spread>

      <Spread number={14} label="EXPERIENCE / NEXT CHAPTER" title={<>데이터를 이해하는 경험에서,<br /><em>사용자의 선택을 돕는 개발로.</em></>}>
        <div className="editorial-closing-layout"><div><ol className="editorial-experience">{experience.map(item => <li key={item.title}><time>{item.period}</time><div><h3>{item.title}</h3><p>{item.detail}</p></div></li>)}</ol><div className="editorial-skill-lines"><p><b>Frontend</b><span>React · Vue · TypeScript · React Native · Expo</span></p><p><b>Backend / Data</b><span>Spring Boot · Django · JPA · Python · SQL</span></p></div></div><div className="editorial-closing-message"><p className="editorial-label">THE DEVELOPER I WANT TO BE</p><h3>기획의 의도를 이해하고,<br />끝까지 작동하게 만드는 사람.</h3><p>문제가 생긴 조건을 함께 살피고, 화면과 데이터 사이의 기준을 정리하겠습니다. 사용자가 다시 돌아왔을 때도 자연스럽게 이어지는 서비스를 만들고 싶습니다.</p><div className="editorial-contact"><strong>정서영 <small>JEONG SEOYOUNG</small></strong><a href="mailto:jszxro@naver.com">jszxro@naver.com ↗</a><a href="https://github.com/jszxro">github.com/jszxro ↗</a><a href="https://jszxro.github.io">jszxro.github.io ↗</a></div></div></div>
      </Spread>
    </div>
  </article>
}
