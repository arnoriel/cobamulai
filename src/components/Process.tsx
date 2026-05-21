import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, MessageSquare } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Discovery',
    desc: 'Kami menyelami ide bisnis Anda, menganalisis pasar, dan menentukan teknologi AI/Web yang paling tepat dan berdampak.',
    icon: <Search size={22} />,
    color: 'text-brand-blue',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    accent: '#2563EB',
    duration: '1–2 hari',
  },
  {
    id: 2,
    title: 'Strategy & Design',
    desc: 'Merancang UI/UX yang memanjakan mata dan arsitektur sistem yang scalable sebelum satu baris kode ditulis.',
    icon: <PenTool size={22} />,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    accent: '#7C3AED',
    duration: '2–4 hari',
  },
  {
    id: 3,
    title: 'Development',
    desc: 'Coding presisi sesuai requirement dengan standar industri (Clean Code) dan integrasi model AI yang production-ready.',
    icon: <Code size={22} />,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    accent: '#4F46E5',
    duration: '5–21 hari',
  },
  {
    id: 4,
    title: 'Launch',
    desc: 'Deployment ke server premium, optimasi SEO, dan monitoring performa pasca-peluncuran untuk jaminan stabilitas.',
    icon: <Rocket size={22} />,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    accent: '#0891B2',
    duration: '1–2 hari',
  },
  {
    id: 5,
    title: 'Support',
    desc: 'Pendampingan aktif pasca-launch: update, maintenance, dan konsultasi lanjutan untuk terus berkembang.',
    icon: <MessageSquare size={22} />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    accent: '#059669',
    duration: 'Ongoing',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft border border-blue-100 text-brand-blue text-sm font-semibold mb-6">
            Cara Kami Bekerja
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-5 tracking-tight">
            Dari Ide ke Produk —
            <br />
            <span className="text-gradient">Transparan & Terstruktur</span>
          </h2>
          <p className="text-brand-slate text-lg max-w-2xl mx-auto">
            Proses kerja yang jelas dan terstruktur memastikan proyek selesai tepat waktu, sesuai anggaran, dan melebihi ekspektasi.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(10%+24px)] right-[calc(10%+24px)] h-0.5 bg-gradient-to-r from-brand-blue/20 via-indigo-400/30 to-emerald-400/20 z-0" />

          <div className="grid gap-8 lg:grid-cols-5 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="group flex flex-col items-center text-center lg:text-center"
              >
                {/* Step Icon */}
                <div className="relative mb-5">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-[72px] h-[72px] rounded-2xl ${step.bg} border-2 ${step.border} flex items-center justify-center ${step.color} shadow-card group-hover:shadow-card-hover transition-all mx-auto`}
                  >
                    {step.icon}
                  </motion.div>
                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl border border-brand-border p-5 shadow-card group-hover:shadow-card-hover group-hover:border-blue-100 transition-all duration-300 w-full">
                  {/* Duration badge */}
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                  >
                    {step.duration}
                  </span>

                  <h3 className={`font-display font-bold text-base text-brand-dark mb-2 group-hover:${step.color} transition-colors`}>
                    {step.title}
                  </h3>
                  <p className="text-brand-slate text-xs leading-relaxed">{step.desc}</p>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-px h-8 bg-brand-border mt-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-brand-soft rounded-2xl border border-blue-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div>
            <p className="font-display font-bold text-brand-dark text-lg mb-1">Rata-rata waktu delivery: 7–30 hari kerja</p>
            <p className="text-brand-slate text-sm">Tergantung kompleksitas proyek. Kami selalu komunikatif di setiap tahap.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {['Discovery', 'Design', 'Dev', 'Launch'].map((s, i) => (
              <div key={s} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-xs text-brand-slate font-medium hidden sm:block">{s}</span>
                {i < 3 && <div className="w-6 h-px bg-blue-200 ml-1" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
