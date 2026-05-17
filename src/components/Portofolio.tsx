import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Sparkles, Monitor } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url: string;
  tag: string;
  tagColor: string;
  accentColor: string;
  tech: string[];
  previewBg: string; // fallback gradient when iframe is blocked
}

const projects: Project[] = [
  {
    title: "CuanClip AI",
    description:
      "Platform AI video clipping otomatis — unggah video panjang, dapatkan klip pendek viral siap upload dalam hitungan menit. Didukung teknologi FFmpeg & AI.",
    url: "https://ai.cuanclip.com",
    tag: "SaaS · AI Video",
    tagColor: "text-purple-400",
    accentColor: "from-purple-500/20 to-indigo-500/20",
    tech: ["React", "FastAPI", "FFmpeg", "Supabase"],
    previewBg: "from-purple-900/60 via-indigo-900/40 to-brand-dark",
  },
  {
    title: "The Sunnah Marketing",
    description:
      "Agensi digital marketing halal — strategi konten, iklan, dan branding untuk bisnis Muslim yang ingin tumbuh secara etis dan konsisten.",
    url: "https://thesunnahmarketing.com",
    tag: "Agency · Marketing",
    tagColor: "text-emerald-400",
    accentColor: "from-emerald-500/20 to-teal-500/20",
    tech: ["React", "Vite", "Tailwind", "SSR"],
    previewBg: "from-emerald-900/60 via-teal-900/40 to-brand-dark",
  },
  {
    title: "Alsytes",
    description:
      "AI Website Generator berbasis agen — buat website profesional hanya dengan deskripsi teks. Powered by agentic AI pipeline yang otomatis handle desain, konten, hingga deployment.",
    url: "https://alsytes.dev",
    tag: "SaaS · AI Builder",
    tagColor: "text-cyan-400",
    accentColor: "from-cyan-500/20 to-blue-500/20",
    tech: ["Next.js", "AI Agent", "TypeScript", "Vercel"],
    previewBg: "from-cyan-900/60 via-blue-900/40 to-brand-dark",
  },
  {
    title: "Benvenuto",
    description:
      "Website restoran premium bergaya Italia — desain immersive dengan animasi sinematik, menu interaktif, dan experience visual yang mengundang selera.",
    url: "https://benvenuto-beta.vercel.app",
    tag: "Web Design · Resto",
    tagColor: "text-amber-400",
    accentColor: "from-amber-500/20 to-orange-500/20",
    tech: ["React", "Framer Motion", "Tailwind", "Vercel"],
    previewBg: "from-amber-900/60 via-orange-900/40 to-brand-dark",
  },
];

// ─── FIX Bug #2, #3, #4: Iframe preview with dynamic scale + blocked fallback ───
const SitePreview = ({
  url,
  title,
  previewBg,
}: {
  url: string;
  title: string;
  previewBg: string;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [scale, setScale] = useState(0.38);
  const [blocked, setBlocked] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Bug #2 fix: compute scale dynamically so iframe fills the container width
  useEffect(() => {
    if (!wrapperRef.current) return;
    const VIRTUAL_W = 1440;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setScale(entry.contentRect.width / VIRTUAL_W);
      }
    });
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  // Detect X-Frame-Options block correctly:
  // - SecurityError thrown → cross-origin content LOADED SUCCESSFULLY → don't block
  // - contentDocument accessible but body empty → site IS blocked by X-Frame-Options
  const handleLoad = () => {
    setLoaded(true);
    try {
      const doc =
        iframeRef.current?.contentDocument ??
        iframeRef.current?.contentWindow?.document;
      // Can access doc = same-origin or X-Frame-Options blocked (empty doc)
      if (doc && (!doc.body || doc.body.innerHTML.trim() === '')) {
        setBlocked(true);
      }
      // else: has content → show the iframe
    } catch {
      // SecurityError = cross-origin content loaded fine → NOT blocked, show iframe!
    }
  };

  const VIRTUAL_H = 900;
  // Bug #4 fix: container height matches actual scaled iframe height (capped at 210px)
  const previewH = Math.min(Math.round(VIRTUAL_H * scale), 210);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Buka ${title} di tab baru`}
      className="block group/preview relative overflow-hidden rounded-xl bg-brand-navy border border-white/5"
    >
      {/* Browser chrome header */}
      <div className="relative z-10 flex items-center gap-2 px-4 py-2.5 bg-[#0D1117] border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 mx-2 bg-white/5 rounded-md px-3 py-1 text-[10px] text-gray-500 font-mono truncate">
          {url.replace('https://', '')}
        </div>
        <ExternalLink
          size={12}
          className="text-gray-600 group-hover/preview:text-brand-cyan transition-colors flex-shrink-0"
        />
      </div>

      {/* Preview area */}
      <div
        ref={wrapperRef}
        className="relative overflow-hidden w-full"
        style={{ height: `${previewH}px` }}
      >
        {/* Iframe (hidden when blocked) */}
        {!blocked && (
          <iframe
            ref={iframeRef}
            src={url}
            title={title}
            scrolling="no"
            tabIndex={-1}
            loading="lazy"
            onLoad={handleLoad}
            style={{
              width: '1440px',
              height: `${VIRTUAL_H}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              pointerEvents: 'none',
              border: 'none',
              display: 'block',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />
        )}

        {/* Fallback: shown when iframe blocked OR while loading */}
        {(blocked || !loaded) && (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${previewBg} flex flex-col items-center justify-center gap-3`}
          >
            <Monitor size={28} className="text-white/30" />
            <span className="text-white/40 text-xs font-mono">
              {url.replace('https://', '')}
            </span>
          </div>
        )}

        {/* Hover overlay with visit CTA */}
        <div className="absolute inset-0 bg-brand-dark/0 group-hover/preview:bg-brand-dark/60 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-white text-brand-dark font-bold text-sm px-5 py-2.5 rounded-full shadow-xl">
            Kunjungi Website <ExternalLink size={14} />
          </span>
        </div>
      </div>
    </a>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-brand-cyan font-mono text-sm mb-4">
              <Sparkles size={16} />
              REAL RESULTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Karya yang Sudah{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-primary">
                Terbukti Nyata
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Bukan sekadar mockup. Ini produk live yang sudah berjalan dan melayani pengguna nyata.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm font-mono">
            <Globe size={14} className="text-brand-cyan" />
            <span>{projects.length} live projects</span>
          </div>
        </motion.div>

        {/* Projects Grid — 2 columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group relative rounded-3xl bg-brand-navy/40 border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-500"
            >
              {/* Hover gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 p-6 flex flex-col gap-5">
                {/* Site Preview */}
                <SitePreview
                  url={project.url}
                  title={project.title}
                  previewBg={project.previewBg}
                />

                {/* Project Info */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span
                        className={`text-xs font-mono font-semibold ${project.tagColor} uppercase tracking-widest`}
                      >
                        {project.tag}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-brand-cyan transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-xs font-mono group-hover:border-white/10 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
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