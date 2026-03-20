import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WHY_IMG = 'https://images.pexels.com/photos/4254164/pexels-photo-4254164.jpeg?auto=compress&cs=tinysrgb&w=800';

const points = [
  'MNRE & DISCOM Compliant Systems',
  'Transparent, No-Hidden-Charges Pricing',
  'Expert Engineering Team (15+ Years EPC)',
  'End-to-End Professional Execution',
  'PM Surya Ghar Subsidy Processing',
  'Lifetime Technical Support & Monitoring',
];

const cV = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.11, delayChildren: 0.2 } } };
const iV = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } } };

export default function WhyUsSection() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: false, amount: 0.15 }} className="relative group">
          <div className="relative h-[560px] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
            <img src={WHY_IMG} alt="Solar installation team Bihar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 hover:opacity-95" />
          </div>

          {/* Floating stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: false, amount: 0.15 }}
            className="absolute -bottom-6 -right-6 lg:-right-10 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Sora' }}>650+</p>
                <p className="text-gray-500 text-xs mt-1 font-medium">kW Installed</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Sora' }}>30+</p>
                <p className="text-gray-500 text-xs mt-1 font-medium">Projects</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div variants={cV} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} className="space-y-8 lg:pl-8">
          <motion.div variants={iV}>
            <span className="inline-block bg-solar-primary/5 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Why PKV Renewable
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-[1.1] tracking-tight" style={{ fontFamily: 'Sora' }}>
              Trusted Solar EPC<br />Partner in Bihar
            </h2>
          </motion.div>

          <motion.p variants={iV} className="text-gray-500 text-lg leading-relaxed font-light">
            We deliver complete solar EPC solutions — from site survey and system design to DISCOM approval, installation, and subsidy processing. Trusted by 30+ homes and businesses across Bihar.
          </motion.p>

          <motion.div variants={iV} className="space-y-4 pt-2">
            {points.map((p, i) => (
              <motion.div key={i} className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.09 }} viewport={{ once: false, amount: 0.15 }}>
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-solar-primary" />
                </div>
                <span className="text-gray-700 font-medium leading-relaxed">{p}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={iV} className="pt-4">
            <motion.a href="#contact"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(58,144,109,0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-solar-primary text-white font-bold rounded-2xl shadow-lg text-base">
              Book Free Site Survey →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
