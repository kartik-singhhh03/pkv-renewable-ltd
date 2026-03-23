import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Residential Rooftop Solar',
    desc: 'PM Surya Ghar subsidized solar systems for homes. 1–10 kW solutions.',
    img: 'https://images.pexels.com/photos/4254164/pexels-photo-4254164.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp&q=70',
    tag: '₹78,000 Subsidy',
    tagColor: 'text-[#d9a400] bg-white/95',
  },
  {
    title: 'Commercial Solar Systems',
    desc: 'High-ROI solar for factories, offices, and institutions. 10 kW–1 MW.',
    img: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp&q=70',
    tag: '5–7 Year Payback',
    tagColor: 'text-[#3A906D] bg-white/95',
  },
  {
    title: 'Industrial Solar Systems',
    desc: 'High-capacity solar solutions designed to reduce energy costs, improve efficiency, and support large-scale industrial operations.',
    img: 'https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp&q=70',
    tag: '24/7 Power',
    tagColor: 'text-[#2D98CE] bg-white/95',
  },
  {
    title: 'Solar EPC & Consultancy',
    desc: 'End-to-end engineering, procurement, construction, and subsidy filing.',
    img: 'https://images.pexels.com/photos/6040783/pexels-photo-6040783.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp&q=70',
    tag: 'MNRE Approved',
    tagColor: 'text-purple-600 bg-white/95',
  },
];

// Staggered animation rules perfectly mapped to transition requirements
const cV = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const iV = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } } };

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: false, amount: 0.15 }} className="text-center mb-16">
          <span className="inline-block bg-solar-primary/5 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 shadow-sm">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight tracking-tight" style={{ fontFamily: 'Sora' }}>
            Complete Solar Solutions
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg leading-relaxed font-light">From consultation to commissioning — we handle everything.</p>
        </motion.div>

        {/* Staggered Cards */}
        <motion.div variants={cV} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div key={i} variants={iV}
              className="relative rounded-[1.5rem] overflow-hidden group cursor-pointer border border-gray-100 bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col h-full active:scale-[0.98]">

              {/* Top Image Container (Locked Aspect Ratio) */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
                <motion.img
                  src={s.img}
                  alt={s.title}
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Overlay: Slight dark gradient on hover for premium depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0 pointer-events-none" />

                {/* Glass Tag Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-block ${s.tagColor} backdrop-blur-md border border-white/40 text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-sm`}>
                    {s.tag}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-gray-900 font-bold text-[1.15rem] mb-3 leading-tight" style={{ fontFamily: 'Sora' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium flex-1">{s.desc}</p>

                {/* Hover-triggered Learn More */}
                <div className="flex items-center gap-1.5 text-[#3A906D] font-bold text-sm transition-colors duration-300 ease-out group-hover:text-[#2b7255]">
                  Learn More
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 border border-transparent rounded-full" />
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
