import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Star, ArrowRight, Navigation, Zap, ShieldCheck } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFDFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center gap-2 bg-solar-primary/10 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-solar-primary/20 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" /> MNRE & DISCOM Approved
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Sora' }}>
            Bihar's Most Trusted <br className="hidden sm:block" />
            Solar Experts
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Over <span className="font-bold text-gray-900">500+ homes & businesses</span> powered locally. Visit us to calculate your savings and claim the <span className="font-bold text-solar-primary">PM Surya Ghar Subsidy</span> hassle-free.
          </p>
        </motion.div>

        {/* Main Location Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 p-6 sm:p-10 mb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Interactive Map */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 h-[400px] lg:h-auto min-h-[450px] rounded-[2rem] overflow-hidden relative group shadow-sm border border-gray-100"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-[1.03]">
                <iframe
                  src="https://maps.google.com/maps?q=PKV%20Renewable%20Pvt%20Ltd&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full rounded-[2rem]"
                />
              </div>
            </motion.div>

            {/* Office Details & CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Sora' }}>Our Locations</h3>
                
                {/* Office 1 */}
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-[#FAFDFA] transition-colors border border-transparent hover:border-gray-100 hover:shadow-sm">
                  <div className="mt-1 bg-solar-primary/10 p-3 rounded-2xl text-solar-primary shadow-sm relative">
                    <MapPin className="w-5 h-5 relative z-10" />
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solar-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-solar-primary"></span>
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Patna Office</h4>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">Beside PKV Smart Cinemas, Patna, Bihar</p>
                  </div>
                </div>

                {/* Office 2 */}
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-[#FAFDFA] transition-colors border border-transparent hover:border-gray-100 hover:shadow-sm">
                  <div className="mt-1 bg-solar-primary/10 p-3 rounded-2xl text-solar-primary shadow-sm relative">
                    <MapPin className="w-5 h-5 relative z-10" />
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solar-primary opacity-75" style={{ animationDelay: '0.5s' }}></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-solar-primary"></span>
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Siwan Office</h4>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">Near JP Chowk, Siwan, Bihar</p>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full my-4"></div>

                <div className="grid gap-4 sm:grid-cols-2 px-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-xl">
                      <Clock className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-0.5">Hours</p>
                      <p className="font-semibold text-gray-900 text-sm">Mon-Sat: 9AM - 6PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-xl">
                      <Mail className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-0.5">Email</p>
                      <a href="mailto:info@pkvrenewable.com" className="font-semibold text-gray-900 hover:text-solar-primary text-sm transition-colors">info@pkvrenewable.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="flex flex-col gap-4">
                  <div className="relative group w-full">
                    <div className="absolute -inset-1 bg-solar-primary rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                    <a href="tel:+918149034478" className="relative w-full flex justify-center items-center gap-2 bg-solar-primary text-white py-4 px-6 rounded-2xl font-bold transform transition-all duration-300 hover:-translate-y-1 shadow-lg overflow-hidden text-lg">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                      <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>Call Now : +91 81490 34478</span>
                    </a>
                  </div>
                  
                  <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-50 py-2.5 rounded-xl border border-gray-100">
                    Free Govt. Subsidy Guidance
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://maps.app.goo.gl/Du83tiKCWSdrMDRW6" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-800 py-3.5 px-4 rounded-xl font-semibold hover:border-solar-primary hover:text-solar-primary transition-colors shadow-sm">
                      <Navigation className="w-4 h-4" /> Directions
                    </a>
                    <button className="flex items-center justify-center gap-2 bg-solar-primary/5 border border-solar-primary/10 text-solar-primary py-3.5 px-4 rounded-xl font-semibold hover:bg-solar-primary/10 transition-colors shadow-sm">
                      <Zap className="w-4 h-4 text-solar-primary" /> Consultation
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Google Reviews */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16"
        >
          {/* Rating Stats Card */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-center items-start">
            <div className="flex gap-1 mb-3">
               {[1,2,3,4,5].map((_, i) => (
                 <Star key={i} className={`w-6 h-6 ${i<4 ? 'fill-[#FBC92E] text-[#FBC92E]' : 'fill-[#FBC92E] text-[#FBC92E] opacity-50'}`} />
               ))}
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'Sora' }}>4.8</span>
              <span className="text-gray-500 font-medium text-lg">/ 5</span>
            </div>
            <p className="text-gray-900 font-bold text-lg">Rated 4.8/5 by Bihar Homeowners</p>
            <p className="text-gray-500 text-sm mb-6">Based on verified customer reviews</p>
            
            <a href="https://www.google.com/maps/place/PKV+Renewable+Pvt+Ltd/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-solar-primary font-bold hover:gap-3 transition-all">
              View All Reviews on Google <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Testimonial 1 */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col">
            <div className="flex gap-1 mb-5">
               {[1,2,3,4,5].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FBC92E] text-[#FBC92E]" />)}
            </div>
            <p className="text-gray-700 italic mb-8 leading-relaxed text-lg">
              "Professional team from Patna. They handled the entire DISCOM net-metering paperwork smoothly. Highly recommended!"
            </p>
            <div className="mt-auto flex items-center gap-4">
              <div className="w-12 h-12 bg-solar-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">R</div>
              <div>
                <h5 className="font-bold text-gray-900">Rahul Verma</h5>
                <p className="text-sm text-gray-500">Patna, Bihar</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col">
            <div className="flex gap-1 mb-5">
               {[1,2,3,4,5].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FBC92E] text-[#FBC92E]" />)}
            </div>
            <p className="text-gray-700 italic mb-8 leading-relaxed text-lg">
              "My PM Surya Ghar subsidy claim was effortless thanks to their Siwan branch. PKV Renewable is the best choice."
            </p>
            <div className="mt-auto flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">M</div>
              <div>
                <h5 className="font-bold text-gray-900">Manish Singh</h5>
                <p className="text-sm text-gray-500">Siwan, Bihar</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust & Service Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="bg-white border-[1.5px] border-gray-100/50 rounded-[2rem] p-6 sm:py-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.02)] mb-16"
        >
          <div className="flex items-center gap-4">
             <div className="p-4 bg-solar-primary/10 rounded-2xl text-solar-primary">
               <MapPin className="w-6 h-6" />
             </div>
             <div>
               <h4 className="font-bold text-gray-900 text-xl" style={{ fontFamily: 'Sora' }}>100% Local Support Across Bihar</h4>
               <p className="text-gray-500 mt-1.5 leading-relaxed text-sm lg:text-base">We don't outsource. Installed and serviced by our very own certified local teams.</p>
             </div>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
            {['Patna', 'Siwan', 'Gopalganj', 'Muzaffarpur', 'Chapra'].map((city) => (
              <span key={city} className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-xl text-sm font-semibold border border-transparent hover:border-gray-200 transition-colors">
                <span className="w-2 h-2 rounded-full bg-solar-primary"></span> {city}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Sticky Bottom Mobile CTA */}
      <div className="sticky bottom-4 z-40 mx-4 mt-8 lg:hidden">
        <a href="tel:+918149034478" className="w-full flex items-center justify-center gap-2 bg-solar-primary text-white p-4 rounded-2xl shadow-[0_15px_30px_rgba(58,144,109,0.3)] font-bold text-lg active:scale-95 transition-transform backdrop-blur-md bg-opacity-95 border border-white/10">
          <Phone className="w-5 h-5 animate-pulse" /> Call For Free Consultation
        </a>
      </div>
    </section>
  );
}
