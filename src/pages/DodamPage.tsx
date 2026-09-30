import './DodamPage.css'

const journey = [
  ['01', 'CONNECT', '흩어진 금융 데이터를 하나의 맥락으로 묶습니다.'],
  ['02', 'INTERPRET', '자산과 소비 상태를 기준과 함께 해석합니다.'],
  ['03', 'DISCOVER', '개선이 필요한 지점을 발견합니다.'],
  ['04', 'ACT', '실천 가능한 행동을 선택합니다.'],
  ['05', 'TRACK', '목표 이후의 변화를 추적합니다.'],
]

const features = [
  { number: '01', title: '홈 금융 브리핑', description: '어제 지출, 예정 출금, 자산과 목표 중 오늘 판단해야 할 정보를 한 화면에 보여줍니다.', decision: '정보가 많을수록 핵심 금액을 놓친다고 판단해, 전체 현황보다 오늘의 금액과 행동을 앞에 배치했습니다.', path: 'home.png' },
  { number: '02', title: '가계부와 소비 흐름', description: '월별 소비와 카테고리를 분석하고, 선택한 날짜의 거래까지 한 흐름에서 탐색할 수 있습니다.', decision: '날짜 선택 후 거래를 다시 찾아야 하는 단절을 없애기 위해 달력과 거래 목록의 스크롤을 동기화했습니다.', path: 'ledger.png' },
  { number: '03', title: '금융 비효율 발견', description: '규칙 기반 진단과 또래 비교를 바탕으로 개선 지점, 예상 절감액과 다음 행동을 제안합니다.', decision: '진단이 일방적인 평가로 보이지 않도록 결과보다 판단 근거와 개선 가능성을 먼저 설명했습니다.', path: 'discovery.png' },
  { number: '04', title: '목표와 변화 추적', description: '모으기·줄이기 목표의 진행률과 금융 효율 점수로 행동 이후의 변화를 보여줍니다.', decision: '진단이 일회성 정보로 끝나는 문제를 막기 위해 개선 행동을 목표 설정과 변화 추적으로 이어지게 했습니다.', path: 'goals.png' },
]

