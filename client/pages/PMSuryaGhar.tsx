import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileActionBar from '../components/MobileActionBar';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, CheckCircle2, ChevronDown, Calculator, FileText, Zap, ShieldCheck, ArrowRight, Sun, BatteryFull, Leaf, Clock, MapPin, IndianRupee, HelpCircle, PhoneCall, PenTool, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const keyHighlights = [
  { icon: IndianRupee, title: 'बिजली बिल की बचत', desc: 'अपने बिजली बिल को 100% तक कम करें और जीवन भर मुफ्त बिजली पाएं।' },
  { icon: Landmark, title: 'सरकारी सब्सिडी', desc: '₹78,000 तक की डायरेक्ट सब्सिडी सीधे आपके बैंक खाते में।' },
  { icon: BatteryFull, title: '25 साल की लंबी लाइफ', desc: 'प्रीमियम क्वालिटी के टियर-1 पैनल्स, जो 25+ सालों तक चलते हैं।' },
  { icon: Leaf, title: 'पर्यावरण के अनुकूल', desc: 'क्लीन एनर्जी अपनाएं और प्रदूषण कम करने में अपना योगदान दें।' },
];

const subsidyTable = [
  { system: '1 kW', subsidy: '₹30,000', recommended: 'छोटे घरों के लिए (~100-120 यूनिट/माह)' },
  { system: '2 kW', subsidy: '₹60,000', recommended: 'मध्यम घरों के लिए (~200-240 यूनिट/माह)' },
  { system: '3 kW+', subsidy: '₹78,000 (Maximum)', recommended: 'बड़े घरों के लिए (AC और बड़े उपकरण)' },
];

const processSteps = [
  { step: '1', title: 'रजिस्ट्रेशन व फिजिबिलिटी', desc: 'PM Surya Ghar पोर्टल पर रजिस्ट्रेशन और DISCOM द्वारा फिजिबिलिटी अप्रूवल।' },
  { step: '2', title: 'प्लांट इंस्टॉलेशन', desc: 'PMKV Renewable की अनुभवी टीम द्वारा सुरक्षित और हाई-क्वालिटी इंस्टॉलेशन।' },
  { step: '3', title: 'नेट मीटरिंग (Net Metering)', desc: 'डिपार्टमेंट द्वारा मीटर का इंस्टॉलेशन और ग्रिड से कनेक्टिविटी।' },
  { step: '4', title: 'सब्सिडी क्रेडिट', desc: 'इंस्टॉलेशन के 30-45 दिनों के भीतर सब्सिडी सीधे आपके अकाउंट में।' },
];

const documents = [
  'आवेदक का आधार कार्ड',
  'हाल ही का बिजली बिल (आवेदक के नाम पर)',
  'पासपोर्ट साइज फोटो',
  'बैंक पासबुक या कैंसल्ड चेक',
  'संपत्ति का प्रमाण (Property Document)',
];

const faqs = [
  { q: 'क्या सच में फ्री सोलर मिलता है?', a: 'जी हाँ, सब्सिडी के कारण आपके सोलर सिस्टम की प्रभावी लागत (effective cost) बहुत कम हो जाती है। 3-4 सालों में आपकी पूरी लागत वसूल हो जाती है, और अगले 20-25 साल तक आपको मुफ्त बिजली मिलती है।' },
  { q: 'कितने दिन में सिस्टम इंस्टॉल होता है?', a: 'हमारे यहाँ इंस्टॉलेशन प्रोसेस में आमतौर पर 2-5 दिन लगते हैं। लेकिन नेट मीटरिंग और सब्सिडी की पूरी प्रक्रिया में 30 से 45 दिनों का समय लग सकता है।' },
  { q: 'सब्सिडी का पैसा किसके खाते में आता है?', a: 'सब्सिडी की राशि सीधे पीएम सूर्य घर पोर्टल के माध्यम से उपभोक्ता (आपके) बैंक खाते में आती है।' },
  { q: 'अगर बिजली कट जाए तो क्या सोलर काम करेगा?', a: 'ऑन-ग्रिड सिस्टम (On-Grid System) में पावर कट के दौरान इनवर्टर सेफ्टी के लिए काम करना बंद कर देता है। अगर आपको बैकअप चाहिए तो आप हाइब्रिड (Hybrid) सिस्टम लगवा सकते हैं।' },
  { q: 'क्या PKV Renewable लोन की सुविधा देता है?', a: 'हाँ, हम आसान EMI और फाइनेंसिंग ऑप्शंस प्रदान करते हैं जिससे आपको एकमुश्त बड़ा पेमेंट नहीं करना पड़ता।' }
];

