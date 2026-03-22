import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap } from 'lucide-react';

const HERO_BG = 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1920';
const HERO_CARD = 'https://images.pexels.com/photos/4254164/pexels-photo-4254164.jpeg?auto=compress&cs=tinysrgb&w=900';

const iV = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } } };
const badgeV = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' as const } } };
const cV = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#FAFDFA]">
      
      {/* Soft White Overlay Blend over Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         <motion.img 
           src={HERO_BG}
           alt="Solar Panel Background"
           className="absolute inset-0 w-full h-full object-cover object-right lg:object-[80%_center] opacity-90"
           style={{ y }}
         />
         {/* The precise gradient: solid white on left, fading smoothly into the image on the right */}
         <div 
           className="absolute inset-0"
           style={{ background: 'linear-gradient(to right, #FAFDFA 0%, #FAFDFA 40%, rgba(250,253,250,0.9) 55%, rgba(250,253,250,0) 100%)' }}
         />
         {/* Mobile overlay to ensure text is perfectly readable on smaller screens */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#FAFDFA] via-[#FAFDFA]/95 to-[#FAFDFA]/40 lg:hidden" />
      </div>

      {/* Decorative premium ambient light behind the card */}
      <div className="absolute top-1/2 right-[10%] w-[500px] h-[500px] bg-solar-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* LEFT TEXT BLOCK */}
        <motion.div variants={cV} initial="hidden" animate="visible" className="flex flex-col items-start text-left lg:pr-6">
          
          {/* BADGES CONTAINER */}
          <div className="flex flex-col items-start gap-3 mb-8">
            {/* 1. ORIGINAL PREMIUM BADGE */}
            <motion.div variants={badgeV} 
              className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-solar-primary/30 bg-black/[0.04] backdrop-blur-xl shadow-sm"
            >
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solar-primary opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-solar-primary shadow-[0_0_6px_#3A906D]"></span>
               </span>
               <span className="text-gray-800 font-bold uppercase text-[11px] tracking-[0.15em] leading-none pt-0.5">
                 MNRE Approved • Bihar's #1 Solar EPC
               </span>
            </motion.div>

            {/* 2. NEW SUBSIDY BADGE */}
            <motion.div variants={badgeV} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-solar-primary/20 bg-solar-primary/5 shadow-sm"
            >
               <span className="w-1.5 h-1.5 rounded-full bg-solar-primary shadow-[0_0_4px_#3A906D]" />
               <span className="text-solar-primary font-bold uppercase text-[10px] tracking-[0.08em] leading-none pt-0.5" style={{ fontFamily: 'Inter' }}>
                 PM Surya Ghar Yojana Approved • Bihar
               </span>
            </motion.div>
          </div>

          {/* TYPOGRAPHY */}
          <motion.h1 variants={iV} className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-gray-900 leading-[1.08] mb-6 tracking-tight" style={{ fontFamily: 'Sora' }}>
            Power Your<br />
            Home With Smart<br />
            <span className="relative inline-block mt-2">
              Solar Energy
              {/* Real-time animated highlighter scratch */}
              <svg 
                className="absolute bottom-1 lg:bottom-2 left-[-2%] w-[104%] h-[0.55em] -z-10 text-[#FBC92E]/80" 
                viewBox="0 0 300 24" 
                preserveAspectRatio="none"
                fill="none" 
              >
                <motion.path 
                  d="M5,12 Q150,2 295,8 Q150,22 10,14 Q150,2 285,16" 
                  stroke="currentColor" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* SUBSIDY HIGHLIGHT SUBTEXT */}
          <motion.h2 variants={iV} className="text-[#4B5563] text-xl sm:text-2xl font-medium mb-4 leading-tight">
            Get up to <span className="font-semibold text-gray-900 bg-[#FBC92E]/40 px-1.5 py-0.5 rounded-md">₹78,000</span> Government Subsidy on Rooftop Solar Installation
          </motion.h2>

          <motion.p variants={iV} className="text-[#4B5563] text-lg lg:text-xl max-w-[480px] mb-10 leading-relaxed font-medium">
            End-to-end rooftop solar installations with PM Surya Ghar subsidy processing. Trusted, clean, and reliable energy for your home.
          </motion.p>

          {/* BUTTONS */}
          <motion.div variants={iV} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#contact"
              className="flex items-center justify-center px-9 py-4 bg-[#3A906D] text-white font-bold rounded-full shadow-[0_10px_20px_rgba(58,144,109,0.2)] text-base transition-all hover:shadow-[0_15px_30px_rgba(58,144,109,0.3)] hover:-translate-y-1 active:scale-95"
            >
              Get Free Quote
            </a>
            <a href="#calculator"
              className="flex items-center justify-center px-9 py-4 border-[1.5px] border-gray-200 text-gray-900 font-bold rounded-full transition-all text-base hover:border-gray-300 hover:bg-gray-50 active:scale-95 bg-white shadow-sm"
            >
              Calculate Savings
            </a>
          </motion.div>
        </motion.div>

        {/* 2. RIGHT IMAGE CARD */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
           className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] max-w-[540px] mx-auto lg:ml-auto group"
        >
          {/* Glass Card Box */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_45px_80px_-20px_rgba(0,0,0,0.12)] flex p-2.5">
             <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gray-100 shadow-inner">
               {/* Full cover image with subtle parallax & hover zoom */}
               <motion.img 
                 src={HERO_CARD} 
                 alt="Residential Solar Install" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                 style={{ y }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
             </div>
          </div>

          {/* 3. FLOATING INFO CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
            className="absolute -bottom-6 left-2 sm:-left-6 lg:-left-12 z-20 bg-gradient-to-br from-white/95 to-[#FAFDFA]/95 backdrop-blur-2xl border border-white p-4 sm:p-5 rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(58,144,109,0.25)] flex items-center gap-3 sm:gap-4 transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-[0_25px_60px_-10px_rgba(58,144,109,0.3)]"
          >
             {/* Yellow Icon Circle */}
             <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FBC92E]/15 flex items-center justify-center relative border border-[#FBC92E]/30 shrink-0">
               <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#d9a400]" />
             </div>
             <div className="pr-1 sm:pr-2">
               <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-none" style={{ fontFamily: 'Sora' }}>2+</p>
               <p className="text-[#3A906D] text-[10px] sm:text-[11px] font-bold mt-1.5 uppercase tracking-widest leading-none">MW Installed</p>
             </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
