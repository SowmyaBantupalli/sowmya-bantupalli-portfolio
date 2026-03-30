import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';

type TechFilter = 'All' | 'React' | 'Angular';

const projects = [
  {
    id: 1,
    title: 'Enterprise Analytics Dashboard',
    description: 'A Grafana-inspired analytics platform with real-time data visualization, custom chart components, and multi-tenant support. Built to handle millions of data points with smooth 60fps rendering.',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'D3.js', 'WebSockets', 'Azure'],
    category: 'React' as TechFilter,
    color: 'from-sky-400 to-blue-600',
    features: [
      'Real-time WebSocket data streaming',
      'Custom D3.js visualization components',
      'Role-based access control (RBAC)',
      'Multi-tenant architecture',
      'Export to PDF/CSV',
    ],
    problems: 'Replaced legacy Tableau dashboards, reducing load time by 70% and operational costs by 40%.',
    github: 'https://github.com/SowmyaBantupalli',
    live: '#',
    emoji: '📊',
    bgGradient: 'from-sky-500/10 to-blue-600/10',
  },
  {
    id: 2,
    title: 'CI/CD Monitoring Dashboard',
    description: 'End-to-end pipeline visibility tool integrating with Azure DevOps and GitHub Actions. Provides real-time build status, deployment health, and incident alerting.',
    tech: ['React', 'TypeScript', 'React Query', 'Framer Motion', 'Azure DevOps API'],
    category: 'React' as TechFilter,
    color: 'from-purple-400 to-violet-600',
    features: [
      'Live build and deployment status',
      'Incident alerting with Slack integration',
      'Historical trend analysis',
      'Custom notification rules',
      'Team performance metrics',
    ],
    problems: 'Unified 5 separate monitoring tools into one platform, reducing MTTR by 35%.',
    github: 'https://github.com/SowmyaBantupalli',
    live: '#',
    emoji: '🚀',
    bgGradient: 'from-purple-500/10 to-violet-600/10',
  },
  {
    id: 3,
    title: 'E-Commerce Frontend Platform',
    description: 'Modern e-commerce storefront with micro-frontend architecture, headless CMS integration, and server-side rendering for maximum performance and SEO.',
    tech: ['Angular', 'NgRx', 'TypeScript', 'RxJS', 'Tailwind', 'AWS'],
    category: 'Angular' as TechFilter,
    color: 'from-red-400 to-rose-600',
    features: [
      'Micro-frontend architecture',
      'Headless CMS (Contentful) integration',
      'Advanced product search & filtering',
      'Real-time inventory management',
      'A/B testing framework',
    ],
    problems: 'Increased conversion rate by 25% and improved Core Web Vitals scores to all green.',
    github: 'https://github.com/SowmyaBantupalli',
    live: '#',
    emoji: '🛍️',
    bgGradient: 'from-red-500/10 to-rose-600/10',
  },
  {
    id: 4,
    title: 'Case Management System',
    description: 'Enterprise legal case management platform with workflow automation, document management, and compliance tracking for a Fortune 500 financial services firm.',
    tech: ['Angular', 'NgRx', 'TypeScript', 'AG Grid', 'Azure', 'Docker'],
    category: 'Angular' as TechFilter,
    color: 'from-emerald-400 to-teal-600',
    features: [
      'Complex workflow automation engine',
      'Document versioning & management',
      'Regulatory compliance reporting',
      'Advanced AG Grid data tables',
      'Role-based document access',
    ],
    problems: 'Digitized a paper-based process, saving 200+ hours/week in manual work across 500+ users.',
    github: 'https://github.com/SowmyaBantupalli',
    live: '#',
    emoji: '⚖️',
    bgGradient: 'from-emerald-500/10 to-teal-600/10',
  },
];

const filters: TechFilter[] = ['All', 'React', 'Angular'];

const Projects = () => {
  const { ref, isInView } = useInView(0.1);
  const [activeFilter, setActiveFilter] = useState<TechFilter>('All');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="py-24 bg-slate-50 dark:bg-slate-900/30" aria-label="Projects section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Projects</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mt-2 mb-4">
            Featured Work
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Enterprise-grade projects that solve real business problems at scale.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-sky-500 hover:text-sky-500'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-br ${project.bgGradient} p-8 relative overflow-hidden`}>
                  <div className="text-6xl mb-4">{project.emoji}</div>
                  <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="p-6">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expand/Collapse */}
                  <button
                    onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                    className="text-sky-500 text-sm font-semibold flex items-center gap-1 hover:text-sky-400 transition-colors mb-4"
                  >
                    {expanded === project.id ? 'Show less' : 'Show details'}
                    <motion.svg
                      animate={{ rotate: expanded === project.id ? 180 : 0 }}
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {expanded === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mb-4">
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {project.features.map((f) => (
                              <li key={f} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800 mb-4">
                          <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">Impact</h4>
                          <p className="text-sm text-emerald-700 dark:text-emerald-300">{project.problems}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Links */}
                  <div className="flex gap-3 pt-2 border-t border-slate-100 dark:border-slate-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-1.5 text-sm font-medium text-sky-500 hover:text-sky-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
