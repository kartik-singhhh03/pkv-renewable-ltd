import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past Hero (e.g., 500px)
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[40] md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-100 p-3 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            <a
              href="https://wa.me/918149034478"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-bold rounded-[1rem] active:scale-95 transition-transform text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+918149034478"
              className="flex items-center justify-center gap-2 py-3 bg-solar-primary text-white font-bold rounded-[1rem] active:scale-95 transition-transform text-sm"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
