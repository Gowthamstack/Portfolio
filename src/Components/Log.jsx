import ScrollReveal from './ScrollReveal.jsx'
import AnimatedCounter from './AnimatedCounter.jsx'

const ENTRIES = [
  {
    date: '2024 — 2026',
    title: 'MCA · Priyadarshini Engineering College',
    detail: 'Master of Computer Application, Vaniyambadi.',
  },
  {
    date: '2021 — 2024',
    title: 'BCA · Islamiah College',
    detail: 'Bachelor of Computer Application, Vaniyambadi.',
  },
  {
    date: 'ongoing',
    title: 'Code Blaster — 2nd Prize',
    detail: 'National-level technical symposium.',
  },
  {
    date: 'ongoing',
    title: 'LeetCode — 1400+ contest rating',
    detail: '250+ data structures & algorithms problems solved.',
  },
]

export default function Log() {
  return (
    <section id="log" className="py-24 border-b border-slate-soft">
      <div className="max-w-page mx-auto px-6">
        <div className="section-label">activity log</div>
        <h2 className="text-[clamp(28px,4vw,40px)] mb-5 font-display">A quick record of the work.</h2>

        <div className="flex gap-10 flex-wrap mb-11">
          <div>
            <div className="text-[34px] font-display text-green">
              <AnimatedCounter to={250} suffix="+" />
            </div>
            <div className="font-mono text-xs text-dim">LeetCode problems solved</div>
          </div>
          <div>
            <div className="text-[34px] font-display text-green">
              <AnimatedCounter to={1400} suffix="+" />
            </div>
            <div className="font-mono text-xs text-dim">contest rating</div>
          </div>
          <div>
            <div className="text-[34px] font-display text-green">
              <AnimatedCounter to={2} />
            </div>
            <div className="font-mono text-xs text-dim">live products shipped</div>
          </div>
        </div>

        <div className="grid gap-0">
          {ENTRIES.map((e, i) => (
            <ScrollReveal key={e.title} delay={i * 0.06} y={12}>
              <div className="grid grid-cols-[90px_20px_1fr] sm:grid-cols-[110px_20px_1fr] gap-4 pb-7">
                <div className="font-mono text-xs text-dim pt-0.5">{e.date}</div>
                <div className="flex flex-col items-center">
                  <span className="w-2 h-2 rounded-full bg-amber mt-1.5" />
                  {i !== ENTRIES.length - 1 && <span className="w-px flex-1 bg-slate mt-1" />}
                </div>
                <div>
                  <div className="text-[15.5px] text-ink-text">{e.title}</div>
                  <div className="text-[13.5px] text-muted mt-1">{e.detail}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
