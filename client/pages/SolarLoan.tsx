import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileActionBar from '../components/MobileActionBar';
import { motion } from 'framer-motion';
import { Handshake, FileText, IndianRupee, PieChart, CheckCircle2, Building, ShieldCheck, MapPin, PhoneCall } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const requirements = [
  'आवेदक का आधार कार्ड और पैन कार्ड',
  'पिछले 6 महीने का बैंक स्टेटमेंट (Bank Statement)',
  'बिजली का बिल (Electricity Bill - आवेदक के नाम पर)',
  'मकान का कोई एक प्रूफ (House Ownership Proof)',
  'पासपोर्ट साइज फोटो'
];

const processSteps = [
  { step: '1', title: 'Quotations', desc: 'PKV Renewable की टीम आपके घर का मुआयना करके एक सही क्षमता (Capacity) का कोटेशन (Quotation) तैयार करती है।' },
  { step: '2', title: 'File Login', desc: 'कोटेशन और आपका KYC/दस्तावेज बैंक में सबमिट (Submit) किया जाता है।' },
  { step: '3', title: 'Approval', desc: 'डॉक्यूमेंट्स वेरिफिकेशन के बाद बैंक 1-3 दिन के अंदर लोन अप्रूव (Approve) कर देता है।' },
  { step: '4', title: 'Installation', desc: 'लोन पास होते ही PKV की टीम आपके घर पर सोलर सिस्टम इंस्टॉल कर देती है।' }
];