export default function PMSuryaGhar() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "PM Surya Ghar Yojana 2026: ₹78,000 Subsidy in Bihar | PKV Renewable";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "PM Surya Ghar Yojana 2026. Get up to ₹78,000 subsidy on rooftop solar installation in Bihar. Contact PKV Renewable for easy Net Metering and fast installation.");
    }
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#FAFDFA] font-sans">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 lg:pt-44 pb-20 bg-gradient-to-b from-[#EDF6F1] to-[#FAFDFA] relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#3A906D]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 w-80 h-80 bg-[#FBC92E]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#3A906D] rounded-full font-bold uppercase tracking-widest text-xs md:text-sm mb-8 shadow-sm border border-[#3A906D]/20">
             <Sun className="w-4 h-4 text-[#FBC92E]" /> PM Surya Ghar Muft Bijli Yojana
           </motion.div>
           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.6] mb-6 font-sora">
             PM Surya Ghar Yojana 2026: <br className="hidden md:block"/> <span className="text-[#3A906D]">₹78,000 तक सब्सिडी</span> के साथ फ्री सोलर सिस्टम कैसे लगवाएँ?
           </motion.h1>
           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
             PKV Renewable के साथ आसान और सुरक्षित सोलर इंस्टॉलेशन। Bihar में अपने घर के लिए best rooftop solar solution चुनें और आज ही अपनी electricity bill बचाएं।
           </motion.p>
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
             <Link to="/#contact" className="px-8 py-4 bg-[#3A906D] text-white font-bold rounded-full shadow-[0_10px_20px_rgba(58,144,109,0.2)] hover:shadow-[0_15px_30px_rgba(58,144,109,0.3)] hover:-translate-y-1 transition-all flex items-center gap-2 text-lg">
               <PhoneCall className="w-5 h-5" /> Free Consultation
             </Link>
             <a href="https://wa.me/918149034478?text=Hello%20PKV%20Renewable,%20I%20want%20to%20know%20more%20about%20PM%20Surya%20Ghar%20Yojana." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white border-2 border-[#25D366] text-[#25D366] font-bold rounded-full hover:bg-[#25D366] hover:text-white transition-all shadow-[0_10px_20px_rgba(37,211,102,0.1)] hover:-translate-y-1 flex items-center gap-2 text-lg">
               <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" /> WhatsApp Now
             </a>
           </motion.div>
        </div>
      </section>

      {/* 2. KEY HIGHLIGHTS */}
      <section className="py-16 px-4 bg-white -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((highlight, idx) => (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#3A906D]/10 rounded-2xl flex items-center justify-center mb-6 text-[#3A906D]">
                  <highlight.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-sora">{highlight.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT: What is the scheme? */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 font-sora text-balance">
              PM Surya Ghar Yojana क्या है?
            </h2>
            <div className="w-20 h-1.5 bg-[#FBC92E] rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
              PM Surya Ghar Yojana (प्रधानमंत्री सूर्य घर मुफ्त बिजली योजना) भारत सरकार की एक महत्वाकांक्षी योजना है जिसका उद्देश्य देश भर के करोड़ों घरों को मुफ्त बिजली प्रदान करना है। इस योजना के तहत, सरकार आपके घर की छत पर रूफटॉप सोलर सिस्टम लगाने के लिए भारी सब्सिडी देती है।
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
              बिहार सरकार और DISCOMs के सहयोग से, हम सुनिश्चित करते हैं कि आपको इस योजना का पूरा लाभ मिले। यह योजना न केवल आपके बिजली बिल को जीरो कर सकती है, बल्कि पर्यावरण को बचाने में भी मदद करती है।
            </p>
            <ul className="space-y-4 mt-8">
              {[
                "1 करोड़ भारतीय घरों को फायदा",
                "हर महीने 300 यूनिट तक मुफ्त बिजली",
                "नेशनल पोर्टल के जरिए सीधा आवेदन और सब्सिडी का भुगतान"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-gray-800 font-bold bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                  <CheckCircle2 className="w-6 h-6 text-[#3A906D] flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* IMAGE PLACEHOLDER FOR BANANA PRO PROMPT */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] border border-gray-100 group">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80" alt="Solar Installation India" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <div className="text-white/80 text-xs font-mono bg-black/50 p-3 rounded-lg backdrop-blur-md mb-2 border border-white/20">
                <span className="text-[#FBC92E] font-bold">Image Prompt:</span> "realistic indian middle class house rooftop solar panels installation, bright sunlight, technician working, बिहार का घर, ultra realistic, 4k"
              </div>
            </div>
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-gray-900 shadow-lg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#3A906D]" /> 25 Years Warranty
            </div>
          </div>
        </div>
      </section>

      {/* 4. SUBSIDY TABLE */}
      <section className="py-20 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 text-[#3A906D] font-bold mb-4 bg-[#EDF6F1] px-4 py-2 rounded-full">
              <Calculator className="w-5 h-5" /> Subsidy Calculation
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 font-sora">कितनी सब्सिडी मिलेगी?</h2>
            <p className="text-gray-500 text-lg font-medium">सरकार सिस्टम की Capacity (kW) के अनुसार सीधे आपके खाते में सब्सिडी ट्रांसफर करती है।</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-lg">
            <table className="w-full text-left">
              <thead className="bg-[#3A906D] text-white">
                <tr>
                  <th className="px-6 py-5 text-lg font-bold">सोलर सिस्टम क्षमता</th>
                  <th className="px-6 py-5 text-lg font-bold">अनुमानित सब्सिडी</th>
                  <th className="px-6 py-5 text-lg font-bold hidden md:table-cell">अनुशंसा (Recommendation)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {subsidyTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-6 font-bold text-gray-900 text-lg flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#FBC92E]" /> {row.system}
                    </td>
                    <td className="px-6 py-6 font-extrabold text-[#3A906D] text-2xl font-sora text-nowrap">
                      {row.subsidy}
                    </td>
                    <td className="px-6 py-6 text-gray-600 font-medium hidden md:table-cell">
                      {row.recommended}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center text-sm font-bold text-gray-400">
            * यह सब्सिडी की दरें सरकार द्वारा तय की जाती हैं और इसमें बदलाव संभव है।
          </div>
        </div>
      </section>

      {/* 5. ELIGIBILITY & DOCUMENTS */}
      <section className="py-20 px-4 bg-[#FAFDFA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Eligibility */}
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] selection:bg-[#FBC92E]/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-40 h-40 bg-[#3A906D]/5 rounded-bl-[100px] -mr-10 -mt-10" />
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <div className="w-12 h-12 bg-[#3A906D] text-white rounded-xl flex items-center justify-center shadow-lg">
                 <Home className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold font-sora text-gray-900">कौन अप्लाई कर सकता है?</h3>
             </div>
             <ul className="space-y-5 relative z-10">
               {[
                 "भारत का निवासी हो (विशेषकर बिहार के निवासियों के लिए हमारी सर्विस उपलब्ध है)",
                 "घर की अपनी छत हो जहाँ पर्याप्त धूप आती हो",
                 "आवेदक के नाम पर एक वैध बिजली कनेक्शन (Electricity Bill) हो",
                 "DISCOM के माध्यम से नेट मीटरिंग की पात्रता हो"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                   <CheckCircle2 className="w-6 h-6 text-[#3A906D] flex-shrink-0 mt-0.5" />
                   <span className="text-gray-700 font-medium text-lg">{item}</span>
                 </li>
               ))}
             </ul>
          </div>

          {/* Documents */}
          <div className="bg-[#3A906D] text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <div className="w-12 h-12 bg-white text-[#3A906D] rounded-xl flex items-center justify-center shadow-lg">
                 <FileText className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold font-sora text-white">कौन-कौन से डॉक्यूमेंट चाहिए?</h3>
             </div>
             <ul className="space-y-4 relative z-10">
               {documents.map((doc, idx) => (
                 <li key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                   <div className="w-2 h-2 rounded-full bg-[#FBC92E]" />
                   <span className="font-bold text-lg">{doc}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* 6. STEP-BY-STEP PROCESS */}
      <section className="py-24 px-4 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 font-sora">आवेदन की आसान प्रक्रिया</h2>
            <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">PKV Renewable के साथ सोलर लगवाना बेहद आसान है। हम आपके लिए पोर्टल रजिस्ट्रेशन से लेकर सब्सिडी क्रेडिट तक सब कुछ संभालते हैं।</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-1 bg-gray-100 rounded-full z-0 overflow-hidden">
              <div className="h-full bg-[#3A906D] w-full origin-left animate-[scaleX_1.5s_ease-out_forwards]"></div>
            </div>

            {processSteps.map((step, idx) => (
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} key={idx} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-[#3A906D] flex items-center justify-center text-3xl font-extrabold text-[#3A906D] mb-6 shadow-xl bg-gradient-to-br from-white to-[#EDF6F1]">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-sora">{step.title}</h4>
                <p className="text-gray-500 font-medium px-2 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-[#FBC92E] rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden transform hover:-translate-y-1 transition-transform">
            <div className="absolute inset-0 bg-white/10 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-2 font-sora">PKV कैसे मदद करता है?</h3>
                <p className="text-gray-800 text-lg font-bold max-w-lg">हम आपको Documentation, Portal Application, Quality Installation और Net Metering में पूरी एंड-टू-एंड सेवा (End-to-End Service) देते हैं। "हम आपकी पूरी प्रक्रिया संभालते हैं।"</p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/#contact" className="px-8 py-5 bg-gray-900 text-white font-bold rounded-2xl shadow-xl hover:bg-black transition-all flex items-center gap-2 text-lg whitespace-nowrap">
                  Book Free Visit <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 px-4 bg-[#FAFDFA]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#FBC92E] font-bold mb-4 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
              <HelpCircle className="w-5 h-5" /> Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-sora">आपके सवाल, हमारे जवाब</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className={`bg-white border rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 ${openFaq === i ? 'border-[#3A906D] shadow-[0_10px_30px_rgba(58,144,109,0.1)]' : 'border-gray-200 hover:border-[#3A906D]/40'}`}
              >
                <div className="flex justify-between items-center pr-2 gap-4">
                  <h3 className={`font-bold text-lg md:text-xl transition-colors ${openFaq === i ? 'text-[#3A906D]' : 'text-gray-900'}`}>
                    {faq.q}
                  </h3>
                  <div className={`p-2 rounded-full transition-colors flex-shrink-0 ${openFaq === i ? 'bg-[#3A906D]/10' : 'bg-gray-50'}`}>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#3A906D]' : ''}`} />
                  </div>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="pt-5 text-gray-600 font-medium text-lg leading-relaxed border-t border-gray-100 mt-5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 px-4 bg-white text-center border-t border-gray-100">
         <div className="max-w-5xl mx-auto bg-[#1A1A1A] p-12 sm:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
           {/* Abstract shapes */}
           <div className="absolute top-0 right-0 w-80 h-80 bg-[#3A906D]/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
           <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FBC92E]/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
           
           <div className="relative z-10">
             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-sora leading-[1.6]">
               आज ही <span className="text-[#3A906D]">Solar</span> लगवाएँ!
             </h2>
             <p className="text-xl text-gray-400 mb-12 font-medium max-w-2xl mx-auto">
               फ्री कन्सल्टेशन और साइट विजिट बुक करने के लिए अभी हमसे संपर्क करें। 
             </p>
             <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="tel:+918149034478" className="w-full sm:w-auto px-10 py-5 bg-[#3A906D] text-white font-bold rounded-full hover:bg-white hover:text-[#3A906D] shadow-[0_10px_30px_rgba(58,144,109,0.3)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                  <PhoneCall className="w-6 h-6" /> +91 81490 34478
                </a>
                <a href="https://wa.me/918149034478" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1ebd5b] shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 shadow-sm" /> WhatsApp Now
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
