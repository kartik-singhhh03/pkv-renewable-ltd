import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', service: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputCls = "w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-solar-primary focus:outline-none focus:ring-4 focus:ring-solar-primary/10 transition-all text-sm font-medium";

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFDFA]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} className="text-center mb-16">
          <span className="inline-block bg-solar-primary/5 text-solar-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight" style={{ fontFamily: 'Sora' }}>
            Request Your Free Quote
          </h2>
          <p className="text-gray-500 mt-4 text-lg font-light">Zero obligation. Fast response within 24 hours.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, title: 'Call Us', lines: ['+91 81490 34478', 'Mon–Sat, 9am–7pm'], href: 'tel:+918149034478', color: 'text-solar-primary' },
              { icon: Mail, title: 'Email Us', lines: ['pkvrenewable@gmail.com', 'Response within 24 hours'], href: 'mailto:pkvrenewable@gmail.com', color: 'text-blue-500' },
              { icon: MapPin, title: 'Patna Office', lines: ['Patna, Bihar', 'Serving all districts'], href: '#', color: 'text-solar-primary' },
              { icon: MapPin, title: 'Siwan Office', lines: ['Siwan, Bihar', 'West Bihar coverage'], href: '#', color: 'text-purple-500' },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.a key={i} href={c.href}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: false, amount: 0.15 }}
                  whileHover={{ x: 5, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}
                  className="flex items-center gap-5 bg-white border border-gray-100 rounded-[1.5rem] p-6 transition-all group block shadow-sm">
                  <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-100`}>
                    <Icon className={`w-5 h-5 ${c.color}`} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-base mb-1" style={{ fontFamily: 'Sora' }}>{c.title}</p>
                    {c.lines.map((l, j) => (
                      <p key={j} className="text-gray-500 text-sm font-light">{l}</p>
                    ))}
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}
            className="lg:col-span-3 bg-white border border-gray-100 rounded-[2.5rem] p-10 sm:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.04)]">

            {submitted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-24 h-24 rounded-full bg-solar-primary/10 flex items-center justify-center mb-6">
                  <span className="text-4xl text-solar-primary">✓</span>
                </div>
                <h3 className="text-gray-900 font-bold text-3xl mb-3" style={{ fontFamily: 'Sora' }}>Quote Requested!</h3>
                <p className="text-gray-500 text-lg font-light">Our team will call you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name *" className={inputCls} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                  <input type="tel" placeholder="Phone (+91) *" className={inputCls} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
                </div>
                <input type="email" placeholder="Email Address" className={inputCls} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                <select className={inputCls} value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                  <option value="">Select Service</option>
                  <option value="residential">Residential Solar (1–10 kW)</option>
                  <option value="commercial">Commercial Solar (10kW+)</option>
                  <option value="hybrid">Hybrid System</option>
                  <option value="epc">EPC Consultancy</option>
                </select>
                <textarea placeholder="Message (optional)" rows={4} className={inputCls + ' resize-none'} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />

                <motion.button type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-solar-primary text-white font-bold rounded-2xl flex items-center justify-center gap-2 text-base shadow-md transition-all pt-5 pb-5 mt-2">
                  <Send className="w-5 h-5" /> Get Free Quote Now
                </motion.button>
                <p className="text-gray-400 text-xs text-center font-medium mt-4">⚡ We respond within 24 hours • No spam ever</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
