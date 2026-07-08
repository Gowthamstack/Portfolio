const METRICS = [
  { value: '100%', label: 'unauthorized access risk removed · JWT + HTTP-only cookies' },
  { value: '40%', label: 'faster product discovery · dynamic filters + search' },
  { value: '60%', label: 'less image-related slowdown · Cloudinary CDN' },
  { value: '90%', label: 'faster order processing · Stripe webhooks' },
  { value: '50%', label: 'less admin time · role-protected dashboard' },
  { value: '10km', label: 'live match radius · GPS geolocation' },
]

// react-bits-style infinite marquee, duplicated once for a seamless loop.
export default function MetricsMarquee() {
  const items = [...METRICS, ...METRICS]
  return (
    <div className="border-t border-b border-slate-soft overflow-hidden bg-panel">
      <div className="flex w-max animate-scroll-left">
        {items.map((m, i) => (
          <div key={i} className="flex items-center gap-2.5 px-8 py-[18px] whitespace-nowrap border-r border-slate-soft">
            <span className="font-mono text-amber text-lg font-semibold">{m.value}</span>
            <span className="font-mono text-dim text-[12.5px]">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
