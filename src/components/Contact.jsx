import { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Placeholder submit (no backend route yet) – this just simulates success
      await new Promise((r) => setTimeout(r, 600))
      setStatus('Thanks — we\'ll get back to you shortly!')
      e.target.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Let\'s make something beautiful</h2>
        <p className="mt-3 text-blue-200/80">Tell us a bit about your project — scope, timeline, and goals.</p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4">
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
        </form>
      </div>
    </section>
  )
}

export default Contact
