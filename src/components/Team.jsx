import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const TeamCard = ({ name, role, index }) => (
  <motion.div
    custom={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5, delay: 0.08 * index }}
    whileHover={{ y: -4 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 text-white backdrop-blur-sm"
  >
    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 35px rgba(129,140,248,0.25) inset, 0 0 50px rgba(34,211,238,0.18)' }} />
    <div className="relative z-10">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 ring-1 ring-white/10" />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-slate-300/90">{role}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <a href="#" className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white ring-1 ring-white/15 transition hover:bg-white/20">
          <Linkedin size={18} />
        </a>
        <a href="#" className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white ring-1 ring-white/15 transition hover:bg-white/20">
          <Github size={18} />
        </a>
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <section id="team" className="relative w-full bg-gradient-to-b from-[#0a0f20] via-[#0a1228] to-[#0b0f1f] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-3xl font-semibold text-transparent">
            Meet the Thinkers
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300/90">
            The minds powering SinthanaiStack — building the future with code and creativity.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TeamCard index={1} name="Harish Aabitheen" role="Developer & Innovator" />
          <TeamCard index={2} name="[Friend’s Name]" role="Designer & Co-Founder" />
        </div>
      </div>
    </section>
  );
};

export default Team;
