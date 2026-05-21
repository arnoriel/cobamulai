import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Code2,
  Rocket,
  ArrowRight,
  Menu,
  X,
  Globe,
  Sparkles,
  Instagram,
  Phone,
  CheckCircle,
  Briefcase,
  TrendingUp,
  Star,
  Mail,
} from 'lucide-react';
import { supabase } from './supabaseClient';
import Process from './components/Process';
import Chatbot from './components/Chatbot';
import About from './components/About';
import Portfolio from './components/Portofolio';
import Package from './components/Packages';

// ─── NAVBAR (Squircle Floating Dock) ─────────────────────────────────────────
const Navbar = ({ waLink }: { waLink: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Tentang', href: '#about' },
    { label: 'Cara Kerja', href: '#process' },
    { label: 'Paket Harga', href: '#packages' },
    { label: 'Karir', href: '/careers' },
  ];

  return (
    <div className="fixed top-5 inset-x-0 z-50 flex flex-col items-center px-4 pointer-events-none">
      {/* ── Desktop: Squircle Dock ── */}
      <div className="hidden lg:flex pointer-events-auto items-center gap-0.5 bg-neutral-900 rounded-[20px] px-2 py-2 shadow-2xl border border-white/[0.08]">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-[12px] transition-all duration-200 whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
        <div className="w-px h-5 bg-white/15 mx-2 flex-shrink-0" />
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 px-5 py-2.5 bg-white text-neutral-900 text-sm font-bold rounded-[12px] hover:bg-white/90 transition-all shadow-sm whitespace-nowrap"
        >
          Konsultasi Gratis
        </a>
      </div>

      {/* ── Mobile: Squircle Hamburger Button ── */}
      <div className="lg:hidden w-full flex justify-end pointer-events-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-black rounded-[16px] flex items-center justify-center text-white shadow-2xl border border-white/10 transition-transform active:scale-95"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile: Dropdown Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden pointer-events-auto mt-2 w-full max-w-xs bg-black rounded-[20px] p-2 shadow-2xl border border-white/10"
          >
            <div className="space-y-0.5">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-white/75 hover:text-white hover:bg-white/10 rounded-[12px] text-sm font-medium transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-white/10">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-white text-black font-bold text-sm rounded-[12px] text-center hover:bg-white/90 transition-all"
              >
                Konsultasi Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = ({ waLink }: { waLink: string }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const floatingCards = [
    { icon: <Bot size={22} className="text-white" />, label: 'AI Chatbot', sub: 'Live in 60s', delay: 0 },
    { icon: <Code2 size={22} className="text-white" />, label: 'Web SaaS', sub: 'Scalable', delay: 0.15 },
    { icon: <TrendingUp size={22} className="text-white" />, label: 'Konversi+', sub: '+240%', delay: 0.3 },
  ];

  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen flex items-center overflow-hidden"
      style={{ borderBottomLeftRadius: '4rem', borderBottomRightRadius: '4rem' }}
    >
      {/* White dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-32 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Copy ── */}
          <motion.div style={{ opacity }} className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm font-semibold mb-8"
            >
              Partner AI & Digital Indonesia
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.08] tracking-tight mb-7"
            >
              Bisnis Anda,
              <br />
              <span className="text-sky-300">Diperkuat AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-lg leading-relaxed mb-10"
            >
              Kami membangun <strong className="text-white">web premium, SaaS, dan otomasi AI</strong> yang langsung
              menghasilkan — bukan sekadar website cantik yang tidak berkonversi.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-2xl hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]"
              >
                Konsultasi Gratis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white font-semibold rounded-2xl border border-white/25 hover:bg-white/25 transition-all backdrop-blur-sm"
              >
                Lihat Portfolio
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Floating Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center h-[480px]"
          >
            {/* Glow orb */}
            <div className="absolute w-64 h-64 bg-white/8 rounded-full blur-[60px]" />

            {/* Floating feature cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: card.delay }}
                className={`absolute rounded-2xl p-5 flex items-center gap-3 min-w-[185px] bg-white/15 backdrop-blur-md border border-white/20 shadow-xl ${
                  i === 0 ? 'top-8 left-4' : i === 1 ? 'top-1/2 -translate-y-1/2 right-0' : 'bottom-12 left-12'
                }`}
                style={{ zIndex: 10 + i }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{card.label}</p>
                  <p className="text-white/60 text-xs">{card.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Central card */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="rounded-3xl p-8 w-64 text-center z-20 bg-white/15 backdrop-blur-md border border-white/25 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/25 flex items-center justify-center mx-auto mb-4">
                <Sparkles size={28} className="text-white" />
              </div>
              <p className="font-display font-bold text-white text-xl mb-1">cobamulai.</p>
              <p className="text-white/60 text-sm">AI & Web Studio</p>
              <div className="mt-4 flex items-center justify-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-white/70 font-medium">Tersedia untuk proyek baru</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── PROBLEM & SOLUTION ───────────────────────────────────────────────────────
// Note: negative margin-top + border-radius creates the 3D "floating platform" illusion
const ProblemSolution = () => {
  const problems = [
    { text: 'Website tidak menghasilkan leads atau penjualan nyata' },
    { text: 'Tim tidak punya waktu untuk jawab pertanyaan klien 24/7' },
    { text: 'Proses bisnis manual yang membuang waktu dan biaya' },
    { text: 'Tidak tahu cara integrasikan AI ke bisnis yang sudah berjalan' },
    { text: 'Vendor web yang hanya bisa desain, tidak bisa strategi' },
  ];

  const solutions = [
    { text: 'Website yang dioptimasi konversi — setiap pixel punya tujuan' },
    { text: 'AI Chatbot custom yang merespons klien kapan saja, instan' },
    { text: 'Otomasi workflow: dari invoice sampai laporan, berjalan sendiri' },
    { text: 'Konsultasi roadmap AI yang praktis dan langsung implementable' },
    { text: 'Tim full-stack: strategi, desain, kode, dan data dalam satu tempat' },
  ];

  return (
    <section
      className="relative z-10 section-blue overflow-hidden"
      style={{
        marginTop: '-5rem',
        borderTopLeftRadius: '4rem',
        borderTopRightRadius: '4rem',
        paddingTop: '8rem',
        paddingBottom: '7rem',
        boxShadow: '0 -16px 60px rgba(0,0,0,0.18)',
      }}
    >
      {/* Top border line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border text-brand-blue text-sm font-semibold mb-6 shadow-card">
            Masalah & Solusi
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-5 tracking-tight">
            Kami Tahu Apa yang
            <br />
            <span className="text-gradient">Bisnismu Butuhkan</span>
          </h2>
          <p className="text-brand-slate text-lg max-w-2xl mx-auto">
            Banyak bisnis Indonesia terjebak di titik yang sama. Cobamulai hadir dengan solusi nyata, bukan janji.
          </p>
        </motion.div>

        {/* Dual Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-brand-border shadow-card"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <X size={18} className="text-red-500" />
              </div>
              <div>
                <p className="font-display font-bold text-brand-dark text-lg">Masalah Umum</p>
                <p className="text-brand-muted text-sm">yang dihadapi bisnis Indonesia</p>
              </div>
            </div>

            <div className="space-y-4">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-red-50/50 border border-red-100/80"
                >
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={10} className="text-red-500" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-brand-blue to-blue-700 rounded-3xl p-8 border border-blue-500/20 shadow-blue-glow relative overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute top-[-30px] right-[-30px] w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <CheckCircle size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-lg">Solusi Cobamulai</p>
                  <p className="text-blue-200 text-sm">yang langsung berdampak</p>
                </div>
              </div>

              <div className="space-y-4">
                {solutions.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 border border-white/15"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={10} className="text-white" />
                    </div>
                    <p className="text-sm text-blue-50 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 bg-white rounded-2xl border border-brand-border shadow-card p-6 flex flex-wrap gap-8 justify-around items-center"
        >
          {[
            { value: '50+', label: 'Proyek Live', icon: <Rocket size={16} className="text-brand-blue" /> },
            { value: '100%', label: 'Klien Puas', icon: <Star size={16} className="text-amber-500" /> },
            { value: '4+', label: 'Tahun Pengalaman', icon: <Briefcase size={16} className="text-indigo-500" /> },
            { value: '24', label: 'Model AI Dipakai', icon: <Bot size={16} className="text-emerald-500" /> },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1 text-brand-muted text-xs">{stat.icon} {stat.label}</div>
              <p className="font-display font-extrabold text-3xl text-brand-dark">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
const CTASection = ({ waLink }: { waLink: string }) => {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-100/60 to-sky-100/60 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-blue via-blue-600 to-indigo-600 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-blue-glow"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          <div className="absolute inset-0 line-grid opacity-20 pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-blue-100 text-sm font-medium mb-8 border border-white/20"
            >
              Mulai dalam 48 jam
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Siap Ubah Ide Jadi
              <br />
              Produk Digital Nyata?
            </h2>

            <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Jangan tunggu kompetitor mendahului. Satu sesi konsultasi gratis bisa mengubah arah bisnis Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-[1.02] shadow-lg"
              >
                Hubungi via WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:cobamulai.ai@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white rounded-2xl font-semibold text-lg border border-white/25 hover:bg-white/25 transition-all"
              >
                <Mail size={18} />
                Kirim Email
              </a>
            </div>

            <p className="mt-8 text-blue-200/70 text-sm">
              Respon dalam <strong className="text-white">{'< 2 jam'}</strong> di hari kerja · Konsultasi 100% gratis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = ({ waLink }: { waLink: string }) => {
  const links = {
    Layanan: ['AI & Automation', 'Web Development', 'SaaS Building', 'Cloud Architecture'],
    Perusahaan: ['Portfolio', 'Tentang Kami', 'Cara Kerja', 'Paket Harga'],
    Karir: ['Freelance Developer', 'Freelance Sales', 'Lihat Semua Lowongan'],
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="font-display font-extrabold text-2xl mb-4">
              cobamul<span className="text-brand-cyan">ai</span>.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Studio teknologi Indonesia yang membangun web, SaaS, dan sistem AI untuk bisnis yang serius bertumbuh.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cobamulai?igsh=MW8wNXdwZHhueGtraQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-orange-400 hover:text-white hover:border-transparent transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white hover:border-transparent transition-all"
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:cobamulai.ai@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white hover:border-transparent transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={title === 'Karir' ? '/careers' : '#'}
                      className="text-slate-500 text-sm hover:text-brand-cyan transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 text-slate-500 text-sm">
            <span className="flex items-center gap-2">
              <Globe size={14} className="text-brand-cyan" />
              Bandung, West Java, Indonesia
            </span>
            <a href="mailto:cobamulai.ai@gmail.com" className="flex items-center gap-2 hover:text-brand-cyan transition-colors">
              <Mail size={14} className="text-brand-cyan" />
              cobamulai.ai@gmail.com
            </a>
            <a href="https://wa.me/6288272264011" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-cyan transition-colors">
              <Phone size={14} className="text-brand-cyan" />
              +62 882 7226 4011
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
          <p>© {new Date().getFullYear()} Cobamulai Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/careers" className="hover:text-brand-cyan transition-colors font-medium">Karir</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─── APP ──────────────────────────────────────────────────────────────────────
function App() {
  const defaultNumber = '6285797009915';
  const [waLink, setWaLink] = useState('');
  const message = 'Kak+Saya+mau+Konsultasi+SaaS,+AI,+dan+Website';

  useEffect(() => {
    const fetchReferral = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const refNumber = queryParams.get('refNumber');
      let targetNumber = defaultNumber;

      if (refNumber) {
        const { data, error } = await supabase
          .from('referrals')
          .select('phone_number')
          .eq('ref_number', refNumber)
          .single();

        if (!error && data) {
          targetNumber = data.phone_number;
        }
      }

      setWaLink(`https://wa.me/${targetNumber}?text=${message}`);
    };
    fetchReferral();
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen text-brand-dark font-sans antialiased">
      {/* Navbar is a layer component — floats above all content */}
      <Navbar waLink={waLink} />

      <main>
        {/* 1. Hero — full-height section, starts from top (no padding-top needed) */}
        <Hero waLink={waLink} />

        {/* 2. Masalah & Solusi — overlaps hero bottom with top border-radius for 3D effect */}
        <ProblemSolution />

        {/* 3. Portfolio */}
        <Portfolio />

        {/* 4. Tentang & Layanan */}
        <About />

        {/* 5. Cara Kami Bekerja */}
        <Process />

        {/* 6. CTA */}
        <CTASection waLink={waLink} />

        {/* 7. Paket Harga */}
        <Package />
      </main>

      {/* Footer */}
      <Footer waLink={waLink} />

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;