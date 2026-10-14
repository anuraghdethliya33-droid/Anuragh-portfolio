import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Flower2, Mail, ExternalLink } from 'lucide-react';

export default function Navbar({ petalsActive, setPetalsActive, cursorActive, setCursorActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/75 backdrop-blur-md border-b border-sakura-200/60 shadow-sakura-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center space-x-3 text-slate-800 focus:outline-none"
            aria-label="Anuragh - Home"
          >
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-sakura-400 via-pink-300 to-sakura-100 p-0.5 shadow-md shadow-pink-200/50 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-[14px] flex items-center justify-center">
                <span className="text-lg select-none group-hover:rotate-12 transition-transform duration-300">
                  🌸
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-sakura-900 to-sakura-600 bg-clip-text text-transparent font-serif">
                Anuragh
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-sakura-600/90 -mt-1">
                B.Tech • AI & Web
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-pink-200/60 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-sakura-700 bg-pink-100/80 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-sakura-600 hover:bg-white/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions & Aesthetic Toggles */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Petals toggle button */}
            <button
              onClick={() => setPetalsActive(!petalsActive)}
              title={petalsActive ? 'Pause falling petals' : 'Enable falling petals'}
              className={`p-2 rounded-full border text-xs flex items-center gap-1.5 transition-all duration-200 ${
                petalsActive
                  ? 'border-sakura-300 bg-pink-50 text-sakura-700 hover:bg-pink-100'
                  : 'border-slate-200 bg-white/60 text-slate-400 hover:text-slate-600'
              }`}
            >
              <Flower2 className={`w-3.5 h-3.5 ${petalsActive ? 'animate-spin-slow' : ''}`} />
              <span className="text-[11px] font-medium">Petals</span>
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-sakura-500 via-pink-500 to-sakura-600 hover:from-sakura-600 hover:to-pink-600 shadow-md shadow-pink-300/40 hover:shadow-lg hover:shadow-pink-300/60 transition-all duration-200 active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setPetalsActive(!petalsActive)}
              className="p-2 rounded-full bg-white/80 border border-pink-200 text-sakura-600 text-xs"
              title="Toggle Petals"
            >
              🌸
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/80 border border-pink-200 text-slate-700 hover:text-sakura-600 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 animate-in slide-in-from-top-4 duration-200">
          <div className="bg-white/95 backdrop-blur-xl border border-pink-200/80 rounded-2xl p-4 shadow-xl shadow-pink-200/30 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-sakura-700 hover:bg-pink-50 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-sakura-400 text-xs">🌸</span>
              </a>
            ))}
            <div className="pt-2 border-t border-pink-100 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sakura-500 to-pink-500 shadow-md shadow-pink-300/40"
              >
                Contact Anuragh
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
