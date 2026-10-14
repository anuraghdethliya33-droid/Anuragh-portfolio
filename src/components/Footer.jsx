import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Flower2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-white/70 backdrop-blur-xl border-t border-pink-200/60 pt-16 pb-12 overflow-hidden z-20">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sakura-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-pink-100">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sakura-400 to-pink-500 p-0.5 shadow-md shadow-pink-200 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-lg">
                  🌸
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Anuragh
                </h3>
                <p className="text-xs text-sakura-600 font-semibold">
                  B.Tech Student | AI & Technology Enthusiast
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              Undergraduate engineer at JECRC University, Jaipur, passionate about artificial intelligence, modern web applications, and digital productivity tools.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="mailto:anuraghhdethliya99@gmail.com"
                className="w-9 h-9 rounded-full bg-pink-50 border border-pink-200 text-sakura-700 hover:bg-sakura-500 hover:text-white transition-colors flex items-center justify-center shadow-sm"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/anuragh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-50 border border-pink-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Anuragh33"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-50 border border-pink-200 text-slate-800 hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-center shadow-sm"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-serif">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-sakura-600 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-pink-300">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More sections & Back to top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-serif mb-2">
                Portfolio Links
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {navLinks.slice(4).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-sakura-600 transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-pink-300">›</span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 bg-white border border-pink-200 hover:bg-pink-50 hover:text-sakura-600 shadow-sm transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-sakura-500" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Anuragh. Designed with aesthetic cherry blossoms 🌸</p>
          <p className="flex items-center gap-1 justify-center">
            <span>Built with React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
