import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918149034478?text=Hi%20PKV%20Renewable%2C%20I'm%20interested%20in%20solar%20installation.%20Please%20share%20details."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.15, boxShadow: '0 10px 40px rgba(37,211,102,0.5)' }}
      whileTap={{ scale: 0.93 }}
      className="fixed bottom-8 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-5 rounded-full shadow-2xl"
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <MessageCircle className="w-5 h-5" />
      </motion.div>
      <span className="text-sm">WhatsApp</span>
      {/* Pulsing ring */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-[#25D366]"
        animate={{ scale: [1, 1.4, 1.4], opacity: [0.7, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
}
