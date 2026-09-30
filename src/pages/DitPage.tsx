import './DitPage.css'

const journey = [
  ['01', 'UNDERSTAND', 'DBTI와 프로필로 개발 성향과 현재 경험을 확인합니다.'],
  ['02', 'ASK', '관심 도메인과 기간, 난이도 또는 자유로운 아이디어를 입력합니다.'],
  ['03', 'RECOMMEND', '조건에 맞는 프로젝트와 추천 이유를 함께 제안합니다.'],
  ['04', 'EXPLORE', '문제·핵심 기능·사용자 흐름이 담긴 상세 기획을 살펴봅니다.'],
  ['05', 'SAVE', '마음에 든 프로젝트를 저장하고 마이페이지에서 다시 확인합니다.'],
]

const contributions = [
  ['AUTH FLOW', '로그인부터 계정 설정까지', 'DRF Token 인증을 연결하고 로그인 유지 여부에 따라 저장소를 분리했습니다. 프로필 수정·비밀번호 변경·계정 삭제까지 하나의 계정 흐름으로 구현했습니다.'],
  ['RECOMMENDATION UI', '대화가 결과로 이어지는 추천 경험', '사용자 입력과 프로필을 추천 요청으로 구성하고 AI 응답을 채팅, 추천 카드, 추천 이유, 상세 기획 모달로 나누어 보여줬습니다.'],
  ['STATE DESIGN', '이동과 새로고침에도 이어지는 맥락', 'Pinia와 브라우저 저장소를 조합해 사용자 정보와 추천 상태를 유지하고, 프로필이 바뀌면 이전 추천을 비워 결과의 맥락을 맞췄습니다.'],
  ['SERVICE CONNECTION', '추천에서 저장과 커뮤니티까지', '추천 프로젝트의 저장·취소를 마이페이지와 연결하고 게시글·댓글 CRUD를 구현해 탐색 이후의 경험까지 완성했습니다.'],
]

