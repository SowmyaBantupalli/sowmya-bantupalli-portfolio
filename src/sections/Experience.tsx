import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Enterprise Corp',
    period: '2021 – Present',
    location: 'Remote / USA',
    color: 'from-sky-400 to-blue-500',
    dot: 'bg-sky-500',
    achievements: [
      'Led frontend architecture for a multi-tenant analytics platform serving 50,000+ daily users',
      'Reduced bundle size by 45% through code splitting, lazy loading, and tree-shaking optimization',
      'Implemented design system with 100+ reusable React components, adopted by 4 product teams',
      'Mentored a team of 5 junior/mid developers, conducting code reviews and architecture sessions',
      'Established CI/CD pipelines with Azure DevOps, reducing deployment time from 2 hours to 15 minutes',
    ],
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Azure DevOps', 'Docker', 'Grafana'],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Digital Solutions Ltd',
    period: '2019 – 2021',
    location: 'Hybrid / Dallas, TX',
    color: 'from-purple-400 to-violet-500',
    dot: 'bg-purple-500',
    achievements: [
      'Built and maintained enterprise e-commerce platform generating $50M+ annual revenue',
      'Migrated legacy AngularJS app to Angular 11+ with zero downtime using incremental migration strategy',
      'Implemented NgRx state management, eliminating 90% of data inconsistency bugs',
      'Optimized Core Web Vitals scores to all green, improving SEO ranking by 30%',
      'Built reusable component library published to internal npm registry',
    ],
    tech: ['Angular', 'NgRx', 'TypeScript', 'RxJS', 'AWS', 'Jest'],
  },
  {
    role: 'Frontend Developer',
    company: 'Innovation Labs Inc',
    period: '2017 – 2019',
    location: 'On-site / Austin, TX',
    color: 'from-emerald-400 to-teal-500',
    dot: 'bg-emerald-500',
    achievements: [
      'Developed responsive web applications for healthcare clients using React and Redux',
      'Integrated RESTful APIs and GraphQL endpoints across multiple microservices',
      'Achieved 95%+ test coverage on critical user flows using Jest and React Testing Library',
      'Participated in agile ceremonies, sprint planning, and cross-functional design reviews',
    ],
    tech: ['React', 'Redux', 'JavaScript', 'GraphQL', 'CSS3', 'Webpack'],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'WebCraft Agency',
    period: '2016 – 2017',
    location: 'On-site / Austin, TX',
    color: 'from-orange-400 to-amber-500',
    dot: 'bg-orange-500',
    achievements: [
      'Built pixel-perfect UI from Figma/Sketch designs for 20+ client projects',
      'Developed reusable jQuery and vanilla JS components, later migrated to React',
      'Optimized web performance, achieving sub-2-second load times across all projects',
    ],
    tech: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'React', 'Bootstrap'],
  },
];

const Experience = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="experience" ref={ref} className="py-24 bg-white dark:bg-slate-950" aria-label="Experience section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Career</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mt-2 mb-4">
            Experience Timeline
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            8+ years of building impactful products across multiple industries and teams.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-purple-400 to-orange-400 hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 w-5 h-5 rounded-full ${exp.dot} border-4 border-white dark:border-slate-950 shadow-lg hidden md:block`}
                  style={{ left: '26px' }}
                  aria-hidden="true"
                />

                <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                      <p className={`font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </span>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <svg className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
