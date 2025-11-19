import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#clients', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30 grid place-items-center text-white font-bold">
            SZ
          </div>
          <div>
            <p className="text-white font-semibold tracking-tight leading-none">Studio Zenin</p>
            <p className="text-xs text-blue-200/80 leading-none">Media Production</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-blue-100/90 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:opacity-90 transition">
            Get a quote
          </a>
        </nav>

        <button className="md:hidden text-white" aria-label="Toggle Menu" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
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
