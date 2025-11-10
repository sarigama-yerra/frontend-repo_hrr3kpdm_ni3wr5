import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black text-slate-400 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Software Developer Portfolio</p>
          <a href="#home" className="text-[#00bfff] hover:underline">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
