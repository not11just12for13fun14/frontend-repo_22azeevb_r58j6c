import { Camera, Clapperboard, Sparkles, MonitorSmartphone } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

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

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

const Services = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.1, 0.25, 0.12])

  return (
    <section id="services" ref={ref} className="relative py-24 bg-slate-950">
      <motion.div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" style={{ opacity: 1 }} />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: glowOpacity }}>
        <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(59,130,246,0.18),transparent_60%)]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-blue-200/80">Minimal, technology‑driven production with a cinematic eye.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition will-change-transform"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white grid place-items-center shadow-lg shadow-blue-500/30">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
