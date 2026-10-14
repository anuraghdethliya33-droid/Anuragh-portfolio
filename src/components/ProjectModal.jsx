import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Cpu, Globe } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl border border-pink-200/90 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-pink-50 text-slate-500 hover:text-sakura-600 hover:bg-pink-100 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 text-sakura-700 text-xs font-semibold">
            <span>🌸</span>
            <span>{project.category}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Visual Showcase Banner */}
        <div className={`w-full h-44 sm:h-52 rounded-2xl bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden text-white shadow-inner`}>
          <div className="flex justify-between items-start">
            <span className="text-xs uppercase font-bold tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
              Project Case Study
            </span>
            <span className="text-3xl">🌸</span>
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-bold font-serif">{project.title}</h4>
            <p className="text-xs text-white/90 font-medium mt-1">Engineered by Anuragh • JECRC University</p>
          </div>
        </div>

        {/* Key Features List */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sakura-500" />
            <span>Key Capabilities & Architecture</span>
          </h4>
          <ul className="space-y-2.5">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-sakura-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl text-xs font-semibold text-sakura-700 bg-pink-50 border border-pink-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-pink-100 flex flex-wrap items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
          <a
            href={project.githubUrl || "https://github.com/Anuragh33"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-white border border-pink-200 hover:border-pink-300 hover:bg-pink-50/50 transition-colors shadow-sm"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View Source</span>
          </a>
          <a
            href={project.demoUrl || "#"}
            onClick={(e) => {
              if (!project.demoUrl) {
                e.preventDefault();
                alert("You are currently viewing the live portfolio application! 🌸");
              }
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-sakura-500 to-pink-500 hover:from-sakura-600 hover:to-pink-600 transition-all shadow-md shadow-pink-200"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Live Demonstration</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
