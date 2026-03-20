import { motion } from 'framer-motion';
import { Landmark, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const points = [
  'MNRE Approved Systems',
  'Up to ₹78,000 Subsidy Support',
  'DISCOM Net Metering Assistance',
  'End-to-End Installation',
];

export default function SubsidyPromoSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFDFA] border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.15 }} className="lg:w-1/2">
          <span className="inline-flex items-center gap-2 bg-[#FBC92E]/15 text-[#d9a400] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Landmark className="w-4 h-4" /> PM Surya Ghar Yojana
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.15] mb-6 tracking-tight" style={{ fontFamily: 'Sora' }}>
            Government Solar Subsidy in Bihar
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">
            Homeowners in Bihar can avail subsidy up to <strong className="text-gray-900 bg-[#FBC92E]/30 px-1 rounded-sm">₹78,000</strong> under the PM Surya Ghar Muft Bijli Yojana for rooftop solar installation.
          </p>
          
          <ul className="space-y-4 mb-10">
            {points.map((pt, i) => (
              <motion.li key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: false, amount: 0.15 }} className="flex items-center gap-3">
                 <CheckCircle2 className="w-5 h-5 text-solar-primary flex-shrink-0" />
                 <span className="text-gray-700 font-bold">{pt}</span>
              </motion.li>
            ))}
          </ul>

          <Link to="/solar-subsidy" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solar-primary text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(58,144,109,0.2)] hover:shadow-[0_15px_30px_rgba(58,144,109,0.3)] hover:-translate-y-1 transition-all active:scale-95 group">
            Learn More About Subsidy <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Right Side: Visual/Card */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0.15 }} className="lg:w-1/2 w-full relative">
          <div className="bg-white p-10 sm:p-14 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 text-center relative overflow-hidden group hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition-all">
             <div className="absolute top-0 right-0 w-40 h-40 bg-solar-primary/5 rounded-bl-[100px] -z-10" />
             <div className="w-20 h-20 bg-solar-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
               <Landmark className="w-10 h-10 text-solar-primary" />
             </div>
             <p className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-3">Maximum Residential Subsidy</p>
             <h3 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Sora' }}>₹78,000</h3>
             <p className="text-gray-500 font-medium">For household rooftop systems 3kW and above anywhere in Bihar.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
