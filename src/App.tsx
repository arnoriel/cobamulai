import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Zap,
  Globe,
  ShieldCheck,
  Sparkles,
  Instagram,
  Phone
} from 'lucide-react';
// Pastikan file supabaseClient.js sudah dibuat di folder src
import { supabase } from './supabaseClient';
import Process from './components/Process';
import Chatbot from './components/Chatbot';
import About from './components/About';

// --- COMPONENTS ---

// 1. Navbar Component (Glassmorphism Updated)
const Navbar = ({ waLink }: { waLink: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-dark/70 backdrop-blur-xl border-b border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 font-bold text-2xl tracking-tighter text-white cursor-pointer">
            <span>cobamul<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">ai</span>.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['Home', 'Services', 'Process', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all group-hover:w-full" />
                </a>
              ))}
              
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:border-brand-cyan/50 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Mulai Proyek <Zap size={16} className="text-brand-cyan fill-brand-cyan" />
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['Home', 'Services', 'Process', 'About'].map((item) => (
                <a key={item} onClick={() => setIsOpen(false)} href={`#${item.toLowerCase()}`} className="block px-3 py-3 rounded-lg hover:bg-white/5 text-base font-medium text-gray-300 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
              <a 
                 href={waLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block mt-4 text-center py-3 rounded-lg bg-gradient-to-r from-brand-primary to-brand-cyan text-white font-bold"
              >
                Mulai Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// 2. Hero Component (Mobile Responsive Fix)
const Hero = ({ waLink }: { waLink: string }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-brand-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,#000_100%)]"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] mix-blend-screen" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-sm font-medium mb-6 md:mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            Solusi Digital Next-Gen
          </motion.div>

          {/* Heading - FIXED: Responsive sizes & wrap handling */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8 leading-tight">
            Transformasi Bisnis <br className="hidden md:block" />
            {/* Removed whitespace-nowrap to prevent clipping on mobile */}
            <span className="relative inline-block mt-2 md:mt-0">
              <span className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-cyan blur-2xl opacity-30"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-cyan to-brand-primary animate-gradient-x">
                Era Artificial Intelligence
              </span>
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed px-2">
            Hadirkan pengalaman digital kelas dunia. Kami menggabungkan <span className="text-white font-semibold">Desain Futuristik</span> dan <span className="text-white font-semibold">Kecerdasan Buatan</span> untuk mempercepat pertumbuhan bisnis Anda.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center px-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative px-8 py-4 bg-white text-brand-dark rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Konsultasi Gratis <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 hover:border-white/30">
               Jelajahi Layanan
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating 3D Elements */}
      <motion.div style={{ y: y1, opacity }} className="absolute top-1/4 left-[5%] opacity-30 hidden xl:block pointer-events-none">
        <div className="relative p-4 bg-brand-navy/50 backdrop-blur-md rounded-2xl border border-white/10 rotate-[-12deg]">
             <Code2 size={48} className="text-brand-cyan" />
        </div>
      </motion.div>
      <motion.div style={{ y: y1, opacity }} className="absolute bottom-1/4 right-[5%] opacity-30 hidden xl:block pointer-events-none">
        <div className="relative p-4 bg-brand-navy/50 backdrop-blur-md rounded-2xl border border-white/10 rotate-[12deg]">
             <Bot size={48} className="text-brand-primary" />
        </div>
      </motion.div>
    </section>
  );
};

// 3. Services Component (Bento Grid Style)
const Services = () => {
  const services = [
    {
      title: "AI & Automation",
      desc: "Chatbot cerdas, prediksi data, dan sistem otomatisasi yang bekerja 24/7 untuk Anda.",
      icon: <Bot size={32} />,
      color: "from-purple-500 to-indigo-500",
      colSpan: "md:col-span-2"
    },
    {
      title: "SaaS Development",
      desc: "Bangun produk digital yang scalable dan aman.",
      icon: <Rocket size={32} />,
      color: "from-pink-500 to-rose-500",
      colSpan: "md:col-span-1"
    },
    {
      title: "Premium Web Design",
      desc: "UI/UX futuristik dengan performa ultra-cepat dan SEO optimized.",
      icon: <Globe size={32} />,
      color: "from-cyan-400 to-blue-500",
      colSpan: "md:col-span-3"
    },
  ];

  return (
    <section id="services" className="py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Ekosistem Layanan <span className="text-brand-cyan">Terintegrasi</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Solusi end-to-end untuk kebutuhan teknologi modern Anda.
            </p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-brand-cyan to-transparent rounded-full mb-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.colSpan} group relative p-8 rounded-3xl bg-brand-navy/40 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300`}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-6`}>
                    <div className="w-full h-full bg-brand-dark rounded-2xl flex items-center justify-center text-white group-hover:text-brand-cyan transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Features (HUD / Dashboard Aesthetic)
const Features = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-dark">
        {/* Background Decorative */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-brand-cyan font-mono text-sm mb-6">
                <Sparkles size={16} /> WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Teknologi yang <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">
                 Bekerja Untuk Anda
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Kami tidak sekadar membuat sistem. Kami merancang arsitektur sistem yang aman, cepat, dan siap untuk scaling jutaan pengguna.
            </p>
            
            <div className="space-y-6">
              {[
                { text: "Arsitektur Cloud-Native & Scalable", icon: <Globe size={20}/> },
                { text: "Keamanan Data Enterprise Grade", icon: <ShieldCheck size={20}/> },
                { text: "Integrasi AI & Machine Learning", icon: <Bot size={20}/> },
                { text: "Support Premium 24/7", icon: <CheckCircle2 size={20}/> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-cyan border border-white/5 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             {/* Abstract HUD / Dashboard UI */}
             <div className="relative z-10 bg-[#0A0A0B] border border-white/10 rounded-2xl p-1 shadow-2xl shadow-brand-primary/20 backdrop-blur-xl">
                <div className="bg-brand-navy/50 rounded-xl p-6 border border-white/5 h-full">
                    {/* Fake Browser Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="h-6 w-32 bg-white/5 rounded-md text-[10px] flex items-center justify-center text-gray-500 font-mono">
                            dashboard.app
                        </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="space-y-4 font-mono text-sm">
                        <div className="flex justify-between items-center text-gray-400 mb-2">
                            <span>Server Status</span>
                            <span className="text-green-400">● Online</span>
                        </div>
                        <div className="h-32 bg-gradient-to-r from-brand-primary/20 to-brand-cyan/20 rounded-lg border border-brand-cyan/20 relative overflow-hidden">
                             {/* Animated Wave */}
                             <div className="absolute inset-0 opacity-30 flex items-center justify-center">
                                <div className="w-full h-[1px] bg-brand-cyan shadow-[0_0_10px_#22d3ee]"></div>
                             </div>
                             <div className="p-4">
                                <div className="text-2xl font-bold text-white">99.9%</div>
                                <div className="text-xs text-brand-cyan">Uptime Guarantee</div>
                             </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                <div className="text-gray-500 text-xs mb-1">Total Users</div>
                                <div className="text-white font-bold text-lg">24.5K</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                <div className="text-gray-500 text-xs mb-1">AI Requests</div>
                                <div className="text-white font-bold text-lg">1.2M</div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Glow Effects Behind */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/30 rounded-full blur-[80px]" />
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-cyan/30 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 6. Footer (Minimalist Modern with Updated Socials)
const Footer = ({ waLink }: { waLink: string }) => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">cobamul<span className="text-brand-cyan">ai</span>.</h2>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
              Partner teknologi strategis untuk transformasi bisnis Anda. Kami membangun masa depan digital.
            </p>
            
            <div className="flex gap-4">
                {/* Instagram */}
                <a 
                   href="https://www.instagram.com/cobamulai?igsh=MW8wNXdwZHhueGtraQ=="
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 text-gray-400 transition-all cursor-pointer hover:bg-gradient-to-tr hover:from-purple-500 hover:to-orange-500 hover:text-white hover:border-transparent"
                >
                    <Instagram size={18} />
                </a>

                {/* WhatsApp */}
                <a 
                   href={waLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 text-gray-400 transition-all cursor-pointer hover:bg-green-600 hover:text-white hover:border-transparent"
                >
                    <Phone size={18} />
                </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">Layanan</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">AI Solutions</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Cloud Architecture</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Mobile Apps</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">Kontak</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex items-start gap-3">
                  <Globe size={16} className="mt-1 text-brand-cyan"/> 
                  <span>Bandung, West Java<br/>Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                  <Zap size={16} className="text-brand-cyan"/> 
                  <span>cobamulai@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <div>© {new Date().getFullYear()} Cobamulai Technologies.</div>
          <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- APP COMPONENT ---
function App() {
  // --- REFERRAL LOGIC START ---
  const defaultNumber = "6285797009915";
  const [waLink, setWaLink] = useState("");

  // Pesan Default
  const message = "Kak+Saya+mau+Konsultasi+SaaS,+AI,+dan+Website";

  useEffect(() => {
    const fetchReferral = async () => {
      // 1. Ambil params dari URL
      const queryParams = new URLSearchParams(window.location.search);
      const refNumber = queryParams.get("refNumber");
      let targetNumber = defaultNumber;

      if (refNumber) {
        // 2. Cek ke Supabase jika refNumber ada
        const { data, error } = await supabase
          .from('referrals')
          .select('phone_number')
          .eq('ref_number', refNumber)
          .single();

        if (error) {
          console.error("Referral error or not found:", error.message);
        } else if (data) {
          targetNumber = data.phone_number;
        }
      }

      // 3. Update State Link WA
      setWaLink(`https://wa.me/${targetNumber}?text=${message}`);
    };
    fetchReferral();
  }, []);
  // --- REFERRAL LOGIC END ---

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-cyan/30 selection:text-white font-sans antialiased">
      <Navbar waLink={waLink} />
      <main>
        <Hero waLink={waLink} />
        <Services /> 
        
        <Process /> 
        
        <Features /> 
        
        <About /> 
        
        {/* Call to Action Section (Premium Warp Style) */}
        <section className="py-32 px-4 relative overflow-hidden">
             <div className="absolute inset-0 bg-brand-dark/90 z-0"></div>
             {/* Gradient Orb Background */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-brand-primary/20 to-brand-cyan/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10 text-center">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group"
             >
                  {/* Hover spotlight effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                    Siap Mengubah <span className="text-brand-cyan">Ide Menjadi Nyata?</span>
                  </h2>
                  <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
                    Jangan biarkan kompetitor mendahului Anda. Mari bangun sistem digital yang canggih bersama kami sekarang.
                  </p>
                  
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-primary to-brand-cyan text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:scale-105 transition-all"
                  >
                    Hubungi Kami Sekarang <Rocket size={20} />
                  </a>
             </motion.div>
          </div>
        </section>

        <Chatbot />
        
      </main>
      <Footer waLink={waLink} />
    </div>
  );
}

export default App;
