import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#whyus' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Solar Subsidy', href: '/solar-subsidy' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0 flex items-center pr-6 mr-2 transition-transform hover:scale-[1.02]"
          >
            <img 
              src="/pkvlogo.png" 
              alt="PKV Renewable" 
              className="h-16 md:h-20 w-auto object-contain scale-[1.3] md:scale-[1.8] origin-left" 
            />
          </motion.a>

          {/* Menu Items - Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="font-medium text-sm transition-all relative group text-gray-600 hover:text-solar-primary"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-solar-primary group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA + Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden md:flex items-center gap-4"
          >
            <a
              href="tel:+918149034478"
              className="flex items-center gap-2 transition-colors text-sm font-bold text-gray-900 hover:text-solar-primary"
            >
              <Phone className="w-4 h-4" />
              <span>+91 81490 34478</span>
            </a>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-solar-primary text-white font-bold rounded-2xl shadow-md text-sm transition-all hover:bg-[#2b7255]"
            >
              Get Free Consultation
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl backdrop-blur-sm transition-colors text-gray-900 bg-gray-100 hover:bg-gray-200"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/98 backdrop-blur-2xl border-t border-gray-100 rounded-b-3xl overflow-hidden shadow-xl"
            >
              <div className="px-5 py-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3.5 text-gray-700 hover:text-solar-primary hover:bg-gray-50 rounded-2xl transition-all font-bold text-base"
                    style={{ fontFamily: 'Sora' }}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-5 mt-2 border-t border-gray-100">
                  <a
                    href="tel:+918149034478"
                    className="flex items-center justify-center gap-2 w-full py-4 text-solar-primary font-bold bg-solar-primary/5 rounded-2xl mb-3"
                  >
                    <Phone className="w-5 h-5" /> +91 81490 34478
                  </a>
                  <a
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full py-4 bg-solar-primary text-white font-bold rounded-2xl shadow-md"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
