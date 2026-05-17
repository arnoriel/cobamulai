import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Rocket, Building2, ArrowRight, Star } from 'lucide-react';

const packages = [
  {
    id: 'umkm',
    badge: null,
    icon: <Zap size={28} />,
    name: 'UMKM Go Digital',
    tagline: 'Langkah pertama yang tepat',
    price: '1.999.000',
    priceNote: 'one-time payment',
    color: 'from-emerald-400 to-cyan-500',
    borderColor: 'border-white/10',
    hoverBorder: 'hover:border-emerald-500/40',
    glowColor: 'rgba(52, 211, 153, 0.15)',
    accentText: 'text-emerald-400',
    accentBg: 'bg-emerald-400/10',
    features: [
      'Landing page 1 halaman',
      'Mobile responsive',
      'WhatsApp & Google Maps integration',
      'Basic SEO (title, meta, sitemap)',
      'Domain .com 1 tahun',
      'Hosting 1 tahun',
      '1x revisi desain',
      'Delivery 5–7 hari kerja',
    ],
    notIncluded: ['CMS / Admin Panel', 'AI Chatbot', 'Analytics Dashboard'],
    cta: 'Mulai Go Digital',
    featured: false,
  },
  {
    id: 'bisnis',
    badge: 'Paling Populer',
    icon: <Building2 size={28} />,
    name: 'Bisnis',
    tagline: 'Untuk bisnis yang serius',
    price: '4.999.000',
    priceNote: 'one-time payment',
    color: 'from-brand-primary to-brand-cyan',
    borderColor: 'border-brand-cyan/40',
    hoverBorder: 'hover:border-brand-cyan/70',
    glowColor: 'rgba(6, 182, 212, 0.2)',
    accentText: 'text-brand-cyan',
    accentBg: 'bg-brand-cyan/10',
    features: [
      'Multi-page website (hingga 7 halaman)',
      'Mobile responsive + animasi premium',
      'CMS / Admin panel sederhana',
      'AI Chatbot terintegrasi',
      'Advanced SEO + Google Analytics',
      'Formulir kontak & lead capture',
      'Domain .com + Hosting 1 tahun',
      '3x revisi desain',
      'Delivery 10–14 hari kerja',
      'Support 1 bulan via WhatsApp',
    ],
    notIncluded: ['E-commerce / payment gateway', 'Custom API integration'],
    cta: 'Pilih Paket Bisnis',
    featured: true,
  },
  {
    id: 'lanjutan',
    badge: null,
    icon: <Rocket size={28} />,
    name: 'Bisnis Lanjutan',
    tagline: 'Senjata digital kelas enterprise',
    price: '9.999.000',
    priceNote: 'one-time payment',
    color: 'from-purple-400 to-pink-500',
    borderColor: 'border-white/10',
    hoverBorder: 'hover:border-purple-500/40',
    glowColor: 'rgba(168, 85, 247, 0.15)',
    accentText: 'text-purple-400',
    accentBg: 'bg-purple-400/10',
    features: [
      'Custom web app (unlimited halaman)',
      'Desain UI/UX kustom penuh',
      'AI Chatbot dengan custom training',
      'Dashboard analytics real-time',
      'E-commerce + payment gateway',
      'Custom API & third-party integration',
      'SEO enterprise + sitemap auto-update',
      'Domain .com + Hosting 1 tahun',
      'Unlimited revisi (selama development)',
      'Delivery 21–30 hari kerja',
      'Support 3 bulan prioritas',
    ],
    notIncluded: [],
    cta: 'Wujudkan Visi Anda',
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Packages = ({ waLink }: { waLink?: string }) => {
  const ctaLink = waLink || 'https://wa.me/6285797009915?text=Kak+Saya+mau+Konsultasi+SaaS,+AI,+dan+Website';

  return (
    <section id="packages" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />
      <div className="absolute top-1/3 left-[-10%] w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-10%] w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-cyan text-sm font-semibold mb-6">
            <Star size={14} className="fill-brand-cyan" />
            Paket Harga Transparan
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Investasi yang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-primary">
              Sepadan Hasilnya
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Tidak ada biaya tersembunyi. Pilih paket yang sesuai dengan skala bisnis Anda — semua sudah termasuk domain & hosting.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`relative rounded-3xl border ${pkg.borderColor} ${pkg.hoverBorder} transition-all duration-500 group
                ${pkg.featured
                  ? 'bg-gradient-to-b from-[#0D1F2D] to-[#091520] lg:-mt-6 lg:mb-6 shadow-2xl'
                  : 'bg-white/[0.02] hover:bg-white/[0.04]'
                }`}
              style={pkg.featured ? {
                boxShadow: `0 0 80px ${pkg.glowColor}, 0 0 0 1px rgba(6,182,212,0.2)`,
              } : {}}
              whileHover={!pkg.featured ? {
                boxShadow: `0 0 60px ${pkg.glowColor}`,
                y: -4,
              } : { y: -2 }}
            >
              {/* Featured glow overlay */}
              {pkg.featured && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-brand-cyan/5 to-transparent pointer-events-none" />
              )}

              {/* Popular badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan text-white text-xs font-bold tracking-wide shadow-lg shadow-brand-cyan/30">
                    <Star size={11} className="fill-white" />
                    {pkg.badge}
                  </div>
                </div>
              )}

              <div className="p-8 relative z-10">
                {/* Icon + Name */}
                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.color} p-[1px] mb-5`}>
                    <div className={`w-full h-full rounded-2xl flex items-center justify-center ${pkg.accentBg} ${pkg.accentText}`}>
                      {pkg.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-sm text-gray-500">{pkg.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="flex items-end gap-2">
                    <span className="text-sm text-gray-500 mb-1">Rp</span>
                    <span className={`text-4xl font-extrabold tracking-tight ${pkg.featured ? 'text-white' : 'text-white'}`}>
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider">{pkg.priceNote}</p>
                </div>

                {/* Features */}
                <div className="mb-8 space-y-3">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${pkg.accentText}`}
                      />
                      <span className="text-sm text-gray-300 leading-snug">{feature}</span>
                    </div>
                  ))}

                  {pkg.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-35">
                      <div className="w-4 h-4 mt-0.5 flex-shrink-0 rounded-full border border-white/20 flex items-center justify-center">
                        <div className="w-[1px] h-2.5 bg-white/40 rotate-45" />
                      </div>
                      <span className="text-sm text-gray-600 leading-snug line-through decoration-white/20">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-semibold text-sm transition-all duration-300
                    ${pkg.featured
                      ? 'bg-gradient-to-r from-brand-primary to-brand-cyan text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02]'
                      : `bg-white/5 border ${pkg.borderColor} text-white hover:bg-white/10 hover:border-white/20`
                    }`}
                >
                  {pkg.cta}
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 text-gray-600 text-sm"
        >
          Semua harga sudah termasuk{' '}
          <span className="text-gray-400">domain .com & hosting 1 tahun</span>.{' '}
          Butuh custom requirement?{' '}
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-cyan hover:underline underline-offset-2 transition-colors"
          >
            Hubungi kami untuk penawaran khusus →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;