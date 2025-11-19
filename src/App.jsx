import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Contact from './components/Contact'
import { useEffect } from 'react'

function App() {
  // Smooth scroll behavior for in-page anchors
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length <= 1) return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      const y = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <Contact />

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Zenin Studios. All rights reserved.</p>
          <div className="flex items-center gap-4 text-blue-200/70 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
