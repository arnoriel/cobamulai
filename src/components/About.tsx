import { motion } from 'framer-motion';

// const stats = [
//   { label: "Proyek Selesai", value: "50+", icon: <Trophy size={20} /> },
//   { label: "Client Satisfaction", value: "100%", icon: <Users size={20} /> },
//   { label: "AI Models Deployed", value: "24", icon: <Zap size={20} /> },
//   { label: "Years Experience", value: "4+", icon: <Target size={20} /> },
// ];

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-cyan text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              Tentang Cobamulai
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Lebih dari Sekadar <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">Software House.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Cobamulai didirikan dengan satu misi: <strong>Mendemokratisasi teknologi AI untuk bisnis di Indonesia.</strong>
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Kami adalah tim yang terdiri dari Engineer, Designer, dan AI Researcher yang berdedikasi menciptakan produk digital yang tidak hanya fungsional, tetapi juga memiliki "jiwa" melalui desain yang estetik dan kecerdasan buatan.
            </p>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-brand-primary/30 transition-all hover:bg-white/5 ${
                    idx === 1 || idx === 2 ? 'bg-brand-dark/40 translate-y-8' : 'bg-brand-dark/60'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-cyan mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))} */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;