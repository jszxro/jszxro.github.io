import { selectedProjects } from '../data/overviewStories'
import './ProjectCollection.css'

export default function ProjectCollection() {
  return <section className="work-collection" id="projects">
    <header className="collection-heading"><div><span>01 / A CLOSER LOOK</span><h2>생각이 화면이 되기까지.</h2></div><p>문제를 발견하고, 흐름을 설계하고,<br />실제로 작동하는 경험으로 만들었습니다.</p></header>
    <article className="case-study case-geomate">
      <a className="case-art" href="#/projects/geomate" aria-label="Geomate 프로젝트 자세히 보기">
        <div className="case-art-top"><span>GEOMATE</span><span>LEARNING, IN MOTION.</span></div><span className="case-art-word" aria-hidden="true">Explore.</span>
        <div className="case-tablet"><img src="/images/projects/geomate/screens/workspace.png" alt="도형을 조작하고 필기하는 지오메이트 학습 공간" loading="lazy" /></div>
        <img className="case-floating-screen" src="/images/projects/geomate/screens/home.png" alt="지오메이트 학생 홈" loading="lazy" />
        <span className="case-art-bottom">01 / INTERACTIVE LEARNING</span><span className="case-open" aria-hidden="true">↗</span>
      </a>
      <div className="case-editorial"><div className="case-title"><span>2026.10 — 11 / TABLET APP</span><h3><a href="#/projects/geomate">Geomate</a></h3><p>직접 조작하며 이해하는<br />도형 학습 서비스</p><a className="case-read-link" href="#/projects/geomate">프로젝트 자세히 보기 <span>↗</span></a></div><div className="case-detail"><span className="case-contribution-label">이 프로젝트에서 맡은 일</span><p className="case-contribution-headline">학습을 시작하고 돌아오는 순간까지,<br /><strong>생각이 끊기지 않는 화면을 만들었습니다.</strong></p><p>학생 홈과 문제 등록부터 학습 공간의 힌트·확인·저장까지, 화면과 API 상태를 연결했습니다.</p><div className="case-role-chips"><span>학생 UI/UX</span><span>API 연동</span><span>태블릿 QA</span></div><div className="case-tech-line"><span>TECH</span>React Native · Expo · TypeScript</div></div></div>
    </article>
    <article className="case-study case-dodam">
      <a className="case-art" href="#/projects/dodam" aria-label="Dodam 프로젝트 자세히 보기">
        <div className="case-art-top"><span>DODAM</span><span>SMALL STEPS, BETTER CHOICES.</span></div><div className="case-finance-copy" aria-hidden="true"><small>나를 위한 금융 코칭</small><span>오늘의 이해가,<br /><em>내일의 여유로.</em></span><p>내 자산을 이해하고<br />나에게 맞는 다음 한 걸음을 발견합니다.</p></div>
        <div className="case-phone-stack"><img src="/images/projects/dodam/screens/report-overview.png" alt="도담 금융 리포트" loading="lazy" /><img src="/images/projects/dodam/screens/home.png" alt="도담 자산과 목표 홈" loading="lazy" /><img src="/images/projects/dodam/screens/ai-coach.png" alt="도담 AI 금융 코칭" loading="lazy" /></div><span className="case-art-bottom">02 / PERSONAL FINANCE</span><span className="case-open" aria-hidden="true">↗</span>
      </a>
      <div className="case-editorial"><div className="case-title"><span>2026.08 — 09 / MOBILE APP</span><h3><a href="#/projects/dodam">Dodam</a></h3><p>이해에서 행동으로 이어지는<br />개인 금융 코칭 서비스</p><a className="case-read-link" href="#/projects/dodam">프로젝트 자세히 보기 <span>↗</span></a></div><div className="case-detail"><span className="case-contribution-label">이 프로젝트에서 맡은 일</span><p className="case-contribution-headline">자산을 확인하는 데서 멈추지 않고,<br /><strong>다음 금융 행동으로 이어지게 했습니다.</strong></p><p>흩어진 자산과 소비 정보를 정리하고, 내 상태 확인부터 목표 설정까지 화면과 API를 연결했습니다.</p><div className="case-role-chips"><span>프론트엔드</span><span>UX 흐름 설계</span><span>API 연동</span></div><div className="case-tech-line"><span>TECH</span>React Native · Expo · TypeScript</div></div></div>
    </article>
    <section className="work-directory" aria-labelledby="work-directory-title"><header className="collection-heading"><div><span>02 / PROJECT DIRECTORY</span><h2 id="work-directory-title">All projects<span className="directory-count">05</span></h2></div><p>다섯 가지 경험, 서로 다른 연결의 방식.</p></header>
      <div className="directory-grid">{selectedProjects.map((project, index) => <a className="directory-card" key={project.title} href={project.href}><div className="directory-thumbnail"><img src={project.cover} alt={`${project.title} 대표 화면`} loading="lazy" /><span className="directory-open" aria-hidden="true">↗</span></div><div className="directory-info"><span className="directory-number">0{index + 1}</span><div><h3>{project.title}</h3><p>{project.detail}</p><span className="directory-role">{project.role}</span></div></div></a>)}</div>
    </section>
  </section>
}
