import './ProjectreePage.css'

const flow = [
  ['01', 'CREATE', '프로젝트를 만들고 팀원을 초대합니다.'],
  ['02', 'MEET', '한 공간에서 실시간으로 의견을 나눕니다.'],
  ['03', 'STRUCTURE', '회의 중 나온 아이디어를 노드로 정리합니다.'],
  ['04', 'REVIEW', '회의록과 개인 피드백으로 논의를 돌아봅니다.'],
  ['05', 'CONTINUE', '결정 사항과 다음 할 일을 프로젝트에 남깁니다.'],
]

const contributions = [
  ['PROJECT FLOW', '프로젝트의 시작과 관리 흐름', '생성·목록·검색·수정·삭제 API를 화면에 연결하고, 변경 이후 목록과 사이드바가 즉시 갱신되도록 데이터 흐름을 정리했습니다.'],
  ['COLLABORATION', '초대에서 참여까지 이어지는 흐름', '팀원 조회와 초대·수락·거절을 구현하고, 인증 후 원래 초대 화면으로 돌아오도록 경로를 보존했습니다.'],
  ['MEETING RECORD', '회의 이후에도 이어지는 기록', '최근 회의록과 전체 회의록·상세 화면을 연결하고, AI 개인 피드백과 팀원별 발화 비율을 홈에서 확인할 수 있게 했습니다.'],
  ['STATE DESIGN', '기다림과 실패까지 포함한 화면 상태', '스켈레톤·빈 상태·오류 메시지·확인 모달·토스트를 적용해 현재 상태와 다음 행동을 알 수 있게 했습니다.'],
]

