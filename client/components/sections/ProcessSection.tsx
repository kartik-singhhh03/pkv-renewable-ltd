import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Cpu, FileCheck, Wrench, Activity, Zap } from 'lucide-react';

const steps = [
  { icon: MapPin, title: 'Site Survey', desc: 'Free on-site energy audit & assess roof.', num: '01' },
  { icon: Cpu, title: 'System Design', desc: 'Custom solar design for max savings.', num: '02' },
  { icon: FileCheck, title: 'Subsidy Approval', desc: 'We file all PM Surya Ghar paperwork.', num: '03' },
  { icon: Wrench, title: 'Installation', desc: 'Expert team installs panels in 2-5 days.', num: '04' },
  { icon: Activity, title: 'Net Metering', desc: 'DISCOM net meter installed to grid.', num: '05' },
  { icon: Zap, title: 'Commissioning', desc: 'System is live! Monitor via app.', num: '06' },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth the scroll progress for a premium feel
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section id="process" className="bg-[#FAFDFA] relative border-y border-gray-100 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} className="text-center mb-24">
          <span className="inline-block bg-solar-primary/5 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 shadow-sm">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight tracking-tight" style={{ fontFamily: 'Sora' }}>
            Solar in 6 Simple Steps
          </h2>
          <p className="text-gray-500 mt-4 text-lg font-light">From consultation to commissioning — we handle everything.</p>
        </motion.div>

        {/* DESKTOP: 3x2 Wrapping Snake Curve (No horizontal scroll overflow) */}
        <div ref={containerRef} className="hidden md:block relative max-w-5xl mx-auto pb-32">
          
          {/* The precise SVG Snake Pathway */}
          {/* gap-y is 220px, icon is 64px. Center-to-center height = 32 + 220 + 32 = 284px */}
          <div className="absolute top-[32px] left-[16.666%] right-[16.666%] h-[284px] z-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" overflow="visible">
              <path 
                d="M 0,0 L 90,0 C 100,0 100,100 90,100 L 0,100" 
                vectorEffect="non-scaling-stroke"
                fill="none" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
              <motion.path 
                d="M 0,0 L 90,0 C 100,0 100,100 90,100 L 0,100" 
                vectorEffect="non-scaling-stroke"
                fill="none" stroke="#FBC92E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                style={{ pathLength: smoothProgress }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-y-[220px]">
            {steps.map((s, i) => {
              const Icon = s.icon;
              // Desktop Order: Row 1 = 1,2,3. Row 2 = 6,5,4 (Snake format)
              const orderClass = 
                i === 0 ? 'order-1' :
                i === 1 ? 'order-2' :
                i === 2 ? 'order-3' :
                i === 3 ? 'order-6' :
                i === 4 ? 'order-5' : 'order-4';

              return (
                <div key={i} className={`relative z-10 flex flex-col items-center top-0 ${orderClass}`}>
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center relative bg-clip-padding group hover:border-solar-primary transition-colors duration-300">
                    <Icon className="w-6 h-6 text-solar-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  {/* Absolute positioned text to prevent altering grid height */}
                  <div className="absolute top-24 w-full text-center px-4">
                    <span className="text-solar-primary font-bold text-xs uppercase tracking-widest block mb-2">Step {s.num}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 truncate" style={{ fontFamily: 'Sora' }}>{s.title}</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[200px] mx-auto">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE: Vertical Timeline */}
        <div className="md:hidden relative max-w-sm mx-auto">
          {/* Static gray line */}
          <div className="absolute left-[31px] top-4 bottom-12 w-[2px] bg-gray-200" />
          
          {/* Animated green line */}
          <motion.div 
            className="absolute left-[31px] top-4 bottom-12 w-[2px] bg-[#FBC92E] origin-top shadow-[0_0_8px_rgba(251,201,46,0.6)]"
            style={{ scaleY: smoothProgress }}
          />

          <div className="space-y-12 relative z-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: false, amount: 0.15 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200 mt-0">
                    <Icon className="w-6 h-6 text-solar-primary" />
                  </div>
                  <div className="pt-2">
                    <div className="text-solar-primary font-bold text-xs mb-1 uppercase tracking-widest">Step {s.num}</div>
                    <h3 className="text-gray-900 font-bold text-lg mb-2" style={{ fontFamily: 'Sora' }}>{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
