// Small inline SVG icon set (stroke icons follow the Lucide style).

function Stroke({ children, className = 'size-5', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {children}
    </svg>
  )
}

export const ArrowUpRight = (p) => (
  <Stroke {...p}>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </Stroke>
)

export const ArrowDown = (p) => (
  <Stroke {...p}>
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </Stroke>
)

export const ArrowUp = (p) => (
  <Stroke {...p}>
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </Stroke>
)

export const Mail = (p) => (
  <Stroke {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Stroke>
)

export const MapPin = (p) => (
  <Stroke {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Stroke>
)

export const Sun = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2m-7.07-2.93 1.41-1.41m11.32-11.32 1.41-1.41M2 12h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41" />
  </Stroke>
)

export const Moon = (p) => (
  <Stroke {...p}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </Stroke>
)

export const Menu = (p) => (
  <Stroke {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Stroke>
)

export const Close = (p) => (
  <Stroke {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Stroke>
)

export const Download = (p) => (
  <Stroke {...p}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
    <path d="M12 15V3" />
  </Stroke>
)

export const Play = (p) => (
  <Stroke {...p}>
    <path d="m6 3 14 9-14 9V3Z" />
  </Stroke>
)

export const Check = (p) => (
  <Stroke {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Stroke>
)

export const Copy = (p) => (
  <Stroke {...p}>
    <rect x="8" y="8" width="14" height="14" rx="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </Stroke>
)

export const Trophy = (p) => (
  <Stroke {...p}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </Stroke>
)

export const Globe = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </Stroke>
)

export const GraduationCap = (p) => (
  <Stroke {...p}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </Stroke>
)

export const Shield = (p) => (
  <Stroke {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
    <path d="m9 12 2 2 4-4" />
  </Stroke>
)

export const Leaf = (p) => (
  <Stroke {...p}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </Stroke>
)

export const Satellite = (p) => (
  <Stroke {...p}>
    <path d="M13 7 9 3 5 7l4 4" />
    <path d="m17 11 4 4-4 4-4-4" />
    <path d="m8 12 4 4 6-6-4-4Z" />
    <path d="m16 8 3-3" />
    <path d="M9 21a6 6 0 0 0-6-6" />
  </Stroke>
)

export const Calendar = (p) => (
  <Stroke {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Stroke>
)

export const Rocket = (p) => (
  <Stroke {...p}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </Stroke>
)

export const Cloud = (p) => (
  <Stroke {...p}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </Stroke>
)

export const FileText = (p) => (
  <Stroke {...p}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8M16 13H8M16 17H8" />
  </Stroke>
)

export const Users = (p) => (
  <Stroke {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Stroke>
)

export const Instagram = (p) => (
  <Stroke {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <path d="M17.5 6.5h.01" />
  </Stroke>
)

export const Github = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

export const Linkedin = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)
