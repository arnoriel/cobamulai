import { motion } from 'framer-motion';
import { Trophy, Users, Zap, Target } from 'lucide-react';

const stats = [
  { label: "Proyek Selesai", value: "50+", icon: <Trophy size={20} />, color: "text-yellow-400" },
  { label: "Client Satisfaction", value: "100%", icon: <Users size={20} />, color: "text-blue-400" },
  { label: "AI Models Used", value: "24", icon: <Zap size={20} />, color: "text-purple-400" },
  { label: "Years Experience", value: "4+", icon: <Target size={20} />, color: "text-green-400" },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#08080A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-cyan text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              Tentang Cobamulai
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
              Lebih dari Sekadar <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">Software House.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Cobamulai didirikan dengan satu misi ambisius: <strong className="text-white">Mendemokratisasi teknologi AI untuk bisnis di Indonesia.</strong>
                </p>
                <p>
                  Kami adalah kolektif dari Engineer, Designer, dan AI Researcher. Kami percaya bahwa kode bukan hanya sekadar instruksi komputer, melainkan seni untuk memecahkan masalah nyata.
                </p>
            </div>

            <div className="mt-10">
            </div>
          </motion.div>

          {/* Right Column: Stats Grid (Glass Cards) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl border border-white/5 backdrop-blur-sm bg-white/[0.02] hover:bg-white/[0.05] transition-all group ${
                    idx === 1 || idx === 3 ? 'md:translate-y-12' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                        {stat.icon}
                    </div>
                </div>
                <h3 className="text-4xl font-extrabold text-white mb-1 tracking-tight">{stat.value}</h3>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
