import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-50 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.description}</p>

        {/* Problem & Solution */}
        <div className="mb-4 space-y-2 text-sm">
          <p><span className="font-semibold text-slate-700 dark:text-slate-300">Problem:</span> <span className="text-slate-600 dark:text-slate-400">{project.problem}</span></p>
          <p><span className="font-semibold text-slate-700 dark:text-slate-300">Solution:</span> <span className="text-slate-600 dark:text-slate-400">{project.solution}</span></p>
        </div>

        {/* Features */}
        <div className="mb-4">
          <p className="font-semibold text-sm mb-2 text-slate-700 dark:text-slate-300">Key Features:</p>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx}>• {feature}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.liveDemo && project.liveDemo !== '#' && (
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.liveDemo)}
            >
              <ExternalLink size={16} /> Live Demo
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            className={project.liveDemo && project.liveDemo !== '#' ? 'flex-1' : 'w-full'}
            onClick={() => window.open(project.github)}
          >
            <Github size={16} /> GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
}