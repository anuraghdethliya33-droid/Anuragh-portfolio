import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Globe, 
  Workflow, 
  CheckCircle, 
  Layers
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = [
    {
      name: 'HTML',
      category: 'Web',
      icon: Code2,
      level: 90,
      levelLabel: 'Advanced',
      desc: 'Semantic HTML5 structures, accessible markup (ARIA), clean DOM hierarchies, and SEO-friendly architectures.',
      tags: ['HTML5', 'Semantic Web', 'Accessibility', 'Forms'],
      color: 'from-orange-400 to-amber-500',
    },
    {
      name: 'CSS',
      category: 'Web',
      icon: Palette,
      level: 88,
      levelLabel: 'Advanced',
      desc: 'Modern CSS3, responsive layouts via Flexbox & CSS Grid, custom keyframe animations, glassmorphism, and Tailwind CSS.',
      tags: ['Tailwind CSS', 'CSS Grid', 'Flexbox', 'Responsive UI'],
      color: 'from-blue-400 to-indigo-500',
    },
    {
      name: 'JavaScript',
      category: 'Programming',
      icon: FileCode,
      level: 85,
      levelLabel: 'Proficient',
      desc: 'ES6+ standards, asynchronous promises, DOM manipulation, modular architecture, and modern JavaScript tooling.',
      tags: ['ES6+', 'Async/Await', 'Fetch API', 'DOM Engine'],
      color: 'from-amber-400 to-yellow-500',
    },
    {
      name: 'Python',
      category: 'Programming',
      icon: Terminal,
      level: 85,
      levelLabel: 'Proficient',
      desc: 'Object-oriented programming, data structures, scripting, algorithm design, and AI model experimentation.',
      tags: ['Python 3', 'OOP', 'Data Scripts', 'Algorithms'],
      color: 'from-sky-500 to-blue-600',
    },
    {
      name: 'Artificial Intelligence',
      category: 'AI',
      icon: Cpu,
      level: 82,
      levelLabel: 'Proficient',
      desc: 'Machine learning fundamentals, intelligent systems theory, predictive models, data preprocessing, and evaluation metrics.',
      tags: ['ML Basics', 'Model Theory', 'Data Prep', 'Intelligent Agents'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Generative AI',
      category: 'AI',
      icon: Sparkles,
      level: 84,
      levelLabel: 'Proficient',
      desc: 'Large Language Models (LLMs), prompt engineering, context orchestration, API integrations, and generative user flows.',
      tags: ['LLMs', 'Prompt Engineering', 'API Pipelines', 'GenAI Tools'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Web Development',
      category: 'Web',
      icon: Globe,
      level: 88,
      levelLabel: 'Advanced',
      desc: 'End-to-end frontend development using React, Vite, state management, component lifecycles, and deployment pipelines.',
      tags: ['React.js', 'Vite', 'Component Systems', 'SPA'],
      color: 'from-sakura-500 to-pink-600',
    },
    {
      name: 'Digital Productivity',
      category: 'Productivity',
      icon: Workflow,
      level: 90,
      levelLabel: 'Expertise',
      desc: 'Workflow automation, structured note-taking systems, time-blocking methods, Git version control, and developer toolchains.',
      tags: ['Git/GitHub', 'Task Systems', 'Automation', 'Dev Tools'],
      color: 'from-emerald-400 to-teal-500',
    },
  ];

  const categories = ['All', 'Web', 'Programming', 'AI', 'Productivity'];

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="ambient-glow w-96 h-96 bg-pink-200/40 bottom-10 right-0" />
      <div className="ambient-glow w-80 h-80 bg-rose-100/30 top-1/3 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-pink-200/80 text-xs font-semibold text-sakura-600 shadow-sm">
            <span>🌸</span>
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif tracking-tight">
            My <span className="bg-gradient-to-r from-sakura-600 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Technologies and toolsets I actively work with to turn ideas into functional, aesthetic digital products.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-sakura-500 to-pink-500 text-white shadow-sakura-sm scale-105'
                  : 'bg-white/80 text-slate-600 hover:text-sakura-600 hover:bg-pink-50/70 border border-pink-200/60'
              }`}
            >
              {cat === 'All' ? 'All Skills' : cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-pink-100/90 shadow-sm hover:shadow-sakura-md hover:border-pink-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-100/60 to-transparent rounded-tr-2xl pointer-events-none" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-50 text-sakura-600 border border-pink-200/70 flex items-center justify-center group-hover:scale-110 group-hover:bg-sakura-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-pink-100/70 text-sakura-700 border border-pink-200/40">
                      {skill.levelLabel}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-800 font-serif mb-2 group-hover:text-sakura-600 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {skill.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="pt-3 border-t border-pink-50">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-[11px] text-slate-400 font-medium">Proficiency</span>
                    <span className="text-xs font-semibold text-sakura-700">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-pink-100/80 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sakura-400 to-pink-500 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
