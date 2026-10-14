import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, FolderGit2, ArrowUpRight, Heart } from 'lucide-react';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'personal-portfolio',
      title: 'Personal Portfolio Website',
      category: 'Web Engineering & Design',
      shortDescription:
        'A modern, aesthetic portfolio website showcasing student achievements, AI interests, and interactive cherry blossom animations.',
      description:
        'Designed and engineered as a modern, high-performance personal portfolio tailored for showcasing engineering skills, AI projects, and student accomplishments. Built using React and Vite, styled with Tailwind CSS, and equipped with custom canvas-based falling sakura petal simulations and dynamic cursor interactions.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Lucide Icons', 'Canvas API'],
      gradient: 'from-pink-500 via-rose-400 to-sakura-500',
      highlights: [
        'Lightweight HTML5 Canvas engine rendering real-time swaying sakura petal physics.',
        'Custom interactive cursor with glowing trail effects and click particle bursts.',
        'Strictly verified Vercel single-page application routing and zero-latency build setup.',
        'Responsive mobile navigation and accessible typography pairing.',
      ],
      demoUrl: '#',
      githubUrl: 'https://github.com/Anuragh33',
    },
    {
      id: 'ai-website-project',
      title: 'AI Website Project',
      category: 'Artificial Intelligence & Web',
      shortDescription:
        'An intelligent AI-powered web platform integrating conversational assistants, prompt optimization pipelines, and dynamic UI.',
      description:
        'An interactive AI web application built to bridge generative AI capabilities with intuitive user workflows. Features prompt structuring tools, conversational context management, and clean card-based rendering for AI outputs and automated summaries.',
      technologies: ['Python', 'Generative AI', 'React', 'REST API', 'Tailwind CSS'],
      gradient: 'from-purple-600 via-pink-500 to-rose-400',
      highlights: [
        'Generative AI prompt orchestration and structured API response handling.',
        'Clean split-pane conversational workspace designed with modern UI standards.',
        'Python backend / API connector with low-latency streaming endpoints.',
        'Interactive output export tools and intelligent token usage feedback.',
      ],
      demoUrl: 'https://github.com/Anuragh33',
      githubUrl: 'https://github.com/Anuragh33',
    },
    {
      id: 'student-productivity-project',
      title: 'Student Productivity Project',
      category: 'Digital Productivity Suite',
      shortDescription:
        'A comprehensive student workspace featuring smart task priority matrix, study session Pomodoro timers, and progress analytics.',
      description:
        'A dedicated digital productivity workspace crafted specifically for university students. Helps manage university coursework, track daily study routines, prioritize assignments using the Eisenhower matrix, and monitor personal academic velocity.',
      technologies: ['JavaScript', 'React', 'LocalStorage', 'Tailwind CSS', 'Productivity Tools'],
      gradient: 'from-rose-500 via-pink-500 to-amber-400',
      highlights: [
        'Integrated Pomodoro study timer with ambient soundscapes and study session logs.',
        'Smart academic task board with assignment deadlines and priority filtering.',
        'Zero-backend offline-first storage via persistent browser LocalStorage.',
        'Weekly focus analytics and accomplishment streak badges for student motivation.',
      ],
      demoUrl: 'https://github.com/Anuragh33',
      githubUrl: 'https://github.com/Anuragh33',
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/30 to-transparent">
      <div className="ambient-glow w-96 h-96 bg-sakura-100/40 top-1/4 left-10" />
      <div className="ambient-glow w-80 h-80 bg-rose-200/30 bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-pink-200/80 text-xs font-semibold text-sakura-600 shadow-sm">
            <span>🌸</span>
            <span>Featured Endeavors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif tracking-tight">
            Featured <span className="bg-gradient-to-r from-sakura-600 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical, modern applications showcasing expertise in Artificial Intelligence, Web Development, and Productivity.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white/85 backdrop-blur-md rounded-3xl border border-pink-100/90 shadow-sm hover:shadow-sakura-lg hover:border-pink-300 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-2"
            >
              {/* Project Card Header Banner */}
              <div className={`h-44 bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden text-white`}>
                {/* Floating blossom embellishment */}
                <span className="absolute -right-3 -bottom-4 text-7xl opacity-20 select-none group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  🌸
                </span>

                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    Project 0{idx + 1}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors text-white"
                    title="Quick inspect"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="relative z-10">
                  <span className="text-xs text-white/90 font-medium block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold font-serif tracking-tight mt-0.5">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technologies Used */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Technologies Used
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium text-sakura-700 bg-pink-50/80 border border-pink-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-pink-100/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sakura-500 via-pink-500 to-sakura-600 hover:from-sakura-600 hover:to-pink-600 shadow-md shadow-pink-200/50 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
