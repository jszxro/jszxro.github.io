import './SangchuPage.css'

const journey = [
  ['01', 'EXPLORE', '부산 전체 상권 지표를 살펴봅니다.'],
  ['02', 'COMPARE', '구별 유동 인구와 시설·임대료를 비교합니다.'],
  ['03', 'DISCOVER', '관심 지역의 상가 매물을 탐색합니다.'],
  ['04', 'REVIEW', '매물 정보와 유사한 조건의 매물을 확인합니다.'],
  ['05', 'PREDICT', '상가 조건을 입력해 예상 월세를 확인합니다.'],
]

const contributions = [
  ['DATA ANALYSIS', '부산 상권 데이터 가공', '구별 집객시설 데이터를 조회하고 지역명과 수치를 같은 순서의 배열로 가공해 비교 가능한 형태로 만들었습니다.'],
  ['VISUALIZATION API', '차트 중심 응답 구조 설계', '원본 DB 행을 그대로 전달하지 않고 차트의 카테고리와 시리즈에 맞춘 JSON 응답을 구성해 화면과 데이터를 연결했습니다.'],
  ['ML PROTOTYPE', '월세 예측 흐름 구체화', '상가의 보증금·유형·면적·층수 정보를 입력값으로 받는 월세 예측 기능을 만들고 학습된 모델을 Django에서 호출했습니다.'],
  ['WEB INTEGRATION', '예측 API와 화면 연동', 'CSRF 토큰을 포함한 JSON 요청, 입력값 변환, 예측 결과 응답과 오류 상태를 연결해 웹에서 바로 결과를 확인하도록 구현했습니다.'],
]

