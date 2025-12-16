import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';
import * as Icons from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800/60 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50">Kareem Tarek</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Junior Full-Stack Developer crafting modern web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-50">Quick Links</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-50">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconComponent = Icons[link.icon];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-200/60 dark:border-slate-800/60 pt-8 text-center text-slate-600 dark:text-slate-400">
          <p>&copy; {currentYear} Kareem Tarek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}