import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/projects' },
    { 
      label: 'Resources', 
      dropdown: [
        { label: 'Solar Subsidy Guide', href: '/solar-subsidy' },
        { label: 'PM Surya Ghar Yojana', href: '/pm-surya-ghar-yojana' },
        { label: 'On-Grid Solar System', href: '/on-grid-solar-system' },
        { label: 'Solar Capacity Guide', href: '/solar-capacity-guide' },
        { label: 'Installation Process', href: '/installation-process' },
        { label: 'Solar Loan Guide', href: '/solar-loan' }
      ]
    },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only prevent default if it's an internal link
    if (href.startsWith('/') || href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      navigate(href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 xl:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0 flex items-center pr-2 transition-transform hover:scale-[1.02]"
          >
            <Link to="/">
              <img
                src="/pkvlogo.png"
                alt="PKV Renewable"
                fetchPriority="high"
                decoding="async"
                className="h-16 lg:h-16 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Menu Items - Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="relative group"
              >
                {item.dropdown ? (
                   <div className="py-2">
                     <button className="font-bold text-sm xl:text-base transition-all relative group-hover:text-solar-primary text-gray-700 flex items-center gap-1.5 focus:outline-none">
                       {item.label}
                       <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-solar-primary group-hover:w-full transition-all duration-300 rounded-full" />
                     </button>
                     <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                       <div className="p-2 space-y-1">
                         {item.dropdown.map((dropItem) => (
                           <a
                             key={dropItem.href}
                             href={dropItem.href}
                             onClick={(e) => handleNavClick(e, dropItem.href)}
                             className="block px-4 py-3 text-sm font-bold text-gray-700 hover:text-solar-primary hover:bg-green-50/50 rounded-xl transition-colors"
                           >
                             {dropItem.label}
                           </a>
                         ))}
                       </div>
                     </div>
                   </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href!)}
                    className="font-bold text-sm xl:text-base transition-all relative group text-gray-700 hover:text-solar-primary py-2 block"
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-solar-primary group-hover:w-full transition-all duration-300 rounded-full" />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA + Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden lg:flex items-center gap-3 xl:gap-5"
          >
            <a
              href="tel:+918149034478"
              className="flex items-center gap-2 transition-colors text-sm xl:text-base font-bold text-gray-900 hover:text-solar-primary"
            >
              <Phone className="w-4 h-4 xl:w-5 xl:h-5" />
              <span>+91 81490 34478</span>
            </a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, '/#contact')}
                className="block px-5 py-2.5 xl:px-6 xl:py-3 bg-solar-primary text-white font-bold rounded-2xl shadow-md text-sm xl:text-base transition-all hover:bg-[#2b7255]"
              >
                Get Free Consultation
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl backdrop-blur-sm transition-colors text-gray-900 bg-gray-100 hover:bg-gray-200"
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
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div className="space-y-1">
                        <div className="px-4 py-3.5 text-gray-900 font-bold text-base flex items-center justify-between" style={{ fontFamily: 'Sora' }}>
                          {item.label}
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="pl-6 pr-2 pb-2 space-y-1 border-l-2 border-gray-100 ml-6">
                          {item.dropdown.map((dropItem) => (
                            <a
                              key={dropItem.href}
                              href={dropItem.href}
                              onClick={(e) => handleNavClick(e, dropItem.href)}
                              className="block px-4 py-3 text-gray-600 hover:text-solar-primary hover:bg-gray-50 rounded-2xl transition-all font-bold text-sm"
                            >
                              {dropItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href!)}
                        className="block px-4 py-3.5 text-gray-700 hover:text-solar-primary hover:bg-gray-50 rounded-2xl transition-all font-bold text-base"
                        style={{ fontFamily: 'Sora' }}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
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
                    onClick={(e) => handleNavClick(e, '/#contact')}
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
