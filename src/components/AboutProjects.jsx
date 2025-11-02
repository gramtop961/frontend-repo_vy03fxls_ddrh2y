import { motion } from 'framer-motion';
import { Lightbulb, Target, Shield, Smartphone, Layout, CreditCard } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.5 } }),
};

const GlowCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-100px' }}
    variants={cardVariants}
    whileHover={{ y: -3 }}
    className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-shadow duration-300"
  >
    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(120px 60px at 20% 0%, rgba(129,140,248,0.35), transparent), radial-gradient(120px 60px at 80% 100%, rgba(34,211,238,0.35), transparent)' }} />
    <div className="relative z-10">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 text-cyan-300 ring-1 ring-white/10">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-300/90">{desc}</p>
    </div>
  </motion.div>
);

const ProjectCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-100px' }}
    variants={cardVariants}
    whileHover={{ y: -4 }}
    className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur-sm"
  >
    <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 30px rgba(34,211,238,0.25) inset, 0 0 50px rgba(99,102,241,0.18)' }} />
    <div className="relative z-10">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 text-cyan-300 ring-1 ring-white/10">
        <Icon size={24} />
      </div>
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
      <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 transition-all hover:bg-white/15 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]">
        View Project Details
      </button>
    </div>
  </motion.div>
);

const AboutProjects = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-[#0b0f1f] via-[#0a1228] to-[#0a0f20] py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-400/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Turning Ideas into Innovation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300/90">
            At SinthanaiStack, we bring your ideas to life through modern, efficient, and scalable technology.
            From concept to code, we innovate at every step.
          </p>
        </motion.div>

        {/* Vision | Mission | Values */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <GlowCard index={1} icon={Lightbulb} title="Vision" desc="Empower creators with futuristic digital experiences." />
          <GlowCard index={2} icon={Target} title="Mission" desc="Deliver reliable, scalable solutions with speed and precision." />
          <GlowCard index={3} icon={Shield} title="Values" desc="Integrity, craft, and a relentless focus on the user." />
        </div>

        {/* Projects */}
        <div id="projects" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl font-semibold text-white"
          >
            Projects & Innovations
          </motion.h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard index={1} icon={CreditCard} title="Billing Software" desc="Fast, reliable, and feature-rich billing management." />
            <ProjectCard index={2} icon={Layout} title="Portfolio Website" desc="Elegant, responsive, and performance-first web design." />
            <ProjectCard index={3} icon={Smartphone} title="Mobile App" desc="Cross-platform apps with sleek UI and smooth UX." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjects;