export default function SolarLoan() {
  useEffect(() => {
    document.title = "Solar Panel Loan Process in Bihar: EMI vs Savings | PKV Renewable";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "जानें PKV Renewable के साथ Solar Loan लेने का आसान तरीका। KYC, Documents और EMI-vs-Savings का पूरा कैलकुलेशन समझें।");
    }
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#FAFDFA] font-sans">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 lg:pt-44 pb-20 bg-gradient-to-br from-white via-[#EDF6F1] to-[#FAFDFA] relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#FBC92E]/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3A906D]/10 rounded-full blur-[80px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#3A906D] rounded-full font-bold uppercase tracking-widest text-sm mb-8 shadow-sm border border-[#3A906D]/20">
             <IndianRupee className="w-4 h-4" /> Solar Financing Options
           </motion.div>
           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.6] mb-6 font-sora">
             Solar Panel के लिए <span className="text-[#3A906D]">Loan</span> कैसे लें?<br className="hidden md:block"/> 
             <span className="text-3xl md:text-4xl lg:text-5xl text-gray-600 block mt-4">जानें आसान तरीका</span>
           </motion.h1>
           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
             बिना एकमुश्त भारी पेमेंट किए, EMI पर लगवाएं सोलर सिस्टम! बैंक लोन लेकर आज ही बिजली का बिल ज़ीरो करें।
           </motion.p>
        </div>
      </section>

      {/* 2. WHY LOAN? + DOCUMENTS */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Why take a loan? */}
          <div className="bg-[#FAFDFA] p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-40 h-40 bg-[#3A906D]/5 rounded-bl-[100px]" />
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <div className="w-14 h-14 bg-white text-[#3A906D] rounded-full flex items-center justify-center shadow-lg border border-gray-50">
                 <ShieldCheck className="w-7 h-7" />
               </div>
               <h2 className="text-3xl font-extrabold font-sora text-gray-900">लोन क्यों लें?</h2>
             </div>
             <p className="text-gray-600 text-lg leading-relaxed font-medium mb-6 relative z-10">
               सोलर सिस्टम एक बड़ा Investment होता है। अचानक से लाखों रुपये खर्च करने के बजाय, आप <strong>आसान मासिक किस्तों (EMI)</strong> पर सोलर पैनल लगवा सकते हैं। 
               PM Surya Ghar योजना के आने के बाद, बैंको ने सोलर लोन के इंटरेस्ट रेट (Interest Rate) बहुत कम (लगभग 7% से 9%) कर दिए हैं।
             </p>
             <ul className="space-y-4 relative z-10">
               {[
                 "एकमुश्त भारी फंड का इंतज़ाम नहीं करना पड़ता।",
                 "EMI उतनी ही होती है जितना पहले आपका बिजली बिल आता था।",
                 "सब्सिडी का पैसा मिलते ही आप लोन की राशि (Principal Amount) कम करवा सकते हैं।"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3 text-lg font-bold text-gray-800 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                   <CheckCircle2 className="w-6 h-6 text-[#3A906D] flex-shrink-0" /> {item}
                 </li>
               ))}
             </ul>
          </div>

          {/* Required Documents */}
          <div className="bg-[#3A906D] text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <div className="w-14 h-14 bg-white text-[#3A906D] rounded-full flex items-center justify-center shadow-lg">
                 <FileText className="w-7 h-7" />
               </div>
               <h2 className="text-3xl font-extrabold font-sora text-white">जरूरी दस्तावेज (KYC)</h2>
             </div>
             <p className="text-white/80 font-medium text-lg leading-relaxed mb-8 relative z-10">
               बैंक से लोन अप्रूव कराने के लिए आपको यह सामान्य डॉक्यूमेंट जमा करने होते हैं:
             </p>
             <ul className="space-y-4 relative z-10">
               {requirements.map((doc, idx) => (
                 <li key={idx} className="flex items-center gap-4 bg-black/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                   <div className="w-8 h-8 rounded-full bg-[#FBC92E] flex items-center justify-center text-gray-900 font-extrabold flex-shrink-0">
                     {idx + 1}
                   </div>
                   <span className="font-bold text-lg">{doc}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* 3. LOAN PROCESS */}
      <section className="py-24 px-4 bg-[#FAFDFA] border-y border-gray-100">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 font-sora flex items-center justify-center gap-3">
                 <Building className="w-8 h-8 text-[#3A906D]" /> लोन की प्रक्रिया (Process)
               </h2>
               <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                 PKV Renewable के ज़रिए, लोन की प्रक्रिया बेहद तेज़ और आसान है।
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} key={idx} className="bg-white p-8 rounded-3xl text-center border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all hover:-translate-y-2 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-1 bg-[#3A906D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  <div className="w-20 h-20 mx-auto bg-[#FAFDFA] rounded-2xl border-2 border-[#3A906D]/30 flex items-center justify-center text-3xl font-extrabold text-[#3A906D] mb-6 shadow-sm">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 font-sora">{step.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* 4. EMI VS SAVINGS (CORE SELLING POINT) */}
      <section className="py-20 px-4 bg-white relative">
         <div className="max-w-5xl mx-auto bg-[#1A1A1A] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#3A906D]/30 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="text-center mb-12 relative z-10">
              <PieChart className="w-16 h-16 mx-auto text-[#FBC92E] mb-6" />
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 font-sora">EMI <span className="text-gray-400 font-sans mx-2">VS</span> Savings Calculator</h2>
              <div className="w-20 h-1.5 bg-[#FBC92E] rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
               <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl backdrop-blur-sm">
                 <h3 className="text-xl font-bold text-red-300 mb-4 border-b border-red-500/20 pb-4">बिना सोलर के (Without Solar)</h3>
                 <p className="text-lg font-medium text-gray-300 mb-2">अगर बिजली बिल: <strong className="text-white text-xl">₹3000 / माह</strong></p>
                 <p className="text-lg font-medium text-gray-300">5 साल में दिया गया बिजली बिल:</p>
                 <div className="text-4xl font-extrabold text-red-400 mt-2 font-mono">₹1,80,000</div>
                 <p className="text-sm mt-4 text-red-300/60 font-medium">*बिजली के दाम हर साल बढ़ते हैं।</p>
               </div>

               <div className="bg-[#3A906D]/20 border border-[#3A906D]/40 p-8 rounded-3xl backdrop-blur-sm shadow-lg shadow-[#3A906D]/10 text-center md:text-left transform hover:scale-[1.02] transition-transform">
                 <h3 className="text-xl font-bold text-[#FBC92E] mb-4 border-b border-[#3A906D]/40 pb-4">सोलर लोन के साथ (With Solar Loan)</h3>
                 <p className="text-lg font-medium text-gray-200 mb-2">बिजली बिल: <strong className="text-[#FBC92E] text-xl">₹0 / माह</strong></p>
                 <p className="text-lg font-medium text-gray-200">लोन की EMI (3 साल के लिए):</p>
                 <div className="text-4xl font-extrabold text-white mt-2 font-mono group flex items-center md:items-start md:flex-col gap-2">
                   ~₹3500 <span className="text-sm font-sans text-gray-400 font-bold bg-white/10 px-3 py-1 rounded-full w-fit">सिर्फ 3-4 साल तक</span>
                 </div>
                 <div className="mt-8 bg-[#3A906D] p-4 rounded-xl border border-white/10 shadow-inner">
                   <p className="text-md font-bold text-white mb-1"><CheckCircle2 className="w-5 h-5 inline mr-1 text-[#FBC92E]" /> जादू देखें:</p>
                   <p className="text-sm text-gray-100 font-medium">EMI खत्म होते ही अगले 20+ साल तक बिजली एकदम फ्री!</p>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. IMAGE SECTION */}
      <section className="py-16 px-4 bg-white border-b border-gray-100">
         <div className="max-w-5xl mx-auto relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
           <img
             src="/loan-guide-image.png"
             alt="Solar Loan Guide - Bank Officer discussing solar financing with homeowner"
             className="w-full h-auto object-cover"
             loading="lazy"
           />
         </div>
      </section>

      {/* 6. FINAL CTA SECTION (WhatsApp, Call, Free Site Visit) */}
      <section className="py-24 px-4 bg-[#FAFDFA] text-center border-t border-gray-50">
         <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-sora">
             आज ही फ्री मुआयना बुक करें!
           </h2>
           <p className="text-xl text-gray-500 mb-10 font-medium">
             हमारी टीम सीधा आपके घर (Site Visit) आकर सही सिस्टम और लोन के विकल्पों की जानकारी देगी।
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link to="/#contact" className="w-full sm:w-auto px-10 py-5 bg-gray-900 text-white font-bold rounded-full hover:bg-black shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                <MapPin className="w-6 h-6" /> Free Site Visit
              </Link>
              <a href="tel:+918149034478" className="w-full sm:w-auto px-10 py-5 bg-[#3A906D] text-white font-bold rounded-full hover:bg-[#2b7255] shadow-[0_10px_30px_rgba(58,144,109,0.3)] transition-all flex items-center justify-center gap-3 text-lg hover:-translate-y-1">
                <PhoneCall className="w-6 h-6" /> +91 81490 34478
              </a>
              <a href="https://wa.me/918149034478" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1ebd5b] shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all flex items-center justify-center gap-3 text-lg hover:-translate-y-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 shadow-sm" /> WhatsApp
              </a>
           </div>
         </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </div>
  );
}
