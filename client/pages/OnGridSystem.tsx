import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileActionBar from '../components/MobileActionBar';
import { motion } from 'framer-motion';
import { Zap, Sun, UtilityPole, Home, Repeat, ThumbsUp, AlertTriangle, CheckCircle2, Factory, PhoneCall } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const workingSteps = [
  { icon: Sun, title: 'सूरज की रोशनी', desc: 'सोलर पैनल्स सूरज की रोशनी को DC (Direct Current) बिजली में बदलते हैं।' },
  { icon: Zap, title: 'इनवर्टर (Inverter)', desc: 'ऑन-ग्रिड इनवर्टर DC बिजली को AC (Alternating Current) में बदलता है, जिससे घर के उपकरण चलते हैं।' },
  { icon: Home, title: 'घर का उपयोग', desc: 'तैयार हुई बिजली सबसे पहले आपके घर के उपकरणों (AC, फ्रिज, टीवी) में इस्तेमाल होती है।' },
  { icon: UtilityPole, title: 'नेट मीटरिंग', desc: 'अगर बिजली बच जाती है, तो वह नेट मीटर के जरिए वापस बिजली ग्रिड (Electricity Grid) में चली जाती है।' }
];

const pros = [
  'बिजली का बिल 100% तक कम हो जाता है।',
  'बैटरी के बिना चलने के कारण इसका रखरखाव (Maintenance) बहुत आसान है।',
  'सिस्टम की लागत कम होती है क्योंकि बैटरी का खर्चा नहीं होता।',
  'सरकार की PM Surya Ghar Yojana के तहत ₹78,000 तक भारी सब्सिडी मिलती है।',
  'नेट मीटर के जरिए बची हुई बिजली सरकार को बेचकर आप क्रेडिट कमा सकते हैं।'
];

const cons = [
  'सबसे बड़ा नुकसान: यह केवल तभी काम करता है जब बिजली (Grid) चालू हो।',
  'अगर ग्रिड की बिजली कट जाती है (Power Cut), तो सुरक्षा कारणों (Anti-Islanding) से यह सिस्टम भी बंद हो जाता है।',
  'इसमें पावर बैकअप नहीं मिलता (चूँकि बैटरी नहीं होती)।'
];

