import React from 'react';
import { User, Sparkles, Compass, Lightbulb, Heart, BookOpen, MapPin, Laptop, Cpu } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Cpu,
      title: 'AI & Innovation',
      desc: 'Deeply curious about generative AI models, machine learning algorithms, and intelligent automated workflows.',
    },
    {
      icon: Laptop,
      title: 'Modern Web Engineering',
      desc: 'Crafting responsive, clean, and accessible web experiences utilizing React, Tailwind CSS, and cutting-edge frontend tooling.',
    },
    {
      icon: Sparkles,
      title: 'Digital Productivity',
      desc: 'Designing streamlined workflows, task automation, and habit engines to maximize focus and learning velocity.',
    },
    {
      icon: Lightbulb,
      title: 'Practical Problem Solving',
      desc: 'Translating theoretical computer science principles into tangible, deployed software that addresses real student and user needs.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="ambient-glow w-96 h-96 bg-sakura-100/50 top-10 right-0" />
      <div className="ambient-glow w-80 h-80 bg-rose-100/40 bottom-0 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-pink-200/80 text-xs font-semibold text-sakura-600 shadow-sm">
            <span>🌸</span>
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif tracking-tight">
            About <span className="bg-gradient-to-r from-sakura-600 to-pink-500 bg-clip-text text-transparent">Myself</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A student's journey in technology, curiosity-driven engineering, and the pursuit of elegant software.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Narrative Card */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-pink-100/80 shadow-glass flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-sakura-600 flex items-center justify-center font-bold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 font-serif">
                    Hello! I'm Anuragh
                  </h3>
                  <p className="text-xs text-sakura-600 font-medium">B.Tech Student & Creator</p>
                </div>
              </div>

              <div className="prose prose-slate text-slate-600 text-base leading-relaxed space-y-4">
                <p>
                  I am a passionate <span className="font-semibold text-slate-800">B.Tech student</span> based in the historic pink city of <span className="font-semibold text-slate-800">Jaipur, Rajasthan</span>, currently studying at <span className="font-semibold text-slate-800">JECRC University</span>.
                </p>
                <p>
                  My journey in tech centers around <span className="text-sakura-700 font-semibold">artificial intelligence</span>, <span className="text-sakura-700 font-semibold">web development</span>, and <span className="text-sakura-700 font-semibold">digital productivity</span>. Rather than just understanding concepts in theory, I actively strive to build practical software projects that solve authentic everyday problems.
                </p>
                <p>
                  Whether experimenting with generative AI models, optimizing React web interfaces, or creating systems to enhance study routines, I love bringing clean aesthetics and purposeful code together.
                </p>
              </div>
            </div>

            {/* Quick Highlights Row */}
            <div className="pt-6 border-t border-pink-100/90 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-pink-50/60 rounded-2xl p-4 border border-pink-100">
                <span className="text-xs uppercase tracking-wider font-bold text-sakura-600 block mb-1">
                  Location
                </span>
                <span className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sakura-500" /> Jaipur, Rajasthan
                </span>
              </div>

              <div className="bg-pink-50/60 rounded-2xl p-4 border border-pink-100">
                <span className="text-xs uppercase tracking-wider font-bold text-sakura-600 block mb-1">
                  College
                </span>
                <span className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-sakura-500" /> JECRC University
                </span>
              </div>

              <div className="bg-pink-50/60 rounded-2xl p-4 border border-pink-100">
                <span className="text-xs uppercase tracking-wider font-bold text-sakura-600 block mb-1">
                  Mindset
                </span>
                <span className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-sakura-500" /> Continuous Growth
                </span>
              </div>
            </div>
          </div>

          {/* Pillars & Interest Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-pink-100/70 shadow-sm hover:shadow-sakura-sm hover:border-pink-200 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sakura-100 to-pink-50 text-sakura-600 flex items-center justify-center shrink-0 border border-pink-200/60 group-hover:bg-sakura-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800 font-serif mb-1 group-hover:text-sakura-700 transition-colors">
                        {val.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