const decisions = [
  ['01', '프로젝트를 찾는 시간을 줄였습니다.', '페이지네이션된 일부 데이터만 프론트에서 필터링하면 검색 결과가 달라진다고 판단해 서버 검색을 연결하고, 입력 중 과도한 요청은 디바운스로 줄였습니다.', 'Server search · Debounce · Pagination'],
  ['02', '같은 데이터를 기다리는 화면을 줄였습니다.', '여러 화면이 동일한 프로젝트 정보를 반복 요청하는 원인을 확인하고, 응답 캐시와 진행 중 Promise 공유로 화면 전환의 반복 로딩을 개선했습니다.', 'Memory cache · Promise sharing · Prefetch'],
  ['03', '인증이 끊겨도 하던 일을 잃지 않게 했습니다.', '모든 진입에서 세션을 선검증하는 대신 실제 401이 발생한 시점에만 로그인 흐름을 열고, 안전하게 저장한 내부 경로로 돌아오게 했습니다.', 'Session cookie · 401 event · Safe redirect'],
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function ProjectreePage() {
  return (
    <article className="projectree-page">
      <section className="projectree-hero">
        <div className="projectree-container">
          <a className="projectree-back" href="#projects">← Projects</a>
          <div className="projectree-hero-grid">
            <div><p className="projectree-kicker">COLLABORATION PROJECT · WEB</p><h1>Projectree<span>프로젝트리</span></h1><p className="projectree-summary">회의에서 흩어지는 아이디어를 구조화하고,<br />기록과 피드백이 다음 협업으로 이어지게 하는 프로젝트 서비스</p></div>
            <div className="projectree-properties">
              <dl>
                <div><dt>PERIOD</dt><dd>2026.07 — 2026.08</dd></div>
                <div><dt>ROLE</dt><dd>Frontend · UX Flow · API Integration</dd></div>
                <div><dt>TEAM</dt><dd>SSAFY 프로젝트 · D205팀</dd></div>
                <div><dt>STACK</dt><dd>React · TypeScript · Vite · Zustand · React Router · CSS Modules · SSE</dd></div>
              </dl>
              <div className="projectree-links"><button type="button" disabled>Git · 추후 연결</button><button type="button" disabled>Demo · 추후 연결</button></div>
            </div>
          </div>
          <figure className="projectree-cover"><img src="/images/projects/projectree/projectree-cover.png" alt="Projectree 프로젝트 대표 화면" /><figcaption><b>01</b><span>말로 끝나던 아이디어를 프로젝트의 기록으로 연결합니다.</span></figcaption></figure>
        </div>
      </section>
      <nav className="projectree-section-nav" aria-label="Projectree 상세 페이지 목차">
        <button type="button" onClick={() => scrollToSection('projectree-situation')}>Situation</button>
        <button type="button" onClick={() => scrollToSection('projectree-task')}>Task</button>
        <button type="button" onClick={() => scrollToSection('projectree-contribution')}>Contribution</button>
        <button type="button" onClick={() => scrollToSection('projectree-decisions')}>Decisions</button>
        <button type="button" onClick={() => scrollToSection('projectree-troubleshooting')}>Troubleshooting</button>
        <button type="button" onClick={() => scrollToSection('projectree-result')}>Result</button>
      </nav>
      <div className="projectree-container">
        <section className="projectree-section" id="projectree-situation">
          <header className="projectree-heading"><p>01 · SITUATION</p><h2>회의는 끝났지만,<br />아이디어는 다음으로 이어지지 않았습니다.</h2></header>
          <div className="projectree-prose">
            <p>팀 프로젝트에서는 회의 중 좋은 의견이 나와도 메신저, 회의록, 개인 메모에 흩어지기 쉬웠습니다. 회의가 끝난 뒤에는 결정 사항을 다시 정리하고 다음 할 일을 확인하는 데 같은 시간을 반복해서 사용했습니다.</p>
            <p>발언 내용만 남기는 것으로도 충분하지 않았습니다. 어떤 아이디어가 연결되는지, 논의가 어느 방향으로 발전했는지, 구성원이 회의에 어떻게 참여했는지를 한 흐름에서 돌아볼 수 있어야 했습니다.</p>
            <aside className="projectree-question"><span>KEY QUESTION</span><p>회의 중 나온 생각을 놓치지 않고,<br /><strong>팀의 기록과 다음 행동으로 연결하려면 어떻게 해야 할까?</strong></p></aside>
          </div>
        </section>

        <section className="projectree-section" id="projectree-task">
          <header className="projectree-heading"><p>02 · TASK</p><h2>회의 도구를 만드는 것이 아니라,<br />협업의 전후를 하나로 연결했습니다.</h2></header>
          <div className="projectree-prose">
            <h3>프로젝트 생성부터 회의 이후의 회고까지 끊기지 않는 흐름이 필요했습니다.</h3>
            <p>Projectree는 실시간 회의 자체보다 그 앞뒤의 맥락을 함께 담는 데 집중했습니다. 팀원을 모으고, 의견을 나누고, 아이디어를 구조화하고, 회의록과 개인 피드백을 확인하는 과정을 하나의 프로젝트 안에 배치했습니다.</p>
            <div className="projectree-flow">{flow.map(([number, title, description]) => <article key={number}><i>{number}</i><strong>{title}</strong><p>{description}</p></article>)}</div>
            <aside className="projectree-principle"><b>PRODUCT PRINCIPLE</b><p>기능의 개수보다 사용자가 지금 어느 단계에 있고 다음에 무엇을 해야 하는지 알 수 있는 흐름을 우선했습니다.</p></aside>
          </div>
        </section>
        <section className="projectree-section" id="projectree-contribution">
          <header className="projectree-heading"><p>03 · ACTION / MY CONTRIBUTION</p><h2>각 화면을 구현하는 데서 그치지 않고,<br />프로젝트의 이용 흐름을 완성했습니다.</h2></header>
          <p className="projectree-intro">프론트엔드 개발을 맡아 프로젝트 생성·탐색·관리와 팀원 초대, 프로젝트 홈, 회의록 조회 흐름을 구현했습니다. 화면 이동 후 데이터가 다시 로딩되거나 인증 만료로 작업이 끊기는 문제까지 사용자 흐름의 일부로 보고 개선했습니다.</p>
          <div className="projectree-contribution-list">
            {contributions.map(([label, title, description]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="projectree-stack"><b>MY STACK</b><p>React · TypeScript · Vite · Zustand · React Router · CSS Modules · SSE</p><b>SERVICE STACK</b><p>LiveKit · Three.js · React Three Fiber · Spring Boot</p></div>
        </section>

        <section className="projectree-section" id="projectree-decisions">
          <header className="projectree-heading"><p>04 · ACTION / KEY DECISIONS</p><h2>사용자가 멈추는 지점을 찾아,<br />기술 선택의 기준으로 삼았습니다.</h2></header>
          <p className="projectree-intro">새로운 라이브러리를 더하기보다 일정 안에서 필요한 동작을 명확히 구현했습니다. 검색의 정확성, 화면 전환 속도, 인증 복구처럼 사용자가 직접 체감하는 문제를 기준으로 해결 범위를 정했습니다.</p>
          <div className="projectree-decision-list">
            {decisions.map(([number, title, description, tags]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p><small>{tags}</small></div></article>)}
          </div>
        </section>
        <section className="projectree-section" id="projectree-troubleshooting">
          <header className="projectree-heading"><p>05 · ACTION / TROUBLESHOOTING</p><h2>증상을 가리는 대신,<br />데이터와 상태가 어긋난 원인을 찾았습니다.</h2></header>
          <p className="projectree-intro">작은 오류를 나열하기보다 상황을 구조화하고 해결 방법을 선택한 판단 과정이 드러나는 문제를 골랐습니다.</p>
          <div className="projectree-cases">
            <details open>
              <summary><span>01</span><strong>중복 API 요청과 반복 로딩을 메모리 캐시로 개선했습니다.</strong><i>+</i></summary>
              <div className="projectree-case-body">
                <div className="projectree-case-pair">
                  <section><span>SITUATION</span><h4>같은 프로젝트 목록을 여러 화면에서 반복해서 기다렸습니다.</h4><p>홈, 프로젝트 목록, 마이페이지와 프로젝트 레이아웃이 같은 데이터를 각각 요청해 화면을 옮길 때마다 로딩이 나타났습니다. 여러 컴포넌트가 동시에 마운트되면 동일 API도 중복 호출됐습니다.</p></section>
                  <section><span>TASK</span><h4>최신성을 유지하면서 화면 전환의 단절을 줄여야 했습니다.</h4><p>값을 저장하는 것뿐 아니라 생성·수정·로그아웃 시점을 반영하고, 무효화 이전의 느린 응답이 캐시를 되살리는 경합도 막아야 했습니다.</p></section>
                </div>
                <section className="projectree-case-action"><span>ACTION</span><h4>응답 캐시와 진행 중 요청을 분리하고 변경 지점마다 정책을 정의했습니다.</h4><ol><li>페이지·크기·검색어 조합으로 요청 키를 만들었습니다.</li><li>같은 요청이 진행 중이면 기존 Promise를 공유했습니다.</li><li>다음 페이지를 미리 조회하고 생성·수정·로그아웃 때 캐시를 갱신했습니다.</li><li><code>cacheVersion</code>으로 무효화 이전 응답의 재저장을 막았습니다.</li></ol></section>
                <div className="projectree-case-result"><section><span>RESULT</span><p>캐시된 화면은 즉시 표시되고 동시에 발생하던 동일 요청을 하나로 합칠 수 있었습니다.</p></section><section><span>LEARNING</span><p>캐시를 추가하는 일보다 언제 신뢰하고 언제 버릴지를 먼저 설계해야 한다는 점을 배웠습니다.</p></section></div>
              </div>
            </details>
            <details>
              <summary><span>02</span><strong>서버 세션과 프론트 인증 상태의 불일치를 실제 401 시점에 복구했습니다.</strong><i>+</i></summary>
              <div className="projectree-case-body">
                <div className="projectree-case-pair">
                  <section><span>SITUATION</span><h4>화면은 로그인 상태였지만 API는 인증 실패를 반환했습니다.</h4><p>백엔드 세션 쿠키가 만료되어도 Zustand의 사용자 상태는 남아 보호 화면이 보였고, 재로그인 후에는 원래 하던 화면으로 돌아오지 못했습니다.</p></section>
                  <section><span>FIRST ATTEMPT</span><h4>진입마다 세션을 확인하자 정상 로그인 흐름까지 흔들렸습니다.</h4><p>선검증 API가 로그인 콜백과 SSE 연결 시점에 영향을 주면서 재로그인 후 랜딩 페이지로 되돌아가는 문제가 생겼습니다.</p></section>
                </div>
                <section className="projectree-case-action"><span>ACTION</span><h4>정상 경로는 유지하고 실제 인증 실패에만 대응했습니다.</h4><ol><li>공통 <code>apiRequest</code>에서 401을 감지해 전역 이벤트를 발생시켰습니다.</li><li>보호 경로에서만 인증 상태를 한 번 정리하고 로그인 모달을 열었습니다.</li><li>검증한 내부 경로를 저장해 로그인 이후 복귀시켰습니다.</li><li>OAuth 콜백과 초대 같은 공개 경로는 전역 처리에서 제외했습니다.</li></ol></section>
                <div className="projectree-case-result"><section><span>RESULT</span><p>모든 화면에 확인 요청을 추가하지 않고도 만료된 인증을 일관되게 복구했습니다.</p></section><section><span>LEARNING</span><p>인증 문제는 로그인뿐 아니라 라우팅·전역 상태·실시간 연결을 함께 살펴야 했습니다.</p></section></div>
              </div>
            </details>
            <details>
              <summary><span>03</span><strong>회의록 ID와 회의 ID가 섞인 API 계약을 바로잡았습니다.</strong><i>+</i></summary>
              <div className="projectree-case-body">
                <div className="projectree-case-pair">
                  <section><span>SITUATION</span><h4>최근 회의록을 누르면 상세 조회에서 불일치 오류가 발생했습니다.</h4><p>프로젝트 홈 응답의 <code>id</code>는 회의록 ID였지만 상세 조회 URL은 회의 ID를 요구했습니다. 두 값 모두 숫자여서 타입 검사만으로는 차이를 발견할 수 없었습니다.</p></section>
                  <section><span>TASK</span><h4>임시 변환으로 가리지 않고 식별자의 의미를 맞춰야 했습니다.</h4><p>프론트와 백엔드가 같은 필드를 서로 다른 엔티티의 ID로 이해하고 있어 응답 계약 자체를 확인해야 했습니다.</p></section>
                </div>
                <section className="projectree-case-action"><span>ACTION</span><h4>요청과 응답을 추적해 상세 API가 요구하는 도메인 ID를 확인했습니다.</h4><ol><li>상세 URL과 오류 응답을 기준으로 필요한 식별자를 추적했습니다.</li><li>백엔드와 필드 의미를 다시 맞췄습니다.</li><li>응답 이름을 <code>meetingId</code>로 명확히 하고 상세 라우팅도 같은 값을 사용했습니다.</li></ol></section>
                <div className="projectree-case-result"><section><span>RESULT</span><p>최근 회의록에서 상세 화면으로 이어지는 흐름을 정상화하고 같은 혼동이 반복될 여지를 줄였습니다.</p></section><section><span>LEARNING</span><p>타입이 같아도 도메인 의미가 다르면 API 계약에서 이름과 용도를 명확하게 정의해야 합니다.</p></section></div>
              </div>
            </details>
          </div>
        </section>
        <section className="projectree-section projectree-result" id="projectree-result">
          <p>06 · RESULT & REFLECTION</p>
          <h2>화면을 연결하는 프론트엔드에서,<br /><strong>협업의 흐름을 설계하는 프론트엔드로.</strong></h2>
          <div className="projectree-result-grid">
            <article><span>01</span><strong>프로젝트 전 과정을 연결</strong><p>생성·초대·회의 결과 확인·설정까지 분리된 화면을 하나의 이용 흐름으로 완성했습니다.</p></article>
            <article><span>02</span><strong>반복 로딩과 요청을 개선</strong><p>메모리 캐시와 진행 중 Promise 공유로 여러 화면이 동일 데이터를 효율적으로 사용하게 했습니다.</p></article>
            <article><span>03</span><strong>예외 상황에서도 흐름 유지</strong><p>세션 만료와 API 계약 오류를 사용자 경험의 단절로 보고 해결했습니다.</p></article>
          </div>
          <p className="projectree-reflection">Projectree를 통해 프론트엔드는 준비된 API를 화면에 옮기는 역할에 머물지 않는다는 점을 배웠습니다. 데이터의 생명주기, 인증 상태, 라우팅과 백엔드 계약까지 함께 살펴야 사용자의 흐름을 끝까지 지킬 수 있었습니다. 앞으로도 새로운 기술을 먼저 도입하기보다 사용자가 멈추는 지점과 상태의 의미를 정의한 뒤 필요한 구조를 선택하겠습니다.</p>
          <div className="projectree-actions"><a href="#projects">← 프로젝트 목록으로</a><a href="#/projects/dodam">도담 프로젝트 보기 →</a></div>
        </section>
      </div>
    </article>
  )
}

export default ProjectreePage
