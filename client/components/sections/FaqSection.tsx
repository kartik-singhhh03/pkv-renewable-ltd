import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is the PM Surya Ghar subsidy?',
    a: 'Government of India provides ₹30,000 for 1 kW, ₹78,000 for 2 kW, and ₹78,000 for 3+ kW rooftop solar systems. PKV Renewable handles all paperwork and filing.',
  },
  {
    q: 'How much can I save on electricity in Bihar?',
    a: 'Most homeowners save 70–80% on electricity bills. A 3kW system in Bihar typically generates ₹2,500–₹3,500 worth of electricity monthly, saving ₹30,000–₹42,000 annually.',
  },
  {
    q: 'How long does installation take?',
    a: 'Site survey: 1 day → System design: 2–3 days → DISCOM approval: 2–4 weeks → Installation: 2–5 days → Net metering & commissioning: 1 week. Total: ~5–7 weeks from first call to live system.',
  },
  {
    q: 'What warranty and support do I get?',
    a: 'Our systems come with 25-year panel performance warranty, 5-year inverter warranty, 2-year installation workmanship warranty, and lifetime technical support & monitoring from our team.',
  },
  {
    q: 'Does PKV Renewable handle DISCOM net metering?',
    a: "Yes! We're DISCOM certified and handle the entire net metering application, inspection coordination, and commissioning — completely hassle-free for you.",
  },
  {
    q: 'Do you serve all districts in Bihar?',
    a: 'We currently operate across major districts including Patna, Siwan, Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Ara, and more. Contact us to verify your location.',
  },
];

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFDFA]">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} className="text-center mb-16">
          <span className="inline-block bg-solar-primary/5 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight" style={{ fontFamily: 'Sora' }}>
            Common Questions
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.15 }} className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: false, amount: 0.15 }}
              className={`rounded-2xl border transition-all duration-300 ${
                active === i
                  ? 'border-solar-primary/20 bg-white shadow-[0_10px_30px_rgba(58,144,109,0.06)]'
                  : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
              }`}
            >
              <button onClick={() => setActive(active === i ? null : i)}
                className="w-full px-6 py-6 flex items-center justify-between gap-4 text-left">
                <div className="flex items-center gap-5">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    active === i ? 'bg-solar-primary/10 text-solar-primary' : 'bg-gray-50 text-gray-400'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`font-semibold text-lg transition-colors ${active === i ? 'text-gray-900' : 'text-gray-700'}`}>{faq.q}</h3>
                </div>
                <motion.div animate={{ rotate: active === i ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                  <ChevronDown className={`w-5 h-5 transition-colors ${active === i ? 'text-solar-primary' : 'text-gray-400'}`} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-0 ml-12 text-gray-500 leading-relaxed font-light">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
