import './AnbamPage.css'

const journey = [
  ['01', 'EXPLORE', '지도에서 주변 안전시설과 제보를 함께 확인합니다.'],
  ['02', 'COMPARE', '지역별 안전 데이터를 비교해 현재 위치의 맥락을 읽습니다.'],
  ['03', 'REPORT', '위치를 선택하고 현장에서 발견한 위험 요소를 제보합니다.'],
  ['04', 'DISCUSS', '댓글과 반응으로 제보에 필요한 정보를 보완합니다.'],
  ['05', 'REVISIT', '마이페이지에서 작성한 제보와 활동을 다시 확인합니다.'],
]

const contributions = [
  ['PUBLIC DATA', '안전시설 조회 API', '부산시 CCTV·보안등 데이터를 도메인과 저장소로 구성하고 지도에서 조회할 수 있는 API를 구현했습니다.'],
  ['AUTHENTICATION', '회원과 JWT 인증 흐름', '회원가입·로그인 API와 전역 인증 상태를 연결하고, 인증이 필요한 행동과 공개 탐색의 경계를 나눴습니다.'],
  ['COMMUNITY', '위치 기반 제보 기능', '위도·경도와 주소를 포함한 제보 CRUD부터 댓글·대댓글, 좋아요·싫어요까지 커뮤니티 흐름을 구현했습니다.'],
  ['DATA VISUALIZATION', '지역별 안전 지표', '공공데이터와 시민 제보를 구 단위로 집계해 인구·보안등·제보 현황을 비교할 수 있도록 시각화했습니다.'],
]

