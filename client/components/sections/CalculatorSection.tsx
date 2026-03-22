import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Zap, Landmark, TrendingUp, Clock, Sun, MapPin, IndianRupee } from 'lucide-react';

const cities = ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Siwan', 'Ara', 'Begusarai', 'Katihar'];

export default function CalculatorSection() {
  const [bill, setBill] = useState<number>(3000);
  const [city, setCity] = useState('Patna');
  const [roofType, setRoofType] = useState('concrete');

  // Real Indian Solar Calculation Logic
  const units = bill / 7; // ₹7 average per unit
  const kw = Math.max(1, Math.round(units / 120)); // Assume 1kW ~ 120 units
  const systemCost = kw * 55000; // ₹55k per kW
  const subsidy = kw <= 1 ? 30000 : kw <= 2 ? 60000 : 78000; // Slab
  const netCost = systemCost - subsidy;
  const monthlySavings = bill * 0.8; // 80% bill reduction assumption
  const annualSavings = monthlySavings * 12;
  const lifetimeSavings = annualSavings * 25; // 25 year lifetime
  const payback = (netCost / annualSavings).toFixed(1);

  const whatsappMsg = `Hi, my monthly bill is ₹${bill.toLocaleString('en-IN')}. Recommended system: ${kw}kW. Please share detailed quotation.`;
  const whatsappUrl = `https://wa.me/918149034478?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="calculator" className="py-28 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} className="text-center mb-16">
          <span className="inline-block bg-solar-primary/5 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 shadow-sm">
            Financial Estimator
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight" style={{ fontFamily: 'Sora' }}>
            Calculate Your Solar ROI
          </h2>
          <p className="text-gray-500 mt-4 text-lg font-light">Data-driven estimation explicitly calibrated for Bihar households.</p>
        </motion.div>

        {/* Main Container */}
        <div className="bg-[#FAFDFA] border border-gray-100 rounded-[2.5rem] p-6 lg:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.04)]">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
             
             {/* LEFT SIDE (Inputs) */}
             <div className="lg:col-span-5 space-y-10 font-medium flex flex-col justify-center">
               
               {/* Bill Slider */}
               <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md group">
                 <div className="flex justify-between items-center mb-6">
                   <label className="text-gray-700 flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                     <IndianRupee className="w-4 h-4 text-solar-primary" />
                     Monthly Bill
                   </label>
                   <AnimatePresence mode="popLayout">
                     <motion.span key={bill} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-[#d9a400]" style={{ fontFamily: 'Sora' }}>
                       ₹{bill.toLocaleString('en-IN')}
                     </motion.span>
                   </AnimatePresence>
                 </div>
                 <div className="relative pt-2 pb-4">
                   <input type="range" min={1000} max={20000} step={500} value={bill} onChange={e => setBill(Number(e.target.value))}
                     className="w-full h-2 appearance-none rounded-full outline-none cursor-pointer"
                     style={{ background: `linear-gradient(to right, #3A906D ${((bill - 1000) / 19000) * 100}%, #E5E7EB 0%)` }} 
                   />
                   <div className="flex justify-between text-gray-400 text-[10px] uppercase font-bold mt-4 tracking-wider">
                     <span>₹1,000</span>
                     <span>Average</span>
                     <span>₹20,000+</span>
                   </div>
                 </div>
               </div>

               {/* City Dropdown */}
               <div>
                  <label className="text-gray-600 mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider ml-2">
                    <MapPin className="w-4 h-4 text-solar-primary" /> Location in Bihar
                  </label>
                  <select value={city} onChange={e => setCity(e.target.value)}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:border-solar-primary focus:ring-4 focus:ring-solar-primary/10 transition-all font-medium shadow-sm hover:border-solar-primary/50 outline-none">
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
               </div>

               {/* Roof Type */}
               <div>
                 <label className="text-gray-600 mb-3 block text-sm font-bold uppercase tracking-wider ml-2">Roof Type</label>
                 <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[['concrete', 'Concrete'], ['tin', 'Tin Shed'], ['asbestos', 'Asbestos']].map(([v, l]) => (
                      <button key={v} onClick={() => setRoofType(v)}
                        className={`py-3 sm:py-3.5 px-1 sm:px-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-sm font-semibold border-2 transition-all ${roofType === v
                          ? 'border-solar-primary bg-solar-primary/5 text-solar-primary shadow-sm'
                          : 'border-transparent bg-white text-gray-500 shadow-sm hover:bg-gray-50'}`}>
                        {l}
                      </button>
                    ))}
                 </div>
               </div>
             </div>

             {/* RIGHT SIDE (Outputs) */}
             <div className="lg:col-span-7 flex flex-col justify-center">
               <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-8">
                 
                 <MetricCard icon={Zap} title="System Size" 
                   value={kw} unit="kW" 
                   delay={0.1} className="col-span-2 sm:col-span-1" />
                   
                 <MetricCard icon={Landmark} title="PM Surya Ghar Subsidy" 
                   prefix="₹" value={subsidy} colorClass="text-[#d9a400]"
                   delay={0.2} className="col-span-2 sm:col-span-1" />

                 <MetricCard icon={TrendingUp} title="Annual Savings" 
                   prefix="₹" value={annualSavings}
                   delay={0.3} className="col-span-2 sm:col-span-1" />

                 <MetricCard icon={Clock} title="Payback Period" 
                   value={payback} unit="Yrs"
                   delay={0.4} className="col-span-2 sm:col-span-1" />

                 <MetricCard icon={Sun} title="25-Year Lifetime Savings" 
                   prefix="₹" value={Math.round(lifetimeSavings)} colorClass="text-[#3A906D]"
                   delay={0.5} className="col-span-2" />
               </div>

               {/* CTA */}
               <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-solar-primary text-white font-bold rounded-2xl flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-[0_15px_30px_rgba(58,144,109,0.3)] transition-all hover:bg-[#2b7255]">
                  Get Accurate Solar Quote
               </motion.a>
               <p className="text-center mt-5 text-[11.5px] font-bold text-gray-400 tracking-wider">
                 *Estimates based on Bihar solar generation averages & MNRE subsidy guidelines.
               </p>
             </div>

           </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon: Icon, title, value, unit, prefix, colorClass = "text-gray-900", delay, className = '' }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.5 }} viewport={{ once: false, amount: 0.15 }}
      className={`bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
         <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-solar-primary/10 transition-colors border border-gray-100">
           <Icon className="w-5 h-5 text-gray-500 group-hover:text-solar-primary transition-colors" />
         </div>
         <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{title}</p>
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div key={value} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`text-3xl font-bold ${colorClass} tracking-tight pl-1 flex items-baseline gap-1`} style={{ fontFamily: 'Sora' }}>
          {prefix}{typeof value === 'number' ? value.toLocaleString('en-IN') : value}
          {unit && <span className="text-gray-400 text-lg font-medium ml-1">{unit}</span>}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
