import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="w-28 h-28 rounded-full ring-2 ring-[#00bfff]/60 overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
            Software Developer
          </h1>
          <p className="text-slate-300 leading-relaxed max-w-2xl">
            A highly motivated informatics undergraduate with hands-on experience in software development and machine learning. Skilled in TensorFlow, Python, and data visualization, with a strong focus on AI training and deployment. Dedicated to delivering precise and efficient solutions for real-world challenges.
          </p>
        </div>
        <div className="md:justify-self-end">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00bfff] animate-pulse"></span>
            <span className="text-slate-300">Available for opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