export default function OnGridSystem() {

  useEffect(() => {
    document.title = "On-Grid Solar System क्या है? पूरी जानकारी | PKV Renewable";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "On-Grid Solar System in Bihar. जानें On-Grid क्या है, कैसे काम करता है, नेट मीटरिंग और इसके फायदे-नुकसान। PKV Renewable के साथ आसानी से सोलर लगवाएं।");
    }
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#FAFDFA] font-sans">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 lg:pt-44 pb-20 bg-gradient-to-br from-white via-[#EDF6F1] to-white relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#FBC92E]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#3A906D] rounded-full font-bold uppercase tracking-widest text-sm mb-8 shadow-sm border border-[#3A906D]/20">
             <Zap className="w-4 h-4" /> On-Grid System Guide
           </motion.div>
           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.6] mb-6 font-sora">
             <span className="text-[#3A906D]">On-Grid Solar System</span> क्या होता है?<br/>
             <span className="text-3xl md:text-4xl lg:text-5xl text-gray-600 font-bold mt-4 block leading-[1.6]">पूरी जानकारी आसान भाषा में</span>
           </motion.h1>
           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
             जानिए क्यों 90% से ज्यादा लोग अपने घरों के लिए 'On-Grid' सोलर सिस्टम चुनते हैं।
           </motion.p>
        </div>
      </section>

      {/* 2. WHAT IS ON-GRID? */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-1.5 bg-[#FBC92E] rounded-full mx-auto mb-8"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 font-sora">
            On-Grid Solar क्या है?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50">
            "On-Grid" का मतलब है जो सिस्टम सरकारी बिजली (Grid) के साथ जुड़कर काम करता है। 
            इस सिस्टम में <strong className="text-gray-900">बैटरी का इस्तेमाल नहीं होता है।</strong> 
            यह दिन के समय सूरज की रोशनी से बिजली बनाता है और आपके घर के उपकरणों को चलाता है।
            और जो बिजली एक्स्ट्रा बन जाती है, वो सीधे सरकारी बिजली ग्रिड में चली जाती है।
          </p>
        </div>
      </section>

      {/* 3. HOW IT WORKS? (DIAGRAM) */}
      <section className="py-20 px-4 bg-white border-y border-gray-100 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 font-sora">यह कैसे काम करता है?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Steps */}
            <div className="space-y-6">
              {workingSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-slate-50 p-6 rounded-2xl border border-gray-100 hover:border-[#3A906D]/30 transition-colors">
                  <div className="w-12 h-12 flex-shrink-0 bg-white shadow-sm flex items-center justify-center rounded-xl text-[#3A906D]">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-sora">{step.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* DIAGRAM IMAGE */}
            <div className="relative rounded-[2.5rem] bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] aspect-square md:aspect-auto md:min-h-[500px] p-6 lg:p-8 group hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all">
               <img 
                 src="/on-grid-page.png" 
                 alt="On-Grid Solar System Diagram" 
                 className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
               />
               <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2.5rem] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NET METERING */}
      <section className="py-20 px-4">
         <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#3A906D] to-[#2b7255] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
           <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="w-full md:w-2/3">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6 backdrop-blur-sm">
                  <ActivityIcon /> The Magic Component
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 font-sora">Net Metering क्या होता है?</h2>
                <p className="text-lg leading-relaxed font-medium opacity-90">
                  यह एक स्मार्ट मीटर है जो आपके पुराने मीटर की जगह लगता है। यह दो काम करता है:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3 text-lg font-bold">
                    <span className="bg-[#FBC92E] text-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    सिस्टम द्वारा ग्रिड को दी गई बिजली (Export) को मापता है।
                  </li>
                  <li className="flex items-start gap-3 text-lg font-bold">
                    <span className="bg-[#FBC92E] text-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    रात में ग्रिड से ली गई बिजली (Import) को मापता है।
                  </li>
                </ul>
                <p className="mt-6 text-lg font-bold bg-white/10 p-4 rounded-xl border border-white/20">
                  महीने के अंत में आपका बिल = (Import – Export) के आधार पर बनता है।
                </p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 shadow-inner backdrop-blur-sm">
                   <div className="text-center">
                     <div className="text-4xl font-extrabold text-[#FBC92E] font-mono">0.00</div>
                     <div className="text-sm font-bold uppercase mt-2 tracking-widest text-white/70">Units</div>
                   </div>
                </div>
              </div>
           </div>
         </div>
      </section>

      {/* 5 & 6. PROS AND CONS */}
      <section className="py-20 px-4 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-sora">ऑन-ग्रिड सिस्टम के फायदे और नुकसान</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Pros */}
            <div className="bg-[#FAFDFA] p-8 md:p-10 rounded-[2.5rem] border border-[#3A906D]/20 shadow-[0_10px_40px_rgba(58,144,109,0.06)] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#3A906D]/10 rounded-bl-full" />
               <div className="flex items-center gap-4 mb-8 relative z-10">
                 <div className="w-14 h-14 bg-white shadow-md text-[#3A906D] rounded-full flex items-center justify-center">
                   <ThumbsUp className="w-7 h-7" />
                 </div>
                 <h3 className="text-2xl font-bold font-sora text-gray-900">फायदे (Advantages)</h3>
               </div>
               <ul className="space-y-5 relative z-10">
                 {pros.map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <CheckCircle2 className="w-6 h-6 text-[#3A906D] flex-shrink-0 mt-0.5" />
                     <span className="text-gray-700 font-medium text-lg">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-50 p-8 md:p-10 rounded-[2.5rem] border border-red-200 shadow-[0_10px_40px_rgba(239,68,68,0.06)] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full" />
               <div className="flex items-center gap-4 mb-8 relative z-10">
                 <div className="w-14 h-14 bg-white shadow-md text-red-500 rounded-full flex items-center justify-center">
                   <AlertTriangle className="w-7 h-7" />
                 </div>
                 <h3 className="text-2xl font-bold font-sora text-gray-900">नुकसान (Disadvantages)</h3>
               </div>
               <ul className="space-y-5 relative z-10">
                 {cons.map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center text-red-600 flex-shrink-0 mt-0.5"><span className="w-2 h-2 bg-red-500 rounded-full"></span></div>
                     <span className="text-gray-800 font-bold text-lg leading-relaxed">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHO IS IT FOR? */}
      <section className="py-24 px-4 bg-[#FAFDFA]">
        <div className="max-w-4xl mx-auto text-center">
           <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-[#FBC92E] mb-8 rotate-3">
             <Factory className="w-10 h-10" />
           </div>
           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 font-sora">यह सिस्टम किसके लिए सही है?</h2>
           <p className="text-xl text-gray-600 font-medium leading-relaxed bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
             यह सिस्टम उन शहरों या घरों के लिए वरदान है <strong>जहाँ बिजली कटौती (Power Cut) बहुत कम होती है या बिलकुल नहीं होती</strong>। 
             अगर आपका मुख्य उद्देश्य सिर्फ और सिर्फ बिजली का भारी बिल 0 करना है और आप बैटरी का बार-बार बदलने का झंझट नहीं चाहते, तो On-Grid सिस्टम आपके लिए ही बना है।
           </p>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 px-4 bg-white border-t border-gray-100 text-center">
         <div className="max-w-4xl mx-auto rounded-[3rem] bg-gray-900 p-12 overflow-hidden relative shadow-2xl">
           <div className="absolute inset-0 bg-[#3A906D]/20 mix-blend-overlay"></div>
           <div className="relative z-10">
             <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-sora">अपने घर के लिए On-Grid सोलर प्लान करें</h2>
             <p className="text-lg text-gray-300 mb-10 font-medium">PKV Renewable की टीम से फ्री साइट सर्वे बुक करें।</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:+918149034478" className="px-8 py-4 bg-[#3A906D] text-white font-bold rounded-full hover:bg-white hover:text-[#3A906D] transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1">
                  <PhoneCall className="w-5 h-5" /> Call Now
                </a>
                <a href="https://wa.me/918149034478" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1ebd5b] transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1">
                  WhatsApp Us
                </a>
             </div>
           </div>
         </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </div>
  );
}

// Inline Icon component for Activity
function ActivityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  );
}
