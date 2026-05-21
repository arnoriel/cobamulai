import { motion } from 'framer-motion';
import { CheckCircle2, X, Zap, Rocket, Building2, ArrowRight, Star, MessageCircle } from 'lucide-react';

interface PackageData {
  id: string;
  badge: string | null;
  icon: React.ReactNode;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  iconGradient: string;
  accent: string;
  accentLight: string;
  accentBorder: string;
  featured: boolean;
  features: string[];
  notIncluded: string[];
  cta: string;
  deliveryTime: string;
}

const packages: PackageData[] = [
  {
    id: 'umkm',
    badge: null,
    icon: <Zap size={22} />,
    name: 'UMKM Go Digital',
    tagline: 'Langkah pertama yang tepat',
    price: '1.999.000',
    priceNote: 'one-time payment',
    iconGradient: 'from-emerald-400 to-teal-500',
    accent: '#059669',
    accentLight: '#D1FAE5',
    accentBorder: '#A7F3D0',
    featured: false,
    deliveryTime: '5–7 hari kerja',
    features: [
      'Landing page 1 halaman',
      'Mobile responsive',
      'WhatsApp & Google Maps integration',
      'Basic SEO (title, meta, sitemap)',
      'Domain .com 1 tahun',
      'Hosting 1 tahun',
      '1× revisi desain',
    ],
    notIncluded: ['CMS / Admin Panel', 'AI Chatbot', 'Analytics Dashboard'],
    cta: 'Mulai Go Digital',
  },
  {
    id: 'bisnis',
    badge: 'Paling Populer',
    icon: <Building2 size={22} />,
    name: 'Bisnis',
    tagline: 'Untuk bisnis yang serius tumbuh',
    price: '4.999.000',
    priceNote: 'one-time payment',
    iconGradient: 'from-brand-blue to-indigo-500',
    accent: '#2563EB',
    accentLight: '#DBEAFE',
    accentBorder: '#93C5FD',
    featured: true,
    deliveryTime: '10–14 hari kerja',
    features: [
      'Multi-page website (hingga 7 halaman)',
      'Mobile responsive + animasi premium',
      'CMS / Admin panel sederhana',
      'AI Chatbot terintegrasi',
      'Advanced SEO + Google Analytics',
      'Formulir kontak & lead capture',
      'Domain .com + Hosting 1 tahun',
      '3× revisi desain',
      'Support 1 bulan via WhatsApp',
    ],
    notIncluded: ['E-commerce / payment gateway', 'Custom API integration'],
    cta: 'Pilih Paket Bisnis',
  },
  {
    id: 'lanjutan',
    badge: null,
    icon: <Rocket size={22} />,
    name: 'Bisnis Lanjutan',
    tagline: 'Senjata digital kelas enterprise',
    price: '9.999.000',
    priceNote: 'one-time payment',
    iconGradient: 'from-purple-500 to-pink-500',
    accent: '#7C3AED',
    accentLight: '#EDE9FE',
    accentBorder: '#C4B5FD',
    featured: false,
    deliveryTime: '21–30 hari kerja',
    features: [
      'Custom web app (unlimited halaman)',
      'Desain UI/UX kustom penuh',
      'AI Chatbot dengan custom training',
      'Dashboard analytics real-time',
      'E-commerce + payment gateway',
      'Custom API & third-party integration',
      'SEO enterprise + sitemap auto-update',
      'Domain .com + Hosting 1 tahun',
      'Unlimited revisi selama development',
      'Support 3 bulan prioritas',
    ],
    notIncluded: [],
    cta: 'Wujudkan Visi Anda',
  },
];

const Packages = ({ waLink }: { waLink?: string }) => {
  const ctaLink =
    waLink ||
    'https://wa.me/6285797009915?text=Kak+Saya+mau+Konsultasi+SaaS,+AI,+dan+Website';

  return (
    <section id="packages" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle dot bg */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Ambient glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[1px] bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft border border-blue-100 text-brand-blue text-sm font-semibold mb-6 shadow-card">
            <Star size={13} className="fill-brand-blue text-brand-blue" />
            Paket Harga Transparan
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-5 tracking-tight leading-tight">
            Investasi yang{' '}
            <span className="text-gradient">Sepadan Hasilnya</span>
          </h2>
          <p className="text-brand-slate text-lg max-w-2xl mx-auto leading-relaxed">
            Tidak ada biaya tersembunyi. Pilih paket sesuai skala bisnis Anda —
            semua sudah termasuk domain &amp; hosting.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl transition-all duration-300 group ${
                pkg.featured
                  ? 'lg:-mt-4 lg:mb-4'
                  : ''
              }`}
              style={
                pkg.featured
                  ? {
                      background: '#fff',
                      border: `2px solid ${pkg.accentBorder}`,
                      boxShadow: `0 8px 40px rgba(37,99,235,0.14), 0 1px 4px rgba(0,0,0,0.06)`,
                    }
                  : {
                      background: '#fff',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
                    }
              }
            >
              {/* Popular badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-wide shadow-blue-sm"
                    style={{ background: `linear-gradient(135deg, ${pkg.accent}, #0EA5E9)` }}
                  >
                    <Star size={11} className="fill-white" />
                    {pkg.badge}
                  </div>
                </div>
              )}

              <div className="p-7">
                {/* Icon + Name */}
                <div className="mb-7">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pkg.iconGradient} flex items-center justify-center text-white mb-4 shadow-sm`}
                  >
                    {pkg.icon}
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-brand-dark leading-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-brand-muted text-sm mt-1">{pkg.tagline}</p>
                </div>

                {/* Price */}
                <div
                  className="mb-7 pb-7"
                  style={{ borderBottom: `1px solid ${pkg.accentBorder}55` }}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-brand-muted text-sm font-medium">Rp</span>
                    <span className="font-display font-extrabold text-4xl text-brand-dark tracking-tight">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-brand-muted uppercase tracking-wider">
                      {pkg.priceNote}
                    </p>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: pkg.accentLight, color: pkg.accent }}
                    >
                      ⏱ {pkg.deliveryTime}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-7 space-y-2.5">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: pkg.accent }}
                      />
                      <span className="text-sm text-brand-slate leading-snug">{feature}</span>
                    </div>
                  ))}
                  {pkg.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 opacity-40">
                      <X size={15} className="mt-0.5 flex-shrink-0 text-brand-muted" />
                      <span className="text-sm text-brand-muted leading-snug line-through">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                    pkg.featured
                      ? 'text-white hover:opacity-90 hover:scale-[1.02]'
                      : 'text-brand-dark hover:scale-[1.01]'
                  }`}
                  style={
                    pkg.featured
                      ? {
                          background: `linear-gradient(135deg, ${pkg.accent}, #0EA5E9)`,
                          boxShadow: `0 4px 20px ${pkg.accent}35`,
                        }
                      : {
                          background: pkg.accentLight,
                          border: `1px solid ${pkg.accentBorder}`,
                          color: pkg.accent,
                        }
                  }
                >
                  {pkg.cta}
                  <ArrowRight
                    size={15}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 bg-brand-soft rounded-2xl border border-blue-100 px-7 py-5"
        >
          <div>
            <p className="font-display font-bold text-brand-dark text-sm mb-0.5">
              Butuh custom requirement?
            </p>
            <p className="text-brand-muted text-sm">
              Semua harga sudah termasuk domain .com &amp; hosting 1 tahun.
            </p>
          </div>
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-blue-sm whitespace-nowrap flex-shrink-0"
          >
            <MessageCircle size={15} />
            Diskusi Kebutuhan Anda →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;