import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function useCountUp(target: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

const stats = [
  { value: 650, suffix: '+ kW', label: 'Solar Built', desc: 'Across Bihar residential' },
  { value: 30, suffix: '+', label: 'Projects Done', desc: 'Homes & institutions' },
  { value: 100, suffix: '%', label: 'Satisfaction', desc: 'Zero complaints so far' },
  { value: 80, suffix: '%', label: 'Bill Savings', desc: 'Average cost reduction' },
];

function StatCard({ stat, i }: { stat: typeof stats[0], i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCountUp(stat.value, 1800, inView);

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.7 }}
      viewport={{ once: false, amount: 0.15 }}
      className="bg-white border border-gray-100 rounded-[2rem] p-8 text-center shadow-sm"
    >
      <div className="text-5xl font-bold mb-3 leading-none text-gray-900" style={{ fontFamily: 'Sora' }}>
        <span>{count}</span>
        <span className="text-solar-secondary text-3xl ml-1">{stat.suffix}</span>
      </div>
      <h3 className="text-gray-900 font-bold text-lg">{stat.label}</h3>
      <p className="text-gray-500 text-sm mt-2 font-light">{stat.desc}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} className="text-center mb-16">
          <span className="inline-block bg-solar-primary/5 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Track Record
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900" style={{ fontFamily: 'Sora' }}>
            Numbers That Define Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => <StatCard key={i} stat={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
