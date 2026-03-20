import { motion } from 'framer-motion';
import { Sun, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800/60 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}>
            <div className="inline-flex bg-white px-5 py-3 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] mb-6">
              <img 
                src="/pkvlogo.png" 
                alt="PKV Renewable" 
                className="h-10 md:h-12 w-auto object-contain scale-110" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              MNRE Approved Solar EPC company in Bihar. Delivering premium rooftop solar installations with end-to-end support and PM Surya Ghar subsidy assistance.
            </p>
            <div className="flex gap-3">
              {['FB', 'IG', 'YT', 'WA'].map(s => (
                <motion.a key={s} href="#" whileHover={{ scale: 1.15, color: '#FBC92E' }}
                  className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 text-xs font-bold hover:border-solar-secondary/50 transition-all">
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: false, amount: 0.15 }}>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { l: 'Home', h: '#home' },
                { l: 'About Us', h: '#about' },
                { l: 'Services', h: '#services' },
                { l: 'Projects', h: '#projects' },
                { l: 'Calculator', h: '#calculator' },
                { l: 'Contact', h: '#contact' },
              ].map(({ l, h }) => (
                <li key={l}>
                  <a href={h} className="text-gray-400 hover:text-solar-secondary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-solar-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: false, amount: 0.15 }}>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {['Residential Solar', 'Commercial Solar', 'Hybrid Systems', 'Solar EPC', 'PM Surya Ghar', 'Net Metering'].map(s => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 hover:text-solar-secondary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-solar-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: false, amount: 0.15 }}>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+918149034478" className="flex items-start gap-3 text-gray-400 hover:text-solar-secondary transition-colors group">
                  <Phone className="w-4 h-4 text-solar-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+91 81490 34478</span>
                </a>
              </li>
              <li>
                <a href="mailto:pkvrenewable@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-solar-secondary transition-colors">
                  <Mail className="w-4 h-4 text-solar-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">pkvrenewable@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-solar-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Patna Office — Bihar</p>
                  <p className="text-gray-500 mt-1">Siwan Office — Bihar</p>
                </div>
              </li>
            </ul>

            {/* Keywords for SEO */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Solar Bihar', 'Rooftop Solar', 'PM Surya Ghar', 'EPC Bihar'].map(t => (
                <span key={t} className="text-xs bg-gray-800 border border-gray-700 text-gray-400 px-2 py-1 rounded-md">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© {year} PKV Renewable Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-solar-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-solar-secondary transition-colors">Terms</a>
            <a href="#" className="hover:text-solar-secondary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
