import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Discovery",
    desc: "Kami menyelami ide bisnis Anda, menganalisis pasar, dan menentukan teknologi AI/Web yang paling tepat.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Strategy & Design",
    desc: "Merancang UI/UX yang memanjakan mata dan arsitektur sistem yang scalable sebelum penulisan kode.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Development",
    desc: "Proses coding untuk Development sesuai requirement, dan integrasi model AI dengan standar kode industri (Clean Code).",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Launch & Scale",
    desc: "Deployment ke server premium, optimasi SEO, dan monitoring performa pasca-peluncuran.",
    icon: <Rocket className="w-6 h-6" />,
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Bagaimana Kami <span className="text-brand-cyan">Bekerja?</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proses transparan dan terstruktur untuk mengubah visi abstrak menjadi produk digital nyata.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-brand-navy via-brand-cyan to-brand-navy opacity-30" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Number Bubble */}
              <div className="w-24 h-24 mx-auto bg-brand-dark border-4 border-brand-navy rounded-full flex items-center justify-center relative z-10 mb-6 group-hover:border-brand-cyan transition-colors duration-300">
                <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center text-white group-hover:bg-brand-primary transition-colors duration-300 shadow-lg shadow-brand-cyan/20">
                  {step.icon}
                </div>
                {/* Small Badge Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center text-brand-dark font-bold text-sm border-2 border-brand-dark">
                  {step.id}
                </div>
              </div>

              {/* Content Card */}
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:-translate-y-2">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;