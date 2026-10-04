// Language-independent data: links, tags, dates. Translated text lives in content.js.

export const links = {
  email: 'shixiibrahimov@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shixiibrahimov/',
  github: 'https://github.com/1brah1m0f',
  cv: '/Shikhi_Ibrahimov_CV.docx',
}

export const stats = [
  { id: 'awards', value: '6' },
  { id: 'products', value: '5+' },
  { id: 'repos', value: '35+' },
  { id: 'summit', value: '1' },
]

export const experience = [
  {
    id: 'aws',
    start: '02/2026',
    end: null,
    tags: ['AWS', 'Cloud', 'Community', 'Workshops'],
  },
  {
    id: 'neurotime',
    start: '02/2026',
    end: '05/2026',
    url: 'https://www.neurotime.ai',
    tags: ['Python', 'LLM', 'Embeddings', 'Vector DB', 'Playwright'],
  },
  {
    id: 'oyu',
    start: '11/2025',
    end: null,
    tags: ['Event management', 'Startups', 'Project management'],
  },
]

export const projects = [
  {
    id: 'kiberedu',
    featured: true,
    year: '2026',
    status: 'active',
    tags: ['Next.js', 'React 19', 'NestJS', 'Prisma', 'Supabase', 'Tailwind'],
    live: 'https://kiber-edu-az-one.vercel.app/',
    code: 'https://github.com/1brah1m0f/KiberEduAz',
  },
  {
    id: 'nextevent',
    year: '2026',
    tags: ['TypeScript', 'Full-stack', 'Maps', 'Vercel', 'Render'],
    live: 'https://event-hub-psi-seven.vercel.app',
    video: 'https://youtube.com/shorts/oycqlxHBlPs',
    code: 'https://github.com/1brah1m0f/eventHub',
  },
  {
    id: 'coreapex',
    year: '2026',
    tags: ['React', 'FastAPI', 'Supabase', 'Llama 4', 'Google Maps', 'PWA'],
    live: 'https://coreapex.onrender.com',
    code: 'https://github.com/1brah1m0f/CoreApex',
  },
  {
    id: 'cybervision',
    year: '2026',
    tags: ['React 19', 'TypeScript', 'Gemini', 'Wazuh', 'Suricata'],
    code: 'https://github.com/1brah1m0f/cyber-vision',
  },
  {
    id: 'asc',
    year: '2026',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'i18n'],
    live: 'https://azerbaijan-startup-community.vercel.app',
    code: 'https://github.com/1brah1m0f/Azerbaijan-Startup-Community',
  },
]

// place: 2 / 3 drive the badge style; 'nom' = prize nomination
export const awards = [
  { id: 'gamejam', place: 3, date: '05/2026' },
  { id: 'farm2tour', place: 2, date: '05/2026' },
  { id: 'rccode', place: 'nom', date: '05/2026' },
  { id: 'azcon', place: 3, date: '04/2026' },
  { id: 'gencvizyon', place: 3, date: '01/2026' },
  { id: 'ai4cyber', place: 3, date: '01/2026' },
]

export const education = [
  { id: 'oyu', start: '09/2025', end: null, url: 'https://oyu.edu.az' },
  { id: 'holberton', start: '10/2025', end: null, url: 'https://holbertonschool.az/' },
  { id: 'hit', start: '07/2026', end: null, url: 'https://vistar.az/' },
]

export const skills = [
  { id: 'frontend', items: ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML / CSS', 'C++'] },
  { id: 'backend', items: ['Node.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'Supabase', 'Prisma', 'Vector DB'] },
  { id: 'ai', items: ['LLM apps', 'Embeddings', 'Semantic search', 'Playwright', 'E2E & API testing'] },
  { id: 'cloud', items: ['AWS', 'Vercel', 'Render', 'Git / GitHub', 'Figma'] },
]
