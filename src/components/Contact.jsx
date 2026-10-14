import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Check, Copy, ExternalLink, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailAddress = 'anuraghhdethliya99@gmail.com';
  const linkedInHandle = 'Anuragh.';
  const linkedInUrl = 'https://www.linkedin.com/in/anuragh';
  const gitHubHandle = 'Anuragh@33';
  const gitHubUrl = 'https://github.com/Anuragh33';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending with aesthetic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="ambient-glow w-96 h-96 bg-sakura-100/50 top-1/2 -right-10" />
      <div className="ambient-glow w-80 h-80 bg-rose-200/40 bottom-0 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-pink-200/80 text-xs font-semibold text-sakura-600 shadow-sm">
            <span>🌸</span>
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif tracking-tight">
            Get In <span className="bg-gradient-to-r from-sakura-600 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Interested in collaboration, tech discussions, or software development opportunities? Feel free to reach out anytime!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-100/90 shadow-glass space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-1">
                    Contact Channels
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Direct communication pathways to reach Anuragh.
                  </p>
                </div>

                {/* Email Channel */}
                <div className="bg-pink-50/60 rounded-2xl p-4 border border-pink-100/80 flex items-start justify-between gap-3 group hover:border-pink-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-100 text-sakura-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sakura-600 block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-sakura-600 break-all transition-colors"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white border border-pink-200 text-slate-600 hover:text-sakura-600 hover:bg-pink-50 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Channel */}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-50/60 rounded-2xl p-4 border border-pink-100/80 flex items-center justify-between group hover:border-pink-300 transition-all hover:-translate-y-0.5 block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                        LinkedIn
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-sakura-600 transition-colors">
                        {linkedInHandle}
                      </span>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-pink-200 text-slate-400 group-hover:text-sakura-600 group-hover:bg-pink-50 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>

                {/* GitHub Channel */}
                <a
                  href={gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-50/60 rounded-2xl p-4 border border-pink-100/80 flex items-center justify-between group hover:border-pink-300 transition-all hover:-translate-y-0.5 block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                        GitHub
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-sakura-600 transition-colors">
                        {gitHubHandle}
                      </span>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-pink-200 text-slate-400 group-hover:text-sakura-600 group-hover:bg-pink-50 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>

                {/* Location Badge */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-sakura-500 shrink-0" />
                  <span>Based in <strong>Jaipur, Rajasthan, India</strong> • JECRC University</span>
                </div>
              </div>
            </div>

            {/* Aesthetic Quote card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-pink-100/70 to-rose-100/50 border border-pink-200/80 text-xs text-slate-700 flex items-center gap-3">
              <span className="text-2xl select-none">🌸</span>
              <p className="italic leading-relaxed">
                "Always enthusiastic to connect with fellow learners, developers, and tech creators."
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7 bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-pink-100/90 shadow-glass flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Have an idea, project, or opportunity? Drop a note below.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-sakura-600 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {/* Success Notification Alert */}
              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in duration-300">
                  <span className="text-xl">🌸</span>
                  <div>
                    <p className="font-semibold">Message recorded successfully!</p>
                    <p className="text-xs text-emerald-700">Thank you for reaching out. Anuragh will get back to you shortly!</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-sakura-400 bg-pink-50/20 text-slate-800 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-sakura-400 bg-pink-50/20 text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Tech Collaboration / Project Discussion"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-sakura-400 bg-pink-50/20 text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-sakura-400 bg-pink-50/20 text-slate-800 placeholder:text-slate-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-sakura-500 via-pink-500 to-sakura-600 hover:from-sakura-600 hover:to-pink-600 shadow-sakura-md hover:shadow-sakura-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                        <span>Send Message to Anuragh</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
