import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Send,
  Star,
  Users,
  Zap,
  Code2,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Mail,
  Phone,
} from 'lucide-react';

const jobs = [
  {
    id: 'freelance-developer',
    title: 'Freelance Developer',
    department: 'Engineering',
    type: 'Freelance / Remote',
    location: 'Remote Indonesia',
    salary: 'Kompetitif (project-based)',
    salaryNote: 'Rp 500rb–5jt per proyek, tergantung kompleksitas',
    icon: <Code2 size={24} />,
    color: 'text-brand-blue',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    accentGradient: 'from-brand-blue to-indigo-500',
    urgent: false,
    description:
      'Kami mencari developer berbakat untuk bergabung sebagai mitra freelance Cobamulai. Kamu akan mengerjakan proyek-proyek web dan AI yang menarik untuk klien bisnis nyata di Indonesia.',
    responsibilities: [
      'Membangun web app dan SaaS menggunakan React, Next.js, atau Vue',
      'Mengintegrasikan API dan layanan AI (OpenAI, Claude, dsb.)',
      'Berkolaborasi dengan tim desain untuk implementasi UI/UX presisi tinggi',
      'Menulis kode yang bersih, terdokumentasi, dan mudah di-maintain',
      'Memberikan update progress secara rutin kepada project manager',
    ],
    requirements: [
      'Minimal 1 tahun pengalaman di web development (frontend/fullstack)',
      'Menguasai JavaScript/TypeScript dan minimal satu framework modern',
      'Familiar dengan Git, dan REST API',
      'Bisa bekerja dengan deadline yang jelas',
      'Bonus: pengalaman dengan AI/ML integration',
    ],
    benefits: [
      'Gaji kompetitif berbasis proyek',
      'Pilih proyek yang sesuai minat & skill',
      'Jam kerja fleksibel (remote)',
      'Networking dengan klien bisnis aktif',
      'Mentorship dari senior developer',
    ],
  },
  {
    id: 'freelance-sales',
    title: 'Freelance Sales',
    department: 'Business Development',
    type: 'Freelance / Commission',
    location: 'Remote / Seluruh Indonesia',
    salary: 'Komisi + Bonus Tinggi',
    salaryNote: 'Komisi 10–15% per deal + bonus performance bulanan',
    icon: <TrendingUp size={24} />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    accentGradient: 'from-emerald-500 to-teal-500',
    urgent: true,
    description:
      'Cobamulai sedang ekspansi dan kami butuh Freelance Sales yang ambisius untuk membantu bisnis-bisnis Indonesia mengenal layanan kami. Komisi terbaik di industri, tidak ada target yang tidak realistis.',
    responsibilities: [
      'Mencari dan mendekati prospek bisnis (UMKM, startup, perusahaan) yang butuh web/AI',
      'Melakukan presentasi dan demo layanan Cobamulai kepada calon klien',
      'Mengelola pipeline leads menggunakan tools yang kami sediakan',
      'Berkoordinasi dengan tim teknis untuk penyusunan proposal',
      'Menjaga hubungan jangka panjang dengan klien yang sudah closing',
    ],
    requirements: [
      'Pengalaman sales atau marketing minimal 6 bulan (online/offline)',
      'Komunikasi yang baik dan percaya diri saat presentasi',
      'Memahami dasar-dasar teknologi web dan digital marketing',
      'Punya jaringan bisnis yang luas adalah nilai plus',
      'Motivasi tinggi dan berorientasi hasil',
    ],
    benefits: [
      'Komisi 50% per closed deal (tidak ada batas atas)',
      'Bonus bulanan berdasarkan performance',
      'Jam kerja bebas, fokus pada hasil',
      'Training produk dan teknik sales dari tim kami',
      'Berpotensi dikonversi ke full-time jika performa excellent',
    ],
  },
];

