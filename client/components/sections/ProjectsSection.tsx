import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  { img: '/indus1.jpeg', title: '1.3 MW Industrial Plant', loc: 'Patna, Bihar', size: '1.3 MW', tag: 'Industrial' },
  { img: '/5kw Hybrid Residential.jpeg', title: '5 kW Industrial System', loc: 'Muzaffarpur, Bihar', size: '5 kW', tag: 'Residential' },
  { img: '/indus2.jpeg', title: 'Commercial Rooftop Solar', loc: 'Gaya, Bihar', size: '500 kW', tag: 'Commercial' },
  { img: '/20kw Hybrid Solar System.jpeg', title: '20 kW Industrial Solar System', loc: 'Bhagalpur, Bihar', size: '20 kW', tag: 'Commercial' },
  { img: '/3kw Residential.jpeg', title: '3 kW Residential Installation', loc: 'Siwan, Bihar', size: '3 kW', tag: 'Residential' },
  { img: '/indus3.jpeg', title: 'Ground-Mounted Solar Farm', loc: 'Ara, Bihar', size: '100 kW', tag: 'Industrial' },
];

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFDFA] overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}>
          <span className="inline-block bg-solar-primary/10 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-solar-primary/20">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight" style={{ fontFamily: 'Sora' }}>
            Our Successful Projects
          </h2>
          <p className="text-gray-500 mt-4 text-lg font-light">Real solar installations powering homes and industries.</p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full max-w-[100vw] overflow-hidden group mb-16" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {/* Duplicate array for seamless infinite scrolling */}
          {[...projects, ...projects].map((p, i) => (
            <div key={i} className="relative w-[300px] sm:w-[350px] md:w-[400px] h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-sm border border-gray-100 flex-shrink-0 group/card">
              
              <div className="absolute inset-0 overflow-hidden bg-gray-100">
                <img src={p.img} alt={p.title} width="600" height="400" className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-110" loading="lazy" decoding="async" />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-90 group-hover/card:opacity-100 transition-opacity duration-300" />

              {/* Top Badge */}
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md text-solar-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/20">
                {p.size}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform transition-transform duration-300 group-hover/card:-translate-y-2">
                <p className="text-solar-primary font-bold text-xs uppercase tracking-wider mb-2">{p.tag}</p>
                <h3 className="text-white font-bold text-xl leading-tight mb-2 group-hover/card:text-white transition-colors" style={{ fontFamily: 'Sora' }}>{p.title}</h3>
                <p className="text-gray-300 text-sm mb-4 font-medium flex items-center gap-1.5 opacity-80 group-hover/card:opacity-100 transition-opacity">
                  {p.loc}
                </p>
                
                {/* Hover Glow effect for the bottom line */}
                <div className="w-12 h-1 bg-solar-primary rounded-full group-hover/card:w-full transition-all duration-500 shadow-[0_0_10px_rgba(58,144,109,0.8)]" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/projects')}
          className="group flex items-center gap-2 bg-gray-900 hover:bg-solar-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl transition-colors duration-300"
        >
          View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
