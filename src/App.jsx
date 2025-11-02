import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import AboutProjects from './components/AboutProjects';
import Team from './components/Team';
import ContactFooter from './components/ContactFooter';

function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('pointermove', handler);
    return () => window.removeEventListener('pointermove', handler);
  }, []);

  return (
    <div className="scroll-smooth antialiased">
      {/* Glowing cursor effect */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-50 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18)_0%,rgba(56,189,248,0.08)_45%,transparent_60%)] blur-2xl"
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
      />

      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-40">
        <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#0b0f1f]/60 px-4 py-2 text-white backdrop-blur-md">
          <div className="flex items-center gap-3">
            <img src="/sindhanaistack_logo_primary.png" alt="SinthanaiStack" className="h-8 w-8 rounded-md" />
            <span className="hidden text-sm font-medium text-slate-200 sm:block">SinthanaiStack</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <a href="#about" className="rounded-full px-3 py-1 text-slate-200 transition hover:bg-white/10">About</a>
            <a href="#projects" className="rounded-full px-3 py-1 text-slate-200 transition hover:bg-white/10">Projects</a>
            <a href="#team" className="rounded-full px-3 py-1 text-slate-200 transition hover:bg-white/10">Team</a>
            <a href="#contact" className="rounded-full bg-white/10 px-3 py-1 text-slate-100 ring-1 ring-white/10 transition hover:bg-white/15">Contact</a>
          </div>
        </nav>
      </header>

      {/* Sections */}
      <main className="relative">
        <Hero />
        <AboutProjects />
        <Team />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
