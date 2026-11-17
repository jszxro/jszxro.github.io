import './GeomatePage.css'
import { ProjectDetailHero, ProjectVisualStory } from './ProjectDetailVisual'

const storeUrl = 'https://m.onestore.co.kr/v2/ko-kr/app/0001012470'
const imageRoot = '/images/projects/geomate'

function Tablet({ screen, label, priority = false }: { screen: string; label: string; priority?: boolean }) {
  return <figure className="geomate-tablet" aria-label={label}>
    <span className="geomate-tablet-camera" aria-hidden="true" />
    <img src={`${imageRoot}/screens/${screen}.png`} alt={label} width="2560" height="1600" loading={priority ? 'eager' : 'lazy'} />
  </figure>
}

const features = [
  { id: '01', label: 'HOME & LEARNING ENTRY', title: '처음 시작하는 문제도,\n풀던 문제도 한 흐름으로', description: '예제로 시작하거나 사진·PDF로 내 문제를 가져오고, 이어 풀기와 복습으로 돌아올 수 있는 학생 홈입니다.', decision: '예제 ID, 문제 ID, 학습 시도 ID를 구분해 새 학습과 기존 시도 재개를 연결하고, 홈 복귀 시 서버 데이터를 다시 확인하도록 구성했습니다.', screen: 'home' },
  { id: '02', label: 'INTERACTIVE WORKSPACE', title: '도형을 움직이고,\n생각한 내용을 직접 남기기', description: '문제와 힌트를 옆에 두고 도형의 치수를 확인하며 자유 필기와 답 입력을 이어가는 가로형 학습 공간입니다.', decision: '계산은 공용 기하엔진의 결과를 사용하고, 프론트에서는 문제·도구 패널과 필기, 제출·결과 확인이 연결되는 사용 흐름을 다듬었습니다.', screen: 'workspace' },
  { id: '03', label: 'CLASSROOM & QUEST', title: '혼자 하는 학습에서\n선생님과 이어지는 학습으로', description: '클래스 참여부터 배정된 퀘스트 확인, 문항별 진행 상태와 피드백까지 같은 앱 안에서 탐색합니다.', decision: '서버의 문항별 학습 시도와 진행 상태를 기준으로 진입 경로를 구분하고, 일시적인 갱신 실패에도 이미 확인하던 목록을 유지하도록 보완했습니다.', screen: 'quests' },
  { id: '04', label: 'HISTORY & REVIEW', title: '나갔다 돌아와도\n학습의 맥락이 남도록', description: '전체 기록과 오답, 자주 틀리는 개념을 살펴보고 이전 풀이로 돌아가 학습을 이어갈 수 있습니다.', decision: '진행·완료 상태와 저장된 풀이를 서버 응답에 맞춰 표시하고, 필터와 상세 화면에서도 작은 가로 태블릿의 공간을 고려했습니다.', screen: 'history' },
]