const whyJoin = [
  {
    icon: <DollarSign size={20} />,
    title: 'Gaji Kompetitif',
    desc: 'Kami bayar di atas rata-rata pasar, karena kami percaya talent terbaik layak mendapat kompensasi terbaik.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: <Zap size={20} />,
    title: 'Proyek Menarik',
    desc: 'Tidak ada hari yang membosankan — dari startup tech sampai UMKM, setiap proyek punya tantangan unik.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: <Users size={20} />,
    title: 'Tim yang Kolaboratif',
    desc: 'Budaya kerja yang saling support, tidak toxic, dan selalu ada yang bisa diajak diskusi.',
    color: 'text-brand-blue',
    bg: 'bg-blue-50',
  },
  {
    icon: <Star size={20} />,
    title: 'Flexibilitas Penuh',
    desc: 'Remote, jam fleksibel, dan fokus pada output — bukan jumlah jam duduk di depan layar.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#F8FBFF", color: "#0F172A" }}>
      {/* Navbar minimal */}
      <nav className="bg-white border-b border-brand-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[64px]">
            <a href="/" className="flex items-center gap-2 text-brand-dark font-display font-bold text-xl">
              cobamul<span className="text-brand-blue">ai</span>.
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-brand-slate hover:text-brand-blue transition-colors"
            >
              <ArrowLeft size={16} />
              Kembali ke Home
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-blue py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border text-brand-blue text-sm font-semibold mb-8 shadow-card">
              <Briefcase size={14} />
              Karir di Cobamulai
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
              Bangun Karir Impian,
              <br />
              <span className="text-gradient">Sambil Kerja Bebas.</span>
            </h1>

            <p className="text-brand-slate text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Bergabunglah dengan tim Cobamulai sebagai mitra freelance. Proyek nyata, gaji kompetitif, dan fleksibilitas penuh — karena kami percaya cara kerja terbaik adalah yang paling produktif untukmu.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-blue text-white rounded-2xl font-semibold hover:bg-blue-700 transition-all shadow-blue-sm hover:shadow-blue-glow"
              >
                Lihat Lowongan
                <ChevronRight size={16} />
              </a>
              <a
                href="mailto:cobamulai.ai@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-slate rounded-2xl font-semibold border border-brand-border hover:border-blue-200 hover:text-brand-blue transition-all"
              >
                <Mail size={16} />
                Kirim CV Langsung
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 tracking-tight">
              Kenapa <span className="text-gradient">Cobamulai?</span>
            </h2>
            <p className="text-brand-slate text-lg max-w-xl mx-auto">
              Bukan sekadar kerja, tapi berkembang bareng tim yang punya visi yang sama.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyJoin.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-brand-border p-6 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-brand-dark text-base mb-2">{item.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 section-blue relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border text-brand-blue text-sm font-semibold mb-5 shadow-card">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {jobs.length} Posisi Terbuka
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Posisi yang Tersedia
            </h2>
          </motion.div>

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-brand-border shadow-card overflow-hidden"
              >
                {/* Job Header */}
                <div className="p-8 border-b border-brand-border">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className={`w-14 h-14 rounded-2xl ${job.bg} flex items-center justify-center ${job.color} flex-shrink-0`}>
                      {job.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <h3 className="font-display font-extrabold text-2xl text-brand-dark">{job.title}</h3>
                        {job.urgent && (
                          <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                            🔥 Urgent
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-brand-slate">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={13} className={job.color} />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className={job.color} />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className={job.color} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <DollarSign size={13} className="text-emerald-500" />
                          <span className="font-semibold text-emerald-700">{job.salary}</span>
                        </span>
                      </div>

                      <p className={`mt-1 text-xs font-medium`} style={{ color: job.color === 'text-brand-blue' ? '#2563EB' : '#059669' }}>
                        {job.salaryNote}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-brand-slate leading-relaxed">{job.description}</p>
                </div>

                {/* Job Details */}
                <div className="p-8 grid md:grid-cols-3 gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-display font-bold text-brand-dark text-sm mb-4 uppercase tracking-wide">
                      Tanggung Jawab
                    </h4>
                    <ul className="space-y-2.5">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle size={14} className={`${job.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm text-brand-slate leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="font-display font-bold text-brand-dark text-sm mb-4 uppercase tracking-wide">
                      Kualifikasi
                    </h4>
                    <ul className="space-y-2.5">
                      {job.requirements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className={`w-4 h-4 rounded-full ${job.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${job.color === 'text-brand-blue' ? 'bg-brand-blue' : 'bg-emerald-500'}`} />
                          </div>
                          <span className="text-sm text-brand-slate leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-display font-bold text-brand-dark text-sm mb-4 uppercase tracking-wide">
                      Yang Kamu Dapat
                    </h4>
                    <ul className="space-y-2.5">
                      {job.benefits.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Star size={13} className="text-amber-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-brand-slate leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply CTA */}
                <div className={`p-6 bg-gradient-to-r ${job.accentGradient} flex flex-col sm:flex-row items-center justify-between gap-5`}>
                  <div>
                    <p className="font-semibold text-white mb-1">Tertarik bergabung?</p>
                    <p className="text-white/70 text-sm">
                      Kirim CV + portofolio (jika ada) ke email kami atau chat langsung via WhatsApp
                    </p>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <a
                      href={`mailto:cobamulai.ai@gmail.com?subject=Lamaran%20${encodeURIComponent(job.title)}&body=Halo%20Cobamulai%2C%0A%0ASaya%20tertarik%20melamar%20posisi%20${encodeURIComponent(job.title)}.%0A%0ANama%3A%20%5BNama%20Kamu%5D%0ALinkedIn%2FPortfolio%3A%20%5BLink%5D%0A%0ATerima%20kasih!`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-brand-dark rounded-xl font-semibold text-sm hover:bg-slate-50 transition-all shadow-lg"
                    >
                      <Mail size={15} />
                      Kirim Email
                    </a>
                    <a
                      href={`https://wa.me/6288272264011?text=Halo%20Cobamulai!%20Saya%20tertarik%20melamar%20posisi%20${encodeURIComponent(job.title)}.%20Boleh%20info%20lebih%20lanjut?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 text-white rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/30 transition-all"
                    >
                      <Phone size={15} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6">
              <Send size={28} className="text-brand-blue" />
            </div>
            <h2 className="font-display text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">
              Tidak ada posisi yang cocok?
            </h2>
            <p className="text-brand-slate text-lg mb-8 leading-relaxed">
              Kirimkan CV dan perkenalan dirimu ke kami. Kalau ada kecocokan, kami pasti reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:cobamulai.ai@gmail.com?subject=Open%20Application%20-%20Cobamulai&body=Halo%20tim%20Cobamulai%2C%0A%0ASaya%20tertarik%20bergabung%20dengan%20tim%20kalian.%20Berikut%20perkenalan%20singkat%20saya%3A%0A%0ANama%3A%0AKeahlian%3A%0APortfolio%2FLinkedIn%3A%0A%0ATerima%20kasih!"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-blue text-white rounded-2xl font-semibold hover:bg-blue-700 transition-all shadow-blue-sm"
              >
                <Mail size={18} />
                cobamulai.ai@gmail.com
              </a>
              <a
                href="https://wa.me/6288272264011?text=Halo%20Cobamulai!%20Saya%20mau%20kirim%20lamaran%20terbuka."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-500 text-white rounded-2xl font-semibold hover:bg-emerald-600 transition-all"
              >
                <Phone size={18} />
                +62 882 7226 4011
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="bg-brand-dark py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-display font-bold text-white text-lg">cobamul<span className="text-brand-cyan">ai</span>.</p>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Cobamulai Technologies.</p>
          <a href="/" className="text-slate-500 text-sm hover:text-brand-cyan transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> Kembali ke Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Careers;
