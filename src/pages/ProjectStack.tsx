import SkillLogo from './SkillLogo'
import './ProjectStack.css'

const stacks = {
  geomate: [{ label: 'MY STACK', tools: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'TanStack Query', 'Zustand', 'Reanimated'] }],
  dodam: [
    { label: 'MY STACK', tools: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Reanimated', 'EAS Build'] },
    { label: 'SERVICE STACK', tools: ['Spring Boot', 'K-Means'] },
  ],
  projectree: [
    { label: 'MY STACK', tools: ['React', 'TypeScript', 'Vite', 'Zustand', 'React Router', 'CSS Modules', 'SSE'] },
    { label: 'SERVICE STACK', tools: ['LiveKit', 'Three.js', 'React Three Fiber', 'Spring Boot'] },
  ],
  dit: [
    { label: 'FRONTEND', tools: ['Vue 3', 'JavaScript', 'Vite', 'Pinia', 'Vue Router', 'Axios', 'Bootstrap 5'] },
    { label: 'BACKEND & AI', tools: ['Python', 'Django', 'Django REST Framework', 'DRF Token Authentication', 'SQLite', 'OpenAI-compatible API'] },
  ],
  sangchu: [
    { label: 'MY STACK', tools: ['Python', 'Django', 'Pandas', 'NumPy', 'scikit-learn', 'JavaScript'] },
    { label: 'SERVICE STACK', tools: ['Django', 'Highcharts', 'Kakao Map API', 'Bootstrap', 'jQuery'] },
  ],
}

export default function ProjectStack({ project }: { project: keyof typeof stacks }) {
  return <div className="project-stack-badges" aria-label="프로젝트 기술 스택">{stacks[project].map(group => <div className="project-stack-group" key={group.label}><span className="project-stack-label">{group.label}</span><ul>{group.tools.map(name => <li key={name}><span className="project-stack-logo"><SkillLogo name={name} /></span><span>{name}</span></li>)}</ul></div>)}</div>
}