const decisions = [
  ['01', '선택지를 강요하지 않고 바로 질문할 수 있게 했습니다.', '정해진 조건을 모두 고르게 하면 아이디어를 이미 가진 사용자에게 불필요한 단계가 생긴다고 판단했습니다. 빠른 선택지와 자유 입력을 함께 제공하고, DBTI·희망 직무·전공·기술은 요청에 자동으로 포함했습니다.', 'Quick options · Free text · Profile context'],
  ['02', 'AI의 답변을 화면에서 사용할 수 있는 데이터로 바꿨습니다.', '자연어 응답만으로는 카드와 상세 화면의 정보가 매번 달라진다고 판단했습니다. 추천 이유와 프로젝트 세부 항목을 JSON 계약으로 정의하고, 서버에서 파싱한 결과만 UI에 연결했습니다.', 'JSON contract · Server parsing · Fallback'],
  ['03', '추천의 연속성과 유효성을 함께 지켰습니다.', '화면 이동마다 추천이 사라지는 것도, 바뀐 프로필에 과거 추천이 남는 것도 어색했습니다. 추천 상태는 세션에 보존하되 DBTI와 프로필 snapshot이 달라지면 초기화하도록 기준을 나눴습니다.', 'Session state · Snapshot · Invalidation'],
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function DitPage() {
  return (
    <article className="dit-page">
      <section className="dit-hero">
        <div className="dit-container">
          <a className="dit-back" href="#projects">← Projects</a>
          <div className="dit-hero-grid">
            <div>
              <p className="dit-kicker">AI PROJECT RECOMMENDATION · WEB</p>
              <h1>Dit<span>딧</span></h1>
              <p className="dit-summary">개발자의 성향과 경험을 분석해, 지금 만들기 좋은 프로젝트를 구체적인 기획안까지 제안하는 서비스</p>
            </div>
            <div className="dit-properties">
              <dl>
                <div><dt>PERIOD</dt><dd>2026.06.16 — 2026.06.25</dd></div>
                <div><dt>ROLE</dt><dd>Full-stack · UX Flow · AI Integration</dd></div>
                <div><dt>TEAM</dt><dd>SSAFY 프로젝트 · 2인 팀</dd></div>
                <div><dt>STACK</dt><dd>Vue 3 · JavaScript · Pinia · Django REST Framework · OpenAI API</dd></div>
              </dl>
              <div className="dit-links">
                <a href="https://www.figma.com/design/TI5BRliQ3FlMklHJ0buURt/Dit-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?t=mXHWJPnA3wBWy783-1" target="_blank" rel="noreferrer">Figma ↗</a>
                <a href="https://github.com/jszxro/Dit" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>
          <figure className="dit-cover">
            <img src="/images/projects/dit/dit-cover.png" alt="Dit 프로젝트 대표 화면" />
            <figcaption><b>01</b><span>성향을 진단하는 데서 멈추지 않고, 시작할 수 있는 프로젝트로 연결합니다.</span></figcaption>
          </figure>
        </div>
      </section>

      <nav className="dit-section-nav" aria-label="Dit 상세 페이지 목차">
        <button type="button" onClick={() => scrollToSection('dit-situation')}>Situation</button>
        <button type="button" onClick={() => scrollToSection('dit-task')}>Task</button>
        <button type="button" onClick={() => scrollToSection('dit-contribution')}>Contribution</button>
        <button type="button" onClick={() => scrollToSection('dit-decisions')}>Decisions</button>
        <button type="button" onClick={() => scrollToSection('dit-troubleshooting')}>Troubleshooting</button>
        <button type="button" onClick={() => scrollToSection('dit-result')}>Result</button>
      </nav>

      <div className="dit-container">
        <section className="dit-section" id="dit-situation">
          <header className="dit-heading"><p>01 · SITUATION</p><h2>프로젝트를 시작하기도 전에, 무엇을 만들지에서 멈췄습니다.</h2></header>
          <div className="dit-prose">
            <p>포트폴리오를 준비하는 개발자는 수많은 프로젝트 예시를 볼 수 있지만, 그중 어떤 주제가 자신의 성향과 경험을 보여주기에 적합한지 판단하기는 어려웠습니다. 검색으로 아이디어를 찾더라도 제목 수준에 머물러 실제 기획으로 발전시키려면 다시 많은 선택을 해야 했습니다.</p>
            <p>문제는 아이디어의 양이 아니라 <strong>나에게 맞는 아이디어를 고를 기준과, 바로 시작할 수 있을 만큼 구체적인 다음 단계의 부재</strong>라고 정의했습니다.</p>
            <aside className="dit-question"><span>KEY QUESTION</span><p>개발자의 성향과 경험을 이해하고, <strong>실제로 시작할 수 있는 프로젝트로 연결하려면 어떻게 해야 할까?</strong></p></aside>
          </div>
        </section>

        <section className="dit-section" id="dit-task">
          <header className="dit-heading"><p>02 · TASK</p><h2>추천 목록이 아니라, 탐색에서 시작까지의 흐름을 만들었습니다.</h2></header>
          <div className="dit-prose">
            <h3>성향 진단과 AI 추천이 서로 다른 기능처럼 끊기지 않아야 했습니다.</h3>
            <p>DBTI 결과와 프로필을 추천의 맥락으로 사용하고, 사용자가 입력한 관심 주제와 조건을 함께 반영했습니다. 추천 이후에는 왜 적합한지 설명하고 타깃 사용자, 해결할 문제, 핵심 기능과 사용자 흐름까지 제공해 아이디어를 기획의 출발점으로 바꿨습니다.</p>
            <div className="dit-journey">{journey.map(([number, title, description]) => <article key={number}><i>{number}</i><strong>{title}</strong><p>{description}</p></article>)}</div>
            <aside className="dit-principle"><b>PRODUCT PRINCIPLE</b><p>AI가 정답을 대신 고르는 것이 아니라, 사용자가 자신의 조건을 이해하고 프로젝트를 선택할 수 있도록 판단 근거와 구체적인 시작점을 함께 제공합니다.</p></aside>
          </div>
        </section>

        <section className="dit-section" id="dit-contribution">
          <header className="dit-heading"><p>03 · ACTION / MY CONTRIBUTION</p><h2>분리된 기능을 하나의 사용자 여정으로 연결했습니다.</h2></header>
          <p className="dit-intro">풀스택 개발자로 참여해 인증·마이페이지·AI 프로젝트 추천·저장 프로젝트·커뮤니티를 구현했습니다. 사용자 정보가 추천에 반영되고 결과가 저장과 재탐색으로 이어지도록 Vue 화면과 Pinia 상태부터 Django API, 데이터 모델과 AI 응답 처리까지 하나의 서비스 흐름으로 연결했습니다.</p>
          <div className="dit-contribution-list">
            {contributions.map(([label, title, description]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="dit-stack"><b>FRONTEND</b><p>Vue 3 · JavaScript · Vite · Pinia · Vue Router · Axios · Bootstrap 5</p><b>BACKEND &amp; AI</b><p>Python · Django · Django REST Framework · DRF Token Authentication · SQLite · OpenAI-compatible API</p></div>
        </section>

        <section className="dit-section" id="dit-decisions">
          <header className="dit-heading"><p>04 · ACTION / KEY DECISIONS</p><h2>AI 기능보다 먼저, 사용자가 선택하는 방식을 설계했습니다.</h2></header>
          <p className="dit-intro">추천 API를 호출하는 것보다 사용자의 맥락이 어떻게 전달되고, 결과가 어떤 구조로 돌아오며, 언제까지 유효한지를 정하는 일이 중요했습니다. 각 판단을 화면과 데이터의 규칙으로 연결했습니다.</p>
          <div className="dit-decision-list">
            {decisions.map(([number, title, description, tags]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p><small>{tags}</small></div></article>)}
          </div>
        </section>

        <section className="dit-section" id="dit-troubleshooting">
          <header className="dit-heading"><p>05 · ACTION / TROUBLESHOOTING</p><h2>기능이 아니라 맥락이 끊긴 원인을 추적했습니다.</h2></header>
          <p className="dit-intro">AI 응답의 불확실성, 화면 이동 이후의 상태, 브라우저 저장소와 Pinia 사이의 불일치처럼 여러 계층이 얽힌 문제를 중심으로 해결 과정을 정리했습니다.</p>
          <div className="dit-cases">
            <details open>
              <summary><span>01</span><strong>자연어 AI 응답을 화면에서 사용할 수 있는 JSON 계약으로 구조화했습니다.</strong><i>+</i></summary>
              <div className="dit-case-body">
                <div className="dit-case-pair">
                  <section><span>SITUATION</span><h4>같은 요청에도 추천 결과의 형식이 달라졌습니다.</h4><p>AI가 자유로운 문장으로 답하면 제목이나 추천 이유가 누락되거나 상세 기획의 항목이 달라져 카드와 모달이 안정적으로 렌더링되지 않았습니다.</p></section>
                  <section><span>TASK</span><h4>대화의 유연성을 유지하면서 서비스 데이터로 사용해야 했습니다.</h4><p>일반 대화와 프로젝트 추천을 모두 지원하되, 추천이 생성된 경우에는 세 개의 결과와 화면에 필요한 필드가 일정하게 반환되어야 했습니다.</p></section>
                </div>
                <section className="dit-case-action"><span>ACTION</span><h4>응답 구조를 계약으로 정의하고 파싱 책임을 서버에 두었습니다.</h4><ol><li>추천 이유와 프로젝트 제목·난이도·기간·기술 스택을 필수 구조로 정의했습니다.</li><li>타깃 사용자·문제·핵심 기능·사용자 흐름을 <code>detail</code> 객체로 분리했습니다.</li><li>Django 서버에서 코드 블록을 제거한 뒤 JSON을 파싱하고, 실패 시 일반 메시지로 대체했습니다.</li><li>외부 API timeout을 별도로 구분하고 프론트에는 다시 시도할 수 있는 안내를 제공했습니다.</li></ol></section>
                <div className="dit-case-result"><section><span>RESULT</span><p>하나의 AI 응답을 채팅 메시지, 추천 카드, 추천 이유, 상세 기획과 저장 프로젝트에 일관되게 연결했습니다.</p></section><section><span>LEARNING</span><p>AI 기능의 안정성은 모델 호출보다 응답 계약과 실패 시 동작을 얼마나 구체적으로 정의하는지에 달려 있었습니다.</p></section></div>
              </div>
            </details>

            <details>
              <summary><span>02</span><strong>추천 상태를 보존하되 사용자 맥락이 바뀌면 오래된 결과를 비웠습니다.</strong><i>+</i></summary>
              <div className="dit-case-body">
                <div className="dit-case-pair">
                  <section><span>SITUATION</span><h4>페이지를 벗어나면 대화가 사라지고, 바뀐 프로필에는 이전 추천이 남았습니다.</h4><p>사용자가 추천을 확인하다 마이페이지로 이동하면 탐색 맥락이 끊겼습니다. 반대로 DBTI나 희망 직무를 수정한 뒤에도 과거 결과가 유지되면 현재 정보에 맞는 추천처럼 보일 수 있었습니다.</p></section>
                  <section><span>TASK</span><h4>연속성과 최신성에 서로 다른 기준이 필요했습니다.</h4><p>같은 탐색 세션에서는 결과를 유지하면서, 추천 근거가 달라진 경우에만 안전하게 새 대화를 시작해야 했습니다.</p></section>
                </div>
                <section className="dit-case-action"><span>ACTION</span><h4>화면 상태와 추천의 유효 조건을 분리했습니다.</h4><ol><li>세션 ID, 메시지, 추천 결과와 저장 상태를 <code>sessionStorage</code>에 직렬화했습니다.</li><li>깊은 감시로 상태가 바뀔 때마다 현재 세션을 갱신했습니다.</li><li>추천 당시 DBTI ID와 프로필 snapshot을 함께 저장했습니다.</li><li>현재 정보와 snapshot이 달라진 경우에만 기존 추천 상태를 초기화했습니다.</li></ol></section>
                <div className="dit-case-result"><section><span>RESULT</span><p>화면을 이동했다 돌아와도 추천 과정은 이어지고, 프로필 변경 이후에는 맞지 않는 과거 결과가 다시 노출되지 않게 했습니다.</p></section><section><span>LEARNING</span><p>상태를 오래 보존하는 것만으로는 좋은 경험이 되지 않았습니다. 데이터가 언제까지 유효한지도 함께 설계해야 했습니다.</p></section></div>
              </div>
            </details>

            <details>
              <summary><span>03</span><strong>로그인 유지 옵션과 새로고침 이후의 사용자 상태를 하나의 규칙으로 맞췄습니다.</strong><i>+</i></summary>
              <div className="dit-case-body">
                <div className="dit-case-pair">
                  <section><span>SITUATION</span><h4>토큰은 남았지만 화면에는 기본 사용자 정보가 잠시 나타났습니다.</h4><p>새로고침 직후 Pinia 상태가 비어 있어 Navbar의 이름과 프로필 이미지, 마이페이지 내용이 API 응답 전까지 기본값으로 보였습니다. 로그인 유지 선택과 관계없이 정보가 한 저장소에 남는 문제도 있었습니다.</p></section>
                  <section><span>TASK</span><h4>사용자의 선택과 화면 상태가 같은 저장 정책을 따라야 했습니다.</h4><p>로그인 유지 사용자는 브라우저를 다시 열어도 이어져야 하고, 미사용자는 현재 탭 세션에서만 유지되어야 했습니다. 로그아웃 시 관련 캐시도 함께 제거해야 했습니다.</p></section>
                </div>
                <section className="dit-case-action"><span>ACTION</span><h4>인증 저장소를 한곳에서 결정하고 관련 상태를 함께 관리했습니다.</h4><ol><li>로그인 유지 여부에 따라 <code>localStorage</code>와 <code>sessionStorage</code>를 선택했습니다.</li><li>초기화 시 토큰이 있는 저장소에서 사용자와 마이페이지 캐시를 복원했습니다.</li><li>프로필 갱신 시 Pinia와 저장된 데이터를 동시에 업데이트했습니다.</li><li>로그아웃과 인증 실패 시 두 저장소의 관련 키를 모두 정리하고, 로딩 중에는 잘못된 기본값 대신 skeleton을 표시했습니다.</li></ol></section>
                <div className="dit-case-result"><section><span>RESULT</span><p>로그인 유지 선택이 의도대로 동작하고, 새로고침 직후에도 다른 사용자의 정보처럼 보이는 순간을 줄였습니다.</p></section><section><span>LEARNING</span><p>전역 상태와 브라우저 저장소는 별개의 데이터가 아니라 초기화·갱신·삭제 시점을 공유하는 하나의 인증 흐름으로 다뤄야 했습니다.</p></section></div>
              </div>
            </details>
          </div>
        </section>

        <section className="dit-section dit-result" id="dit-result">
          <p>06 · RESULT &amp; REFLECTION</p>
          <h2>AI가 답하는 화면에서, <strong>사용자가 시작할 수 있는 서비스로.</strong></h2>
          <div className="dit-result-grid">
            <article><span>01</span><strong>사용자 맥락을 추천에 연결</strong><p>DBTI·희망 직무·전공·보유 기술과 자유 입력을 하나의 추천 요청으로 구성했습니다.</p></article>
            <article><span>02</span><strong>AI 응답을 서비스 데이터로 전환</strong><p>구조화된 응답을 카드·상세 기획·추천 이유·저장 흐름에서 재사용했습니다.</p></article>
            <article><span>03</span><strong>기능 사이의 상태 흐름 완성</strong><p>인증·프로필·추천·저장 프로젝트가 화면 이동과 새로고침 이후에도 같은 맥락을 유지하게 했습니다.</p></article>
          </div>
          <p className="dit-reflection">Dit을 통해 AI를 활용한 서비스에서는 답변을 생성하는 것보다 사용자의 맥락을 정확히 전달하고, 결과를 신뢰할 수 있는 화면 구조로 바꾸는 일이 더 중요하다는 점을 배웠습니다. 프론트엔드 역시 응답을 보여주는 데서 그치지 않고 데이터의 유효 범위와 실패 상태, 다음 행동까지 설계해야 했습니다. 앞으로도 기술 자체보다 사용자가 어떤 판단을 내려야 하는지 먼저 정의하고, 그 판단을 돕는 흐름을 구현하겠습니다.</p>
          <div className="dit-actions"><a href="#projects">← 프로젝트 목록으로</a><a href="#/projects/projectree">Projectree 프로젝트 보기 →</a></div>
        </section>
      </div>
    </article>
  )
}

export default DitPage
