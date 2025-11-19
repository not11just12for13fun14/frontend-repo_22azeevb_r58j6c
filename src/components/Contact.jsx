import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      await new Promise((r) => setTimeout(r, 600))
      setStatus('Thanks — we\'ll get back to you shortly!')
      e.target.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_30%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-white">Let\'s make something beautiful</motion.h2>
        <p className="mt-3 text-blue-200/80">Tell us a bit about your project — scope, timeline, and goals.</p>

        <motion.form onSubmit={handleSubmit} className="mt-10 grid gap-4"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <input required type="email" name="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
          <input name="company" placeholder="Company (optional)" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <select name="service" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
            <option className="bg-slate-900">Production</option>
            <option className="bg-slate-900">Directing</option>
            <option className="bg-slate-900">Editing & Motion</option>
            <option className="bg-slate-900">Creative</option>
          </select>
          <textarea required name="message" rows="5" placeholder="Tell us about your project" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button type="submit" className="rounded-full bg-white text-slate-900 px-6 py-3 font-semibold hover:opacity-90 transition w-full sm:w-auto">Send inquiry</button>
            <p className="text-blue-200/80 text-sm h-6">{status}</p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
