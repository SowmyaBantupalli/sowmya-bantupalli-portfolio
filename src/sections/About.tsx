import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  isInView: boolean;
}

const Counter = ({ end, suffix = '', duration = 2000, isInView }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return <span>{count}{suffix}</span>;
};

const stats = [
  { value: 8, suffix: '+', label: 'Years Experience', icon: '🚀' },
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: '📦' },
  { value: 15, suffix: '+', label: 'Tech Stack', icon: '⚡' },
  { value: 5, suffix: '', label: 'Certifications', icon: '🏆' },
];

const highlights = [
  {
    icon: '⚛️',
    title: 'React & Angular Expert',
    desc: 'Deep expertise in both major frontend frameworks, building complex SPAs and enterprise apps.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    icon: '🔷',
    title: 'TypeScript Specialist',
    desc: 'Strict typing, generics, advanced patterns — writing maintainable, type-safe code at scale.',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: '☁️',
    title: 'Cloud Native',
    desc: 'Azure & AWS deployments, CI/CD pipelines, Docker containerization and DevOps practices.',
    color: 'from-purple-400 to-violet-500',
  },
  {
    icon: '📊',
    title: 'State Management',
    desc: 'Redux Toolkit, NgRx, Zustand — designing scalable state architectures for complex applications.',
    color: 'from-pink-400 to-rose-500',
  },
];

const About = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="about" ref={ref} className="py-24 bg-slate-50 dark:bg-slate-900/30" aria-label="About section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mt-2 mb-4">
            Crafting Digital Experiences
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Passionate about building beautiful, performant, and accessible web applications that solve real business problems.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">
                <Counter end={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Building the future of the web, one component at a time
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I&apos;m Sowmya Bantupalli, a Senior Frontend Developer with 8+ years of experience delivering 
                enterprise-grade web applications. I specialize in React and Angular ecosystems, with a 
                strong focus on TypeScript, performance optimization, and scalable architecture.
              </p>
              <p>
                Throughout my career, I&apos;ve worked on complex projects ranging from CI/CD monitoring dashboards 
                and analytics platforms to e-commerce frontends and case management systems. I thrive at the 
                intersection of design and engineering, creating experiences that are both beautiful and functional.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m staying current with the latest frontend trends, contributing to open 
                source, and exploring cloud-native solutions on Azure and AWS.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['React', 'Angular', 'TypeScript', 'Redux Toolkit', 'NgRx', 'Azure', 'AWS', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`inline-flex p-2 rounded-xl bg-gradient-to-r ${item.color} mb-3`}>
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
