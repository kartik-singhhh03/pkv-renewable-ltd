import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileActionBar from '../components/MobileActionBar';
import { motion } from 'framer-motion';
import { CheckCircle2, ClipboardCheck, Wrench, Activity, DollarSign, CalendarCheck, FileText, PhoneCall, Hammer } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const timelineSteps = [
  {
    icon: FileText,
    title: 'Application (पोर्टल पर आवेदन)',
    desc: 'सबसे पहले PM Surya Ghar National Portal पर रजिस्ट्रेशन किया जाता है और बिजली बिल के साथ बेसिक डिटेल्स जमा की जाती हैं। PKV Renewable आपके लिए यह पूरी प्रक्रिया मुफ्त और 100% सही तरीके से करता है।',
    time: 'Day 1'
  },
  {
    icon: ClipboardCheck,
    title: 'Feasibility Approval (मुआयना व मंजूरी)',
    desc: 'DISCOM (विद्युत विभाग) द्वारा एप्लीकेशन की जांच की जाती है। अप्रूवल (Feasibility) मिलने के बाद, 100% पेमेंट की जाती है और कंज्यूमर व कंपनी के बीच एक एग्रीमेंट बनता है जिसे पोर्टल पर अपलोड किया जाता है।',
    time: 'Day 3 - 7'
  },
  {
    icon: Wrench,
    title: 'Plant Installation (सिस्टम इंस्टॉलेशन)',
    desc: 'पैकेज के अनुसार स्ट्रक्चर (5/7.5 फीट), मोनो पर्क बाइफेसिअल पैनल्स और इनवर्टर आपके घर पर डिलीवर किए जाते हैं। हमारी एक्सपर्ट टीम सुरक्षा मानकों के साथ 2 से 5 दिन में पूरा सिस्टम मज़बूती से इंस्टॉल कर देती है।',
    time: 'Day 10 - 20'
  },
  {
    icon: Activity,
    title: 'Net Metering (नेट मीटरिंग एक्टिवेशन)',
    desc: 'इंस्टॉलेशन पूरा होने के बाद DISCOM के साथ नेट मीटरिंग एग्रीमेंट होता है। बिजली विभाग नया नेट मीटर लगाता है और आपके सिस्टम को चालू (Commission) कर दिया जाता है।',
    time: 'Day 25 - 35'
  },
  {
    icon: DollarSign,
    title: 'Subsidy Credit (सब्सिडी का पैसा मिलना)',
    desc: 'सिस्टम चालू होने के (Commissioning) बाद पोर्टल पर Subsidy Request डाली जाती है। इसके 1 महीने के भीतर PM Surya Ghar योजना की ₹78,000 (अधिकतम) तक की सब्सिडी सीधे आपके बैंक खाते में आ जाती है।',
    time: 'Day 45 - 60'
  }
];

