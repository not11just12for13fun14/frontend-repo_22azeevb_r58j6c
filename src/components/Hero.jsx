import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  // Parallax for foreground content and badges as the hero scrolls out
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.8, 0.6])
  const badgesY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  return (
    <section ref={ref} className="relative h-[100vh] min-h-[620px] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full w-full">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/30 to-slate-950 pointer-events-none"
          style={{ opacity: vignetteOpacity }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(2,6,23,0.0),rgba(2,6,23,0.9))] pointer-events-none" />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Cinematic production for brands, artists, and innovators
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-blue-100/90">
              Zenin Studios crafts commercials, music videos, and product films with minimal aesthetics and cutting‑edge tech.
            </p>
            <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <a href="#work" className="rounded-full bg-white text-slate-900 px-5 py-3 font-semibold hover:opacity-90 transition will-change-transform">
                See our work
              </a>
              <a href="#contact" className="rounded-full border border-white/20 text-white px-5 py-3 font-semibold hover:bg-white/10 transition will-change-transform">
                Get in touch
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3"
          style={{ y: badgesY, opacity: contentOpacity }}
        >
          <span className="rounded-full bg-white/10 text-white/90 backdrop-blur px-3 py-1 text-xs border border-white/15">4K HDR</span>
          <span className="rounded-full bg-white/10 text-white/90 backdrop-blur px-3 py-1 text-xs border border-white/15">Aerial</span>
          <span className="rounded-full bg-white/10 text-white/90 backdrop-blur px-3 py-1 text-xs border border-white/15">Motion</span>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 text-white/70"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ opacity: contentOpacity }}
        >
          <span className="text-xs tracking-wide">Scroll</span>
          <span className="h-6 w-[1px] bg-white/30 relative overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/60 to-transparent animate-[scrollCue_1.6s_ease-in-out_infinite]" />
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
