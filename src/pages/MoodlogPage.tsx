import './MoodlogPage.css'

const journey = [
  ['01', 'FEEL', '오늘의 감정을 선택합니다.'],
  ['02', 'DISCOVER', '감정에 어울리는 음악을 발견합니다.'],
  ['03', 'RECORD', '음악과 함께 하루를 기록합니다.'],
  ['04', 'SHARE', 'Moments에서 감정과 생각을 나눕니다.'],
  ['05', 'REFLECT', '아카이브에서 감정의 흐름을 돌아봅니다.'],
]

const contributions = [
  ['PRODUCT MANAGEMENT', '서비스 흐름과 기능 범위 구체화', 'PM으로서 감정 선택이 음악 추천에서 끝나지 않고 일기·Moments·아카이브로 이어지도록 사용자 흐름과 기능의 우선순위를 정리했습니다.'],
  ['BACKEND', '감정·일기·오늘의 문장 API', 'Spring Boot와 JPA를 기반으로 감정 이모지, 일기, 오늘의 문장 도메인과 조회·저장 API를 구현했습니다.'],
  ['DATA CONNECTION', '감정 식별자를 중심으로 기능 연결', '홈·일기·Moments가 같은 감정 값을 사용하도록 API 응답과 화면 상태를 연결하고, 선택·저장·필터의 기준을 통일했습니다.'],
  ['FULL-STACK', 'Moments 상세 흐름과 화면 피드백', '게시글 상세·수정·삭제를 백엔드와 화면에 연결하고, 수정 결과와 인증 상태가 사용자에게 바로 드러나도록 보완했습니다.'],
]

const decisions = [
  ['01', '감정을 추천 옵션이 아니라 서비스의 핵심 도메인으로 정의했습니다.', '음악 추천, 일기, Moments가 각자 감정 문자열을 가지면 기능이 늘어날수록 기준이 달라진다고 판단했습니다. Emoji 엔티티와 식별자를 중심에 두고 Diary와의 관계를 정의해 선택·저장·탐색이 같은 의미를 공유하도록 했습니다.', 'Domain model · Emoji ID · JPA relation'],
  ['02', '일기를 단순 텍스트가 아니라 사용자의 감정 이력으로 설계했습니다.', '기록을 다시 탐색하려면 내용뿐 아니라 사용자, 감정, 작성일, 수정일의 관계가 필요했습니다. 사용자별 조회와 오늘의 감정 조회를 분리하고 생성·수정 시점을 엔티티 생명주기에서 유지하도록 구성했습니다.', 'Diary CRUD · User history · Entity lifecycle'],
  ['03', '화면 연결은 백엔드 모델이 실제 흐름에서 작동하는지 확인하는 과정으로 삼았습니다.', 'API 구현에서 끝내지 않고 홈에서 고른 감정이 일기 저장과 Moments 필터까지 이어지는지 직접 연결했습니다. 이 과정에서 화면마다 섞여 있던 tag와 emojiId를 발견하고 공통 식별자로 정리했습니다.', 'API integration · Route state · Validation'],
]