export default function InstallationProcess() {
  useEffect(() => {
    document.title = "Solar System Installation Process: Step by Step Guide | PKV Renewable";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "जानें PKV Renewable के साथ Solar System लगवाने की पूरी प्रक्रिया। Registration से लेकर Net Metering और Subsidy तक Step-by-Step Guide.");
    }
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#FAFDFA] font-sans">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 lg:pt-44 pb-20 bg-gradient-to-br from-[#FAFDFA] via-[#EDF6F1] to-white relative overflow-hidden">
        <div className="absolute top-20 left-0 w-80 h-80 bg-[#3A906D]/10 rounded-full blur-[80px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#3A906D] rounded-full font-bold uppercase tracking-widest text-sm mb-8 shadow-sm border border-[#3A906D]/20">
             <CalendarCheck className="w-4 h-4" /> End-to-End Workflow
           </motion.div>
           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.6] mb-6 font-sora">
             Solar System लगवाने की<br className="hidden md:block"/> 
             <span className="text-[#3A906D] mt-2 block">पूरी प्रक्रिया (Process)</span>
           </motion.h1>
           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
             आवेदन (Application) से लेकर आपके खाते में सब्सिडी (Subsidy) आने तक की Step-by-Step Guide आसान भाषा में।
           </motion.p>
        </div>
      </section>

      {/* 2. TIMELINE SECTION */}
      <section className="py-20 px-4 bg-white relative">
         <div className="max-w-4xl mx-auto">
            {/* Timeline path container */}
            <div className="relative">
               {/* Vertical Line */}
               <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gradient-to-b from-[#3A906D] via-[#FBC92E] to-[#3A906D] rounded-full opacity-30"></div>

               <div className="space-y-12">
                 {timelineSteps.map((step, idx) => (
                   <motion.div 
                     initial={{ opacity: 0, x: -20, y: 20 }} 
                     whileInView={{ opacity: 1, x: 0, y: 0 }} 
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 0.5, delay: idx * 0.1 }}
                     key={idx} 
                     className="relative flex flex-col md:flex-row gap-6 md:gap-12"
                   >
                     {/* Timeline Node */}
                     <div className="hidden md:flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-white border-4 border-[#3A906D] shadow-lg flex items-center justify-center text-[#3A906D] relative z-10 group-hover:scale-110 transition-transform">
                          <step.icon className="w-7 h-7" />
                        </div>
                     </div>
                     
                     {/* Mobile Icon (hidden on md) */}
                     <div className="md:hidden flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-full bg-[#3A906D]/10 flex items-center justify-center text-[#3A906D]">
                          <step.icon className="w-6 h-6" />
                        </div>
                        <span className="bg-gray-100 text-gray-700 font-bold px-4 py-1.5 rounded-full text-sm">
                          Step {idx + 1} • {step.time}
                        </span>
                     </div>

                     {/* Content Card */}
                     <div className="flex-1 bg-[#FAFDFA] p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(58,144,109,0.08)] transition-all hover:-translate-y-1 relative group overflow-hidden">
                        {/* Abstract numbering background */}
                        <div className="absolute -right-6 -bottom-10 text-[120px] font-extrabold text-gray-900/[0.03] select-none pointer-events-none font-sora">
                           0{idx + 1}
                        </div>
                        
                        <div className="hidden md:inline-block bg-white text-gray-600 font-bold px-4 py-1.5 rounded-full text-sm border border-gray-200 shadow-sm mb-6">
                          Estimated Time: <span className="text-[#3A906D]">{step.time}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sora flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-[#FBC92E] hidden md:block" /> {step.title}
                        </h3>
                        <p className="text-gray-600 font-medium text-lg leading-relaxed relative z-10">
                          {step.desc}
                        </p>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </div>
         </div>
      </section>

      {/* 3. IMAGE PLACEHOLDER (Banana Pro) */}
      <section className="py-20 px-4 bg-[#FAFDFA] border-y border-gray-100">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-extrabold text-gray-900 font-sora">Installation in Action</h2>
            </div>
            <div className="relative rounded-[3rem] bg-white border border-gray-100 flex flex-col items-center justify-center overflow-hidden shadow-xl min-h-[500px] p-8 group">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#3A906D]/5 via-transparent to-[#FBC92E]/5" />
               <div className="relative z-10 text-center w-full max-w-3xl">
                 <div className="inline-flex bg-white p-5 rounded-full shadow-md text-[#3A906D] mb-6">
                   <Hammer className="w-12 h-12" />
                 </div>
                 <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full text-left">
                   <div className="text-xs font-mono text-gray-500 mb-3 font-bold uppercase tracking-widest border-b pb-3">Idea & Prompt for Banana Pro</div>
                   <p className="text-gray-800 font-bold text-xl leading-relaxed italic">
                     "step by step solar installation on indian rooftop, technician installing panels, wiring, inverter setup, realistic sequence, bright daylight, cinematic 4k"
                   </p>
                 </div>
               </div>
            </div>
         </div>
      </section>
      
      {/* 4. FINAL CTA */}
      <section className="py-24 px-4 bg-white text-center">
         <div className="max-w-4xl mx-auto bg-gradient-to-bl from-gray-900 via-[#1A1A1A] to-black p-12 sm:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
           <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3A906D]/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
           
           <div className="relative z-10">
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-sora leading-[1.6] text-balance">
               <span className="text-[#FBC92E]">PKV Renewable</span> के साथ इंस्टॉलेशन है 100% तनाव मुक्त!
             </h2>
             <p className="text-xl text-gray-400 mb-10 font-medium max-w-2xl mx-auto">
               आपको फॉर्म भरने से लेकर मीटर लगने तक किसी सरकारी ऑफिस के चक्कर नहीं काटने पड़ेंगे। हम सब संभालेंगे।
             </p>
             <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="tel:+918149034478" className="w-full sm:w-auto px-10 py-5 bg-[#3A906D] text-white font-bold rounded-full hover:bg-white hover:text-[#3A906D] shadow-[0_10px_30px_rgba(58,144,109,0.3)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                  <PhoneCall className="w-6 h-6" /> Talk to an Expert
                </a>
                <Link to="/#contact" className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 border border-white/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 text-lg backdrop-blur-sm">
                  Get Free Estimate
                </Link>
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
