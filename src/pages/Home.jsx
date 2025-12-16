import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { TECH_STACK } from '../utils/constants';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Avatar */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white text-4xl font-bold">
            KT
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl font-bold mb-4 text-slate-900 dark:text-slate-50"
        >
          Kareem Tarek Anwer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-400 mb-6"
        >
          Junior Full-Stack Developer
        </motion.p>

        {/* Professional Headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
        >
          I build modern web applications with React and Django. Passionate about clean code, user experience, and solving real-world problems through technology.
        </motion.p>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_STACK.frontend.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {TECH_STACK.backend.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects <ArrowRight size={20} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4"
        >
          <motion.a
            href="https://github.com/KareemTarekAnwer"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/kareem-tarek-anwer99/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:kareemtarekanwer@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}