const cases = [
  { number: '01', title: '패널을 접거나 다시 진입하면 어긋나는 필기', problem: '문제 패널의 너비와 화면 크기가 달라지면, 도형 위에 남긴 자유 필기가 의도한 위치에서 벗어났습니다.', cause: '화면 픽셀을 기준으로 저장한 필기 좌표와 도형을 배치하는 기준이 달라, 패널 상태가 바뀔 때 서로 다른 변환이 적용됐습니다.', action: '도형 뷰포트를 기준으로 필기 좌표를 변환하고 저장·복원 경로를 맞췄습니다. 패널 열기·닫기, 이어 풀기와 학습 완료 후 재진입을 함께 점검했습니다.', result: '화면의 배치 변화와 필기 데이터를 분리하는 것이 저장·복원 경험의 핵심임을 확인했습니다.' },
  { number: '02', title: '해석 요청은 접수됐는데 응답을 받지 못한 상황', problem: '요청 결과를 모른 채 다시 시도하면 이미 진행 중인 작업을 중복 요청할 수 있었습니다.', cause: '요청 실패와 서버 처리 실패는 같은 상태가 아니며, 화면을 나갔다 돌아오면 화면 내부의 재전송 가드만으로는 충분하지 않았습니다.', action: '접수 불확실 상태와 서버 작업 상태를 구분하고, 최신 작업 조회와 재진입 시 방어를 연결했습니다. 화면의 안내를 숨기는 동작도 서버 작업 취소와 분리했습니다.', result: '로딩 UI를 만드는 것보다 사용자가 안전하게 다음 행동을 선택할 수 있는 상태를 정의하는 데 집중했습니다.' },
  { number: '03', title: '완성된 화면과 실제 태블릿 사이의 차이', problem: '키보드가 입력을 가리거나 드롭다운이 잘리는 등 개발 화면만으로 확인하기 어려운 문제가 있었습니다.', cause: '모달마다 다른 배치 기준과 고정 크기, 화면별로 반복된 스타일이 기기 환경에서 서로 다른 동작을 만들었습니다.', action: '공통 모달·버튼·요청 상태와 스타일 토큰을 정리하고, 키보드 회피와 팝업 배치를 보완했습니다. 실제 기기와 릴리스 APK에서 주요 흐름을 반복 확인했습니다.', result: '화면 단위 완성도와 함께 작은 태블릿에서도 입력·선택·복귀가 가능한지를 QA 기준으로 삼았습니다.' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function GeomatePage() {
  return <article className="geomate-page detail-project">
    <ProjectDetailHero project="geomate" />

      <nav className="geomate-nav" aria-label="지오메이트 프로젝트 목차">{[['overview', 'Situation'], ['planning', 'Task'], ['role', 'Action'], ['features', 'Features'], ['troubleshooting', 'Troubleshooting'], ['result', 'Result']].map(([id, title]) => <button key={id} type="button" onClick={() => scrollTo(`geomate-${id}`)}>{title}</button>)}</nav>
      <ProjectVisualStory project="geomate" />

    <div className="geomate-container geomate-content">
      <section className="geomate-section" id="geomate-overview"><div className="geomate-heading"><p>01 · SITUATION</p><h2>종이에 그려진 도형은<br />직접 확인할 수 없었습니다.</h2></div><div className="geomate-prose"><p>입체도형 문제에서는 머릿속으로 회전하거나 잘린 면과 전개도를 상상해야 합니다. 해설을 읽는 것만으로는 내가 어떤 부분을 잘못 예상했는지 확인하기 어렵습니다.</p><p>지오메이트는 정답을 바로 보여주는 대신, <strong>학생의 예측을 실제 도형 조작과 비교하는 학습 경험</strong>을 목표로 합니다. 문제 사진에서 시작해 도형을 다루고, 자신의 답과 힌트를 확인하며 다시 생각하도록 구성했습니다.</p><blockquote>문제를 읽는 화면에서 끝나지 않고,<br /><strong>내 생각을 확인할 수 있는 학습 공간으로 연결하기.</strong></blockquote></div></section>

      <section className="geomate-section" id="geomate-planning"><div className="geomate-heading"><p>02 · TASK</p><h2>기능 사이의 이동이<br />학습의 단절이 되지 않도록</h2></div><div className="geomate-prose"><p>프론트엔드의 과제는 3D 도형을 보여주는 데서 끝나지 않았습니다. 사진 등록과 해석 대기, 조건 확인, 학습 시작과 저장·복귀를 서로 다른 서버 상태에 맞춰 연결해야 했습니다.</p><div className="geomate-journey">{['문제 가져오기', '원본·조건 확인', '예측·조작', '진단·확인', '저장·복습'].map((title, index) => <div key={title}><span>{String(index + 1).padStart(2, '0')}</span><strong>{title}</strong></div>)}</div></div></section>

      <section className="geomate-section" id="geomate-role"><div className="geomate-heading"><p>03 · ACTION / MY CONTRIBUTION</p><h2>학생의 진입부터 복귀까지,<br />화면과 상태를 연결했습니다.</h2></div><div className="geomate-role-grid"><article><span>SCREEN & INTERACTION</span><h3>태블릿의 화면과 입력 경험</h3><p>로그인·온보딩과 학생 홈, 문제 등록·문제함·조건 확인·설정 등 주요 화면을 구현하고, 학습 공간의 패널·필기·제출 UI를 개선했습니다.</p></article><article><span>API & SESSION</span><h3>서버 상태에 맞춘 다음 행동</h3><p>해석 작업 조회와 재시도, 예제·퀘스트 진입, 폴더·문제 관리 등 API를 연결하고 계정·세션 변경 시 늦은 응답과 캐시가 섞이지 않도록 방어했습니다.</p></article><article><span>COMPONENT SYSTEM</span><h3>페이지마다 달랐던 기준 통합</h3><p>반복되는 모달·버튼·로딩·오류 표시를 공통 구조로 정리하고, 스타일 토큰과 입력 컴포넌트로 화면 사이의 일관성을 보완했습니다.</p></article><article><span>QA & DELIVERY</span><h3>실기기에서 이어지는 사용 흐름</h3><p>Android 태블릿과 APK에서 키보드·화면 배치·이동·학습 복원을 확인하고, QA에서 발견한 예외 상태를 수정했습니다.</p></article></div></section>

      <section className="geomate-features" id="geomate-features"><div className="geomate-heading"><p>04 · ACTION / KEY FEATURES</p><h2>실제 태블릿 화면으로 보는<br />지오메이트의 학습 흐름</h2></div><p className="geomate-feature-intro">Android 에뮬레이터에서 직접 캡처한 실행 화면입니다. 가로 화면 안에서 문제를 읽고, 도형을 조작하고, 다음 학습으로 돌아오는 과정을 담았습니다.</p><div className="geomate-feature-list">{features.map(feature => <article key={feature.id}><div className="geomate-feature-screen"><Tablet screen={feature.screen} label={`${feature.title.replace('\n', ' ')} 실제 앱 화면`} /></div><div className="geomate-feature-copy"><p className="geomate-kicker">{feature.id} / {feature.label}</p><h3>{feature.title.split('\n').map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h3><p>{feature.description}</p><aside><b>UX / IMPLEMENTATION</b><p>{feature.decision}</p></aside></div></article>)}</div></section>

      <section className="geomate-section geomate-case-section" id="geomate-troubleshooting"><div className="geomate-heading"><p>05 · ACTION / TROUBLESHOOTING</p><h2>겉으로 보인 오류보다<br />좌표와 상태의 경계를 살폈습니다.</h2></div><div className="geomate-cases">{cases.map((item, index) => <details key={item.number} open={index === 0}><summary><span>{item.number}</span><h3>{item.title}</h3><i aria-hidden="true">+</i></summary><div className="geomate-case-body"><div><b>PROBLEM</b><p>{item.problem}</p></div><div><b>ROOT CAUSE</b><p>{item.cause}</p></div><div><b>ACTION</b><p>{item.action}</p></div><div className="geomate-case-result"><b>LEARNING</b><p>{item.result}</p></div></div></details>)}</div></section>

      <section className="geomate-result" id="geomate-result"><p className="geomate-kicker">06 · RESULT & RETROSPECTIVE</p><h2>화면을 구현하는 것에서,<br /><strong>학습이 이어지는 경험을 만드는 것으로.</strong></h2><p>지오메이트는 원스토어에서 확인할 수 있습니다. 이 프로젝트를 통해 프론트엔드는 데이터를 표시하는 역할을 넘어, 비동기 작업과 사용자 입력 사이에서 현재 상태와 다음 행동을 명확하게 만드는 역할임을 배웠습니다.</p><p>특히 태블릿의 넓은 화면에서도 입력과 조작은 작은 좌표 차이로 어긋날 수 있었습니다. 공통 UI, 저장·복원 기준, API 계약과 실제 기기 검증을 함께 다뤄야 일관된 사용 경험을 만들 수 있다는 점을 확인했습니다.</p><div className="geomate-result-links"><a href="#projects">← 프로젝트 목록</a><a href="#/projects/dodam">도담 프로젝트 보기 →</a><a className="geomate-store" href={storeUrl} target="_blank" rel="noopener noreferrer">원스토어에서 앱 보기 ↗</a></div></section>
    </div>
  </article>
}
