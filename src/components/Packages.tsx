import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Smartphone, Code2, ArrowRight, Star, MessageCircle } from 'lucide-react';

interface PackageData {
  id: string;
  icon: React.ReactNode;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  itemsTitle: string;
  items: string[];
  benefitsTitle: string;
  benefits: string[];
  iconGradient: string;
  accent: string;
  accentLight: string;
  accentBorder: string;
  cta: string;
}

const packages: PackageData[] = [
  {
    id: 'website',
    icon: <Globe size={22} />,
    name: 'Paket Website untuk Bisnis',
    tagline: 'Solusi website sesuai kebutuhan bisnis Anda',
    price: '3.500.000',
    priceNote: '*Harga bisa berubah, menyesuaikan fitur yang diminta',
    iconGradient: 'from-brand-blue to-indigo-500',
    accent: '#2563EB',
    accentLight: '#DBEAFE',
    accentBorder: '#93C5FD',
    itemsTitle: 'Jenis Website',
    items: [
      'Website Company',
      'Website Operasional Kerja',
      'Website Katalog',
      'Website Pribadi',
      'Website Berbasis AI',
      'Custom Website',
    ],
    benefitsTitle: 'Benefit Paket Website',
    benefits: [
      'Website yang sesuai dengan permintaan fitur dari awal hingga akhir.',
      'Hak Akses ke Dokumen Project dengan master email bersama.',
      'Biaya perpanjangan Server dan Domain cukup 1 tahun sekali, supaya lebih fokus dalam bisnis pengguna.',
      'Keamanan data karena data disimpan di Server dengan penjagaan yang ketat supaya tidak mudah di retas.',
      'Garansi 3 minggu setelah publikasi untuk perbaikan jika masih ada Bug/Error dalam Website.',
    ],
    cta: 'Pilih Paket Website',
  },
  {
    id: 'apps',
    icon: <Smartphone size={22} />,
    name: 'Paket Apps untuk Bisnis',
    tagline: 'Aplikasi custom untuk kebutuhan bisnis Anda',
    price: '6.000.000',
    priceNote: '*Harga bisa berubah, menyesuaikan fitur yang diminta',
    iconGradient: 'from-purple-500 to-pink-500',
    accent: '#7C3AED',
    accentLight: '#EDE9FE',
    accentBorder: '#C4B5FD',
    itemsTitle: 'Jenis Apps',
    items: [
      'App E-Commerce',
      'App Platform Belajar',
      'App Operasional Bisnis',
      'App Komunikasi',
      'App Berbasis AI',
      'Custom App',
    ],
    benefitsTitle: 'Benefit Paket Apps',
    benefits: [
      'App yang sesuai dengan permintaan fitur dari awal hingga akhir.',
      'Hak Akses ke Dokumen Project dengan master email bersama.',
      'Biaya perpanjangan Server dan Domain cukup 1 tahun sekali, supaya lebih fokus dalam bisnis pengguna.',
      'Keamanan data karena data disimpan di Server dengan penjagaan yang ketat supaya tidak mudah di retas.',
      'Garansi 3 minggu setelah publikasi untuk perbaikan jika masih ada Bug/Error dalam aplikasi.',
    ],
    cta: 'Pilih Paket Apps',
  },
  {
    id: 'developer-support',
    icon: <Code2 size={22} />,
    name: 'Developer Support',
    tagline: 'Bantuan teknis untuk masalah code Anda',
    price: '2.500.000',
    priceNote: '*Harga bisa berubah, menyesuaikan fitur yang diminta',
    iconGradient: 'from-orange-400 to-red-500',
    accent: '#EA580C',
    accentLight: '#FFEDD5',
    accentBorder: '#FED7AA',
    itemsTitle: 'Cakupan Support',
    items: [
      'Perbaikan Bug/Error pada Code',
      'Support semua Framework',
      'Support semua Bahasa Pemrograman',
      'Optimasi & Review Code',
    ],
    benefitsTitle: 'Benefit Developer Support',
    benefits: [
      'Task diselesaikan sesuai dengan yang diminta.',
      'Bisa revisi jika masih ada yang kurang.',
      'Keamanan akses ke Database dan Server terjaga.',
    ],
    cta: 'Pilih Developer Support',
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="reveal text-center mb-16"
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
            Pilih paket sesuai kebutuhan bisnis Anda — Website atau Apps.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:grid-rows-[repeat(7,auto)] lg:items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="reveal relative rounded-3xl transition-shadow duration-300 group lg:grid lg:[grid-template-rows:subgrid] lg:row-span-7"
              style={{
                background: '#fff',
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
              }}
            >
              <div className="p-7 pb-0 pt-7 lg:grid lg:[grid-template-rows:subgrid] lg:row-span-7">
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
                  className="mb-7 pb-7 self-start"
                  style={{ borderBottom: `1px solid ${pkg.accentBorder}55` }}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-brand-muted text-sm font-medium">
                      Harga Mulai dari Rp
                    </span>
                    <span className="font-display font-extrabold text-4xl text-brand-dark tracking-tight">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted mt-2 italic">{pkg.priceNote}</p>
                </div>

                {/* Items title */}
                <p className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-3 self-start">
                  {pkg.itemsTitle}
                </p>

                {/* Items list */}
                <div className="space-y-2.5 self-start mb-7">
                  {pkg.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: pkg.accent }}
                      />
                      <span className="text-sm text-brand-slate leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits title */}
                <p className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-3 self-start">
                  {pkg.benefitsTitle}
                </p>

                {/* Benefits list */}
                <div className="space-y-2.5 self-start mb-7">
                  {pkg.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: pkg.accent }}
                      />
                      <span className="text-sm text-brand-slate leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-semibold text-sm transition-[transform,opacity] duration-300 hover:scale-[1.01] self-end mb-7"
                  style={{
                    background: pkg.accentLight,
                    border: `1px solid ${pkg.accentBorder}`,
                    color: pkg.accent,
                  }}
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="reveal mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 bg-brand-soft rounded-2xl border border-blue-100 px-7 py-5"
        >
          <div>
            <p className="font-display font-bold text-brand-dark text-sm mb-0.5">
              Butuh custom requirement?
            </p>
            <p className="text-brand-muted text-sm">
              Diskusikan kebutuhan Website atau Apps Anda bersama kami.
            </p>
          </div>
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-blue-sm whitespace-nowrap flex-shrink-0"
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