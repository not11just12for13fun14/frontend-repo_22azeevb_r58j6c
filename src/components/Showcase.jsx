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
  return (
    <section id="work" className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-3 text-blue-200/80">A glimpse into our visual world.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reels.map((item) => (
            <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="group block rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="aspect-video overflow-hidden">
                <img src={item.thumb} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-xs text-blue-200/70">Vimeo</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
