export const portfolioSections = [
  { title: '소개', group: 'ABOUT' },
  { title: '기획과 개발의 기준', group: 'APPROACH' },
  { title: '일하는 방식', group: 'PROCESS' },
  { title: '선택한 프로젝트', group: 'PROJECTS' },
  { title: 'Geomate · 서비스와 역할', group: 'GEOMATE' },
  { title: 'Geomate · 학습 흐름 설계', group: 'GEOMATE' },
  { title: 'Geomate · 필기 좌표 복원', group: 'GEOMATE' },
  { title: 'Geomate · 비동기 요청과 세션', group: 'GEOMATE' },
  { title: 'Dodam · 서비스와 역할', group: 'DODAM' },
  { title: 'Dodam · 판단을 돕는 화면', group: 'DODAM' },
  { title: 'Projectree · 협업과 데이터 흐름', group: 'PROJECTREE' },
  { title: 'Dit · AI 응답과 사용자 맥락', group: 'DIT' },
  { title: 'Sangchu · 분석 결과의 서비스화', group: 'SANGCHU' },
  { title: '경험과 연락처', group: 'CONTACT' },
]

export const selectedProjects = [
  { title: 'Geomate', detail: '직접 조작하며 배우는 도형 학습', role: '학생 UI/UX · API 연동 · 태블릿 QA', period: '2026.10 — 11', cover: '/images/projects/geomate/geomate-cover.png', page: 5, href: '#/projects/geomate', question: '학습을 나갔다 돌아와도 같은 생각을 이어갈 수 있을까?' },
  { title: 'Dodam', detail: '선택을 돕는 금융 코칭', role: 'Frontend · UX 흐름 · API 연동', period: '2026.08 — 09', cover: '/images/projects/dodam/dodam-cover.jpg', page: 9, href: '#/projects/dodam', question: '사용자가 자신의 상태를 이해하고 다음 행동을 고를 수 있을까?' },
  { title: 'Projectree', detail: '회의와 다음 작업을 잇는 협업', role: 'Frontend · 협업 흐름 · 캐시 설계', period: '2026.07 — 08', cover: '/images/projects/projectree/projectree-cover.png', page: 11, href: '#/projects/projectree', question: '기다림을 줄이면서도 최신 정보를 유지할 수 있을까?' },
  { title: 'Dit', detail: '개발 성향에 맞춘 프로젝트 추천', role: 'Full-stack · 추천 UX · AI 연동', period: '2026.06', cover: '/images/projects/dit/dit-cover.png', page: 12, href: '#/projects/dit', question: 'AI의 응답을 사용자가 선택할 수 있는 정보로 바꿀 수 있을까?' },
  { title: 'Sangchu', detail: '상권 분석과 월세 예측', role: '데이터 구조화 · 모델 · Django 연동', period: 'DATA / ML', cover: '/images/projects/sangchu/sangchu-cover.png', page: 13, href: '#/projects/sangchu', question: '분석 결과를 실제 탐색과 비교에 사용할 수 있을까?' },
]

export const workingSteps = [
  { number: '01', title: '판단할 순간 찾기', question: '사용자는 여기서 무엇을 결정해야 할까?', work: '기능을 정하기 전에 사용자의 상황과 다음 행동을 먼저 적습니다.', evidence: 'Dodam · 금융 정보 조회를 상태 해석과 행동 선택의 흐름으로 정리' },
  { number: '02', title: '상태와 계약 맞추기', question: '아직 없거나, 실패하거나, 돌아온다면?', work: '응답의 의미와 식별자, 로딩·빈 상태·실패 이후의 행동을 함께 정의합니다.', evidence: 'Geomate · 문제·예제·학습 시도 ID와 접수 불확실 상태 구분' },
  { number: '03', title: '같은 기준으로 구현하기', question: '화면이 바뀌어도 유지해야 할 것은?', work: '공통 UI와 저장 기준, 캐시의 유효 범위를 정해 기능 사이의 틈을 줄입니다.', evidence: 'Projectree · 응답 캐시와 진행 중 요청을 분리하고 무효화 시점 정의' },
  { number: '04', title: '실제 환경에서 확인하기', question: '사용자의 기기에서도 끝까지 이어질까?', work: '키보드·화면 크기·저장과 재진입 등 실제 사용 흐름으로 확인합니다.', evidence: 'Geomate · Android 태블릿과 릴리스 APK에서 입력·복원·복귀 QA' },
]
