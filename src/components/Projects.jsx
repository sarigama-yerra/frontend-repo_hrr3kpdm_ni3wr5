import React from 'react';

const sampleProjects = [
  {
    title: 'AI Image Classifier',
    description: 'A TensorFlow-based CNN that classifies images with real-time visualization.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live Demo', href: '#' },
    ],
  },
  {
    title: 'Data Dashboard',
    description: 'Interactive data visualization dashboard built with React and D3.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXRhJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjI3MzU3NjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live Demo', href: '#' },
    ],
  },
  {
    title: 'ML Deployment Toolkit',
    description: 'Streamlined deployment pipeline for serving ML models with FastAPI.',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Docs', href: '#' },
    ],
  },
];

function ProjectCard({ title, description, image, links }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#00bfff]/50 transition shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="text-[#00bfff] hover:underline text-sm">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-[#05060a] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
          <p className="text-slate-400 mt-2">A selection of work spanning AI, data visualization, and web development.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
