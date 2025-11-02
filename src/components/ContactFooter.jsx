import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Send } from 'lucide-react';

const ContactFooter = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 2000);
    }, 1200);
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#0b0f1f] via-[#070b15] to-[#060913] text-white">
      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-3xl font-semibold text-transparent">
            Let’s Build Something Great
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300/90">Have an idea? Let’s turn it into reality.</p>
          <p className="mt-2 text-sm text-slate-400">Email: <a href="mailto:sinthanaistack@gmail.com" className="underline decoration-cyan-400/50 underline-offset-4">sinthanaistack@gmail.com</a></p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Name</label>
                <input required type="text" className="w-full rounded-lg border border-white/10 bg-[#0a0f1f] px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <input required type="email" className="w-full rounded-lg border border-white/10 bg-[#0a0f1f] px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-slate-300">Message</label>
              <textarea required rows="5" className="w-full rounded-lg border border-white/10 bg-[#0a0f1f] px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Tell us about your idea..." />
            </div>
            <button disabled={sending} className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(56,189,248,0.45)] ring-1 ring-white/20 transition-transform hover:scale-[1.02] disabled:opacity-60">
              <Send size={16} className={sending ? 'animate-pulse' : ''} />
              {sending ? 'Sending...' : sent ? 'Sent!' : 'Send Message'}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 text-center"
          >
            <p className="max-w-md text-slate-300/90">
              Connect with us on social media to see our latest work, behind-the-scenes, and tech insights.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/15 transition hover:bg-white/20 hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]"><Linkedin size={18} /> LinkedIn</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/15 transition hover:bg-white/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"><Github size={18} /> GitHub</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/15 transition hover:bg-white/20 hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]"><Instagram size={18} /> Instagram</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-gradient-to-r from-[#070b15] via-[#0b0f1f] to-[#070b15] px-6 py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_120px_at_20%_50%,rgba(99,102,241,0.2),transparent),radial-gradient(400px_120px_at_80%_50%,rgba(34,211,238,0.2),transparent)]" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-3 text-center text-slate-300">
          <img src="/sindhanaistack_logo_primary.png" alt="SinthanaiStack" className="h-8 w-8 rounded-md shadow-[0_0_30px_rgba(99,102,241,0.35)]" />
          <p className="text-sm">© 2025 SinthanaiStack — From Thought to Technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooter;
