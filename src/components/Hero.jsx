import React from 'react';
import { ArrowDown, Sparkles, MapPin, GraduationCap, Send, Code, Terminal, Bot, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Aesthetic Sakura Ambient Glow Orbs */}
      <div className="ambient-glow w-96 h-96 bg-pink-300/30 -top-20 -left-20" />
      <div className="ambient-glow w-80 h-80 bg-sakura-200/40 top-1/2 -right-20" />
      <div className="ambient-glow w-72 h-72 bg-rose-200/25 bottom-10 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-pink-200 shadow-sm text-xs font-medium text-sakura-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
              </span>
              <span>Open to Software & AI Internships</span>
              <span className="text-pink-400">✦</span>
              <span className="font-semibold text-slate-700">Jaipur, India</span>
            </div>

            {/* Main Heading & Name */}
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest font-semibold text-sakura-600">
                Welcome to my digital garden 🌸
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 font-serif leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-sakura-600 via-pink-500 to-rose-400 bg-clip-text text-transparent underline decoration-pink-300/40 decoration-wavy decoration-2">
                  Anuragh
                </span>
              </h1>
              <h2 className="text-lg sm:text-2xl font-medium text-slate-700 pt-1 flex items-center justify-center lg:justify-start gap-2">
                <span>B.Tech Student</span>
                <span className="text-pink-300">|</span>
                <span className="text-sakura-700 font-semibold">AI & Technology Enthusiast</span>
              </h2>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I am a B.Tech student at <span className="font-semibold text-slate-800">JECRC University</span> interested in technology, artificial intelligence, web development, and digital productivity. Passionate about learning modern technologies and building practical, high-impact projects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="group px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-sakura-500 via-pink-500 to-sakura-600 hover:from-sakura-600 hover:to-pink-600 shadow-sakura-md hover:shadow-sakura-lg transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white/80 hover:bg-white backdrop-blur-md border border-pink-200/90 hover:border-pink-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4 text-sakura-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Metadata Info Badges */}
            <div className="pt-6 border-t border-pink-100/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-sakura-500" />
                <span>JECRC University</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sakura-500" />
                <span>Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sakura-500" />
                <span>Generative AI & Web Dev</span>
              </div>
            </div>
          </div>

          {/* Right Column: Aesthetic Visual Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-300 via-sakura-400 to-rose-300 rounded-3xl blur-xl opacity-60 animate-pulse-glow" />

              {/* Main Glass Card */}
              <div className="relative bg-white/85 backdrop-blur-xl border border-white/80 rounded-3xl p-6 sm:p-8 shadow-glass space-y-6">
                {/* Header with avatar & blossom badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 via-sakura-300 to-rose-200 p-1 shadow-md shadow-pink-200 flex items-center justify-center">
                      <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-3xl">
                        🌸
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-slate-900 text-lg font-serif">Anuragh</h3>
                        <span className="text-xs bg-pink-100 text-sakura-700 px-2 py-0.5 rounded-full font-medium">
                          B.Tech
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">Engineer & AI Enthusiast</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-emerald-100" title="Active learner" />
                </div>

                {/* Key focus tags */}
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Core Pillars
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-pink-50/70 border border-pink-100 rounded-xl p-2.5 flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-sakura-600" />
                      <span className="text-xs font-semibold text-slate-700">Artificial Intel.</span>
                    </div>
                    <div className="bg-rose-50/70 border border-rose-100 rounded-xl p-2.5 flex items-center space-x-2">
                      <Code className="w-4 h-4 text-pink-600" />
                      <span className="text-xs font-semibold text-slate-700">Web Development</span>
                    </div>
                    <div className="bg-pink-50/70 border border-pink-100 rounded-xl p-2.5 flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-sakura-600" />
                      <span className="text-xs font-semibold text-slate-700">Digital Productivity</span>
                    </div>
                    <div className="bg-purple-50/70 border border-purple-100 rounded-xl p-2.5 flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <span className="text-xs font-semibold text-slate-700">Generative AI</span>
                    </div>
                  </div>
                </div>

                {/* Quote / Philosophy snippet */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-50/90 to-rose-50/70 border border-pink-100 text-xs text-slate-600 italic leading-relaxed">
                  "Blending strong computer science fundamentals with aesthetic, intuitive modern software solutions."
                </div>

                {/* Quick stats counter */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-pink-100/80 text-center">
                  <div>
                    <span className="block text-lg font-bold text-slate-800 font-serif">3+</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Key Projects</span>
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-sakura-600 font-serif">8+</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Core Skills</span>
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-slate-800 font-serif">2026</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Graduation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center text-slate-400 hover:text-sakura-600 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-medium tracking-wider uppercase mb-1">Explore</span>
            <div className="w-8 h-8 rounded-full border border-pink-200 bg-white/70 flex items-center justify-center group-hover:bg-pink-50 transition-colors shadow-sm">
              <ArrowDown className="w-3.5 h-3.5 text-sakura-500 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
