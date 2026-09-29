import './DodamPage.css'

const journey = [
  ['01', 'CONNECT', '흩어진 금융 데이터를 연결합니다.'],
  ['02', 'UNDERSTAND', '자산과 소비 흐름을 이해합니다.'],
  ['03', 'DISCOVER', '개선이 필요한 지점을 발견합니다.'],
  ['04', 'ACT', '실천 가능한 행동을 선택합니다.'],
  ['05', 'TRACK', '목표의 변화를 꾸준히 확인합니다.'],
]

const features = [
  { number: '01', title: '홈 금융 브리핑', description: '어제 지출, 예정 출금, 자산과 목표를 한 화면에서 확인해 지금 필요한 정보를 먼저 보여줍니다.', decision: '모든 금융 정보를 나열하기보다 사용자가 오늘 확인해야 할 금액과 행동을 우선 배치했습니다.', path: 'home.png' },
  { number: '02', title: '가계부와 소비 흐름', description: '월별 소비와 카테고리를 분석하고 날짜 선택부터 거래 확인까지 자연스럽게 이어지도록 설계했습니다.', decision: '달력에서 날짜를 선택하면 관련 거래가 바로 보이도록 탐색 과정을 하나의 흐름으로 연결했습니다.', path: 'ledger.png' },
  { number: '03', title: '금융 비효율 발견', description: '규칙 기반 진단과 또래 비교를 통해 개선 지점과 예상 절감액, 다음 행동을 함께 제안합니다.', decision: '사용자를 단정적으로 평가하지 않고 진단 근거와 개선 가능성을 함께 설명하도록 구성했습니다.', path: 'discovery.png' },
  { number: '04', title: '목표 관리와 리포트', description: '모으기·줄이기 목표의 진행률과 금융 효율 점수를 시각화해 변화 과정을 확인할 수 있습니다.', decision: '진단 결과가 일회성 정보로 끝나지 않도록 목표 설정과 진행 상황 확인으로 이어지게 했습니다.', path: 'goals.png' },
]

