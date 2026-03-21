import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const projects = [
  { img: 'https://images.pexels.com/photos/7339349/pexels-photo-7339349.jpeg?auto=compress&cs=tinysrgb&w=800', title: '5 kW Residential System', loc: 'Patna, Bihar', size: '5 kW' },
  { img: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Commercial Rooftop Solar', loc: 'Muzaffarpur, Bihar', size: '25 kW' },
  { img: 'https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Ground-Mounted Solar Farm', loc: 'Gaya, Bihar', size: '100 kW' },
  { img: 'https://images.pexels.com/photos/6040783/pexels-photo-6040783.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Industrial Solar Plant', loc: 'Bhagalpur, Bihar', size: '50 kW' },
  { img: 'https://images.pexels.com/photos/4254164/pexels-photo-4254164.jpeg?auto=compress&cs=tinysrgb&w=800', title: '3 kW Home Solar System', loc: 'Siwan, Bihar', size: '3 kW' },
  { img: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Net-Metered Rooftop', loc: 'Ara, Bihar', size: '10 kW' },
];

const cV = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const iV = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} className="text-center mb-16">
          <span className="inline-block bg-solar-primary/5 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight" style={{ fontFamily: 'Sora' }}>
            Our Successful Projects
          </h2>
          <p className="text-gray-500 mt-4 text-lg font-light">Real solar installations delivered across Bihar</p>
        </motion.div>

        <motion.div variants={cV} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div key={i} variants={iV}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
              className="relative h-80 rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm border border-gray-100 transition-all duration-300">
              
              <div className="absolute inset-0 overflow-hidden">
                <motion.img src={p.img} alt={p.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} />
              </div>

              {/* Light overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />

              {/* Size badge */}
              <div className="absolute top-5 right-5 bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                {p.size}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-white font-bold text-lg sm:text-xl leading-tight mb-2" style={{ fontFamily: 'Sora' }}>{p.title}</h3>
                <p className="text-gray-200 text-xs sm:text-sm mb-4 font-light">{p.loc}</p>
                <div
                  className="opacity-100 lg:opacity-0 lg:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 text-white font-bold text-xs sm:text-sm bg-white/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 w-max">
                  View Project <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
