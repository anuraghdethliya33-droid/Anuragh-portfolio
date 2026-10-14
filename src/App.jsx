import React, { useState } from 'react';
import SakuraCursor from './components/SakuraCursor.jsx';
import SakuraBackground from './components/SakuraBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [petalsActive, setPetalsActive] = useState(true);
  const [cursorActive, setCursorActive] = useState(true);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#fff6f8] via-[#fef0f4] to-[#fde2e8] text-slate-800 font-sans selection:bg-sakura-300 selection:text-sakura-900 overflow-x-hidden">
      {/* Aesthetic Cherry Blossom Trailing Cursor Effect */}
      <SakuraCursor enabled={cursorActive} />

      {/* Falling Sakura Petals Background Canvas */}
      <SakuraBackground active={petalsActive} />

      {/* Sticky Glassmorphic Header / Navbar */}
      <Navbar
        petalsActive={petalsActive}
        setPetalsActive={setPetalsActive}
        cursorActive={cursorActive}
        setCursorActive={setCursorActive}
      />

      {/* Main Content Sections */}
      <main className="relative z-20">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
