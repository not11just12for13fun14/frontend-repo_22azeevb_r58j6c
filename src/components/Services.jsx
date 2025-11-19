import { Camera, Clapperboard, Sparkles, MonitorSmartphone } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Production',
    desc: 'End-to-end video production: pre‑prod, on‑set, and post.'
  },
  {
    icon: Clapperboard,
    title: 'Directing',
    desc: 'Narrative and performance direction for films and ads.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Editing & Motion',
    desc: 'Cutting, color, and motion design for crisp, modern stories.'
  },
  {
    icon: Sparkles,
    title: 'Creative',
    desc: 'Concept, scripting, and art direction with minimalist aesthetics.'
  }
]

const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-blue-200/80">Minimal, technology‑driven production with a cinematic eye.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white grid place-items-center shadow-lg shadow-blue-500/30">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
