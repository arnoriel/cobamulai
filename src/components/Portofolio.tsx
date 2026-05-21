import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url: string;
  tag: string;
  tech: string[];
  accent: string;
  accentLight: string;
  initial: string;
  gradient: string;
  mockupLines: string[];
}

const projects: Project[] = [
  {
    title: 'CuanClip AI',
    description:
      'Platform AI video clipping otomatis — unggah video panjang, dapatkan klip pendek viral siap upload dalam hitungan menit. Didukung teknologi FFmpeg & AI.',
    url: 'https://ai.cuanclip.com',
    tag: 'SAAS · AI VIDEO',
    tech: ['React', 'FastAPI', 'FFmpeg', 'Supabase'],
    accent: '#7C3AED',
    accentLight: '#EDE9FE',
    initial: 'CC',
    gradient: 'from-purple-600 via-indigo-600 to-violet-700',
    mockupLines: ['████████████████████', '█████████████', '██████████████████████'],
  },
  {
    title: 'The Sunnah Marketing',
    description:
      'Agensi digital marketing halal — strategi konten, iklan, dan branding untuk bisnis Muslim yang ingin tumbuh secara etis dan konsisten.',
    url: 'https://thesunnahmarketing.com',
    tag: 'AGENCY · MARKETING',
    tech: ['React', 'Vite', 'Tailwind', 'SSR'],
    accent: '#059669',
    accentLight: '#D1FAE5',
    initial: 'SM',
    gradient: 'from-emerald-600 via-teal-600 to-green-700',
    mockupLines: ['████████████████████', '███████████', '████████████████████████'],
  },
  {
    title: 'Alsytes',
    description:
      'AI Website Generator berbasis agen — buat website profesional hanya dengan deskripsi teks. Powered by agentic AI pipeline yang otomatis handle desain hingga deployment.',
    url: 'https://alsytes.dev',
    tag: 'SAAS · AI BUILDER',
    tech: ['Next.js', 'AI Agent', 'TypeScript', 'Vercel'],
    accent: '#0EA5E9',
    accentLight: '#E0F2FE',
    initial: 'AL',
    gradient: 'from-cyan-600 via-sky-600 to-blue-700',
    mockupLines: ['██████████████████', '████████████████████████', '███████████'],
  },
  {
    title: 'Benvenuto',
    description:
      'Website restoran premium bergaya Italia — desain immersive dengan animasi sinematik, menu interaktif, dan experience visual yang mengundang selera.',
    url: 'https://benvenuto-beta.vercel.app',
    tag: 'WEB DESIGN · RESTO',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Vercel'],
    accent: '#D97706',
    accentLight: '#FEF3C7',
    initial: 'BV',
    gradient: 'from-amber-500 via-orange-500 to-yellow-600',
    mockupLines: ['█████████████████████', '█████████████', '██████████████████████'],
  },
];

// Local gradient mockup — no external service, no auth errors
const ProjectMockup = ({ project }: { project: Project }) => (
  <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
    {/* Browser chrome */}
    <div className="bg-[#1e1e2e] px-4 py-2.5 flex items-center gap-3">
      <div className="flex gap-1.5 flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex-1 bg-white/8 rounded-md px-3 py-1 flex items-center gap-1.5 min-w-0">
        <Globe size={10} className="text-slate-400 flex-shrink-0" />
        <span className="text-[11px] text-slate-400 font-mono truncate">
          {project.url.replace('https://', '')}
        </span>
      </div>
    </div>

    {/* Gradient preview area */}
    <div
      className={`bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
      style={{ height: 220 }}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Mock site UI */}
      <div className="relative z-10 p-5 h-full flex flex-col justify-between">
        {/* Top: logo + nav */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center font-display font-bold text-white text-sm flex-shrink-0">
              {project.initial}
            </div>
            <div className="space-y-1.5">
              <div className="w-24 h-2 bg-white/35 rounded-full" />
              <div className="w-14 h-1.5 bg-white/20 rounded-full" />
            </div>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-1.5 bg-white/20 rounded-full" />
            ))}
          </div>
        </div>

        {/* Middle: content lines */}
        <div className="space-y-2">
          {project.mockupLines.map((line, i) => (
            <div key={i} className="flex gap-1">
              {line.split('').map((_, j) => (
                <div
                  key={j}
                  className="h-1.5 bg-white/20 rounded-full flex-1"
                  style={{ opacity: 0.3 + (j % 3) * 0.2 }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Bottom: CTA buttons */}
        <div className="flex gap-2.5">
          <div className="px-4 py-1.5 bg-white/25 backdrop-blur-sm rounded-lg">
            <div className="w-14 h-1.5 bg-white/70 rounded-full" />
          </div>
          <div className="px-4 py-1.5 bg-white/10 rounded-lg border border-white/20">
            <div className="w-10 h-1.5 bg-white/35 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft border border-blue-100 text-brand-blue text-sm font-semibold mb-5">
              <Sparkles size={14} />
              Karya Nyata
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
              Bukan Sekadar Mockup —{' '}
              <span className="text-gradient">Live &amp; Berjalan</span>
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              Produk-produk ini sudah melayani pengguna nyata. Klik untuk kunjungi langsung.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-brand-muted text-sm font-mono bg-brand-soft px-4 py-2 rounded-full border border-brand-border">
            <Globe size={13} className="text-brand-blue" />
            {projects.length} live projects
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="group/card bg-white rounded-3xl border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              {/* Mockup Preview + hover overlay */}
              <div className="relative overflow-hidden">
                <ProjectMockup project={project} />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-brand-dark/0 group-hover/card:bg-brand-dark/45 transition-all duration-300 flex items-center justify-center"
                  aria-label={`Buka ${project.title}`}
                >
                  <span className="opacity-0 group-hover/card:opacity-100 transition-all duration-300 scale-90 group-hover/card:scale-100 flex items-center gap-2 bg-white text-brand-dark font-bold text-sm px-6 py-3 rounded-full shadow-xl">
                    Kunjungi Langsung <ExternalLink size={14} />
                  </span>
                </a>
              </div>

              {/* Card info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span
                      className="text-xs font-mono font-bold uppercase tracking-widest"
                      style={{ color: project.accent }}
                    >
                      {project.tag}
                    </span>
                    <h3 className="font-display font-bold text-xl text-brand-dark mt-1 group-hover/card:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-9 h-9 rounded-xl border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-blue hover:border-blue-200 hover:bg-brand-soft transition-all"
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <p className="text-brand-slate text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium font-mono border"
                      style={{
                        backgroundColor: project.accentLight,
                        color: project.accent,
                        borderColor: `${project.accent}28`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;