const features = [
  {
    number: '01',
    label: 'EMOTION DISCOVERY',
    title: '오늘의 감정에서 음악 발견을 시작합니다.',
    description: '텍스트 검색보다 먼저 지금의 감정을 고르게 했습니다. 감정 선택이 음악 추천과 일기 작성의 공통 출발점이 되어 이후 화면에서도 같은 맥락이 이어집니다.',
    image: '/images/projects/moodlog/screens/home.png',
    alt: 'Moodlog 홈에서 오늘의 감정을 선택하고 음악을 추천받는 화면',
  },
  {
    number: '02',
    label: 'EMOTION DIARY',
    title: '고른 감정과 음악을 하루의 기록으로 남깁니다.',
    description: '홈에서 선택한 감정과 날짜를 일기 작성 화면에 미리 연결했습니다. 추천에서 기록으로 넘어가는 순간에 같은 정보를 다시 입력하지 않도록 사용자의 선택을 보존했습니다.',
    image: '/images/projects/moodlog/screens/diary.png',
    alt: 'Moodlog 감정 일기 작성 화면',
  },
  {
    number: '03',
    label: 'MOMENTS',
    title: '비슷한 감정을 가진 사람의 기록을 탐색합니다.',
    description: '감정 태그를 기준으로 게시글을 찾고 상세 내용을 확인할 수 있게 했습니다. 카드 전체를 클릭할 수 있도록 범위를 넓히되 태그 클릭은 별도 동작으로 분리했습니다.',
    image: '/images/projects/moodlog/screens/moments.png',
    alt: 'Moodlog Moments 감정 커뮤니티 화면',
  },
  {
    number: '04',
    label: 'ARCHIVE',
    title: '쌓인 기록을 통해 나의 감정 흐름을 돌아봅니다.',
    description: '하루의 선택이 일회성 추천으로 끝나지 않도록 기록을 달력과 통계로 다시 확인하는 구조를 설계했습니다. 발견과 기록, 공유가 회고로 이어지는 서비스의 마지막 단계입니다.',
    image: '/images/projects/moodlog/screens/archive.png',
    alt: 'Moodlog 감정 기록 아카이브 화면',
  },
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function MoodlogPage() {
  return (
    <article className="moodlog-page">
      <section className="moodlog-hero">
        <div className="moodlog-container">
          <a className="moodlog-back" href="#projects">← Projects</a>
          <div className="moodlog-hero-grid">
            <div>
              <p className="moodlog-kicker">EMOTION ARCHIVE · PM &amp; BACKEND</p>
              <h1>Moodlog<span>무드로그</span></h1>
              <p className="moodlog-summary">오늘의 감정을 음악으로 발견하고, 일기와 커뮤니티로 이어 기록하는 감정 아카이빙 서비스</p>
            </div>
            <div className="moodlog-properties">
              <dl>
                <div><dt>PERIOD</dt><dd>2025.07.01 — 2025.07.29</dd></div>
                <div><dt>ROLE</dt><dd>PM · Backend · Full-stack</dd></div>
                <div><dt>TEAM</dt><dd>5인 팀 프로젝트</dd></div>
                <div><dt>STACK</dt><dd>Spring Boot · Spring Security · JPA · Oracle · React · JavaScript</dd></div>
              </dl>
              <div className="moodlog-links">
                <a href="https://github.com/jszxro/PK_project_4" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>
          <figure className="moodlog-cover">
            <div className="moodlog-cover-window">
              <div className="moodlog-browser-bar"><span><i /><i /><i /></span><small>moodlog · emotion archive</small><b>2025</b></div>
              <img src="/images/projects/moodlog/moodlog-cover.png" alt="Moodlog 프로젝트 대표 화면" />
            </div>
            <figcaption><b>01</b><span>감정을 선택하는 짧은 행동을 음악 발견과 기록, 공유, 회고의 흐름으로 확장했습니다.</span></figcaption>
          </figure>
        </div>
      </section>

      <nav className="moodlog-section-nav" aria-label="Moodlog 상세 페이지 목차">
        <button type="button" onClick={() => scrollToSection('moodlog-situation')}>Situation</button>
        <button type="button" onClick={() => scrollToSection('moodlog-task')}>Task</button>
        <button type="button" onClick={() => scrollToSection('moodlog-contribution')}>Contribution</button>
        <button type="button" onClick={() => scrollToSection('moodlog-features')}>Features</button>
        <button type="button" onClick={() => scrollToSection('moodlog-troubleshooting')}>Troubleshooting</button>
        <button type="button" onClick={() => scrollToSection('moodlog-result')}>Result</button>
      </nav>

      <div className="moodlog-container">
        <section className="moodlog-section" id="moodlog-situation">
          <header className="moodlog-heading"><p>01 · SITUATION</p><h2>감정은 쉽게 지나가지만, 그 순간의 음악과 기록은 서로 흩어져 있었습니다.</h2></header>
          <div className="moodlog-prose">
            <p>기분에 맞는 음악을 찾으려면 매번 비슷한 검색어를 입력해야 했고, 음악을 들으며 느낀 감정은 별도의 일기 서비스에 기록해야 했습니다. 음악을 발견한 순간과 하루를 기록하는 순간이 분리되어 있어, 감정은 추천을 받은 뒤 곧 사라지는 정보에 머물렀습니다.</p>
            <p>이 문제를 단순히 음악 추천의 정확도로 보지 않았습니다. <strong>사용자가 지금의 감정을 인식하고, 그 감정을 음악과 글로 남긴 뒤 다시 돌아볼 수 있는 연결된 경험이 부족한 문제</strong>라고 정의했습니다.</p>
            <aside className="moodlog-question"><span>KEY QUESTION</span><p>오늘의 감정을 한 번 선택하는 것만으로 <strong>음악 발견부터 기록과 회고까지 자연스럽게 이어지게 하려면 어떻게 해야 할까?</strong></p></aside>
          </div>
        </section>

        <section className="moodlog-section" id="moodlog-task">
          <header className="moodlog-heading"><p>02 · TASK</p><h2>감정을 모든 기능이 공유하는 하나의 기준으로 설계했습니다.</h2></header>
          <div className="moodlog-prose">
            <p>감정 선택을 추천 화면에서만 사용하는 값이 아니라 서비스 전체를 연결하는 공통 맥락으로 정의했습니다. 사용자는 감정에 맞는 음악을 발견하고, 같은 감정으로 일기를 쓰고, Moments에서 다른 사람의 기록을 탐색한 뒤 아카이브에서 자신의 흐름을 돌아봅니다.</p>
            <div className="moodlog-journey">
              {journey.map(([number, title, description]) => <article key={number}><i>{number}</i><strong>{title}</strong><p>{description}</p></article>)}
            </div>
            <aside className="moodlog-principle"><b>PRODUCT PRINCIPLE</b><p>추천을 한 번 소비하고 끝내는 대신, 사용자의 감정이 음악·일기·커뮤니티·아카이브를 이동하며 하나의 기록으로 쌓이도록 합니다.</p></aside>
          </div>
        </section>

        <section className="moodlog-section" id="moodlog-contribution">
          <header className="moodlog-heading"><p>03 · ACTION / MY CONTRIBUTION</p><h2>서비스의 방향을 정리하고, 핵심 도메인과 API를 직접 구현했습니다.</h2></header>
          <p className="moodlog-intro">PM과 백엔드를 중심으로 참여하고, 필요한 화면까지 연결한 풀스택 역할을 맡았습니다. 감정을 기록의 공통 기준으로 삼아 기능 범위를 구체화한 뒤 감정·일기·오늘의 문장 API를 구현하고, 실제 화면에서 선택과 저장이 이어지는지 확인했습니다.</p>
          <div className="moodlog-role-board">
            <article><span>01 · PM</span><strong>문제와 사용자 흐름 정의</strong><p>감정 선택부터 음악 발견, 기록, 공유, 회고까지 서비스의 중심 흐름을 정리했습니다.</p></article>
            <article><span>02 · BACKEND</span><strong>도메인과 API 구현</strong><p>감정·일기·오늘의 문장 데이터를 설계하고 Spring Boot API로 연결했습니다.</p></article>
            <article><span>03 · FULL-STACK</span><strong>화면에서 동작 검증</strong><p>API 응답과 React 상태를 연결해 기능이 실제 사용자 흐름으로 이어지게 했습니다.</p></article>
          </div>
          <div className="moodlog-contribution-list">
            {contributions.map(([label, title, description]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="moodlog-stack">
            <b>MY STACK</b><p>Java · Spring Boot · Spring Security · Spring Data JPA · Oracle · React · JavaScript · Axios</p>
            <b>SERVICE STACK</b><p>React 19 · Vite · CSS Modules · Java 17 · Spring Security · JWT · Oracle · WebSocket</p>
          </div>
        </section>

        <section className="moodlog-section" id="moodlog-features">
          <header className="moodlog-heading"><p>04 · FEATURES</p><h2>한 번의 감정 선택이 발견과 기록, 공유, 회고로 이어집니다.</h2></header>
          <div className="moodlog-feature-list">
            {features.map((feature, index) => (
              <article key={feature.number} className={index % 2 ? 'is-reverse' : ''}>
                <figure><img src={feature.image} alt={feature.alt} /></figure>
                <div><span>{feature.number} · {feature.label}</span><h3>{feature.title}</h3><p>{feature.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="moodlog-section" id="moodlog-decisions">
          <header className="moodlog-heading"><p>05 · ACTION / KEY DECISIONS</p><h2>기획에서 정의한 감정의 흐름을 도메인과 API 구조로 옮겼습니다.</h2></header>
          <div className="moodlog-decision-list">
            {decisions.map(([number, title, description, tags]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p><small>{tags}</small></div></article>)}
          </div>
        </section>

        <section className="moodlog-section" id="moodlog-troubleshooting">
          <header className="moodlog-heading"><p>06 · ACTION / TROUBLESHOOTING</p><h2>화면에서 보인 불편을 데이터와 상태의 문제로 나누어 해결했습니다.</h2></header>
          <p className="moodlog-intro">작은 오류를 나열하기보다 사용자의 흐름을 실제로 끊었던 세 가지 문제를 골랐습니다. 증상을 바로 고치기 전에 값이 달라진 지점과 상태가 사라진 시점을 추적하고, 프로젝트 규모에 맞는 해결 방법을 선택했습니다.</p>
          <div className="moodlog-cases">
            <details open>
              <summary><span>01</span><strong>문자열과 ID가 섞여 달라지던 감정 필터의 기준을 통일했습니다.</strong><i>+</i></summary>
              <div className="moodlog-case-body">
                <p className="moodlog-case-lead">감정을 표시하는 값과 저장·조회하는 값을 분리해 홈, 일기, Moments가 같은 감정을 같은 기준으로 해석하도록 만들었습니다.</p>
                <div className="moodlog-case-pair">
                  <section><span>SITUATION</span><h4>같은 감정을 선택해도 화면에 따라 필터 결과가 달라졌습니다.</h4><p>초기 화면은 <code>Happy</code> 같은 문자열 목록을 직접 가지고 있었고, API 응답은 <code>emojiId</code>, <code>tag</code>, 실제 이모지를 각각 제공했습니다. 대소문자와 필드가 섞이면서 선택한 값과 게시글의 감정 값이 정확히 대응하지 않았습니다.</p></section>
                  <section><span>TASK</span><h4>표시 방식이 달라도 선택·저장·필터는 같은 기준으로 동작해야 했습니다.</h4><p>홈과 일기, Moments가 각자 감정 목록을 유지하지 않고 서버 데이터의 변경을 함께 반영할 공통 기준이 필요했습니다.</p></section>
                </div>
                <section className="moodlog-case-analysis"><span>ROOT CAUSE &amp; DECISION</span><h4>화면용 문자열이 도메인 식별자의 역할까지 맡고 있었습니다.</h4><p>프론트에 새로운 상수 목록을 만드는 대신 감정 이모지 API를 단일 기준으로 삼았습니다. 사용자가 보는 이모지와 문구는 표시 값으로 두고, 데이터 연결에는 <code>emojiId</code>를 사용해 표기가 바뀌어도 관계가 유지되도록 했습니다.</p></section>
                <section className="moodlog-case-action"><span>ACTION</span><h4>서버 감정 목록을 기준으로 선택과 필터 로직을 다시 연결했습니다.</h4><ol><li>감정 이모지 도메인과 <code>/api/emojis</code> 조회 API를 구현했습니다.</li><li>홈과 일기에서 API 응답으로 선택지를 만들고 일기 저장에는 <code>emojiId</code>를 전달했습니다.</li><li>Moments에서는 선택한 ID와 게시글의 감정 ID를 대응시켜 필터와 감정별 집계를 계산했습니다.</li><li>기존 데이터의 대소문자 차이는 비교 시 정규화해 호환했습니다.</li></ol><pre><code>display: emoji · relation: emojiId · filter: normalized emojiId</code></pre></section>
                <div className="moodlog-case-result"><section><span>RESULT</span><p>홈에서 선택한 감정과 일기에 저장된 감정, Moments에서 조회한 감정이 하나의 기준으로 연결되었습니다. 화면별 중복 목록도 제거했습니다.</p></section><section><span>LEARNING</span><p>여러 기능을 잇는 값은 화면에 보이는 문구가 아니라 변경에 견딜 수 있는 도메인 식별자로 설계해야 했습니다.</p></section></div>
              </div>
            </details>

            <details>
              <summary><span>02</span><strong>로그인 요청의 500 오류를 엔티티와 Repository 계약에서 찾아 해결했습니다.</strong><i>+</i></summary>
              <div className="moodlog-case-body">
                <p className="moodlog-case-lead">화면의 로그인 실패 메시지만 바꾸지 않고 요청이 Repository까지 전달되는 경로를 추적해, 회원 엔티티의 PK 타입과 조회 계약을 바로잡았습니다.</p>
                <div className="moodlog-case-pair">
                  <section><span>SITUATION</span><h4>올바른 계정 정보를 입력해도 로그인 API가 500 오류를 반환했습니다.</h4><p>프론트 요청 형식과 컨트롤러 경로는 정상적으로 연결됐지만, 회원 조회 과정에서 예외가 발생해 잘못된 비밀번호와 서버 오류를 구분할 수 없었습니다.</p></section>
                  <section><span>TASK</span><h4>인증 로직을 추가하기 전에 데이터 접근 계약부터 일치시켜야 했습니다.</h4><p>회원 ID로 한 명을 조회하고 BCrypt 해시를 비교한 뒤, 성공과 인증 실패를 서로 다른 응답으로 전달하는 흐름이 필요했습니다.</p></section>
                </div>
                <section className="moodlog-case-analysis"><span>ROOT CAUSE &amp; DECISION</span><h4>String 타입 회원 PK와 Repository의 Long 제네릭 타입이 서로 달랐습니다.</h4><p><code>Member.userKey</code>는 UUID 문자열이었지만 <code>JpaRepository&lt;Member, Long&gt;</code>으로 선언되어 있었습니다. 화면 예외 처리를 늘리는 대신 영속성 계층의 타입 계약을 엔티티와 먼저 일치시키기로 했습니다.</p></section>
                <section className="moodlog-case-action"><span>ACTION</span><h4>회원 조회부터 비밀번호 검증과 HTTP 응답까지 로그인 경로를 다시 연결했습니다.</h4><ol><li>Repository의 ID 타입을 <code>String</code>으로 변경했습니다.</li><li><code>findByUserId()</code>가 <code>Optional&lt;Member&gt;</code>를 반환하도록 정의했습니다.</li><li>서비스에서 BCrypt의 <code>matches()</code>로 입력 비밀번호와 저장된 해시를 비교했습니다.</li><li>로그인 성공은 200, 일치하지 않는 계정 정보는 401로 반환해 서버 오류와 인증 실패를 분리했습니다.</li></ol><pre><code>Member.userKey: String ↔ JpaRepository&lt;Member, String&gt;</code></pre></section>
                <div className="moodlog-case-result"><section><span>RESULT</span><p>로그인 요청이 회원 조회와 비밀번호 검증까지 정상적으로 이어졌고, 잘못된 입력과 서버 오류를 구분해 화면에 안내할 수 있게 됐습니다.</p></section><section><span>LEARNING</span><p>JPA Repository의 제네릭 타입도 엔티티 매핑 계약의 일부이며, 컴파일되는 코드라도 실제 조회 경로의 타입과 응답을 함께 검증해야 했습니다.</p></section></div>
              </div>
            </details>

            <details>
              <summary><span>03</span><strong>홈에서 선택한 감정이 일기 작성 화면까지 이어지도록 상태의 수명을 설계했습니다.</strong><i>+</i></summary>
              <div className="moodlog-case-body">
                <p className="moodlog-case-lead">백엔드의 감정 모델이 실제 사용자 흐름에서도 자연스럽게 작동하는지 확인하고, 전역 상태를 늘리지 않으면서 화면 전환의 맥락을 보존했습니다.</p>
                <div className="moodlog-case-pair">
                  <section><span>SITUATION</span><h4>홈에서 감정을 골라도 일기 화면에서는 다시 선택해야 했습니다.</h4><p>감정 API와 일기 저장 API는 연결되어 있었지만, 화면이 바뀌는 순간 홈 컴포넌트의 선택 상태가 사라져 추천과 기록이 별개의 기능처럼 느껴졌습니다.</p></section>
                  <section><span>TASK</span><h4>직전 선택은 보존하되 일기 화면을 특정 진입 경로에 종속시키지 않아야 했습니다.</h4><p>홈을 거쳐 온 경우에는 바로 기록을 시작하고, 메뉴나 URL로 직접 들어온 경우에는 사용자가 감정을 새로 선택할 수 있어야 했습니다.</p></section>
                </div>
                <section className="moodlog-case-analysis"><span>ROOT CAUSE &amp; DECISION</span><h4>감정 선택이 홈의 로컬 상태에만 존재했습니다.</h4><p>영구 저장하거나 여러 화면에서 동시에 공유할 값은 아니었기 때문에 전역 상태나 로컬 스토리지는 과하다고 판단했습니다. 다음 화면에만 필요한 일회성 맥락에 맞춰 React Router의 route state를 선택했습니다.</p></section>
                <section className="moodlog-case-action"><span>ACTION</span><h4>라우트 상태와 선택적 초깃값으로 서로 다른 진입 경로를 함께 지원했습니다.</h4><ol><li>홈에서 일기로 이동할 때 <code>selectedTag</code>와 <code>selectedDate</code>를 전달했습니다.</li><li>일기 화면은 감정 API가 로딩된 뒤 전달된 태그에 대응하는 감정을 찾았습니다.</li><li>일치한 <code>emojiId</code>를 작성 모달의 <code>initialEmoji</code>로 주입했습니다.</li><li>route state가 없거나 수정 모드인 경우 자동 선택하지 않아 직접 진입과 편집 흐름을 유지했습니다.</li></ol><pre><code>navigate('/diary', &#123; state: &#123; selectedTag, selectedDate &#125; &#125;)</code></pre></section>
                <div className="moodlog-case-result"><section><span>RESULT</span><p>사용자는 홈에서 선택한 감정으로 바로 일기를 시작할 수 있고, 직접 방문한 경우에는 원하는 감정을 새로 선택할 수 있게 됐습니다.</p></section><section><span>LEARNING</span><p>백엔드 모델을 화면에 노출하는 것만으로는 흐름이 완성되지 않았습니다. 데이터의 수명과 사용 범위에 맞는 전달 방식을 함께 설계해야 했습니다.</p></section></div>
              </div>
            </details>
          </div>
        </section>

        <section className="moodlog-section moodlog-result" id="moodlog-result">
          <p>07 · RESULT &amp; REFLECTION</p>
          <h2>감정을 고르는 짧은 순간을 <strong>다시 돌아볼 수 있는 기록으로.</strong></h2>
          <div className="moodlog-result-grid">
            <article><span>01</span><strong>감정을 중심으로 서비스 방향 정리</strong><p>음악 추천에 머물던 아이디어를 기록·공유·회고로 이어지는 사용자 흐름과 기능 범위로 구체화했습니다.</p></article>
            <article><span>02</span><strong>핵심 도메인과 API 직접 구현</strong><p>감정과 일기의 관계를 설계하고 사용자별 기록을 생성·조회·수정·삭제하는 백엔드 흐름을 구현했습니다.</p></article>
            <article><span>03</span><strong>화면 연결을 통한 동작 검증</strong><p>API 응답을 React 화면에 연결해 감정 선택이 실제 저장과 탐색까지 같은 기준으로 이어지는지 확인했습니다.</p></article>
          </div>
          <p className="moodlog-reflection">Moodlog에서는 PM으로 서비스의 중심 흐름을 정리하고, 백엔드 개발자로 그 흐름을 지탱하는 도메인과 API를 구현했습니다. 화면까지 직접 연결하며 좋은 구조는 기술 계층별 완성도가 아니라 사용자가 한 선택이 데이터로 저장되고 다음 행동까지 같은 의미로 이어질 때 완성된다는 점을 배웠습니다.</p>
          <div className="moodlog-actions"><a href="#projects">프로젝트 목록으로</a><a href="#/projects/dit">← Dit 프로젝트 보기</a></div>
        </section>
      </div>
    </article>
  )
}

export default MoodlogPage
