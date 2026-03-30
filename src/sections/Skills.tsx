import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    icon: '⚛️',
    color: 'from-sky-400 to-blue-500',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Angular', level: 93 },
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5 / CSS3', level: 96 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'State Management',
    icon: '🗄️',
    color: 'from-purple-400 to-violet-500',
    skills: [
      { name: 'Redux Toolkit', level: 91 },
      { name: 'NgRx', level: 88 },
      { name: 'React Query', level: 85 },
      { name: 'Zustand', level: 82 },
      { name: 'RxJS', level: 87 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-emerald-400 to-teal-500',
    skills: [
      { name: 'Azure DevOps', level: 88 },
      { name: 'Docker', level: 82 },
      { name: 'Git / GitHub', level: 94 },
      { name: 'Grafana', level: 78 },
      { name: 'Jest / Testing Library', level: 85 },
    ],
  },
  {
    category: 'Cloud & Backend',
    icon: '☁️',
    color: 'from-orange-400 to-amber-500',
    skills: [
      { name: 'Azure', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 78 },
    ],
  },
];

interface SkillBarProps {
  name: string;
  level: number;
  isInView: boolean;
  delay: number;
  color: string;
}

const SkillBar = ({ name, level, isInView, delay, color }: SkillBarProps) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
      <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{level}%</span>
    </div>
    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : {}}
        transition={{ duration: 1, delay, ease: 'easeOut' }}
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
      />
    </div>
  </div>
);

const Skills = () => {
  const { ref, isInView } = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayed = activeCategory
    ? skillCategories.filter(c => c.category === activeCategory)
    : skillCategories;

  return (
    <section id="skills" ref={ref} className="py-24 bg-white dark:bg-slate-950" aria-label="Skills section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Technical Skills</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mt-2 mb-4">
            My Expertise
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A broad and deep skill set across the full frontend ecosystem and beyond.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              !activeCategory
                ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white shadow-lg'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All
          </motion.button>
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.category === activeCategory ? null : cat.category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat.category
                  ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.icon} {cat.category}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayed.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${cat.color}`}>
                  <span className="text-xl">{cat.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{cat.category}</h3>
              </div>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  isInView={isInView}
                  delay={0.2 + i * 0.1 + catIdx * 0.05}
                  color={cat.color}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
