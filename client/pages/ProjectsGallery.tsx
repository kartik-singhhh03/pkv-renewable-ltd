import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Zap, Leaf, Filter, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';

// Data Arrays
const industrialImages = [
  { img: '/indus1.jpeg', alt: 'Industrial Solar Plant 1' },
  { img: '/indus2.jpeg', alt: 'Industrial Solar Plant 2' },
  { img: '/indus3.jpeg', alt: 'Industrial Solar Plant 3' },
  { img: '/indus4.jpeg', alt: 'Industrial Solar Plant 4' },
  { img: '/indus5.jpeg', alt: 'Industrial Solar Plant 5' },
  { img: '/indus6.jpeg', alt: 'Industrial Solar Plant 6' },
  { img: '/indus7.jpeg', alt: 'Industrial Solar Plant 7' },
  { img: '/indus8.jpeg', alt: 'Industrial Solar Plant 8' },
];

const residentialProjects = [
  {
    title: '5 kW Industrial Residential System',
    desc: 'Cutting-edge industrial setup offering perfect energy independence for modern homes. Includes full battery storage integration.',
    tag: 'Industrial Residential',
    img: '/5kw Hybrid Residential.jpeg'
  },
  {
    title: '3 kW Residential Installation',
    desc: 'Cost-effective grid-tied system designed to offset 80% of average monthly electricity bills with seamless DISCOM net-metering.',
    tag: 'Grid-Tied Residential',
    img: '/3kw Residential.jpeg'
  },
  {
    title: '3 kW Residential Installation in Patna',
    desc: 'Optimized rooftop solar setup ideal for small homes, reducing dependency on grid power while ensuring smooth net-metering integration and long-term savings.',
    tag: 'Grid-Tied Residential',
    img: '/3kw-res-patna.jpeg'
  },
  {
    title: '5 kW Residential Installation in Patna',
    desc: 'High-efficiency solar solution tailored for medium households, delivering greater energy output, enhanced savings, and reliable performance with seamless grid connectivity.',
    tag: 'Grid-Tied Residential',
    img: '/5kw-res-patna.jpeg'
  },
  {
    title: '20 kW Industrial Solar System',
    desc: 'Massive capacity system tailored for large rural estates and small commercial setups requiring heavy-duty uninterrupted energy.',
    tag: 'Commercial / Industrial',
    img: '/20kw Hybrid Solar System.jpeg'
  },

];

export default function ProjectsGallery() {
  const [filter, setFilter] = useState<'All' | 'Industrial' | 'Residential'>('All');
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Handle image load event for skeletons
  const handleImageLoad = (imgSrc: string) => {
    setLoadedImages(prev => new Set(prev).add(imgSrc));
  };

  return (
    <div className="bg-[#FAFDFA] min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-solar-primary/5 opacity-50 z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl"
        >
          <span className="inline-block bg-solar-primary/10 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-solar-primary/20">
            Our Portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Sora' }}>
            Powering Tomorrow, <br className="hidden sm:block" />
            <span className="text-solar-primary">Built Today</span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Explore our vast gallery of real-world installations across Bihar, showcasing our uncompromising commitment to engineering excellence.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['All', 'Industrial', 'Residential'].map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 border ${filter === tab
                    ? 'bg-solar-primary text-white border-transparent shadow-[0_8px_20px_rgba(58,144,109,0.3)] scale-105'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-solar-primary hover:text-solar-primary'
                  }`}
              >
                {tab === 'All' && <Filter className="w-4 h-4" />}
                {tab === 'Industrial' && <Zap className="w-4 h-4" />}
                {tab === 'Residential' && <Leaf className="w-4 h-4" />}
                {tab}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Main Gallery Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <AnimatePresence mode="popLayout">

          {/* INDUSTRIAL SECTION */}
          {(filter === 'All' || filter === 'Industrial') && (
            <motion.div
              key="industrial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="mb-24"
            >
              <div className="mb-10 lg:pl-4">
                <span className="text-solar-primary font-bold tracking-widest text-xs uppercase mb-2 block">Heavy Duty Installations</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Sora' }}>1.3 MW Industrial Solar Power Plant</h2>
                <p className="text-gray-500 text-lg">Large-scale solar installation delivering unprecedented high efficiency and performance to commercial operations.</p>
              </div>

              {/* Masonry Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {industrialImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    onClick={() => setModalImg(img.img)}
                    className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-gray-100 break-inside-avoid"
                  >
                    {!loadedImages.has(img.img) && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-3xl z-0" style={{ paddingBottom: '100%' }}></div>
                    )}
                    <img
                      src={img.img}
                      alt={img.alt}
                      onLoad={() => handleImageLoad(img.img)}
                      width="600"
                      height="400"
                      decoding="async"
                      className={`w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.05] ${loadedImages.has(img.img) ? 'opacity-100' : 'opacity-0'}`}
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Industrial Solar Project</p>
                      <span className="text-solar-primary text-sm flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100"><ExternalLink className="w-3 h-3" /> View full screen</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* RESIDENTIAL SECTION */}
          {(filter === 'All' || filter === 'Residential') && (
            <motion.div
              key="residential"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="mb-10 lg:pl-4 border-t border-gray-100 pt-16 mt-4">
                <span className="text-solar-primary font-bold tracking-widest text-xs uppercase mb-2 block">Home & SME Solutions</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Sora' }}>Residential & Small Projects</h2>
                <p className="text-gray-500 text-lg">Custom-tailored solar architecture bringing grid independence directly to your roof.</p>
              </div>

              <div className="space-y-8 lg:space-y-12 max-w-5xl mx-auto">
                {residentialProjects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group bg-white rounded-[2.5rem] p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-center border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(58,144,109,0.1)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                    onClick={() => setModalImg(project.img)}
                  >
                    {/* Image Block */}
                    <div className="w-full md:w-1/2 overflow-hidden rounded-[2rem] relative aspect-[4/3] bg-gray-100">
                      {!loadedImages.has(project.img) && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0"></div>
                      )}
                      <img
                        src={project.img}
                        alt={project.title}
                        onLoad={() => handleImageLoad(project.img)}
                        width="600"
                        height="400"
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 ${loadedImages.has(project.img) ? 'opacity-100' : 'opacity-0'}`}
                      />
                      <div className="absolute inset-0 bg-solar-primary/0 group-hover:bg-solar-primary/10 transition-colors duration-500"></div>
                    </div>

                    {/* Content Block */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <span className="inline-block px-4 py-2 bg-gray-50 text-gray-600 rounded-xl text-xs font-bold tracking-widest uppercase mb-6 w-max border border-gray-100 group-hover:border-solar-primary/30 group-hover:text-solar-primary transition-colors">{project.tag}</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-solar-primary transition-colors duration-300" style={{ fontFamily: 'Sora' }}>{project.title}</h3>
                      <p className="text-gray-500 text-lg leading-relaxed mb-8">{project.desc}</p>

                      <div className="flex items-center gap-2 text-solar-primary font-bold group-hover:gap-4 transition-all duration-300">
                        Expand Gallery <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </section>

      <Footer />

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/95 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setModalImg(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
              onClick={() => setModalImg(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={modalImg}
              alt="Expanded Project View"
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