const features = [
  {
    number: '01',
    label: 'BUSAN OVERVIEW',
    title: '부산의 상권 지표를 지역 단위로 비교합니다.',
    description: '임대료 추세, 집객시설, 인구와 점포 밀도처럼 서로 다른 지표를 구별 차트로 구성해 관심 지역의 상권 맥락을 먼저 살펴볼 수 있게 했습니다.',
  },
  {
    number: '02',
    label: 'DISTRICT INSIGHT',
    title: '선택한 지역의 생활·상업 데이터를 함께 읽습니다.',
    description: '업종별 점포 수와 유동 인구, 지하철 승하차 인원, 학교·병원·약국 같은 주변 시설을 한 지역의 정보로 묶어 입지 판단에 필요한 기준을 넓혔습니다.',
  },
  {
    number: '03',
    label: 'LISTING DISCOVERY',
    title: '분석에서 실제 매물 탐색으로 이어집니다.',
    description: '관심 구의 상가 매물을 지도와 목록으로 확인하고, 상세 화면에서는 조건이 비슷한 매물을 함께 보여줘 개별 매물을 비교할 수 있도록 구성했습니다.',
  },
  {
    number: '04',
    label: 'RENT PREDICTION',
    title: '상가 조건을 예상 월세라는 판단 기준으로 바꿉니다.',
    description: '보증금, 상가 유형, 계약·전용 면적, 해당 층과 총층을 입력하면 학습된 회귀 모델을 통해 예상 월세를 반환하도록 Django 화면과 API를 연결했습니다.',
  },
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function SangchuPage() {
  return (
    <article className="sangchu-page">
      <section className="sangchu-hero">
        <div className="sangchu-container">
          <a className="sangchu-back" href="#projects">← Projects</a>
          <div className="sangchu-hero-grid">
            <div className="sangchu-title-block">
              <p className="sangchu-kicker">COMMERCIAL DATA · ML INTEGRATION</p>
              <h1>Sangchu<span>상추</span></h1>
              <p className="sangchu-summary">부산의 상권 데이터를 지역별로 비교하고, 상가 조건에 따른 예상 월세까지 확인할 수 있도록 분석과 매물 탐색을 연결한 서비스</p>
            </div>
            <div className="sangchu-properties">
              <dl>
                <div><dt>PERIOD</dt><dd>2023.11.09 — 2023.12.29</dd></div>
                <div><dt>ROLE</dt><dd>Data Analysis · ML Integration · Django</dd></div>
                <div><dt>TEAM</dt><dd>6인 팀 프로젝트</dd></div>
                <div><dt>STACK</dt><dd>Python · Django · Pandas · scikit-learn · JavaScript · Highcharts</dd></div>
              </dl>
              <div className="sangchu-links">
                <a href="https://github.com/offensivesoup/Sangchu_Final_PJT" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>

          <figure className="sangchu-cover">
            <div className="sangchu-cover-bar"><span><i /><i /><i /></span><small>sangchu · commercial insight</small><b>BUSAN</b></div>
            <img src="/images/projects/sangchu/sangchu-cover.png" alt="상추 부산 상권 분석 및 매물 추천 서비스 대표 화면" />
            <figcaption><b>PROJECT OVERVIEW</b><span>지역 데이터를 읽는 단계에서 끝내지 않고 매물 탐색과 월세 예측까지 이어, 사용자가 상가 조건을 비교할 수 있는 흐름을 만들었습니다.</span></figcaption>
          </figure>
        </div>
      </section>

      <nav className="sangchu-section-nav" aria-label="상추 상세 페이지 목차">
        <button type="button" onClick={() => scrollToSection('sangchu-situation')}>Situation</button>
        <button type="button" onClick={() => scrollToSection('sangchu-task')}>Task</button>
        <button type="button" onClick={() => scrollToSection('sangchu-contribution')}>Contribution</button>
        <button type="button" onClick={() => scrollToSection('sangchu-features')}>Features</button>
        <button type="button" onClick={() => scrollToSection('sangchu-troubleshooting')}>Troubleshooting</button>
        <button type="button" onClick={() => scrollToSection('sangchu-result')}>Result</button>
      </nav>

      <div className="sangchu-container">
        <section className="sangchu-section" id="sangchu-situation">
          <header className="sangchu-heading"><p>01 · SITUATION</p><h2>상가를 고르는 데 필요한 정보는 많았지만, 하나의 판단 흐름으로 이어지지 않았습니다.</h2></header>
          <div className="sangchu-prose">
            <p>상권을 살펴볼 때는 임대료뿐 아니라 유동 인구, 주변 시설, 업종 분포와 같은 지역 정보가 함께 필요합니다. 하지만 각각의 수치가 흩어져 있으면 관심 지역의 특성을 비교하기 어렵고, 매물 가격이 조건에 비해 적절한지도 판단하기 어렵습니다.</p>
            <p>상추는 이 문제를 단순한 매물 검색이 아니라 <strong>지역의 맥락을 먼저 이해하고, 실제 매물을 비교한 뒤, 예상 월세로 조건을 검토하는 과정</strong>으로 정의했습니다. 데이터 분석 결과가 보고서에 머물지 않고 사용자의 다음 탐색으로 이어지도록 만드는 것이 목표였습니다.</p>
            <aside className="sangchu-question"><span>KEY QUESTION</span><p>흩어진 상권 데이터를 어떻게 연결해야 사용자가 <strong>지역과 매물의 조건을 같은 흐름에서 비교할 수 있을까?</strong></p></aside>
          </div>
        </section>

        <section className="sangchu-section" id="sangchu-task">
          <header className="sangchu-heading"><p>02 · TASK</p><h2>상권 분석에서 매물 검토까지 이어지는 사용자 흐름을 만들었습니다.</h2></header>
          <div className="sangchu-prose">
            <p>지표를 많이 보여주는 것보다 사용자가 정보를 확인하는 순서를 먼저 정했습니다. 부산 전체에서 관심 지역을 찾고, 구별 데이터를 비교한 뒤, 실제 매물과 비슷한 매물을 확인하고, 마지막으로 입력한 조건의 예상 월세를 살펴보도록 탐색 단계를 연결했습니다.</p>
            <div className="sangchu-journey">
              {journey.map(([number, title, description]) => <article key={number}><i>{number}</i><strong>{title}</strong><p>{description}</p></article>)}
            </div>
            <aside className="sangchu-principle"><b>PRODUCT PRINCIPLE</b><p>상권 데이터를 나열하는 데 그치지 않습니다. 지역의 특징을 이해한 사용자가 실제 매물을 탐색하고 조건을 검토하는 다음 행동까지 이어지게 합니다.</p></aside>
          </div>
        </section>

        <section className="sangchu-section" id="sangchu-contribution">
          <header className="sangchu-heading"><p>03 · ACTION / MY CONTRIBUTION</p><h2>분석 데이터를 화면의 언어로 바꾸고, 월세 예측 모델을 서비스 흐름에 연결했습니다.</h2></header>
          <p className="sangchu-intro">상권 분석 결과가 실제 화면에서 비교 가능한 정보가 되도록 데이터 응답 구조를 설계했습니다. 또한 별도의 실험 코드에 머물던 월세 예측 기능을 사용자가 이해할 수 있는 입력 항목과 Django API로 옮겨 웹에서 바로 결과를 확인하도록 구현했습니다.</p>
          <div className="sangchu-role-board">
            <article><span>01 · DATA</span><strong>상권 데이터 구조화</strong><p>지역명과 지표 값을 차트가 바로 사용할 수 있는 동일한 순서의 데이터로 가공했습니다.</p></article>
            <article><span>02 · MODEL</span><strong>월세 예측 프로토타입</strong><p>상가 계약 조건을 입력값으로 구성하고 학습된 회귀 모델의 예측 결과를 검증했습니다.</p></article>
            <article><span>03 · INTEGRATION</span><strong>Django 서비스 연동</strong><p>화면의 입력을 JSON API로 전달하고 모델의 결과와 오류를 다시 화면에 연결했습니다.</p></article>
          </div>
          <div className="sangchu-contribution-list">
            {contributions.map(([label, title, description]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="sangchu-stack">
            <b>MY STACK</b><p>Python · Django · Pandas · NumPy · scikit-learn · JavaScript</p>
            <b>SERVICE STACK</b><p>Django · Highcharts · Kakao Map API · Bootstrap · jQuery</p>
          </div>
        </section>

        <section className="sangchu-section" id="sangchu-features">
          <header className="sangchu-heading"><p>04 · FEATURES</p><h2>지역의 특성을 읽고 매물의 조건을 확인하는 과정을 단계적으로 구성했습니다.</h2></header>
          <div className="sangchu-feature-list">
            {features.map((feature, index) => (
              <article key={feature.number} className={index % 2 ? 'is-reverse' : ''}>
                <div className="sangchu-feature-visual" aria-hidden="true">
                  {index === 0 && <div className="district-chart"><div className="chart-head"><span>집객시설 수</span><b>BUSAN · 16 DISTRICTS</b></div><div className="district-bars">{[54, 78, 43, 66, 88, 61, 73, 49].map((height, itemIndex) => <i key={itemIndex} style={{ height: `${height}%` }} />)}</div><div className="chart-axis"><span>강서</span><span>부산진</span><span>동래</span><span>해운대</span></div></div>}
                  {index === 1 && <div className="district-panel"><small>DISTRICT INSIGHT</small><strong>해운대구</strong><div><span>유동 인구</span><b>지역 비교</b></div><div><span>주변 시설</span><b>분포 확인</b></div><div><span>임대료 추세</span><b>연도별 변화</b></div></div>}
                  {index === 2 && <div className="listing-board"><div className="listing-map"><i /><i /><i /></div><div className="listing-cards"><p><b>상가 매물 A</b><span>조건과 위치 확인</span></p><p><b>유사 매물 B</b><span>비슷한 조건 비교</span></p></div></div>}
                  {index === 3 && <div className="prediction-card"><small>MONTHLY RENT PREDICTION</small><div className="prediction-inputs"><span>보증금</span><span>상가 유형</span><span>계약 면적</span><span>층수</span></div><p>예상 월세 <strong>모델 예측 결과</strong></p></div>}
                </div>
                <div className="sangchu-feature-copy"><span>{feature.number} · {feature.label}</span><h3>{feature.title}</h3><p>{feature.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="sangchu-section" id="sangchu-troubleshooting">
          <header className="sangchu-heading"><p>05 · ACTION / TROUBLESHOOTING</p><h2>데이터가 보이는 형태와 모델이 쓰이는 흐름 사이의 간극을 해결했습니다.</h2></header>
          <p className="sangchu-intro">단순한 구현 목록보다 판단이 필요했던 두 문제를 골랐습니다. 화면에서 필요한 비교 단위를 기준으로 응답 구조를 다시 만들고, 모델의 입력과 웹 요청 사이에 필요한 변환과 보안 흐름을 구체화했습니다.</p>
          <div className="sangchu-cases">
            <details open>
              <summary><span>01</span><strong>한 지역만 반환하던 집객시설 데이터를 부산 전체 비교 차트로 확장했습니다.</strong><i>+</i></summary>
              <div className="sangchu-case-body">
                <p className="sangchu-case-lead">초기 API는 강서구 데이터만 골라 반환해, 지역별 차이를 보여줘야 하는 상권 분석 화면에서 비교 기준을 만들 수 없었습니다.</p>
                <div className="sangchu-case-pair">
                  <section><span>SITUATION</span><h4>DB에는 여러 구의 데이터가 있었지만 응답은 한 지역으로 제한됐습니다.</h4><p>조회 결과에서 강서구만 필터링했고 지역과 시설 수가 일반 객체에 담겨 있었습니다. 이 구조로는 차트의 x축과 값의 순서를 안정적으로 맞추기 어려웠습니다.</p></section>
                  <section><span>TASK</span><h4>모든 지역을 같은 기준으로 비교하면서 차트가 바로 소비할 수 있어야 했습니다.</h4><p>단순히 필터 조건을 지우는 것만으로는 부족했습니다. 지역 카테고리와 수치가 항상 같은 순서를 유지하고, Highcharts의 시리즈 구조와도 일치하도록 응답 계약을 정해야 했습니다.</p></section>
                </div>
                <section className="sangchu-case-analysis"><span>ACTION &amp; DECISION</span><h4>화면이 필요로 하는 카테고리와 시리즈를 기준으로 JSON을 다시 설계했습니다.</h4><p>전체 조회 결과에서 구 이름과 집객시설 수를 각각 순서가 보장된 배열로 만들고, 수치는 숫자형으로 변환했습니다. 지역 배열은 x축 카테고리로, 값 배열은 <code>name</code>과 <code>data</code>를 가진 시리즈로 반환해 별도의 재가공 없이 차트에 연결했습니다.</p></section>
                <div className="sangchu-case-result"><section><span>RESULT</span><p>부산의 여러 지역을 하나의 차트에서 같은 기준으로 비교할 수 있었고, 화면 코드도 응답 구조를 그대로 사용하도록 단순해졌습니다.</p></section><section><span>LEARNING</span><p>API는 DB의 행을 노출하는 형태보다 실제 소비자인 화면의 비교 단위와 시각화 구조를 기준으로 설계해야 한다는 점을 배웠습니다.</p></section></div>
              </div>
            </details>

            <details>
              <summary><span>02</span><strong>월세 예측 실험을 사용자가 직접 입력하고 확인하는 서비스 기능으로 연결했습니다.</strong><i>+</i></summary>
              <div className="sangchu-case-body">
                <p className="sangchu-case-lead">초기 모델 호출은 독립된 테스트 화면에 머물러 있어, 실제 사용자가 어떤 조건을 입력하고 결과를 어떻게 확인할지 드러나지 않았습니다.</p>
                <div className="sangchu-case-pair">
                  <section><span>SITUATION</span><h4>모델은 동작했지만 서비스의 입력 의미와 요청 방식이 정리되지 않았습니다.</h4><p>사용자에게는 추상적인 특성값보다 보증금, 상가 유형, 계약·전용 면적, 층수처럼 매물에서 확인할 수 있는 항목이 필요했습니다. 예측 요청도 Django의 CSRF 보호 안에서 안전하게 전달해야 했습니다.</p></section>
                  <section><span>TASK</span><h4>모델 입력을 사용자 언어로 바꾸고 화면과 서버의 계약을 맞춰야 했습니다.</h4><p>여섯 입력값의 이름과 순서를 모델 학습 기준에 맞추되, 화면에서는 의미가 드러나도록 구성했습니다. 서버에서는 문자열 입력을 숫자로 변환하고 실패 상태도 JSON으로 돌려줘야 했습니다.</p></section>
                </div>
                <section className="sangchu-case-analysis"><span>ACTION &amp; DECISION</span><h4>명시적인 입력 스키마와 JSON 기반 예측 API를 만들었습니다.</h4><p>화면에서 여섯 조건을 수집해 CSRF 토큰과 함께 <code>POST</code> 요청으로 전달했습니다. Django에서는 JSON을 파싱하고 입력 순서를 고정한 뒤 실수형으로 변환해 저장된 예측 모델을 호출했으며, 예측 결과와 예외를 각각 JSON 응답으로 반환했습니다.</p></section>
                <div className="sangchu-case-result"><section><span>RESULT</span><p>사용자는 별도의 분석 도구 없이 웹에서 상가 조건을 입력하고 같은 화면에서 예상 월세를 확인할 수 있게 됐습니다.</p></section><section><span>LEARNING</span><p>모델 자체의 구현만큼 입력값의 의미와 순서, 요청 검증, 결과 표현을 일관된 계약으로 만드는 과정이 서비스화의 핵심임을 경험했습니다.</p></section></div>
              </div>
            </details>
          </div>
        </section>

        <section className="sangchu-section sangchu-result" id="sangchu-result">
          <p>06 · RESULT &amp; REFLECTION</p>
          <h2>상권 분석 결과를, <strong>매물 조건을 판단하는 서비스 흐름</strong>으로 연결했습니다.</h2>
          <div className="sangchu-result-grid">
            <article><span>01</span><strong>지역 비교가 가능한 데이터 구조</strong><p>지역명과 수치를 차트 중심의 응답으로 구성해 부산 상권 지표를 동일한 기준에서 비교할 수 있게 했습니다.</p></article>
            <article><span>02</span><strong>모델에서 서비스까지의 연결</strong><p>월세 예측 모델의 입력 기준을 화면과 API에 반영해 사용자가 직접 조건을 입력하고 결과를 확인하도록 구현했습니다.</p></article>
            <article><span>03</span><strong>데이터를 행동으로 바꾸는 경험</strong><p>분석, 지역 탐색, 매물 비교, 월세 예측을 하나의 흐름으로 묶어 데이터가 다음 선택으로 이어지도록 했습니다.</p></article>
          </div>
          <p className="sangchu-reflection">상추에서는 데이터를 분석하는 것과 사용자가 그 결과를 이해하는 것 사이에 별도의 설계가 필요하다는 점을 배웠습니다. 특히 원본 데이터나 모델 출력을 그대로 보여주기보다 화면이 필요로 하는 구조와 사용자가 이해할 수 있는 입력으로 바꿔야 비로소 서비스의 기능이 된다는 것을 경험했습니다. 이후에도 기술을 먼저 드러내기보다 사용자가 어떤 판단을 내려야 하는지에서 출발해 데이터와 화면의 연결 방식을 설계하겠습니다.</p>
          <div className="sangchu-actions"><a href="#projects">프로젝트 목록으로</a><a href="#/projects/anbam">← 안밤 프로젝트 보기</a></div>
        </section>
      </div>
    </article>
  )
}

export default SangchuPage
