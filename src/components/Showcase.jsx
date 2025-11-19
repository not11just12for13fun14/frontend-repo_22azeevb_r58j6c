import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const reels = [
  {
    title: 'Commercial Reel',
    thumb: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
    url: 'https://player.vimeo.com/video/76979871?h=7bba90c6a7'
  },
  {
    title: 'Music Video Reel',
    thumb: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1600&auto=format&fit=crop',
    url: 'https://player.vimeo.com/video/357274789?h=88df3fc2f0'
  },
  {
    title: 'Product Film Reel',
    thumb: 'https://images.unsplash.com/photo-1495555687392-4b2d83c23e1d?q=80&w=1600&auto=format&fit=crop',
    url: 'https://player.vimeo.com/video/1084537'
  }
]

const Showcase = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const sectionY = useTransform(scrollYProgress, [0, 1], [24, -24])
  const sectionOpacity = useTransform(scrollYProgress, [0, 1], [0.95, 1])

  return (
    <section id="work" ref={ref} className="relative py-24 bg-slate-950">
      <motion.div className="relative max-w-7xl mx-auto px-6" style={{ y: sectionY, opacity: sectionOpacity }}>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-3 text-blue-200/80">A glimpse into our visual world.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reels.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition will-change-transform"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aspect-video overflow-hidden">
                <img src={item.thumb} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-xs text-blue-200/70">Vimeo</p>
                </div>
                <span className="text-xs text-white/70 group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Showcase