const timeline = [
  ['DISCOVER', '요구사항 분석 · 사용자 문제와 핵심 가치 정의'],
  ['DESIGN', '사용자 흐름 · 화면 구조 · Figma 설계'],
  ['FOUNDATION', '공통 컴포넌트 · 타입 · 디자인 토큰 구축'],
  ['DEVELOP', '핵심 화면 구현 · 백엔드 API 연동'],
  ['VALIDATE', 'Android 실제 기기 QA · 예외 상태 보완'],
  ['DELIVER', 'Preview APK 제작 · 내부 시연 검증'],
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
                <p className="dodam-summary">흩어진 금융 데이터를 이해 가능한 기준으로 정리하고,<br />사용자가 다음 금융 행동을 선택할 수 있도록 돕는 금융 코칭 서비스</p>
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
            <p><b>01</b> 금융 정보를 이해에서 행동으로 연결합니다.</p>
          </div>
        </div>
      </section>

      <nav className="dodam-section-nav" aria-label="도담 상세 페이지 목차">
        <button type="button" onClick={() => scrollToSection('dodam-overview')}>Overview</button>
        <button type="button" onClick={() => scrollToSection('dodam-planning')}>Planning</button>
        <button type="button" onClick={() => scrollToSection('dodam-role')}>Contribution</button>
        <button type="button" onClick={() => scrollToSection('dodam-features')}>Features</button>
        <button type="button" onClick={() => scrollToSection('dodam-troubleshooting')}>Troubleshooting</button>
        <button type="button" onClick={() => scrollToSection('dodam-retrospective')}>Reflection</button>
      </nav>

      <div className="dodam-content">
        <section className="dodam-section dodam-overview" id="dodam-overview">
          <div className="dodam-section-heading"><p>01 · PROJECT BACKGROUND</p><h2>내 금융 상황을 이해할<br />기준이 필요했습니다.</h2></div>
          <div className="dodam-prose">
            <p>금융상품을 비교할 때 금리와 혜택은 확인할 수 있었지만, 어떤 선택이 내 상황에 더 나은지는 판단하기 어려웠습니다. 기존 금융 앱에서도 잔액과 소비 내역은 쉽게 볼 수 있었지만, 현재 상태를 해석하고 다음 행동을 정하는 일은 여전히 사용자의 몫이었습니다.</p>
            <p>처음에는 이를 금융 경험이 적은 청년의 어려움으로 보았습니다. 그러나 기획을 구체화하면서 같은 정보라도 소득, 부채, 소비 패턴에 따라 필요한 판단이 달라진다는 점에 주목했습니다. 문제의 핵심은 연령이 아니라 각자의 상황을 이해할 기준이 부족하다는 데 있었습니다.</p>
            <p>도담은 소비·저축·대출 데이터를 하나의 흐름으로 연결하고, 개선이 필요한 지점과 그 이유, 우선순위를 함께 설명합니다. 더 많은 정보를 보여주는 대신 사용자가 자신의 상태를 이해하고 스스로 다음 행동을 선택하도록 돕는 것을 목표로 했습니다.</p>
            <blockquote className="dodam-key-question"><span>KEY QUESTION</span><p>사용자가 자신의 금융 상황을 이해하고,<br /><strong>스스로 다음 행동을 선택하게 하려면 무엇이 필요할까?</strong></p></blockquote>
          </div>
        </section>

        <section className="dodam-section" id="dodam-planning">
          <div className="dodam-section-heading"><p>02 · PROBLEM & DIRECTION</p><h2>숫자를 확인하는 것에서<br />다음 행동을 선택하는 것까지</h2></div>
          <div className="dodam-prose">
            <h3>데이터 사이에 비어 있던 ‘해석’을 연결했습니다.</h3>
            <p>사용자는 여러 화면의 정보를 직접 조합해 자신의 상태가 적절한지 판단해야 했습니다. 문제를 발견한 뒤에도 무엇을 먼저 바꿔야 하는지, 바꾸면 어떤 효과가 있는지는 알기 어려웠습니다.</p>
            <p>도담은 <strong>현재 상태 → 문제의 원인 → 개선 우선순위 → 실천 목표</strong>가 하나의 흐름으로 이어지도록 설계했습니다. 각 제안에는 진단 근거와 예상 효과를 함께 보여주어 사용자가 내용을 이해하고 직접 선택할 수 있도록 했습니다.</p>
            <div className="dodam-journey">{journey.map(([number, title, description]) => <article key={number}><i>{number}</i><strong>{title}</strong><p>{description}</p></article>)}</div>
            <aside className="dodam-planning-note"><b>기획 원칙</b><p>진단 결과를 정답처럼 제시하지 않았습니다. 확인 가능한 데이터와 비교 근거를 함께 보여주고, 데이터가 부족한 경우에는 임의의 결과 대신 분석할 수 없는 이유를 안내했습니다.</p></aside>
          </div>
        </section>

        <section className="dodam-section" id="dodam-role">
          <div className="dodam-section-heading"><p>03 · MY CONTRIBUTION</p><h2>설계된 화면을 실제<br />서비스 흐름으로 완성했습니다.</h2></div>
          <p className="dodam-section-intro">React Native와 Expo를 사용해 홈·가계부·자산·목표 화면을 개발하고, 발견·리포트 화면의 UI와 API 연동을 보완했습니다. 구현 과정에서 기획과 API 응답이 맞지 않는 부분을 정리하고, 로딩부터 오류까지 실제 서비스에 필요한 상태와 동작을 팀원들과 함께 구체화했습니다.</p>
          <div className="dodam-role-grid">
            <article><span>SCREEN IMPLEMENTATION</span><h3>핵심 화면과 공통 UI</h3><p>React Native와 Expo로 홈·가계부·자산·목표 화면을 개발하고, 반복되는 다이얼로그와 바텀시트를 공통 UI로 정리했습니다.</p></article>
            <article><span>INTERACTION</span><h3>가계부 탐색 흐름 개선</h3><p>달력에서 날짜를 선택하면 관련 거래가 바로 보이도록 고정 영역과 스크롤 위치를 계산해 화면 이동을 구현했습니다.</p></article>
            <article><span>API INTEGRATION</span><h3>데이터 상태와 예외 처리</h3><p>API 응답 타입을 정의하고 로딩·빈 데이터·분석 전·실제 오류를 구분해 각 상황에 맞는 화면과 안내를 연결했습니다.</p></article>
            <article><span>MOBILE QA</span><h3>실제 기기 검증과 빌드</h3><p>EAS Preview APK를 제작해 Android 기기에서 텍스트 잘림과 레이아웃을 검증하고 시연 가능한 빌드로 마무리했습니다.</p></article>
          </div>
          <div className="dodam-stack"><strong>STACK</strong><span>React Native</span><span>Expo</span><span>TypeScript</span><span>Expo Router</span><span>react-native-svg</span><span>EAS Build</span></div>
        </section>

        <section className="dodam-section" id="dodam-features">
          <div className="dodam-section-heading"><p>04 · KEY FEATURES</p><h2>사용자가 이해하고<br />행동할 수 있는 화면을 만들었습니다.</h2></div>
          <p className="dodam-section-intro">각 화면은 정보를 많이 담기보다 사용자가 지금 확인해야 할 내용과 다음 행동이 먼저 보이도록 구성했습니다. 핵심 기능마다 문제 상황, 정보의 우선순위, 화면을 본 이후의 행동을 함께 고려했습니다.</p>
          <div className="dodam-feature-list">
            {features.map((feature) => <article key={feature.number}><div className="dodam-screen-placeholder has-image"><img src={`/images/projects/dodam/screens/${feature.path}`} alt={`${feature.title} 화면`} /></div><div><span>{feature.number}</span><h3>{feature.title}</h3><p>{feature.description}</p><p className="dodam-feature-decision"><b>UX Decision</b>{feature.decision}</p></div></article>)}
          </div>
        </section>

        <section className="dodam-section dodam-work-section">
          <div className="dodam-section-heading"><p>05 · PROCESS & COLLABORATION</p><h2>설계와 구현 사이를<br />반복해서 검증했습니다.</h2></div>
          <div className="dodam-prose"><p>Figma 화면을 한 번에 구현하는 방식보다 API를 연결하고 실제 기기에서 확인하는 과정을 반복했습니다. 데이터가 없는 경우처럼 API 연결 후에 드러나는 상태는 백엔드와 동작을 다시 협의했고, Android에서 발생한 텍스트 잘림과 레이아웃 차이는 Preview APK로 확인하며 보완했습니다.</p></div>
          <div className="dodam-timeline">{timeline.map(([title, detail], index) => <article key={title}><i>{String(index + 1).padStart(2, '0')}</i><strong>{title}</strong><p>{detail}</p></article>)}</div>
          <ul className="dodam-qa-list"><li>기획·백엔드와 API 응답 및 예외 상태 협의</li><li>Figma와 실제 APK 화면 비교</li><li>Android 기기별 화면 폭과 시스템 글자 크기 확인</li><li>QA 재현 조건과 수정 결과 문서화</li></ul>
        </section>

        <section className="dodam-section" id="dodam-troubleshooting">
          <div className="dodam-section-heading"><p>06 · TROUBLESHOOTING</p><h2>예상하지 못한 상황에서도<br />사용 흐름을 유지했습니다.</h2></div>
          <p className="dodam-section-intro">정상적인 데이터가 있을 때뿐 아니라 분석 전, 빈 데이터, 서버 오류와 같은 상황에서도 사용자가 현재 상태를 이해할 수 있어야 했습니다. 실제 기기와 API를 연결하는 과정에서 발견한 문제를 다음과 같이 해결했습니다.</p>
          <div className="dodam-troubleshooting">
            <details open><summary><span>01</span><strong>가계부 날짜 선택과 거래 내역의 위치가 어긋나는 문제</strong><i>+</i></summary><div><p><b>Problem</b>날짜를 선택해도 고정 달력에 거래가 가려지거나 정확한 위치로 이동하지 않았습니다.</p><p><b>Decision</b>날짜별 레이아웃 위치와 고정 영역 높이를 함께 계산하도록 스크롤 흐름을 다시 설계했습니다.</p><p><b>Result</b>날짜 선택 시 달력이 접히고 관련 거래가 자연스럽게 상단에 나타나도록 개선했습니다.</p></div></details>
            <details><summary><span>02</span><strong>분석 전 상태와 실제 API 오류가 동일하게 보이는 문제</strong><i>+</i></summary><div><p><b>Problem</b>아직 분석되지 않은 데이터의 404와 실제 서버 오류가 같은 실패 화면으로 처리될 수 있었습니다.</p><p><b>Decision</b>실행 전·계산 중·빈 데이터·오류 상태를 분리하고 각각 다른 안내와 행동을 제공했습니다.</p><p><b>Result</b>사용자가 현재 상태와 다음에 해야 할 행동을 구분할 수 있게 되었습니다.</p></div></details>
            <details><summary><span>03</span><strong>실제 Android 기기에서 텍스트가 잘리는 문제</strong><i>+</i></summary><div><p><b>Problem</b>개발 화면과 달리 좁은 기기와 시스템 글자 크기에서 출금명과 금액이 잘렸습니다.</p><p><b>Decision</b>flex, minWidth, flexShrink와 글자 크기 조정 방식을 검토하고 정보 우선순위에 맞춰 레이아웃을 보완했습니다.</p><p><b>Result</b>작은 화면에서도 핵심 금액과 거래 정보가 유지되도록 개선했습니다.</p></div></details>
          </div>
        </section>

        <section className="dodam-section dodam-retrospective" id="dodam-retrospective">
          <p>07 · REFLECTION</p><h2>정보를 보여주는 화면에서<br /><strong>선택을 돕는 경험으로.</strong></h2><p>도담을 만들며 좋은 금융 서비스는 많은 정보를 제공하는 서비스가 아니라, 사용자가 자신의 상태를 이해하고 다음 행동을 선택할 기준을 제공하는 서비스라고 생각하게 되었습니다. 또한 프론트엔드는 받은 데이터를 표시하는 데 그치지 않고, 복잡한 정보를 사용자의 언어로 정리해 서비스의 의도를 실제 경험으로 완성하는 역할이라는 점을 배웠습니다.</p>
          <div><a href="#projects">← 프로젝트 목록으로</a><button type="button" disabled>다음 프로젝트 · 준비 중 →</button></div>
        </section>
      </div>
    </article>
  )
}

export default DodamPage
