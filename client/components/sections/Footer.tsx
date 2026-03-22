import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F2E2A] text-[#E6F4EF] pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Back to Top Button Float */}
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          className="absolute right-0 -top-28 hidden sm:flex bg-[#FBC92E] text-gray-900 p-4 rounded-full shadow-[0_10px_20px_rgba(251,201,46,0.3)] hover:bg-[#ffda5c] transition-colors z-10 border-4 border-white"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Company Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} className="lg:col-span-4 space-y-7">
            <div className="inline-flex bg-white px-6 py-4 rounded-2xl shadow-xl">
              <img 
                src="/pkvlogo.png" 
                alt="PKV Renewable" 
                className="h-10 md:h-12 w-auto object-contain scale-110 origin-left" 
              />
            </div>
            <p className="text-[#E6F4EF]/80 text-sm md:text-base leading-relaxed pr-4">
              Premium Solar EPC company in Bihar. Delivering subsidized rooftop solar installations with end-to-end engineering, procurement, and construction support.
            </p>
            
            <div className="space-y-3 pt-2">
              {[
                'MNRE Approved EPC',
                '5+ Years Experience',
                '100+ Successful Installations',
              ].map(badge => (
                <div key={badge} className="flex items-center gap-3 text-sm font-bold text-[#E6F4EF] tracking-wide">
                  <CheckCircle2 className="w-5 h-5 text-[#FBC92E]" />
                  {badge}
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              {['FB', 'IG', 'YT', 'WA'].map(s => (
                <motion.a key={s} href="#" whileHover={{ scale: 1.15, y: -2 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E6F4EF] text-sm font-bold hover:bg-[#68B953] hover:border-[#68B953] hover:text-white transition-all shadow-sm">
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: false, amount: 0.15 }} className="lg:col-span-2 lg:pl-4">
            <h4 className="text-white font-black mb-6 text-base tracking-widest">QUICK LINKS</h4>
            <ul className="space-y-4">
              {[
                { l: 'Home', h: '#home' },
                { l: 'About Us', h: '#about' },
                { l: 'Why Choose Us', h: '#about' },
                { l: 'Our Portfolio', h: '#projects' },
                { l: 'Solar Calculator', h: '#calculator' },
                { l: 'Contact Support', h: '#contact' },
              ].map(({ l, h }) => (
                <li key={l}>
                  <a href={h} className="text-[#E6F4EF]/80 hover:text-[#68B953] transition-colors text-[15px] flex items-center gap-2 group font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#68B953] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: false, amount: 0.15 }} className="lg:col-span-3">
            <h4 className="text-white font-black mb-6 text-base tracking-widest">SOLAR SERVICES</h4>
            <ul className="space-y-4">
              {[
                'Residential Rooftop Solar', 
                'Commercial Solar Systems', 
                'Industrial Solar Solutions', 
                'End-to-End EPC', 
                'PM Surya Ghar Subsidy', 
                'Net Metering Processing'
              ].map(s => (
                <li key={s}>
                  <a href="#services" className="text-[#E6F4EF]/80 hover:text-[#68B953] transition-colors text-[15px] flex items-center gap-2 group font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#68B953] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: false, amount: 0.15 }} className="lg:col-span-3 flex flex-col">
            <h4 className="text-white font-black mb-6 text-base tracking-widest">GET IN TOUCH</h4>
            
            <ul className="space-y-5 mb-8 flex-1">
              <li>
                <a href="tel:+918149034478" className="flex items-start gap-4 text-[#E6F4EF]/90 hover:text-white transition-colors group">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#68B953]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#FBC92E]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[11px] text-[#E6F4EF]/60 uppercase font-bold tracking-wider mb-1">Call For Inquiry</p>
                    <span className="text-[15px] font-bold">+91 81490 34478</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:pkvrenewable@gmail.com" className="flex items-start gap-4 text-[#E6F4EF]/90 hover:text-white transition-colors group">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#68B953]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#FBC92E]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[11px] text-[#E6F4EF]/60 uppercase font-bold tracking-wider mb-1">Email Support</p>
                    <span className="text-[15px] font-bold">pkvrenewable@gmail.com</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4 text-[#E6F4EF]/90">
                <div className="p-3 bg-white/5 rounded-xl">
                  <MapPin className="w-5 h-5 text-[#FBC92E]" />
                </div>
                <div className="text-[15px] font-semibold pt-1">
                  <p>Patna Office — Bihar</p>
                  <p className="text-[#E6F4EF]/60 mt-1">Siwan Office — Bihar</p>
                </div>
              </li>
            </ul>

            {/* Prominent CTA */}
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-max lg:w-full text-center px-7 py-4 bg-[#FBC92E] text-gray-900 font-black rounded-2xl shadow-[0_10px_20px_rgba(251,201,46,0.2)] hover:bg-[#ffda5c] hover:shadow-[0_15px_30px_rgba(251,201,46,0.3)] transition-all text-sm uppercase tracking-wider border-2 border-transparent hover:border-white/20"
            >
              Get Free Solar Consultation
            </motion.a>

          </motion.div>
        </div>

        {/* Subtle divider & Copyright */}
        <div className="border-t border-white/10 pt-8 mt-2 flex flex-col md:flex-row items-center justify-between gap-6 text-[#E6F4EF]/60 text-sm font-semibold">
          <p className="text-center md:text-left">© {year} PKV Renewable Pvt Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <a href="#" className="hover:text-[#68B953] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#68B953] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#68B953] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
