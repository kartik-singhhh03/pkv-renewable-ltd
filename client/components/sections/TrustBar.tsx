import { motion } from 'framer-motion';
import { Zap, CheckCircle, Award, Users } from 'lucide-react';

const badges = [
  { icon: Award, text: 'MNRE Approved' },
  { icon: CheckCircle, text: 'DISCOM Certified' },
  { icon: Zap, text: '650+ kW Installed' },
  { icon: Users, text: '100% Satisfaction' },
  { icon: Award, text: 'PM Surya Ghar Partner' },
  { icon: CheckCircle, text: 'End-to-End EPC' },
  { icon: Zap, text: '30+ Projects Done' },
  { icon: Users, text: 'Serving All Bihar' },
];

export default function TrustBar() {
  const doubled = [...badges, ...badges];
  return (
    <section className="py-5 bg-white border-y border-gray-200 overflow-hidden">
      <div className="relative flex">
        <motion.div
          className="flex gap-0 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex items-center gap-3 px-8 py-3 flex-shrink-0 group">
                <Icon className="w-4 h-4 text-solar-secondary flex-shrink-0" />
                <span className="text-gray-700 font-semibold text-sm group-hover:text-solar-primary transition-colors">{b.text}</span>
                <span className="text-gray-300 mx-2 text-xs">◆</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