const features = [
  {
    number: '01',
    label: 'SAFETY MAP',
    title: '서로 다른 안전 정보를 하나의 지도에서 탐색합니다.',
    description: 'CCTV, 보안등, 시민 제보를 유형별 마커로 구분했습니다. 위치 정보가 있는 데이터만 지도에 표시하고, 마커를 선택하면 주소나 제보 상세로 이어지도록 구성했습니다.',
  },
  {
    number: '02',
    label: 'LOCATION REPORT',
    title: '발견한 위험 요소를 위치와 함께 기록합니다.',
    description: '지도에서 제보 위치를 선택하면 위도·경도와 도로명 주소를 함께 저장합니다. 텍스트만 남는 게시판이 아니라 실제 장소를 다시 확인할 수 있는 지역 안전 기록으로 만들었습니다.',
  },
  {
    number: '03',
    label: 'COMMUNITY',
    title: '제보 이후의 정보 보완까지 연결했습니다.',
    description: '댓글·대댓글과 좋아요·싫어요를 추가해 제보의 상태와 주변 상황을 다른 사용자와 나눌 수 있게 했습니다. 작성자에게는 수정·삭제 권한을, 방문자에게는 탐색과 반응 흐름을 구분했습니다.',
  },
  {
    number: '04',
    label: 'DISTRICT ANALYSIS',
    title: '지역별 수치를 비교 가능한 안전 맥락으로 바꿨습니다.',
    description: '부산시 구별 인구와 보안등 수, 시민 제보를 함께 보여주고 인구 대비 시설 현황을 계산했습니다. 지도에 흩어진 점을 지역 단위의 데이터로 다시 읽을 수 있도록 했습니다.',
  },
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function AnbamPage() {
  return (
    <article className="anbam-page">
      <section className="anbam-hero">
        <div className="anbam-container">
          <a className="anbam-back" href="#projects">← Projects</a>
          <div className="anbam-hero-grid">
            <div className="anbam-title-block">
              <p className="anbam-kicker">PUBLIC SAFETY · BACKEND-CENTERED FULL-STACK</p>
              <h1>안밤<span>안전 밤길</span></h1>
              <p className="anbam-summary">흩어진 공공 안전 데이터와 시민의 경험을 하나의 지도에 연결해, 주변의 밤길 안전 정보를 직접 확인하고 공유하는 서비스</p>
            </div>
            <div className="anbam-properties">
              <dl>
                <div><dt>PERIOD</dt><dd>2025.06.13 — 2025.06.25</dd></div>
                <div><dt>ROLE</dt><dd>Backend-centered Full-stack · Data Visualization</dd></div>
                <div><dt>TEAM</dt><dd>4인 팀 프로젝트</dd></div>
                <div><dt>STACK</dt><dd>Spring Boot · Spring Security · JWT · Oracle · React · Kakao Map API</dd></div>
              </dl>
              <div className="anbam-links">
                <a href="https://github.com/sumin020415/project_2" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>

          <figure className="anbam-cover">
            <div className="anbam-cover-bar"><span><i /><i /><i /></span><small>anbam · safety map</small><b>BUSAN</b></div>
            <img src="/images/projects/anbam/anbam-cover.gif" alt="안밤 지도 기반 밤길 안전 서비스 시연" />
            <figcaption><b>PROJECT OVERVIEW</b><span>공공 안전시설과 시민의 현장 제보를 동일한 지도 위에 놓아, 객관적인 위치 정보와 실제 경험을 함께 탐색하도록 설계했습니다.</span></figcaption>
          </figure>
        </div>
      </section>

      <nav className="anbam-section-nav" aria-label="안밤 상세 페이지 목차">
        <button type="button" onClick={() => scrollToSection('anbam-situation')}>Situation</button>
        <button type="button" onClick={() => scrollToSection('anbam-task')}>Task</button>
        <button type="button" onClick={() => scrollToSection('anbam-contribution')}>Contribution</button>
        <button type="button" onClick={() => scrollToSection('anbam-features')}>Features</button>
        <button type="button" onClick={() => scrollToSection('anbam-troubleshooting')}>Troubleshooting</button>
        <button type="button" onClick={() => scrollToSection('anbam-result')}>Result</button>
      </nav>

      <div className="anbam-container">
        <section className="anbam-section" id="anbam-situation">
          <header className="anbam-heading"><p>01 · SITUATION</p><h2>안전 정보는 존재했지만, 지금 걷는 길의 맥락으로 확인하기 어려웠습니다.</h2></header>
          <div className="anbam-prose">
            <p>CCTV와 보안등 위치는 공공데이터로 공개되어 있고 지역의 위험 요소는 시민 제보로 축적됩니다. 하지만 시설 정보와 현장 경험이 서로 다른 곳에 머물면, 사용자는 현재 위치 주변에 어떤 안전시설이 있고 어떤 문제가 반복되는지 한 번에 판단하기 어렵습니다.</p>
            <p>안밤은 이 문제를 단순한 시설 검색이 아니라 <strong>객관적인 공공데이터와 시민이 직접 발견한 위험 정보를 같은 공간적 맥락에서 읽는 문제</strong>로 정의했습니다. 주변을 탐색하는 순간부터 제보하고 의견을 나눈 뒤 자신의 활동을 다시 확인하는 순간까지 하나의 흐름으로 연결하고자 했습니다.</p>
            <aside className="anbam-question"><span>KEY QUESTION</span><p>서로 다른 출처의 안전 정보를 어떻게 연결해야 사용자가 <strong>현재 위치의 상황을 빠르게 이해하고 직접 정보에 기여할 수 있을까?</strong></p></aside>
          </div>
        </section>

        <section className="anbam-section" id="anbam-task">
          <header className="anbam-heading"><p>02 · TASK</p><h2>지도 탐색과 시민 참여가 끊기지 않는 안전 정보 흐름을 설계했습니다.</h2></header>
          <div className="anbam-prose">
            <p>시설 마커를 많이 표시하는 것만으로는 사용자의 판단을 돕기 어렵다고 보았습니다. 그래서 안전시설 확인, 지역 비교, 위치 제보, 의견 보완, 활동 확인으로 이어지는 사용자 흐름을 먼저 정리하고 각 단계에 필요한 데이터와 권한을 나눴습니다.</p>
            <div className="anbam-journey">
              {journey.map(([number, title, description]) => <article key={number}><i>{number}</i><strong>{title}</strong><p>{description}</p></article>)}
            </div>
            <aside className="anbam-principle"><b>PRODUCT PRINCIPLE</b><p>보기만 하는 지도에 머물지 않습니다. 안전시설을 확인한 사용자가 현장의 문제를 기록하고, 다른 사용자의 정보로 다시 지도를 보완하는 순환 구조를 만듭니다.</p></aside>
          </div>
        </section>

        <section className="anbam-section" id="anbam-contribution">
          <header className="anbam-heading"><p>03 · ACTION / MY CONTRIBUTION</p><h2>공공데이터 API부터 인증과 커뮤니티까지, 지도의 뒤에서 동작하는 흐름을 구현했습니다.</h2></header>
          <p className="anbam-intro">백엔드를 중심으로 참여하면서 화면에서 필요한 정보를 기준으로 도메인과 API를 설계했습니다. CCTV·보안등 조회에서 시작해 회원과 JWT 인증, 위치 기반 제보, 댓글과 반응, 마이페이지까지 기능 사이의 데이터 관계를 직접 연결했습니다.</p>
          <div className="anbam-role-board">
            <article><span>01 · BACKEND</span><strong>도메인과 API 구현</strong><p>회원·시설·제보·댓글·반응 데이터를 설계하고 Spring Boot와 JPA 기반 API를 구현했습니다.</p></article>
            <article><span>02 · FULL-STACK</span><strong>화면과 상태 연결</strong><p>React 화면에서 공개 데이터와 인증 상태를 구분하고 지도·게시글·마이페이지 흐름을 연결했습니다.</p></article>
            <article><span>03 · DATA</span><strong>지역 정보 시각화</strong><p>공공데이터와 제보 주소를 구 단위로 정리해 지역별 시설 및 제보 현황으로 시각화했습니다.</p></article>
          </div>
          <div className="anbam-contribution-list">
            {contributions.map(([label, title, description]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="anbam-stack">
            <b>MY STACK</b><p>Java · Spring Boot · Spring Security · Spring Data JPA · JWT · Oracle · React · Axios</p>
            <b>SERVICE STACK</b><p>React · Vite · Kakao Map API · Chart.js · Docker · Pandas</p>
          </div>
        </section>

        <section className="anbam-section" id="anbam-features">
          <header className="anbam-heading"><p>04 · FEATURES</p><h2>공공데이터를 확인하는 순간부터 시민의 정보가 다시 쌓이는 순간까지 연결했습니다.</h2></header>
          <div className="anbam-feature-list">
            {features.map((feature, index) => (
              <article key={feature.number} className={index % 2 ? 'is-reverse' : ''}>
                <div className="anbam-feature-visual" aria-hidden="true">
                  {index === 0 && <><div className="map-grid" /><i className="pin pin-one" /><i className="pin pin-two" /><i className="pin pin-three" /><span className="map-label">BUSAN SAFETY MAP</span></>}
                  {index === 1 && <><div className="report-card"><small>LOCATION REPORT</small><strong>부산광역시 · 선택한 위치</strong><p>주변의 위험 요소를 알려주세요.</p><button type="button" tabIndex={-1}>위치와 함께 제보하기</button></div></>}
                  {index === 2 && <><div className="community-card"><small>COMMUNITY</small><p>이 구간은 밤에 조명이 어두워요.</p><div><span>댓글 4</span><span>좋아요 12</span><span>싫어요 1</span></div></div></>}
                  {index === 3 && <><div className="chart-bars"><i /><i /><i /><i /><i /></div><div className="chart-meta"><span>인구</span><span>보안등</span><span>시민 제보</span></div></>}
                </div>
                <div className="anbam-feature-copy"><span>{feature.number} · {feature.label}</span><h3>{feature.title}</h3><p>{feature.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="anbam-section" id="anbam-troubleshooting">
          <header className="anbam-heading"><p>05 · ACTION / TROUBLESHOOTING</p><h2>기능을 추가하기보다 데이터와 권한이 어긋나는 지점을 먼저 분리했습니다.</h2></header>
          <p className="anbam-intro">작은 오류를 나열하지 않고 사용자의 탐색과 제보를 실제로 끊었던 세 가지 문제를 골랐습니다. 화면에서 보이는 증상만 고치지 않고 API의 인증 경계, 좌표가 결정되는 시점, 데이터마다 다른 지역 식별자까지 추적해 해결 범위를 정했습니다.</p>
          <div className="anbam-cases">
            <details open>
              <summary><span>01</span><strong>로그인하지 않으면 제보 마커가 뜨지 않던 문제를 API 경계에서 해결했습니다.</strong><i>+</i></summary>
              <div className="anbam-case-body">
                <p className="anbam-case-lead">지도는 누구나 탐색할 수 있어야 했지만, 제보 목록 API가 JWT를 요구하면서 비로그인 사용자의 지도에서는 시민 제보만 비어 보였습니다.</p>
                <div className="anbam-case-pair">
                  <section><span>SITUATION</span><h4>공공시설은 보이는데 시민 제보만 401 응답으로 누락됐습니다.</h4><p>CCTV와 보안등은 공개 API에서 가져왔지만, 제보 목록은 사용자별 반응 상태까지 반환하도록 만들어져 Authorization 헤더를 요구했습니다. 그 결과 서비스의 핵심 진입점인 지도조차 로그인 여부에 따라 서로 다른 정보를 보여줬습니다.</p></section>
                  <section><span>TASK</span><h4>조회는 공개하되 사용자 식별이 필요한 행동은 보호해야 했습니다.</h4><p>단순히 인증을 제거하면 작성·수정·삭제 권한까지 느슨해질 수 있었습니다. 지도에 필요한 공통 제보와 현재 사용자의 반응·내 게시글처럼 개인화된 정보를 분리할 기준이 필요했습니다.</p></section>
                </div>
                <section className="anbam-case-analysis"><span>ACTION &amp; DECISION</span><h4>기존 인증 API를 약화하지 않고 공개 조회 전용 경로를 추가했습니다.</h4><p><code>GET /api/posts/public</code>은 사용자 키 없이 공통 제보만 반환하도록 분리하고, 지도는 이 경로만 호출하도록 변경했습니다. 반면 제보 작성·내 게시글·상세 행동은 기존 JWT 흐름과 보호 라우트를 유지해 공개 범위를 조회로 제한했습니다.</p></section>
                <div className="anbam-case-result"><section><span>RESULT</span><p>로그인하지 않아도 CCTV·보안등·시민 제보가 같은 지도에 표시됐고, 인증이 필요한 행동을 선택했을 때만 로그인 화면으로 이어지게 됐습니다.</p></section><section><span>LEARNING</span><p>인증 여부를 페이지 단위로 나누기보다 데이터의 공개 범위와 행동의 책임을 기준으로 API 경계를 설계해야 한다는 점을 배웠습니다.</p></section></div>
              </div>
            </details>

            <details>
              <summary><span>02</span><strong>지도를 움직일 때마다 제보 위치가 달라지는 문제를 명시적 선택 방식으로 바꿨습니다.</strong><i>+</i></summary>
              <div className="anbam-case-body">
                <p className="anbam-case-lead">초기 구현에서는 지도의 중앙 좌표를 제보 위치로 사용해, 위치를 둘러보기 위한 이동까지 선택으로 해석되는 문제가 있었습니다.</p>
                <div className="anbam-case-pair">
                  <section><span>SITUATION</span><h4>지도 탐색과 위치 선택이 모두 <code>idle</code> 이벤트로 처리됐습니다.</h4><p>사용자가 지도를 드래그하거나 확대하면 중앙 좌표가 자동으로 갱신됐습니다. 화면에는 선택 지점을 나타내는 표시도 없어, 저장 직전의 좌표가 사용자가 의도한 장소인지 확인하기 어려웠습니다.</p></section>
                  <section><span>TASK</span><h4>탐색과 선택을 다른 상호작용으로 구분해야 했습니다.</h4><p>지도 이동은 주변을 살펴보는 행동으로 남겨 두고, 사용자가 특정 지점을 눌렀을 때만 제보 좌표와 주소가 바뀌어야 했습니다. 선택 결과도 화면에서 즉시 확인할 수 있어야 했습니다.</p></section>
                </div>
                <section className="anbam-case-analysis"><span>ACTION &amp; DECISION</span><h4>중앙 좌표 감지를 제거하고 지도 클릭을 위치 선택의 유일한 기준으로 정했습니다.</h4><p>카카오맵의 클릭 이벤트에서 위도·경도를 가져오고 선택 지점에 마커를 생성했습니다. 같은 마커를 다음 클릭 위치로 이동시키며, 좌표는 역지오코딩해 도로명 주소로 변환한 뒤 제보 데이터에 함께 저장했습니다.</p></section>
                <div className="anbam-case-result"><section><span>RESULT</span><p>지도를 자유롭게 이동해도 제보 위치가 바뀌지 않았고, 사용자는 마커와 주소를 확인한 뒤 의도한 장소를 등록할 수 있게 됐습니다.</p></section><section><span>LEARNING</span><p>연속적으로 발생하는 지도 이벤트보다 사용자의 명시적인 입력을 저장 기준으로 삼아야 위치 데이터의 신뢰도를 높일 수 있었습니다.</p></section></div>
              </div>
            </details>

            <details>
              <summary><span>03</span><strong>영문 지도 ID와 한글 행정구명 때문에 연결되지 않던 통계를 정규화했습니다.</strong><i>+</i></summary>
              <div className="anbam-case-body">
                <p className="anbam-case-lead">부산 지도 SVG, 공공데이터, 시민 제보가 같은 지역을 서로 다른 문자열로 표현해 단순 비교로는 지역별 수치가 연결되지 않았습니다.</p>
                <div className="anbam-case-pair">
                  <section><span>SITUATION</span><h4><code>Busanjin-gu</code>, <code>부산진구</code>, 주소의 두 번째 항목이 각각 따로 존재했습니다.</h4><p>SVG path는 영문 ID를, 인구·보안등 데이터는 한글 구명을 사용했습니다. 시민 제보는 전체 주소 문자열로 저장되어 지역별 제보 수를 계산하려면 행정구를 다시 추출해야 했습니다.</p></section>
                  <section><span>TASK</span><h4>화면마다 조건문을 늘리지 않고 하나의 지역 키로 합쳐야 했습니다.</h4><p>지도 클릭, 인구 조회, 보안등 조회, 제보 집계가 같은 지역을 가리키도록 식별자를 맞추고, 제보가 없는 구도 차트에서 사라지지 않게 전체 지역 집합을 유지해야 했습니다.</p></section>
                </div>
                <section className="anbam-case-analysis"><span>ACTION &amp; DECISION</span><h4>원본 데이터는 유지하고 서비스 내부에서 사용할 매핑 계층을 만들었습니다.</h4><p>영문 SVG ID와 한글 행정구명을 연결하는 매핑 데이터를 두고, 제보 주소에서는 구·군 값을 추출해 동일한 한글 키로 집계했습니다. 부산의 16개 구·군을 기준 목록으로 만든 뒤 값이 없는 지역에는 0을 채워 비교 순서를 유지했습니다.</p></section>
                <div className="anbam-case-result"><section><span>RESULT</span><p>지도에서 선택한 구의 인구와 보안등 수가 정확히 연결됐고, 제보 수 역시 16개 구·군 전체를 동일한 기준으로 비교할 수 있게 됐습니다.</p></section><section><span>LEARNING</span><p>외부 데이터를 결합할 때는 표시 문자열을 직접 비교하기보다 먼저 안정적인 공통 키와 누락값 처리 규칙을 정해야 한다는 점을 배웠습니다.</p></section></div>
              </div>
            </details>
          </div>
        </section>

        <section className="anbam-section anbam-result" id="anbam-result">
          <p>06 · RESULT &amp; REFLECTION</p>
          <h2>흩어진 안전 정보를, <strong>지역을 함께 읽고 채워가는 지도</strong>로 연결했습니다.</h2>
          <div className="anbam-result-grid">
            <article><span>01</span><strong>공공데이터와 시민 경험의 연결</strong><p>시설 위치와 제보를 한 지도에 배치해 객관적인 정보와 현장의 맥락을 함께 탐색하도록 만들었습니다.</p></article>
            <article><span>02</span><strong>인증을 고려한 참여 흐름</strong><p>공개 탐색은 열어 두고 작성·댓글·반응에는 사용자 식별을 적용해 접근성과 책임을 함께 고려했습니다.</p></article>
            <article><span>03</span><strong>백엔드에서 화면까지 검증</strong><p>API 구현에 머물지 않고 지도, 게시글, 마이페이지에서 데이터가 실제 사용자 흐름으로 이어지는지 확인했습니다.</p></article>
          </div>
          <p className="anbam-reflection">안밤을 만들며 지도 서비스의 핵심은 마커의 개수가 아니라 서로 다른 정보가 같은 위치에서 어떤 의미로 연결되는지에 있다는 점을 배웠습니다. 또한 백엔드의 인증과 데이터 관계가 화면의 접근 범위와 상호작용을 직접 결정한다는 것을 경험했습니다. 이후에도 기능 단위 구현보다 사용자가 정보를 발견하고 행동하는 전체 흐름을 기준으로 데이터와 API를 설계하겠습니다.</p>
          <div className="anbam-actions"><a href="#projects">프로젝트 목록으로</a><a href="#/projects/moodlog">← Moodlog 프로젝트 보기</a></div>
        </section>
      </div>
    </article>
  )
}

export default AnbamPage
