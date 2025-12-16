import { motion } from 'framer-motion';
import Badge from '../components/Badge';

export default function About() {
  const skills = {
    'Frontend': ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
    'Backend': ['Django', 'Django REST Framework', 'Python', 'Flask'],
    'Database': ['PostgreSQL', 'MySQL', 'MongoDB'],
    'DevOps': ['Docker', 'Nginx', 'Git', 'Linux'],
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-50">About Me</h2>

          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
            <p>
              I'm a Junior Full-Stack Developer with a passion for building clean, efficient, and user-friendly web applications. My journey in tech started with a curiosity about how things work, which evolved into a commitment to continuous learning and improvement.
            </p>

            <p>
              I specialize in building full-stack applications using React for the frontend and Django for the backend. I'm experienced with REST APIs, authentication systems, database design, and deployment. I believe in writing clean, maintainable code and following best practices in every project I work on.
            </p>

            <p>
              Beyond coding, I'm deeply interested in DevOps practices, performance optimization, and creating seamless user experiences. I'm always eager to learn new technologies and tackle challenging problems that push me to grow as a developer.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-50">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h4 className="font-semibold text-lg mb-3 text-slate-900 dark:text-slate-50">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}