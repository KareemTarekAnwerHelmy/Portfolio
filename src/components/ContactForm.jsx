import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-50">Get In Touch</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100 dark:border-blue-800/50">
              <Mail className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-50">Email</p>
              <a href="mailto:kareemtarekanwer@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                kareemtarekanwer@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-50">Phone</p>
              <a href="tel:+971581778455" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                +971 581 778 455
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-50">Location</p>
              <p className="text-slate-600 dark:text-slate-400">Dubai, UAE</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-slate-400 dark:placeholder-slate-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-slate-400 dark:placeholder-slate-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500"
            placeholder="Your message..."
          />
        </div>

        <Button type="submit" variant="primary" size="md" className="w-full">
          {submitted ? 'Message Sent! ✓' : 'Send Message'}
        </Button>
      </motion.form>
    </div>
  );
}