import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileActionBar from '../components/MobileActionBar';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, ArrowRight, ShieldCheck, Zap, CheckCircle2, ChevronDown, MapPin, Calculator, FileText } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const breakdown = [
  { kw: '1 kW', val: '₹30,000' },
  { kw: '2 kW', val: '₹60,000' },
  { kw: '3 kW+', val: '₹78,000', note: 'Max Limit' },
];

const eligibility = [
  'Residential property owners across Bihar',
  'Suitable shadow-free rooftop space',
  'Valid electricity connection (DISCOM bill in owner\'s name)',
  'Aadhar card and basic KYC documents'
];

const faqs = [
  { q: 'How much minimum subsidy can I get?', a: 'Under PM Surya Ghar Yojana, you will receive a minimum of ₹30,000 for a 1kW system, scaling up to ₹78,000 for systems 3kW and larger.' },
  { q: 'How long does the installation and subsidy process take?', a: 'Standard installation takes 2-5 days. The DISCOM net metering and subsidy credit process typically takes an additional 30-45 days.' },
  { q: 'What is Net Metering?', a: 'Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. If you generate more than you use, you earn credits!' },
];

export default function SolarSubsidy() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-x-hidden bg-[#FAFDFA]">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-[#FAFDFA] to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBC92E]/15 text-[#d9a400] rounded-full font-bold uppercase tracking-widest text-xs mb-6 shadow-sm border border-[#FBC92E]/30">
             <Landmark className="w-4 h-4" /> Official Subsidy Guide
           </motion.div>
           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'Sora' }}>
             PM Surya Ghar Solar Subsidy in Bihar
           </motion.h1>
           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
             Switch to rooftop solar with government support under PM Surya Ghar Yojana. Get up to <strong className="text-gray-900 bg-[#FBC92E]/40 px-1.5 py-0.5 rounded-md">₹78,000</strong> directly credited.
           </motion.p>
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link to="/#contact" className="px-9 py-4 bg-solar-primary text-white font-bold rounded-full shadow-[0_10px_20px_rgba(58,144,109,0.2)] hover:shadow-[0_15px_30px_rgba(58,144,109,0.3)] hover:-translate-y-1 transition-all">Get Free Consultation</Link>
             <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer" className="px-9 py-4 bg-white border-2 border-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all hover:-translate-y-1">Apply for Subsidy</a>
           </motion.div>
        </div>
      </section>

      {/* 2 & 3. WHAT IS IT + BREAKDOWN */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           <div>
             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Sora' }}>What is PM Surya Ghar Yojana?</h2>
             <p className="text-gray-500 text-lg leading-relaxed mb-6 font-medium">A massive central government initiative to promote clean energy and lower electricity bills for residential homes across India by providing direct financial subsidy support for rooftop solar installations.</p>
             <h3 className="text-xl font-bold text-gray-900 mb-5 mt-10">Eligibility Criteria:</h3>
             <ul className="space-y-4">
               {eligibility.map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                   <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-solar-primary" /></div>
                   {item}
                 </li>
               ))}
             </ul>
           </div>
           
           <div className="bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] selection:bg-solar-primary/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3" style={{ fontFamily: 'Sora' }}>
                 <Calculator className="w-8 h-8 text-solar-primary" /> Subsidy Breakdown
              </h3>
              <div className="space-y-4">
                {breakdown.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                     <span className="text-lg font-bold text-gray-700">{item.kw} System</span>
                     <div className="text-right">
                       <span className="text-2xl sm:text-3xl font-bold text-solar-primary leading-none group-hover:scale-105 transition-transform" style={{ fontFamily: 'Sora' }}>{item.val}</span>
                       {item.note && <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{item.note}</span>}
                     </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-8 text-center tracking-widest uppercase font-bold">*Credited directly to owner's bank account.</p>
           </div>
        </div>
      </section>

      {/* 5. HOW PKV HELPS */}
      <section className="py-24 px-4 bg-[#FAFDFA] border-y border-gray-100">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Sora' }}>How We Make It Hassle-Free</h2>
             <p className="text-gray-500 text-lg font-medium">We manage the entire subsidy pipeline so you don't have to touch any paperwork.</p>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {[
                { i: MapPin, t: 'Site Survey' },
                { i: Zap, t: 'System Design' },
                { i: FileText, t: 'Documentation' },
                { i: Landmark, t: 'Subsidy Processing' },
                { i: ShieldCheck, t: 'Installation & Net Metering' }
              ].map((item, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-[2rem] text-center border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all">
                   <div className="w-14 h-14 mx-auto bg-solar-primary/5 rounded-full flex items-center justify-center mb-4">
                     <item.i className="w-6 h-6 text-solar-primary" />
                   </div>
                   <h4 className="font-bold text-gray-900 leading-tight">{item.t}</h4>
                 </div>
              ))}
           </div>
         </div>
      </section>

      {/* 7. LOCATION FOCUS (SEO) */}
      <section className="py-16 bg-[#3A906D] text-white text-center px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-black/5" />
         <div className="relative z-10">
           <h3 className="text-2xl font-bold mb-6 font-sora">Solar Installation Services Available Across Bihar:</h3>
           <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto text-lg font-bold tracking-wider opacity-90">
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Patna</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Siwan</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Muzaffarpur</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Gaya</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Darbhanga</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">All Major Cities</span>
           </div>
         </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Sora' }}>Subsidy FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className={`bg-white border rounded-[1.5rem] p-6 cursor-pointer transition-all duration-300 ${openFaq === i ? 'border-solar-primary/30 shadow-[0_10px_30px_rgba(58,144,109,0.06)]' : 'border-gray-100 hover:border-solar-primary/20'}`}
              >
                <div className="flex justify-between items-center pr-2">
                  <h3 className={`font-bold text-lg transition-colors ${openFaq === i ? 'text-solar-primary' : 'text-gray-900'}`}>
                    {faq.q}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-solar-primary' : ''}`} />
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="pt-4 text-gray-500 font-medium leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 px-4 bg-[#FAFDFA] text-center">
         <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FAFDFA] to-[#E8F3EE] p-12 sm:p-20 rounded-[3rem] border border-gray-100 shadow-sm">
           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Sora' }}>Start Saving With Solar Today</h2>
           <p className="text-xl text-gray-500 mb-10 font-medium max-w-xl mx-auto">Lock in your government subsidy processing slot for this month.</p>
           <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+918149034478" className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-black hover:shadow-lg transition-all hover:-translate-y-1">Call Now</a>
              <a href="https://wa.me/918149034478" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1fae54] hover:shadow-lg transition-all hover:-translate-y-1">WhatsApp</a>
              <Link to="/#contact" className="px-8 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-50 hover:shadow-md transition-all hover:-translate-y-1">Get Free Quote</Link>
           </div>
         </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </div>
  );
}
