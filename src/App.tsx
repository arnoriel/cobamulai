import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Bot, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Zap, 
  Globe} from 'lucide-react';
import Process from './components/Process';
import About from './components/About';

// --- COMPONENTS ---

// 1. Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl tracking-tighter text-white">
            cobamul<span className="text-brand-cyan">ai</span>.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'Services', 'Process', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium text-gray-300">
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-brand-primary to-brand-cyan hover:opacity-90 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-brand-primary/30">
                Mulai Proyek
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-cyan p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-navy border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Services', 'Process', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// 2. Hero Component
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-navy border border-brand-light/30 text-brand-cyan text-sm font-semibold mb-6">
            🚀 Solusi Digital Masa Depan
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Bangun Bisnis dengan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-light to-brand-primary">
              Kecerdasan Buatan
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Kami mengubah ide Anda menjadi realitas digital. Jasa pembuatan Website High-Performance dan Integrasi AI canggih untuk memanjakan pengguna Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-dark hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
              Konsultasi Gratis <ArrowRight size={20} />
            </button>
            {/* <button className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/5 transition-all backdrop-blur-sm">
              Lihat Portfolio
            </button> */}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements Animation */}
      <motion.div style={{ y: y1 }} className="absolute top-1/3 left-[10%] opacity-20 hidden lg:block">
        <Code2 size={64} className="text-brand-cyan" />
      </motion.div>
      <motion.div style={{ y: y1 }} className="absolute bottom-1/3 right-[10%] opacity-20 hidden lg:block">
        <Bot size={64} className="text-brand-primary" />
      </motion.div>
    </section>
  );
};

// 3. Services Component
const Services = () => {
  const services = [
    {
      title: "AI Development",
      desc: "Integrasi Chatbot, dan automasi cerdas untuk efisiensi bisnis.",
      icon: <Bot size={40} />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Web Development",
      desc: "Website responsif, cepat, dan modern menggunakan teknologi terbaru.",
      icon: <Globe size={40} />,
      color: "from-indigo-500 to-blue-400"
    },
    {
      title: "UI/UX Design",
      desc: "Desain antarmuka yang memanjakan mata dan pengalaman pengguna yang intuitif.",
      icon: <Rocket size={40} />,
      color: "from-cyan-400 to-teal-400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-navy/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Layanan Kami</h2>
          <p className="text-gray-400">Teknologi terbaik untuk hasil yang luar biasa.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-brand-navy border border-white/5 hover:border-brand-primary/50 transition-all group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-all`} />
              
              <div className="w-14 h-14 rounded-lg bg-brand-dark flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Features/Why Us
const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Kenapa Memilih <span className="text-brand-cyan">Cobamulai?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Kami tidak hanya membuat kode, kami membangun ekosistem digital yang kuat untuk memastikan bisnis Anda siap menghadapi masa depan.
            </p>
            
            <div className="space-y-4">
              {[
                "Teknologi Terbaru dan cocok untuk Bisnis",
                "Desain Premium & Modern",
                "Integrasi AI yang Seamless",
                "Support & Maintenance 24/7"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-brand-primary/20 text-brand-cyan">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
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
             {/* Abstract visual representation of dashboard/tech */}
             <div className="relative z-10 bg-brand-navy border border-white/10 rounded-2xl p-6 shadow-2xl shadow-brand-primary/20">
                <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-white/5 rounded w-3/4 animate-pulse" />
                  <div className="h-24 bg-brand-primary/10 rounded border border-brand-primary/20 flex items-center justify-center">
                    <span className="text-brand-cyan font-mono text-sm">System Status: Online & Optimized</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="h-20 bg-white/5 rounded" />
                     <div className="h-20 bg-white/5 rounded" />
                  </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary rounded-full blur-[80px] opacity-40" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-cyan rounded-full blur-[80px] opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 6. Footer
const Footer = () => {
  return (
    <footer className="bg-brand-navy pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">cobamul<span className="text-brand-cyan">ai</span>.</h2>
            <p className="text-gray-400 max-w-sm">
              Partner digital terpercaya Anda untuk transformasi bisnis melalui Website Premium dan Solusi Artificial Intelligence.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-cyan">Custom AI Solutions</a></li>
              <li><a href="#" className="hover:text-brand-cyan">Web Development</a></li>
              <li><a href="#" className="hover:text-brand-cyan">System Integration</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Globe size={16}/> Bandung, Indonesia</li>
              <li className="flex items-center gap-2"><Zap size={16}/> hello@cobamulai.com</li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/5 text-gray-500 text-sm">
          © {new Date().getFullYear()} Cobamulai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- APP COMPONENT ---

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-cyan selection:text-brand-dark font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services /> {/* id="services" */}
        
        <Process />  {/* id="process" (BARU) */}
        
        <Features /> {/* Why Choose Us */}
        
        <About />    {/* id="about" (BARU) */}
        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-brand-primary to-brand-cyan rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Siap Memulai Proyek Anda?</h2>
               <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Jangan biarkan ide hebat Anda hanya menjadi angan-angan. Mari realisasikan bersama tim expert kami.</p>
               <button className="bg-white text-brand-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
                 Hubungi Kami Sekarang
               </button>
             </div>
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10" />
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-20 blur-3xl" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;