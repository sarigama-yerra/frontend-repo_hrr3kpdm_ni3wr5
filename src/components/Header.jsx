import React from 'react';

export default function Header() {
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" onClick={(e)=>handleClick(e,'#home')} className="text-xl font-semibold tracking-tight text-white">Dev Portfolio</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#home" onClick={(e)=>handleClick(e,'#home')} className="text-slate-300 hover:text-white transition">Home</a>
          <a href="#projects" onClick={(e)=>handleClick(e,'#projects')} className="text-slate-300 hover:text-white transition">Projects</a>
          <a href="#contact" onClick={(e)=>handleClick(e,'#contact')} className="text-slate-300 hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
