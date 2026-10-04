// Language-independent data: links, tags, dates. Translated text lives in content.js.
// Dates are 'YYYY-MM' (or 'YYYY-MM-DD'); month names come from content.js.

export const links = {
  email: 'shixiibrahimov@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shixiibrahimov/',
  github: 'https://github.com/1brah1m0f',
  instagram: 'https://www.instagram.com/sixi.ibrahimli/',
  cv: '/Shikhi_Ibrahimov_CV.docx',
  recommendation: '/Shikhi_Ibrahimov_Recommendation_Orbit_Catapult.pdf',
}

export const stats = [
  { id: 'awards', value: '5' },
  { id: 'products', value: '6+' },
  { id: 'repos', value: '35+' },
  { id: 'summit', value: '1' },
]

// Scrolling strip under the hero
export const marquee = [
  'Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'FastAPI', 'PostgreSQL',
  'Supabase', 'Prisma', 'Tailwind CSS', 'AWS', 'Gemini AI', 'LLMs', 'Vector DB', 'Playwright', 'Figma',
]

export const experience = [
  {
    id: 'aws',
    start: '2026-05',
    end: null,
    tags: ['AWS', 'Cloud', 'Community', 'Workshops'],
  },
  {
    id: 'neurotime',
    start: '2026-02',
    end: '2026-05',
    url: 'https://www.neurotime.ai',
    tags: ['Python', 'LLM', 'Embeddings', 'Vector DB', 'Playwright'],
  },
  {
    id: 'oyu',
    start: '2025-11',
    end: null,
    tags: ['Event management', 'Startups', 'Project management'],
  },
]

// featured: shown as a large card. icon: cover icon name (see Projects.jsx).
// image: optional screenshot path in /public (e.g. '/projects/openly.png') — replaces the icon cover.
export const projects = [
  {
    id: 'openly',
    image: '/projects/openly.jpg',
    featured: true,
    icon: 'globe',
    start: '2026-09',
    end: null,
    tags: ['React', 'TypeScript', 'Supabase', 'Gemini AI', 'Resend', 'Tailwind'],
    live: 'https://www.openlyapply.com',
    video: 'https://www.instagram.com/reel/DeBmKUMqQhB/',
    code: 'https://github.com/1brah1m0f/Voluntering-platform',
  },
  {
    id: 'seasentry',
    image: '/projects/seasentry.jpg',
    featured: true,
    team: true,
    icon: 'satellite',
    start: '2026-07',
    end: '2026-09',
    tags: ['Next.js 16', 'FastAPI', 'PostgreSQL', 'Leaflet', 'Satellite SAR', 'AI'],
    live: 'https://seasentry.vercel.app',
    video: 'https://drive.google.com/file/d/1J9HH3rv2HppjuHZVmvWZBaTckl4_6wiX/view',
    code: 'https://github.com/Kanan-peoiks/Seasentry',
  },
  {
    id: 'kiberedu',
    image: '/projects/kiberedu.jpg',
    icon: 'shield',
    start: '2026-08',
    end: '2026-10',
    tags: ['Next.js', 'React 19', 'NestJS', 'Prisma', 'Supabase', 'Tailwind'],
    live: 'https://kiber-edu-az-one.vercel.app/',
    video: 'https://youtu.be/XpwtyzCIKU8',
    code: 'https://github.com/1brah1m0f/KiberEduAz',
  },
  {
    id: 'farmorfx',
    image: '/projects/farmorfx.jpg',
    icon: 'leaf',
    start: '2026',
    tags: ['Next.js 16', 'React 19', 'Prisma', 'PostgreSQL', 'Google Maps', 'Gemini AI'],
    live: 'https://farmorfx.vercel.app',
    code: 'https://github.com/1brah1m0f/agro-turizm',
  },
  {
    id: 'nextevent',
    image: '/projects/nextevent.jpg',
    icon: 'calendar',
    start: '2026-04',
    end: '2026-05',
    tags: ['TypeScript', 'Full-stack', 'Maps', 'Vercel', 'Render'],
    live: 'https://event-hub-lilac-seven.vercel.app',
    video: 'https://youtube.com/shorts/oycqlxHBlPs',
    code: 'https://github.com/1brah1m0f/eventHub',
  },
  {
    id: 'asc',
    image: '/projects/asc.jpg',
    icon: 'rocket',
    start: '2026',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'i18n'],
    live: 'https://azerbaijan-startup-community.vercel.app',
    code: 'https://github.com/1brah1m0f/Azerbaijan-Startup-Community',
  },
]

// place: 2 / 3 drive the badge style; 'nom' = prize nomination
// Optional news/posts shown under an award:
//   news: [{ source: 'LinkedIn', url: 'https://...' }, { source: 'Instagram', url: '...' }]
export const awards = [
  { id: 'gamejam', place: 3, date: '2026-05-23' },
  { id: 'farm2tour', place: 2, date: '2026-05-14' },
  { id: 'rccode', place: 'nom', date: '2026-05-11' },
  { id: 'azcon', place: 3, date: '2026-04-10' },
  {
    id: 'gencvizyon',
    place: 3,
    date: '2026-01-22',
    news: [{ source: 'Muallim.edu.az', url: 'https://muallim.edu.az/gencvizyon-ideyatonunun-final-merhelesi-kecirilib' }],
  },
  { id: 'ai4cyber', place: 3, date: '2026-01-22' },
]

// Press: articles about events/programs Shikhi took part in. Titles stay in the original language.
export const press = [
  {
    id: 'pgconnects',
    source: 'PocketGamer.biz',
    date: '2026-07-25',
    title: 'Thanks to the sponsors of PG Connects Summit Shanghai',
    url: 'https://www.pocketgamer.biz/thanks-to-the-sponsors-of-pg-connects-summit-shanghai/',
  },
  {
    id: 'gencvizyon',
    source: 'Muallim.edu.az',
    date: '2026-02-06',
    title: '“GəncVizyon” ideyatonunun final mərhələsi keçirilib',
    url: 'https://muallim.edu.az/gencvizyon-ideyatonunun-final-merhelesi-kecirilib',
  },
  {
    id: 'vistar',
    source: 'Ministry of Digital Development and Transport',
    date: '2025-12-17',
    title: '“Vistar” Center of Excellence Launched in Azerbaijan',
    url: 'https://mincom.gov.az/en/media-en/news/vistar-center-of-excellence-launched-in-azerbaijan',
  },
]

export const education = [
  { id: 'oyu', start: '2025-09', end: null, url: 'https://oyu.edu.az' },
  { id: 'holberton', start: '2025-11', end: null, url: 'https://holbertonschool.az/' },
  { id: 'hit', start: '2026-07', end: '2026-09', url: 'https://vistar.az/' },
]

export const skills = [
  { id: 'frontend', items: ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML / CSS', 'C++'] },
  { id: 'backend', items: ['Node.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'Supabase', 'Prisma', 'Vector DB'] },
  { id: 'ai', items: ['LLM apps', 'Gemini API', 'Embeddings', 'Semantic search', 'Playwright', 'E2E & API testing'] },
  { id: 'cloud', items: ['AWS', 'Vercel', 'Render', 'Git / GitHub', 'Figma'] },
]