const timeline = [
  ['DEFINE', '금융 정보가 행동으로 이어지지 않는 문제를 정의'],
  ['DESIGN', '진단에서 목표까지 이어지는 사용자 흐름을 설계'],
  ['FOUNDATION', '반복되는 UI·타입·디자인 기준을 공통 구조로 통합'],
  ['BUILD', '핵심 화면을 구현하고 API 응답을 화면 상태와 연결'],
  ['VALIDATE', 'Android 실기기에서 레이아웃과 예외 상태를 검증'],
  ['DELIVER', 'Preview APK로 반복 가능한 내부 배포 환경을 구축'],
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function DodamPage() {
  return (
    <article className="dodam-page">
      <section className="dodam-hero">
        <div className="dodam-hero-inner">
          <div className="dodam-hero-copy">
            <a className="dodam-back" href="#projects">← Projects</a>
            <div className="dodam-hero-info">
              <div className="dodam-title-block">
                <p className="dodam-kicker">FEATURED PROJECT · MOBILE FINTECH</p>
                <h1>Dodam<span>도담</span></h1>
                <p className="dodam-summary">흩어진 금융 데이터를 판단 기준으로 바꿔,<br />현재 상태의 해석부터 다음 행동까지 잇는 금융 코칭 서비스</p>
              </div>
              <div className="dodam-property-panel">
                <div className="dodam-meta">
                  <div><small>PERIOD</small><strong>2026.07 — 2026.09</strong></div>
                  <div><small>ROLE</small><strong>Frontend · UI/UX · API</strong></div>
                  <div><small>TEAM</small><strong>추후 입력</strong></div>
                </div>
                <div className="dodam-links" aria-label="프로젝트 외부 링크">
                  <button type="button" disabled>Figma · 추후 연결</button>
                  <button type="button" disabled>Git · 추후 연결</button>
                  <button type="button" disabled>Demo · 추후 연결</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dodam-hero-visual">
            <span className="dodam-visual-label">MOBILE FINANCIAL COACH</span>
            <img src="/images/projects/dodam/dodam-cover.jpg" alt="도담 프로젝트 대표 화면" />
            <p><b>01</b> 흩어진 금융 정보를 다음 행동으로 잇습니다.</p>
          </div>
        </div>
      </section>

      <nav className="dodam-section-nav" aria-label="도담 상세 페이지 목차">
        <button type="button" onClick={() => scrollToSection('dodam-overview')}>Situation</button>
        <button type="button" onClick={() => scrollToSection('dodam-planning')}>Task</button>
        <button type="button" onClick={() => scrollToSection('dodam-role')}>Action</button>
        <button type="button" onClick={() => scrollToSection('dodam-features')}>Features</button>
        <button type="button" onClick={() => scrollToSection('dodam-troubleshooting')}>Troubleshooting</button>
        <button type="button" onClick={() => scrollToSection('dodam-retrospective')}>Result</button>
      </nav>

      <div className="dodam-content">
        <section className="dodam-section dodam-overview" id="dodam-overview">
          <div className="dodam-section-heading"><p>01 · SITUATION</p><h2>금융 정보는 있었지만,<br />판단할 기준은 없었습니다.</h2></div>
          <div className="dodam-prose">
            <p>금융상품을 고를 때 금리와 혜택은 비교할 수 있었지만, 어느 선택이 내 상황에 맞는지는 알기 어려웠습니다. 금융 앱에서도 잔액과 소비 기록은 볼 수 있었지만, 지금의 상태가 적절한지 무엇부터 바꿔야 하는지까지 알려주지는 않았습니다.</p>
            <p>처음에는 금융 경험이 적은 청년의 문제라고 생각했습니다. 그러나 기획을 구체화하면서 같은 정보도 소득·부채·소비 패턴에 따라 다른 판단으로 이어진다는 점을 발견했습니다. 문제의 원인은 연령이나 정보의 양이 아니라, <strong>각자의 상황을 해석하고 선택할 기준의 부재</strong>였습니다.</p>
            <p>따라서 문제를 ‘금융 정보 부족’이 아니라, 흩어진 데이터를 사용자가 판단할 수 있는 기준과 순서로 바꾸는 과정의 부재로 다시 정의했습니다.</p>
            <blockquote className="dodam-key-question"><span>KEY QUESTION</span><p>사용자가 자신의 금융 상태를 스스로 해석하고,<br /><strong>다음 행동을 선택하게 하려면 무엇이 필요할까?</strong></p></blockquote>
          </div>
        </section>

        <section className="dodam-section" id="dodam-planning">
          <div className="dodam-section-heading"><p>02 · TASK</p><h2>조회에서 끝나지 않고,<br />해석이 행동으로 이어지게</h2></div>
          <div className="dodam-prose">
            <h3>데이터를 더 보여주는 대신, 판단의 순서를 설계해야 했습니다.</h3>
            <p>이 프로젝트의 과제는 자산과 소비 정보를 한 화면에 많이 담는 것이 아니었습니다. 사용자가 <strong>현재 상태를 읽고, 문제의 이유를 납득하고, 개선 순서를 판단한 뒤 직접 실천을 선택하는 흐름</strong>을 만드는 것이었습니다.</p>
            <p>사용 흐름을 연결·해석·발견·행동·추적의 다섯 단계로 나눈 이유도 여기에 있습니다. 각 진단에 근거와 예상 효과를 붙이고, 하나의 정답을 제시하기보다 사용자가 선택할 수 있는 행동으로 이어지게 했습니다.</p>
            <div className="dodam-journey">{journey.map(([number, title, description]) => <article key={number}><i>{number}</i><strong>{title}</strong><p>{description}</p></article>)}</div>
            <aside className="dodam-planning-note"><b>DESIGN PRINCIPLE</b><p>추정이 금융 판단을 왜곡할 수 있다고 판단해 검증 가능한 데이터와 비교 근거만 사용했습니다. 데이터가 부족하면 임의의 결과 대신 분석이 어려운 이유를 밝히고, 최종 행동은 사용자가 선택하도록 설계했습니다.</p></aside>
          </div>
        </section>

        <section className="dodam-section" id="dodam-role">
          <div className="dodam-section-heading"><p>03 · ACTION / MY CONTRIBUTION</p><h2>화면과 API 사이의 간극을<br />실제로 작동하는 흐름으로 바꿨습니다.</h2></div>
          <p className="dodam-section-intro">저는 홈·가계부·자산·목표 화면을 구현하고 발견·리포트의 UI와 API 연동을 개선했습니다. 구현 과정에서 기획 화면만으로는 로딩, 빈 데이터, 분석 전 상태의 동작이 결정되지 않는다는 문제를 발견했습니다. 이에 정보가 나타나는 순서와 상태별 행동 기준을 기획·백엔드와 다시 정의하고 실제 기기에서 검증했습니다.</p>
          <div className="dodam-role-grid">
            <article><span>SCREEN SYSTEM</span><h3>화면마다 달랐던 UI 기준 통합</h3><p>반복되는 다이얼로그와 바텀시트가 화면마다 다르게 동작하는 문제를 줄이기 위해 공통 컴포넌트로 묶고, React Native와 Expo 기반 핵심 화면에 동일한 기준을 적용했습니다.</p></article>
            <article><span>INTERACTION</span><h3>끊겨 있던 가계부 탐색 개선</h3><p>날짜 선택 후 거래를 다시 찾아야 하는 원인을 고정 영역과 목록 좌표의 불일치로 판단했습니다. 실제 레이아웃을 측정해 날짜 선택부터 거래 이동까지 한 흐름으로 만들었습니다.</p></article>
            <article><span>API CONTRACT</span><h3>응답 코드와 사용자 상태 분리</h3><p>같은 404라도 분석 전 상태와 실제 오류의 의미가 다르다고 판단했습니다. API 응답 타입과 화면 상태를 분리하고 각 상황에 맞는 안내와 다음 행동을 정의했습니다.</p></article>
            <article><span>RELEASE VALIDATION</span><h3>개발 화면과 실기기의 차이 해소</h3><p>개발 서버의 정상 동작만으로 배포 가능 여부를 판단할 수 없었습니다. EAS Preview APK로 Android 레이아웃과 네이티브 빌드를 검증해 실제 기기에 설치 가능한 결과물을 만들었습니다.</p></article>
          </div>
          <div className="dodam-stack"><strong>STACK</strong><span>React Native</span><span>Expo</span><span>TypeScript</span><span>Expo Router</span><span>react-native-svg</span><span>EAS Build</span></div>
        </section>

        <section className="dodam-section" id="dodam-features">
          <div className="dodam-section-heading"><p>04 · ACTION / KEY FEATURES</p><h2>각 기능에서 ‘다음 행동’이<br />먼저 보이게 했습니다.</h2></div>
          <p className="dodam-section-intro">금융 정보가 많을수록 무엇을 먼저 봐야 할지 모호해진다고 판단했습니다. 그래서 각 화면에서 사용자가 내려야 할 판단을 먼저 정의하고, 그 판단에 필요한 금액과 근거만 우선 배치했습니다. 진단 이후에는 목표 설정과 변화 추적으로 이어지도록 기능 간 순서도 함께 설계했습니다.</p>
          <div className="dodam-feature-list">
            {features.map((feature) => <article key={feature.number}><div className="dodam-screen-placeholder has-image"><img src={`/images/projects/dodam/screens/${feature.path}`} alt={`${feature.title} 화면`} /></div><div><span>{feature.number}</span><h3>{feature.title}</h3><p>{feature.description}</p><p className="dodam-feature-decision"><b>UX Decision</b>{feature.decision}</p></div></article>)}
          </div>
        </section>

        <section className="dodam-section dodam-work-section">
          <div className="dodam-section-heading"><p>05 · ACTION / PROCESS</p><h2>화면이 아니라 서비스가<br />작동할 때까지 조율했습니다.</h2></div>
          <div className="dodam-prose"><p>정적 Figma만 기준으로 삼으면 실제 데이터와 기기 환경에서 생기는 빈틈을 놓칠 수 있다고 판단했습니다. API 연결 후 발견한 빈 데이터와 예외 상태는 백엔드와 응답 기준을 다시 정의했고, Android에서만 발생한 레이아웃 차이는 Preview APK를 반복 검증하며 수정했습니다.</p></div>
          <div className="dodam-timeline">{timeline.map(([title, detail], index) => <article key={title}><i>{String(index + 1).padStart(2, '0')}</i><strong>{title}</strong><p>{detail}</p></article>)}</div>
          <ul className="dodam-qa-list"><li>응답 의미의 불일치 → 상태 정의를 기획·백엔드와 재합의</li><li>Figma와 APK의 차이 → 실제 기기 기준으로 레이아웃 수정</li><li>기기 폭과 글자 크기 편차 → 핵심 정보의 노출 우선순위 유지</li><li>재현 조건이 달라지는 오류 → 발생 조건과 수정 근거를 문서화</li></ul>
        </section>

        <section className="dodam-section" id="dodam-troubleshooting">
          <div className="dodam-section-heading"><p>06 · ACTION / TROUBLESHOOTING</p><h2>사용자가 막힌 지점에서<br />문제의 원인을 추적했습니다.</h2></div>
          <p className="dodam-section-intro">작은 UI 오류를 나열하기보다 상태 전환, 데이터 시각화, 네이티브 빌드에서 마주한 복합적인 문제를 골랐습니다. 증상을 임시로 가리면 다른 환경에서 같은 문제가 반복된다고 판단해, 원인과 실행 시점을 분리하고 재사용할 수 있는 해결 구조를 만들었습니다.</p>
          <div className="dodam-troubleshooting">
            <details open>
              <summary><span>01</span><strong>동적 레이아웃 측정으로 달력과 거래 내역의 스크롤을 동기화했습니다.</strong><i>+</i></summary>
              <div className="dodam-case-body">
                <p className="dodam-case-lead">날짜를 선택하면 월간 달력이 접히고, 선택한 거래가 고정된 주간 달력 바로 아래에 나타나는 탐색 흐름을 구현했습니다.</p>
                <div className="dodam-case-context">
                  <section><span>SITUATION</span><h4>여러 레이아웃 상태가 하나의 스크롤 안에서 충돌했습니다.</h4><p>날짜를 누른 직후 이동하면 달력이 접히기 전 좌표가 사용되어 거래가 달력 뒤에 가려졌습니다. 이전 날짜나 아직 렌더링되지 않은 과거 거래로는 이동할 수 없었고, 첫 클릭에는 화면이 깜빡이기도 했습니다.</p></section>
                  <section><span>TASK</span><h4>기기와 데이터 양이 달라도 같은 위치에 도달해야 했습니다.</h4><p>상단 요약과 소비 영역은 자연스럽게 스크롤되고, 달력은 고정·확장·축소되면서도 선택한 날짜의 거래를 정확한 위치에 보여줘야 했습니다.</p></section>
                </div>
                <section className="dodam-case-analysis"><span>ROOT CAUSE</span><h4>좌표 계산과 렌더링 시점이 함께 얽힌 문제였습니다.</h4><p>거래 그룹의 위치는 목록 내부 좌표였지만 실제 이동 위치에는 달력, 최근 내역, 거래 목록, 고정 달력 높이가 모두 반영되어야 했습니다. 동시에 React 상태를 변경한 직후에는 달력이 아직 접히지 않았고, 과거 거래 그룹도 생성되지 않아 위치를 곧바로 측정할 수 없었습니다.</p></section>
                <section className="dodam-case-action"><span>ACTION</span><h4>날짜 선택, 렌더링, 위치 측정, 스크롤을 순서대로 분리했습니다.</h4><ol><li>선택한 거래가 렌더링 범위 밖이면 <code>visibleDateCount</code>를 먼저 늘렸습니다.</li><li>각 거래 그룹의 <code>onLayout</code>에서 실제 y 좌표를 저장했습니다.</li><li>달력을 접고 위치 측정이 끝난 뒤 <code>requestAnimationFrame</code>에서 이동했습니다.</li><li>거래 필터링과 날짜별 그룹화는 <code>useMemo</code>로 필요한 때만 다시 계산했습니다.</li><li>현재 월이 아니거나 거래가 없는 날짜는 미리 비활성화했습니다.</li></ol><pre><code>targetOffset = calendarY + feedY + transactionListY + groupOffset - collapsedStickyCalendarHeight</code></pre></section>
                <div className="dodam-case-outcome">
                  <section><span>RESULT</span><ul><li>이전·이후 날짜와 아직 렌더링되지 않은 과거 거래까지 이동</li><li>선택한 거래를 고정 달력 바로 아래에 정렬</li><li>기기 높이와 글자 크기에 의존하던 고정 좌표 제거</li><li>스크롤 중 불필요한 거래 정렬과 그룹화 감소</li></ul></section>
                  <section><span>LEARNING</span><p>스크롤 문제는 목표 좌표만 계산하는 일이 아니라 React의 상태 변경과 네이티브 레이아웃 측정이 끝나는 시점까지 함께 다뤄야 하는 문제였습니다. 좌표를 추정하기보다 실제 레이아웃을 측정하고 렌더링 이후에 명령형 동작을 실행하도록 설계했습니다.</p></section>
                </div>
              </div>
            </details>
            <details>
              <summary><span>02</span><strong>서로 다른 금융 단위와 API 하위 호환성을 고려해 K-Means 비교 그래프를 설계했습니다.</strong><i>+</i></summary>
              <div className="dodam-case-body">
                <p className="dodam-case-lead">값의 의미를 유지하면서 사용자 값, 군집 평균, 주요 범위와 백분위를 하나의 비교 카드 안에 표현했습니다.</p>
                <div className="dodam-case-context">
                  <section><span>SITUATION</span><h4>같은 변환 규칙이 금융 데이터를 왜곡했습니다.</h4><p>소득 대비 지출과 저축률은 비율이지만 소비 변동성은 원값이었습니다. 모든 값을 백분율로 바꾸면 서버 설명과 화면 숫자가 달라졌고, 고정된 0~100 축에서는 작은 값이 한쪽에 몰려 비교하기 어려웠습니다.</p></section>
                  <section><span>TASK</span><h4>단위는 보존하면서 일관된 비교 경험을 제공해야 했습니다.</h4><p>관련 필드가 없는 이전 진단과 신규 군집 데이터를 한 앱에서 함께 작동시키고, 근거가 완전한 경우에만 또래 비교 UI를 노출해야 했습니다.</p></section>
                </div>
                <section className="dodam-case-analysis"><span>ROOT CAUSE</span><h4>표시 형식, 그래프 축, API 버전이 하나의 조건문에 섞여 있었습니다.</h4><p>특징별 단위가 다른 데다 군집 정보 도입 전에 저장된 응답에는 <code>detectionSource</code>, <code>clusterContext</code>, <code>modelVersion</code>이 없었습니다. 일부 필드만 존재하는 중간 상태에서 배지와 상세 카드가 서로 다르게 노출될 가능성도 있었습니다.</p></section>
                <section className="dodam-case-action"><span>ACTION</span><h4>데이터의 의미와 UI 표시 조건을 각각 분리했습니다.</h4><ol><li>신규 필드를 optional로 정의하고 <code>hasClusterEvidence()</code>로 노출 조건을 통일했습니다.</li><li>비중만 백분율로 변환하고 소비 변동성은 서버 원값과 소수 정밀도를 유지했습니다.</li><li>각 카드의 사용자 값·평균·상위 범위를 기준으로 동적인 축을 생성했습니다.</li><li>프론트엔드에서 ‘위험’이나 ‘정상’ 같은 금융 판단을 추가하지 않았습니다.</li></ol><pre><code>domain = Math.max(userValue, p95, mean) × 1.25 · position = clamp(value / domain × 100)</code></pre></section>
                <div className="dodam-case-outcome">
                  <section><span>RESULT</span><ul><li>규칙 기반 진단과 군집 기반 진단이 동일 앱에서 함께 동작</li><li>이전에 저장된 진단 응답에서도 화면 호환성 유지</li><li>서버 설명과 화면 숫자의 불일치 제거</li><li>비교 범위를 벗어난 사용자 값도 잘리지 않게 표시</li></ul></section>
                  <section><span>LEARNING</span><p>데이터 시각화에서는 그래프를 그리는 기술보다 값의 의미와 단위를 보존하는 일이 먼저였습니다. 구현 편의를 위한 일괄 정규화 대신 API 하위 호환성과 특징별 표시 모델을 분리해 금융 정보의 왜곡을 방지했습니다.</p></section>
                </div>
              </div>
            </details>
            <details>
              <summary><span>03</span><strong>JavaScript와 Android 네이티브 빌드의 차이를 분석해 반복 가능한 APK 배포 환경을 구성했습니다.</strong><i>+</i></summary>
              <div className="dodam-case-body">
                <p className="dodam-case-lead">개발 서버에서는 드러나지 않던 네이티브 의존성과 리소스 문제를 제거해 실제 기기에 설치 가능한 Preview APK를 완성했습니다.</p>
                <div className="dodam-case-context">
                  <section><span>SITUATION</span><h4>Expo에서는 동작했지만 릴리스 빌드에서 실패했습니다.</h4><p>개발 환경에서는 앱이 정상 실행됐지만 EAS Preview APK에서는 Gradle 오류와 <code>splashscreen_logo resource not found</code>가 연이어 발생했습니다.</p></section>
                  <section><span>TASK</span><h4>시연 가능한 APK와 반복 가능한 빌드 과정이 필요했습니다.</h4><p>Expo Go 없이 실제 기기에 설치할 수 있어야 했고, 앱 시작 화면과 데모 로그인은 유지하면서 불필요한 네이티브 설정은 제거해야 했습니다.</p></section>
                </div>
                <section className="dodam-case-analysis"><span>ROOT CAUSE</span><h4>화면에서 제거한 기능이 네이티브 빌드에는 남아 있었습니다.</h4><p>사용하지 않는 카카오 로그인 패키지와 Expo 플러그인이 Android 의존성에 포함되어 있었습니다. 반면 GIF 시작 화면을 위해 정적 로고를 제거했지만, Android 빌드 설정은 여전히 스플래시 리소스를 참조하고 있었습니다.</p></section>
                <section className="dodam-case-action"><span>ACTION</span><h4>JavaScript 코드부터 Android 리소스까지 의존 관계를 정리했습니다.</h4><ol><li>카카오 로그인 패키지·플러그인·Hook·API·환경변수·타입과 잠금 파일 의존성을 함께 제거했습니다.</li><li>Android가 요구하는 스플래시는 투명 drawable로 제공하고, 사용자에게 보이는 GIF는 React Native 화면이 담당하도록 역할을 나눴습니다.</li><li>시연용 APK와 실제 배포 설정이 섞이지 않도록 EAS 빌드 프로필을 분리했습니다.</li></ol><pre><code>preview → internal distribution · Android APK · demo configuration</code></pre></section>
                <div className="dodam-case-outcome">
                  <section><span>RESULT</span><ul><li>EAS Android Preview APK 빌드 및 실제 기기 설치 성공</li><li>앱 시작 시 불필요한 정적 로고 제거</li><li>사용하지 않는 네이티브 로그인 의존성 제거</li><li>같은 설정으로 반복 가능한 내부 배포 과정 확보</li></ul></section>
                  <section><span>LEARNING</span><p>React Native의 최종 결과물은 Android 네이티브 앱이므로 JavaScript 실행만 확인해서는 충분하지 않았습니다. 네이티브 패키지, Gradle 의존성, 리소스 생성 과정까지 확인해야 실제 배포 환경의 문제를 해결할 수 있었습니다.</p></section>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section className="dodam-section dodam-retrospective" id="dodam-retrospective">
          <p>07 · RESULT & REFLECTION</p><h2>데이터를 보여주는 화면을,<br /><strong>선택을 돕는 서비스로.</strong></h2>
          <div className="dodam-result-grid">
            <article><span>01</span><strong>진단을 행동 흐름으로 확장</strong><p>금융 연결과 진단에서 멈추던 정보를 추천·목표 설정·변화 추적까지 이어지는 흐름으로 구현했습니다.</p></article>
            <article><span>02</span><strong>응답의 의미를 화면에 반영</strong><p>분석 전·로딩·빈 데이터·실제 오류를 분리해 각 상태마다 다른 안내와 다음 행동이 나타나게 했습니다.</p></article>
            <article><span>03</span><strong>실제 기기에서 배포 가능성 검증</strong><p>개발 환경에 남아 있던 네이티브 의존성을 제거하고 실제 기기에 설치 가능한 Preview APK를 완성했습니다.</p></article>
          </div>
          <p>도담을 통해 좋은 금융 경험은 정보의 양보다 사용자가 자신의 상태를 해석하고 선택할 기준에서 시작한다는 점을 배웠습니다. 프론트엔드 역시 데이터를 화면에 옮기는 데서 끝나지 않고, 기획과 API 사이의 간극을 판단 가능한 사용자 경험으로 바꾸는 역할임을 확인했습니다. 앞으로도 기술을 먼저 고르기보다 사용자가 막히는 지점과 데이터의 의미를 정의한 뒤 해결 방식을 선택하겠습니다.</p>
          <div className="dodam-retrospective-actions"><a href="#projects">← 프로젝트 목록으로</a><button type="button" disabled>다음 프로젝트 · 준비 중 →</button></div>
        </section>
      </div>
    </article>
  )
}

export default DodamPage
