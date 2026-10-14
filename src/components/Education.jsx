import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookCheck, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const learningAreas = [
    {
      title: 'Data Structures & Algorithms',
      detail: 'Core problem-solving, complexity analysis (Big-O), search/sort algorithms, trees, and graphs.',
      tag: 'Core CS',
    },
    {
      title: 'Artificial Intelligence & Machine Learning',
      detail: 'Foundations of intelligent agents, neural networks, LLM prompting, and practical AI implementations.',
      tag: 'Specialization',
    },
    {
      title: 'Full-Stack Web Development',
      detail: 'Modern frontend design (React, Tailwind, Vite), client-server communication, component lifecycles, and REST APIs.',
      tag: 'Web Dev',
    },
    {
      title: 'Database Management Systems (DBMS)',
      detail: 'Relational database schemas, SQL queries, data normalization, indexing, and persistent storage.',
      tag: 'Databases',
    },
    {
      title: 'Object-Oriented Programming (OOP)',
      detail: 'Encapsulation, inheritance, polymorphism, design patterns, and clean modular code in Python & JavaScript.',
      tag: 'Software Eng',
    },
    {
      title: 'Operating Systems & System Fundamentals',
      detail: 'Process management, concurrency, memory allocation, storage systems, and command-line development.',
      tag: 'Systems',
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-pink-200/80 text-xs font-semibold text-sakura-600 shadow-sm">
            <span>🌸</span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif tracking-tight">
            Education & <span className="bg-gradient-to-r from-sakura-600 to-pink-500 bg-clip-text text-transparent">Coursework</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Strengthening technical fundamentals and exploring emerging technology paradigms.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="relative bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-pink-200/90 shadow-glass">
            {/* Sakura petal decorative corner */}
            <div className="absolute top-4 right-6 text-2xl select-none opacity-40">
              🌸
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-pink-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sakura-500 to-pink-500 text-white flex items-center justify-center shadow-md shadow-pink-300 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-pink-100/80 text-sakura-700 text-xs font-semibold mb-1">
                    Undergraduate Program
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-base font-semibold text-sakura-700 mt-0.5">
                    JECRC University
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2 text-xs text-slate-600 shrink-0">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pink-50/70 border border-pink-100">
                  <Calendar className="w-3.5 h-3.5 text-sakura-600" />
                  <span className="font-medium text-slate-700">2022 — 2026 (Ongoing)</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pink-50/70 border border-pink-100">
                  <MapPin className="w-3.5 h-3.5 text-sakura-600" />
                  <span className="font-medium text-slate-700">Jaipur, Rajasthan</span>
                </div>
              </div>
            </div>

            {/* University Description */}
            <div className="pt-6">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Currently pursuing B.Tech at JECRC University, Jaipur, with an emphasis on rigorous engineering fundamentals, computer science theory, artificial intelligence integration, and hands-on software development.
              </p>
            </div>
          </div>
        </div>

        {/* Relevant Learning Areas Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-serif flex items-center gap-2">
                <BookCheck className="w-6 h-6 text-sakura-600" />
                <span>Relevant Learning Areas & Coursework</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Core academic subjects and technical disciplines mastered during university
              </p>
            </div>
            <div className="hidden sm:block text-xs font-semibold text-sakura-600 bg-pink-100/70 px-3 py-1 rounded-full">
              6 Key Disciplines
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-pink-100 shadow-sm hover:shadow-sakura-sm hover:border-pink-300/80 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sakura-600 bg-pink-50 px-2.5 py-0.5 rounded-md border border-pink-200/60">
                      {area.tag}
                    </span>
                    <span className="text-xs text-slate-400 group-hover:text-sakura-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-serif mb-2 group-hover:text-sakura-700 transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {area.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-pink-50 flex items-center text-xs text-sakura-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-sakura-500" />
                  <span>Proficiency Coursework</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
