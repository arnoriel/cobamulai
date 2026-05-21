import { motion } from 'framer-motion';
import {
  Trophy,
  Users,
  Zap,
  Target,
  Bot,
  Globe,
  Rocket,
  ShieldCheck,
  Code2,
  BarChart3,
} from 'lucide-react';

const stats = [
  { label: 'Proyek Selesai', value: '50+', icon: <Trophy size={18} />, color: 'text-amber-500', bg: 'bg-amber-50' },
  { label: 'Client Satisfaction', value: '100%', icon: <Users size={18} />, color: 'text-brand-blue', bg: 'bg-blue-50' },
  { label: 'AI Models Used', value: '24', icon: <Zap size={18} />, color: 'text-purple-500', bg: 'bg-purple-50' },
  { label: 'Years Experience', value: '4+', icon: <Target size={18} />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
];

const services = [
  {
    icon: <Bot size={22} />,
    title: 'AI & Automation',
    desc: 'Chatbot cerdas, pipeline otomasi, dan integrasi model AI yang bekerja 24/7 untuk meningkatkan efisiensi bisnis Anda.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    hoverBorder: 'hover:border-purple-200',
    tag: 'Most Popular',
    tagColor: 'bg-purple-100 text-purple-600',
  },
  {
    icon: <Globe size={22} />,
    title: 'Premium Web Design',
    desc: 'UI/UX futuristik dengan performa ultra-cepat, konversi tinggi, dan SEO-optimized yang memenangkan klien.',
    color: 'text-brand-blue',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    hoverBorder: 'hover:border-blue-200',
    tag: null,
    tagColor: '',
  },
  {
    icon: <Rocket size={22} />,
    title: 'SaaS Development',
    desc: 'Bangun produk digital yang scalable, aman, dan siap untuk melayani ribuan pengguna dari hari pertama.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    hoverBorder: 'hover:border-indigo-200',
    tag: null,
    tagColor: '',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Full-Stack Engineering',
    desc: 'Dari arsitektur database hingga antarmuka pengguna — tim engineer kami handle semuanya dengan standar kode industri.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    hoverBorder: 'hover:border-cyan-200',
    tag: null,
    tagColor: '',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Security & Compliance',
    desc: 'Sistem berstandar enterprise dengan enkripsi, audit trail, dan keamanan data yang tidak kompromi.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    hoverBorder: 'hover:border-emerald-200',
    tag: null,
    tagColor: '',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Analytics & Growth',
    desc: 'Dashboard real-time, tracking konversi, dan rekomendasi berbasis data untuk mendorong pertumbuhan bisnis.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    hoverBorder: 'hover:border-orange-200',
    tag: null,
    tagColor: '',
  },
];

const About = () => {
  return (
    <section id="about" className="py-28 section-blue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── TENTANG ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border text-brand-blue text-sm font-semibold mb-7 shadow-card">
              Tentang Cobamulai
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-7 leading-tight tracking-tight">
              Lebih dari Sekadar
              <br />
              <span className="text-gradient">Software House.</span>
            </h2>

            <div className="space-y-5 text-brand-slate text-lg leading-relaxed">
              <p>
                Cobamulai didirikan dengan satu misi ambisius:{' '}
                <strong className="text-brand-dark">Mendemokratisasi teknologi AI untuk bisnis Indonesia.</strong>
              </p>
              <p>
                Kami adalah kolektif dari <strong className="text-brand-dark">Engineer, Designer, dan AI Researcher</strong>.
                Kami percaya bahwa kode bukan sekadar instruksi mesin — melainkan seni untuk memecahkan masalah nyata
                dan menciptakan nilai ekonomi yang berkelanjutan.
              </p>
              <p>
                Setiap proyek yang kami bangun dimulai dengan pertanyaan: <em>"Bagaimana ini bisa menghasilkan ROI
                nyata bagi klien?"</em> — bukan sekadar kelihatan bagus.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(37,99,235,0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`p-6 rounded-2xl bg-white border border-brand-border shadow-card transition-all ${
                  idx % 2 === 1 ? 'mt-6' : ''
                }`}
              >
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color} mb-4`}>
                  {stat.icon}
                </div>
                <h3 className="font-display font-extrabold text-4xl text-brand-dark mb-1 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-sm text-brand-muted font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── LAYANAN ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border text-brand-blue text-sm font-semibold mb-5 shadow-card">
              Ekosistem Layanan
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight mb-4">
              Solusi <span className="text-gradient">End-to-End</span> dalam Satu Tim
            </h2>
            <p className="text-brand-slate text-lg max-w-2xl mx-auto">
              Tidak perlu vendor berbeda untuk tiap kebutuhan. Kami menangani semua aspek teknologi digital bisnis Anda.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                className={`group relative bg-white rounded-2xl p-6 border ${service.border} ${service.hoverBorder} shadow-card hover:shadow-card-hover transition-all duration-300 cursor-default`}
              >
                {/* Tag */}
                {service.tag && (
                  <span className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-semibold ${service.tagColor}`}>
                    {service.tag}
                  </span>
                )}

                <div className={`w-11 h-11 rounded-xl ${service.bg} flex items-center justify-center ${service.color} mb-5`}>
                  {service.icon}
                </div>

                <h3 className={`font-display font-bold text-lg text-brand-dark mb-2 group-hover:${service.color} transition-colors`}>
                  {service.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
