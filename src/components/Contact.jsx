import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
          <p className="text-slate-400 mt-2">I’m always open to collaboration and opportunities—let’s connect.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 hover:border-[#00bfff]/50 hover:bg-white/10 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.216.682-.48 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.833.091-.648.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.949 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.545 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.846-2.338 4.694-4.566 4.943.359.31.679.922.679 1.858 0 1.34-.012 2.42-.012 2.75 0 .266.18.576.688.478A10.025 10.025 0 0 0 22 12.02C22 6.486 17.523 2 12 2Z" clipRule="evenodd"/></svg>
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/atha-dzaky-hidayanto-a74310221/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 hover:border-[#00bfff]/50 hover:bg-white/10 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.24 8.339h4.52V24H.24zM8.339 8.339H12.7v2.126h.063c.607-1.15 2.092-2.363 4.304-2.363C21.7 8.102 24 10.2 24 14.383V24h-4.52v-8.46c0-2.018-.036-4.615-2.81-4.615-2.81 0-3.24 2.198-3.24 4.47V24H8.339z"/></svg>
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
