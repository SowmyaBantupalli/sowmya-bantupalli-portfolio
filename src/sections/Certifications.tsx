import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const certifications = [
  {
    title: 'Azure Developer Associate',
    issuer: 'Microsoft',
    date: '2023',
    code: 'AZ-204',
    color: 'from-blue-400 to-sky-500',
    bg: 'from-blue-500/10 to-sky-500/10',
    border: 'border-blue-500/30',
    icon: '☁️',
    description: 'Designing, building, testing, and maintaining cloud applications on Microsoft Azure.',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2022',
    code: 'CLF-C01',
    color: 'from-orange-400 to-amber-500',
    bg: 'from-orange-500/10 to-amber-500/10',
    border: 'border-orange-500/30',
    icon: '🟠',
    description: 'Foundational understanding of AWS cloud services, security, and global infrastructure.',
  },
  {
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: '2023',
    code: 'AI-900',
    color: 'from-purple-400 to-violet-500',
    bg: 'from-purple-500/10 to-violet-500/10',
    border: 'border-purple-500/30',
    icon: '🤖',
    description: 'Machine learning concepts, AI workloads, and Azure AI services capabilities.',
  },
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2022',
    code: 'AZ-900',
    color: 'from-cyan-400 to-teal-500',
    bg: 'from-cyan-500/10 to-teal-500/10',
    border: 'border-cyan-500/30',
    icon: '🔷',
    description: 'Core cloud concepts, Azure services, pricing, and support models.',
  },
  {
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: '2021',
    code: 'PSM I',
    color: 'from-emerald-400 to-green-500',
    bg: 'from-emerald-500/10 to-green-500/10',
    border: 'border-emerald-500/30',
    icon: '🏃',
    description: 'Agile principles, Scrum framework, and servant leadership for development teams.',
  },
];

const Certifications = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="certifications" ref={ref} className="py-24 bg-slate-50 dark:bg-slate-900/30" aria-label="Certifications section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Achievements</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mt-2 mb-4">
            Certifications
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Continuously investing in professional growth and staying ahead of the technology curve.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`bg-gradient-to-br ${cert.bg} border ${cert.border} rounded-2xl p-6 cursor-pointer transition-shadow hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{cert.icon}</div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                  {cert.code}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{cert.title}</h3>
              <p className={`text-sm font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-3`}>
                {cert.issuer}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                {cert.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Issued {cert.date}
                </span>
                <div className="flex items-center gap-1 text-sky-500 text-xs font-medium">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
