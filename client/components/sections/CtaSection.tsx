import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-4xl mx-auto text-center border border-gray-100 rounded-[3rem] p-12 sm:p-20 bg-gradient-to-br from-[#FAFDFA] to-[#F2F8F5] shadow-[0_20px_60px_rgba(58,144,109,0.05)]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}>
          <span className="inline-block bg-white border border-gray-200 text-solar-primary text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full mb-8 shadow-sm">
            Free Site Survey — No Obligation
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-5 tracking-tight" style={{ fontFamily: 'Sora' }}>
            Start Saving With Solar Today
          </h2>
          <p className="text-gray-600 text-xl mb-4 font-light">
            Get your free site survey & detailed quote in Bihar.
          </p>
          <p className="text-solar-primary font-semibold text-lg mb-12">
            PM Surya Ghar Subsidy up to ₹78,000 Available Now!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="tel:+918149034478"
              whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(58,144,109,0.15)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 px-10 py-4 bg-solar-primary text-white font-bold rounded-2xl shadow-lg border border-transparent transition-all">
              <Phone className="w-5 h-5 text-white" />
              Call Now: +91 81490 34478
            </motion.a>
            <motion.a href="https://wa.me/918149034478" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(37,211,102,0.15)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#25D366] font-bold rounded-2xl shadow-sm border border-gray-200 transition-all hover:border-[#25D366]">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
