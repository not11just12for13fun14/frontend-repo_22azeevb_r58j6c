import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/20 to-slate-900 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(2,6,23,0.0),rgba(2,6,23,0.8))] pointer-events-none" />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Crafting cinematic visuals for brands, artists, and storytellers
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-blue-100/90">
              Studio Zenin is a modern media production company specializing in commercials, music videos, product films, and branded content.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-white text-slate-900 px-5 py-3 font-semibold hover:opacity-90 transition">
                See our work
              </a>
              <a href="#contact" className="rounded-full border border-white/20 text-white px-5 py-3 font-semibold hover:bg-white/10 transition">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
