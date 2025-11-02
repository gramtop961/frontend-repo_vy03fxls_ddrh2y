import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleExplore = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#0b1224,transparent_60%),radial-gradient(circle_at_80%_30%,#0b1020,transparent_50%),linear-gradient(180deg,#070b15,#0b0f1f)] text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          style={{ width: '100%', height: '100%' }}
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
        />
      </div>

      {/* Soft gradient veil to enhance readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#070b15]/30 to-[#070b15]" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-300/60 blur-[1px] animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: '0 0 12px rgba(34,211,238,0.6)'
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Logo with glow, tilt and reflection */}
          <motion.div
            whileHover={{ rotateZ: 1.5, rotateX: 6, rotateY: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="relative"
          >
            <img
              src="/sindhanaistack_logo_primary.png"
              alt="SinthanaiStack Logo"
              className="h-28 w-28 select-none rounded-xl object-contain shadow-[0_0_60px_10px_rgba(99,102,241,0.35)] ring-1 ring-indigo-400/30"
            />
            {/* Reflection / glow */}
            <div className="pointer-events-none absolute -bottom-2 left-1/2 h-4 w-24 -translate-x-1/2 rounded-full bg-cyan-300/30 blur-xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl"
          >
            Welcome to SinthanaiStack
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-3 text-lg text-slate-200/90 sm:text-xl"
          >
            <span className="relative">
              <span className="relative z-10">From Thought to Technology.</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-4 w-full rounded-full bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/30 to-cyan-500/30 blur-xl" />
            </span>
          </motion.p>

          <motion.button
            onClick={handleExplore}
            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(56,189,248,0.6)' }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(56,189,248,0.45)] ring-1 ring-white/20"
          >
            Explore Our Innovations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
