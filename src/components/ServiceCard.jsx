import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function ServiceCard({ service }) {
  const IconComponent = Icons[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-12 h-12 bg-blue-50 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-4 border border-blue-100 dark:border-blue-800/50"
      >
        <IconComponent className="text-blue-600 dark:text-blue-400" size={24} />
      </motion.div>
      <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-50">{service.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
    </motion.div>
  );
}