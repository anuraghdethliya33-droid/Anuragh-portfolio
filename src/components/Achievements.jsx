import React, { useState } from 'react';
import { Trophy, Award, BookOpen, Code, PlusCircle, CheckCircle2, Calendar, Star, Sparkles, X } from 'lucide-react';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Initial starter achievements across all required categories
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: 'AI & Machine Learning Foundations Certification',
      category: 'Certifications',
      issuer: 'Online Learning Platform / Tech Academy',
      date: '2024',
      description:
        'Completed comprehensive curriculum covering neural networks, predictive modeling, data pipelines, and intelligent agent principles.',
      icon: Award,
      badge: 'Certified',
      color: 'border-pink-200 bg-pink-50/50 text-sakura-700',
    },
    {
      id: 2,
      title: 'JECRC University Innovation & Tech Hackathon',
      category: 'Hackathons',
      issuer: 'JECRC University Student Tech Chapter',
      date: '2024',
      description:
        'Collaborated with a team of students to ideate, prototype, and build a working technology solution within 36 hours.',
      icon: Code,
      badge: 'Participant & Finalist',
      color: 'border-rose-200 bg-rose-50/50 text-rose-700',
    },
    {
      id: 3,
      title: 'Full-Stack Modern Web Engineering Course',
      category: 'Courses',
      issuer: 'Web Dev Specialization',
      date: '2023 - 2024',
      description:
        'In-depth coursework mastering React, modern JavaScript ES6+, responsive design principles, and component design systems.',
      icon: BookOpen,
      badge: 'Completed',
      color: 'border-purple-200 bg-purple-50/50 text-purple-700',
    },
    {
      id: 4,
      title: 'Academic Excellence & Merit Recognition',
      category: 'Awards',
      issuer: 'Department of Engineering, JECRC University',
      date: '2023',
      description:
        'Recognized for consistent academic diligence, active technical workshop participation, and peer project mentorship.',
      icon: Trophy,
      badge: 'Honors',
      color: 'border-amber-200 bg-amber-50/50 text-amber-700',
    },
    {
      id: 5,
      title: 'Digital Productivity & Agile Workflow Mastery',
      category: 'Other achievements',
      issuer: 'Self-Directed Engineering Initiative',
      date: '2024',
      description:
        'Established structured personal sprint cycles, Git version control discipline, and digital knowledge base systems.',
      icon: Sparkles,
      badge: 'Milestone',
      color: 'border-teal-200 bg-teal-50/50 text-teal-700',
    },
  ]);

  // Form state for adding new achievement
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Certifications');
  const [newIssuer, setNewIssuer] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const categories = [
    'All',
    'Certifications',
    'Hackathons',
    'Courses',
    'Awards',
    'Other achievements',
  ];

  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem = {
      id: Date.now(),
      title: newTitle.trim(),
      category: newCategory,
      issuer: newIssuer.trim() || 'Self / Organization',
      date: newDate.trim() || '2025',
      description: newDesc.trim() || 'Successfully accomplished technical milestone.',
      icon: newCategory === 'Awards' ? Trophy : newCategory === 'Hackathons' ? Code : Award,
      badge: 'Added',
      color: 'border-pink-200 bg-pink-50/50 text-sakura-700',
    };

    setAchievements([newItem, ...achievements]);
    setIsAddModalOpen(false);
    setNewTitle('');
    setNewIssuer('');
    setNewDate('');
    setNewDesc('');
  };

  const filteredAchievements =
    activeTab === 'All'
      ? achievements
      : achievements.filter((item) => item.category === activeTab);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="ambient-glow w-96 h-96 bg-pink-100/40 bottom-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-pink-200/80 text-xs font-semibold text-sakura-600 shadow-sm">
            <span>🌸</span>
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif tracking-tight">
            My <span className="bg-gradient-to-r from-sakura-600 to-pink-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Certifications, hackathons, courses, awards, and milestones achieved during my academic and tech journey.
          </p>
        </div>

        {/* Tab Filters & Add Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeTab === cat
                    ? 'bg-sakura-600 text-white shadow-sm'
                    : 'bg-white/80 text-slate-600 hover:text-sakura-600 hover:bg-pink-50 border border-pink-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Add Achievement Quick Action */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-sakura-700 bg-pink-50 hover:bg-pink-100 border border-pink-300 transition-all duration-200 shadow-sm hover:shadow"
          >
            <PlusCircle className="w-4 h-4 text-sakura-600" />
            <span>+ Add New Achievement</span>
          </button>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-pink-100/90 shadow-sm hover:shadow-sakura-md hover:border-pink-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 text-sakura-600 border border-pink-200 flex items-center justify-center group-hover:bg-sakura-500 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border bg-pink-50 text-sakura-700 border-pink-200">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider font-semibold text-sakura-600 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif mb-2 group-hover:text-sakura-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-pink-50 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700">{item.issuer}</span>
                  <div className="flex items-center gap-1 text-sakura-600">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Achievement Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-pink-200 space-y-5">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h3 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
                <span>🌸</span> Add Achievement
              </h3>
              <p className="text-xs text-slate-500">
                Easily document a new certification, hackathon, course, award, or milestone.
              </p>
            </div>

            <form onSubmit={handleAddAchievement} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Achievement Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. AWS Certified Cloud Practitioner / 1st Place Hackathon"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-sakura-400 bg-pink-50/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-sakura-400 bg-white"
                  >
                    <option value="Certifications">Certifications</option>
                    <option value="Hackathons">Hackathons</option>
                    <option value="Courses">Courses</option>
                    <option value="Awards">Awards</option>
                    <option value="Other achievements">Other achievements</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Year / Date
                  </label>
                  <input
                    type="text"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    placeholder="e.g. 2025"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-sakura-400 bg-pink-50/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Issuer / Organization
                </label>
                <input
                  type="text"
                  value={newIssuer}
                  onChange={(e) => setNewIssuer(e.target.value)}
                  placeholder="e.g. JECRC University / Google / Coursera"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-sakura-400 bg-pink-50/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows="3"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Short description of what was achieved..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-sakura-400 bg-pink-50/20 resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-full"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-sakura-600 hover:bg-sakura-700 rounded-full shadow-md"
                >
                  Save Achievement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
