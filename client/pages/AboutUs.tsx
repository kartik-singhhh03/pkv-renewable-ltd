import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import CtaSection from '../components/sections/CtaSection';
import { Shield, Sun, Users, Award, ArrowRight, CheckCircle2, Factory } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-[#FAFDFA] min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-solar-primary/5 rounded-bl-[100px] -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-solar-primary/10 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-solar-primary/20"
          >
            <Sun className="w-4 h-4" /> About PKV Renewable
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight" 
            style={{ fontFamily: 'Sora' }}
          >
            Empowering Bihar with <br className="hidden md:block" />
            <span className="text-solar-primary">Clean, Reliable Energy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We are Bihar's premier Solar EPC provider, dedicated to bringing sustainable power to every home and business. With MNRE approval and local roots, we build solar infrastructure that lasts generations.
          </motion.p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=70&w=800&fm=webp&fit=crop" 
                alt="Solar Panel Installation Bihar" 
                width="800"
                height="800"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                   <p className="text-white font-semibold text-lg italic">
                     "Our commitment is to eradicate energy poverty in Bihar through high-quality, subsidized solar infrastructure."
                   </p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Sora' }}>Our Story</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Founded with a vision to transform Bihar's energy landscape, PKV Renewable Private Limited has quickly grown into the state's most trusted Solar Engineering, Procurement, and Construction (EPC) company. 
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We recognized that homeowners faced immense hurdles adopting solar due to bureaucratic DISCOM paperwork and complex PM Surya Ghar subsidy claims. We built our company to bridge this gap—providing a 100% locally managed, end-to-end solar setup experience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-solar-primary/30 transition-colors shadow-sm">
                  <div className="w-12 h-12 bg-solar-primary/10 rounded-2xl flex items-center justify-center text-solar-primary mb-4">
                     <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">MNRE Approved</h3>
                  <p className="text-sm text-gray-600">Fully certified to process maximum government subsidies rapidly.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-solar-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-solar-primary/10 rounded-2xl flex items-center justify-center text-solar-primary mb-4">
                     <Factory className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Premium Tech</h3>
                  <p className="text-sm text-gray-600">We utilize Tier-1 DCR and Monocrystalline panels built to endure.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFDFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Sora' }}>Why Bihar Trusts Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our guiding principles that dictate every installation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="w-8 h-8" />, 
                title: "100% Local Accountability", 
                desc: "We don't outsource to third parties. Our local teams in Patna and Siwan handle your installation and your lifetime support.",
                color: "text-solar-primary",
                bg: "bg-solar-primary/10"
              },
              { 
                icon: <Award className="w-8 h-8" />, 
                title: "Uncompromising Quality", 
                desc: "We stand by our 25-Year Performance Warranty. From robust mounting structures to secure wiring, we build to outlast the competition.",
                color: "text-solar-primary",
                bg: "bg-solar-primary/10"
              },
              { 
                icon: <CheckCircle2 className="w-8 h-8" />, 
                title: "Transparency First", 
                desc: "No hidden costs. We provide a completely transparent ROI breakdown during our free site survey before you spend a single rupee.",
                color: "text-amber-500",
                bg: "bg-amber-500/10"
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                 <div className={`w-16 h-16 ${value.bg} ${value.color} rounded-[1.5rem] flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform`}>
                   {value.icon}
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                 <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto prose prose-lg prose-blue">
          <h2 className="text-2xl font-bold text-gray-900 font-sora mb-6">Pioneers in Bihar's Renewable Transition</h2>
          <p className="text-gray-600 mb-4">
            At <strong>PKV Renewable Private Limited</strong>, we are deeply integrated into the PM Surya Ghar Muft Bijli Yojana framework, expertly aiding homeowners in claiming up to <strong>₹78,000</strong> in direct financial subsidies. Based in Patna and Siwan, our presence reaches across Bihar's landscape, ensuring regional commercial properties and residential complexes can effectively zero their electricity bills.
          </p>
          <p className="text-gray-600">
            For advanced energy infrastructure, reliable net metering integration, and guaranteed power independence, we are proud to be a top-tier EPC partner in India's renewable era.
          </p>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
}
