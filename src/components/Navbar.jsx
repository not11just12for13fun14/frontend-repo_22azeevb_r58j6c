import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 })

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#clients', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
  ]

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 origin-left"
        style={{ scaleX }}
      />

      <div className="backdrop-blur-md bg-slate-900/50 border-b border-white/10 supports-[backdrop-filter]:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30 grid place-items-center text-white font-bold will-change-transform group-hover:scale-[1.03] transition-transform">
              ZS
            </div>
            <div>
              <p className="text-white font-semibold tracking-tight leading-none group-hover:text-white/90 transition-colors">Zenin Studios</p>
              <p className="text-xs text-blue-200/80 leading-none">Media Production</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="relative group text-blue-100/90 hover:text-white transition-colors">
                <span className="relative z-10">{item.label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full bg-white/60 transition-all duration-300" />
              </a>
            ))}
            <a href="#contact" className="ml-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:opacity-90 transition will-change-transform">
              Get a quote
            </a>
          </nav>

          <button className="md:hidden text-white" aria-label="Toggle Menu" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-md">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-blue-100 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-block rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold">
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
