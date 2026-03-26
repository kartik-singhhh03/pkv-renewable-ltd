import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileActionBar from '../components/MobileActionBar';
import { motion } from 'framer-motion';
import { Calculator, Grid, Info, SunMedium, IndianRupee, Banknote, AreaChart, TrendingUp, PhoneCall, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const capacityTable = [
  { capacity: '1 kW', space: '60 sq.ft. (8x7.5)', units: '100-120 यूनिट्स', appxUsage: 'छोटे घर (2-3 पंखे, 4 लाइट, 1 टीवी)' },
  { capacity: '2 kW', space: '120 sq.ft. (8x15)', units: '200-240 यूनिट्स', appxUsage: 'मध्यम घर (1 कूलर, फ्रिज, पंखे, लाइट)' },
  { capacity: '3 kW', space: '180 sq.ft. (12x15)', units: '300-360 यूनिट्स', appxUsage: 'बड़े घर (1 AC, फ्रिज, टीवी, वॉशिंग मशीन)' },
  { capacity: '5 kW', space: '300 sq.ft. (15x20)', units: '500-600 यूनिट्स', appxUsage: 'दुकानें, बड़े घर (2 AC, मोटर, हीटर)' },
  { capacity: '8 kW', space: '480 sq.ft. (32x15)', units: '800-960 यूनिट्स', appxUsage: 'छोटे ऑफिस, 3-4 AC का उपयोग' },
  { capacity: '10 kW', space: '600 sq.ft. (30x20)', units: '1000-1200 यूनिट्स', appxUsage: 'बड़े ऑफिस, कमर्शियल भवन' },
];

const generationData = [
  { duration: '1 दिन में', units: '4 यूनिट' },
  { duration: '1 महीने में', units: '120 यूनिट' },
  { duration: '1 साल में', units: '1320 यूनिट (approx)' },
];

export default function SolarCapacityGuide() {
  useEffect(() => {
    document.title = "1KW - 10KW Solar System: Cost, Space & Savings Guide | PKV Renewable";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Find out how to choose the right solar system size (1KW to 10KW) for your home. Compare cost, space required, unit generation, and total savings.");
    }
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#FAFDFA] font-sans">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 lg:pt-44 pb-20 bg-gradient-to-br from-[#FAFDFA] via-[#EDF6F1] to-white relative overflow-hidden">
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#3A906D]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FBC92E]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#3A906D] rounded-full font-bold uppercase tracking-widest text-sm mb-8 shadow-sm border border-[#3A906D]/20">
             <Calculator className="w-4 h-4" /> Capacity & Pricing Matrix
           </motion.div>
           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.6] mb-6 font-sora text-balance">
             1KW से 10KW तक सोलर सिस्टम:<br className="hidden md:block"/>
             <span className="text-[#3A906D]">कितना खर्च, कितनी जगह और कितनी बचत?</span>
           </motion.h1>
           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
             अपने घर का औसत बिजली बिल निकालें और इस गाइड की मदद से जाने कि 
             आपके लिए कौन-सा सोलर सिस्टम सबसे परफेक्ट रहेगा।
           </motion.p>
        </div>
      </section>

      {/* 2. HOW TO CHOOSE RIGHT CAPACITY */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 font-sora">
               सही Capacity कैसे चुनें?
             </h2>
             <div className="w-20 h-1.5 bg-[#FBC92E] rounded-full mb-8"></div>
             <p className="text-gray-600 text-lg leading-relaxed font-medium mb-6">
               "हमें कितने किलोवाट (kW) का सोलर लगवाना चाहिए?" - यह सबसे आम सवाल है। 
               इसका बिलकुल आसान फार्मूला है: <strong className="text-gray-900">आपकी महीने की औसत बिजली खपत।</strong>
             </p>
             <div className="bg-[#EDF6F1] p-6 rounded-2xl border border-[#3A906D]/20 mb-8">
               <div className="flex items-start gap-4">
                 <div className="mt-1">
                   <Info className="w-6 h-6 text-[#3A906D]" />
                 </div>
                 <p className="text-gray-800 font-bold leading-relaxed">
                   उदाहरण: अगर गर्मी में आपका उपयोग 400 यूनिट, ठंड में 200 यूनिट और बारिश में 150 यूनिट है, तो पूरे साल का औसत 300-350 यूनिट्स होगा।  
                   इस Calculation के हिसाब से आपके लिए <span className="bg-[#3A906D] text-white px-2 py-0.5 rounded-md">3kW</span> का सिस्टम एकदम सही है!
                 </p>
               </div>
             </div>
             <ul className="space-y-4">
               <li className="flex items-center gap-3 text-lg font-bold text-gray-700">
                 <CheckCircle2 className="w-6 h-6 text-[#3A906D]" /> 1kW सोलर महीने में ~100 से ~120 यूनिट बनाता है।
               </li>
               <li className="flex items-center gap-3 text-lg font-bold text-gray-700">
                 <CheckCircle2 className="w-6 h-6 text-[#3A906D]" /> बस अपने बिल से 100 भाग (Divide) कर लें!
               </li>
             </ul>
          </div>
          <div className="order-1 lg:order-2">
            {/* IMAGE BANANA PRO PLACEHOLDER */}
            <div className="relative rounded-[2.5rem] bg-gradient-to-tr from-slate-100 to-white shadow-xl border border-gray-100 p-8 flex items-center justify-center min-h-[400px] overflow-hidden group">
               <div className="relative z-10 w-full text-center space-y-6">
                 <div className="inline-flex bg-white p-4 rounded-full shadow-md text-[#3A906D] mb-4">
                   <SunMedium className="w-10 h-10" />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 font-sora">Capacity Visual Mockup</h3>
                 <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-200 text-left w-full shadow-lg">
                   <div className="text-xs font-mono text-gray-500 mb-2 font-bold uppercase tracking-widest border-b pb-2">Banana Pro Prompt</div>
                   <p className="text-gray-800 font-medium leading-relaxed italic">
                     "indian rooftop solar comparison 1kw 3kw 5kw systems, different house rooftops, realistic, labeled clean layout, bright sunlight, ultra detailed 4k"
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ELECTRICITY USAGE + SPACE REQ TABLE */}
      <section className="py-20 px-4 bg-white border-y border-gray-100 relative">
        <div className="absolute inset-0 bg-slate-50/50" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3A906D10 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 font-sora">जगह कितनी चाहिए? (Space Requirement)</h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              छत पर जगह की कमी है? हम <strong>High-Rise Structure (5ft - 7.5ft)</strong> लगाते हैं ताकि आपकी छत का नीचे का स्पेस हमेशा बचा रहे और आप उसका आराम से उपयोग कर सकें।
            </p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-gray-200 shadow-2xl bg-white">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="bg-[#3A906D] text-white">
                  <th className="px-6 py-5 rounded-tl-[1.5rem] lg:rounded-tl-[2rem] text-lg font-bold w-1/4">सोलर क्षमता (kW)</th>
                  <th className="px-6 py-5 text-lg font-bold">जरूरी जगह (Area required)</th>
                  <th className="px-6 py-5 text-lg font-bold">मासिक बिजली उत्पादन</th>
                  <th className="px-6 py-5 rounded-tr-[1.5rem] lg:rounded-tr-[2rem] text-lg font-bold border-l border-white/10 w-1/3">अनुमानित उपयोग (Ideal For)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {capacityTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-green-50/30 transition-colors">
                    <td className="px-6 py-6 border-b border-gray-50 flex items-center gap-3 text-lg font-extrabold text-gray-900">
                      <Grid className="w-5 h-5 text-[#FBC92E]" /> {row.capacity}
                    </td>
                    <td className="px-6 py-6 border-b border-gray-50 font-bold text-[#3A906D] text-lg font-mono">
                      {row.space}
                    </td>
                    <td className="px-6 py-6 border-b border-gray-50 font-bold text-gray-800">
                      {row.units}
                    </td>
                    <td className="px-6 py-6 border-b border-gray-50 border-l border-gray-100 text-gray-600 font-medium text-sm md:text-base leading-relaxed">
                      {row.appxUsage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center text-gray-500 font-bold text-sm bg-white py-3 px-6 rounded-full inline-block border border-gray-100 shadow-sm mx-auto flex items-center justify-center">
            * Note: उत्पादन सूरज की रोशनी और मौसम पर निर्भर कर सकता है।
          </div>
        </div>
      </section>

      {/* 4. COST + SUBSIDY */}
      <section className="py-24 px-4 bg-[#FAFDFA]">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center">
               <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 font-sora">लागत एवं सब्सिडी (Cost + Subsidy)</h2>
               <div className="w-20 h-1.5 bg-[#FBC92E] rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {/* Typical Cost vs Subsidy */}
               <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-xl transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBC92E]/20 rounded-bl-full group-hover:scale-110 transition-transform"></div>
                  <Banknote className="w-12 h-12 text-[#FBC92E] mb-6 relative z-10" />
                  <h3 className="text-2xl font-bold font-sora text-gray-900 mb-4 relative z-10">खर्च कितना आएगा?</h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium relative z-10 mb-6">
                    PM Surya Ghar योजना के अंतर्गत आपको భారీ सब्सिडी मिलती है। 
                    उदाहरण के तौर पर अगर <span className="font-bold text-gray-900">3kW</span> सिस्टम की कीमत ₹1,50,000 के आसपास है, तो ₹78,000 सीधा आपके अकाउंट में सरकार द्वारा सब्सिडी के रूप में आएगा।
                  </p>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative z-10">
                     <p className="font-bold text-gray-800 text-lg flex justify-between mb-2"><span>कुल अनुमानित खर्च (3kW):</span> <span>₹1,50,000+</span></p>
                     <p className="font-bold text-[#3A906D] text-lg flex justify-between mb-4 border-b border-gray-200 pb-4"><span>सरकारी सब्सिडी मिलेगी:</span> <span>- ₹78,000</span></p>
                     <p className="font-extrabold text-gray-900 text-xl flex justify-between"><span>आपको असल में देना है मात्र:</span> <span>~ ₹72,000*</span></p>
                  </div>
               </div>

               {/* ROI and Return */}
               <div className="bg-[#3A906D] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full group-hover:scale-110 transition-transform"></div>
                  <TrendingUp className="w-12 h-12 text-white mb-6 relative z-10" />
                  <h3 className="text-2xl font-bold font-sora text-white mb-4 relative z-10">ROI (Return on Investment)</h3>
                  <p className="text-white/90 text-lg leading-relaxed font-medium relative z-10 mb-8">
                    सोलर में किया गया इन्वेस्टमेंट <strong className="bg-[#FBC92E] text-black px-2 py-0.5 rounded">4 साल से कम समय में</strong> रिटर्न हो जाता है। 
                    सिस्टम की लाइफ 30 साल मानी गई है, जिसका मतलब है कि लाइफ टाइम में यह अपने निवेश से <strong>8 गुना से ज्यादा मुनाफा</strong> देता है।
                  </p>
                  
                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                    <h4 className="font-bold text-lg mb-4 text-[#FBC92E]">1kW सोलर की बचत (Calculation):</h4>
                    <ul className="space-y-3">
                      {generationData.map((d, i) => (
                        <li key={i} className="flex justify-between font-medium">
                          <span className="opacity-90">{d.duration}</span>
                          <span className="font-bold">{d.units} उत्पादन</span>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. TOTAL SAVINGS BOX */}
      <section className="py-20 px-4 bg-white border-y border-gray-100">
         <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-[3rem] p-12 text-white shadow-2xl text-center relative overflow-hidden">
               <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FBC92E]/20 rounded-full blur-[100px]"></div>
               <div className="relative z-10">
                 <AreaChart className="w-14 h-14 mx-auto text-[#FBC92E] mb-6" />
                 <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 font-sora leading-[1.6]">
                   3kW सिस्टम से 1 साल में कितनी बचत?
                 </h2>
                 <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10 inline-block text-left mb-8 min-w-[300px]">
                    <p className="text-xl font-medium mb-3 flex items-center gap-3">
                      <CheckCircle2 className="text-[#FBC92E] w-5 h-5" /> 1 साल में बिजली उत्पादन: <span className="font-bold ml-auto">~3,520 यूनिट</span>
                    </p>
                    <p className="text-xl font-medium mb-4 flex items-center gap-3 pb-4 border-b border-white/20">
                      <CheckCircle2 className="text-[#FBC92E] w-5 h-5" /> बिजली का औसत मूल्य: <span className="font-bold ml-auto">₹8/यूनिट</span>
                    </p>
                    <p className="text-2xl font-extrabold text-[#FBC92E] flex items-center justify-between">
                      कुल बचत (1 साल): <span className="font-sora">₹28,160/-</span>
                    </p>
                 </div>
                 <p className="text-xl font-medium text-gray-300 max-w-2xl mx-auto">
                   30 साल की कुल लाइफ में आपकी बचत <strong className="text-white text-2xl px-2">₹10 Lakh+</strong> हो सकती है। 
                   यही कारण है कि सोलर को सबसे स्मार्ट इन्वेस्टमेंट माना जाता है।
                 </p>
               </div>
            </div>
         </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 px-4 bg-[#FAFDFA] text-center text-gray-900">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 font-sora">अभी अपनी छत्त का मुआयना (Site Survey) करवाएं!</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">
              अपनी जगह के हिसाब से सबसे उपयुक्त सोलर सिस्टम जानने के लिए आज ही हमारी टेक्निकल टीम से संपर्क करें।
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+918149034478" className="px-8 py-5 bg-[#3A906D] text-white font-bold rounded-full hover:shadow-[0_15px_30px_rgba(58,144,109,0.3)] transition-all flex items-center justify-center gap-2 hover:-translate-y-1 text-lg">
                <PhoneCall className="w-5 h-5" /> Book Free Site Survey
              </a>
              <Link to="/#contact" className="px-8 py-5 bg-white border-2 border-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-50 flex items-center justify-center transition-all hover:-translate-y-1 text-lg">
                Calculate Exact Cost
              </Link>
            </div>
         </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </div>
  );
}
