import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-tight text-white">Dev Portfolio</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#home" className="text-slate-300 hover:text-white transition">Home</a>
          <a href="#projects" className="text-slate-300 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
