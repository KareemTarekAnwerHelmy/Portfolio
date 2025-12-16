import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-50">Let's Work Together</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind? I'd love to hear about it and discuss how I can help.
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
}