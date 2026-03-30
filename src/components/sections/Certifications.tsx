import { motion } from 'framer-motion'
import { Award, ExternalLink, Cloud, Server, Brain, GitBranch, Code, Calendar } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { certifications } from '@/data/certifications'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const iconMap: Record<string, React.ElementType> = {
  Cloud, Server, Brain, GitBranch, Code, Award,
}

export function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent" />
        <div className="absolute -right-20 top-1/2 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute -left-20 bottom-1/4 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certifications"
          title="Validated expertise &"
          titleHighlight="continuous learning"
          description="Industry certifications that validate my cloud architecture, AI, and DevOps expertise from Microsoft and Amazon."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] ?? Award

            return (
              <motion.a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group relative rounded-2xl overflow-hidden border border-dark-700/40 bg-dark-800/50 hover:border-dark-600/60 transition-all duration-300 block"
                whileHover={{
                  y: -6,
                  boxShadow: `0 25px 50px -10px rgba(0,0,0,0.4)`,
                }}
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${cert.gradient}`} />

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-5"
                    style={{ background: `linear-gradient(135deg, ${cert.color}20, transparent)` }}
                  />
                </div>

                <div className="p-5 relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: cert.color }} />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${cert.badgeColor}`}
                      >
                        {cert.category.toUpperCase()}
                      </span>
                      <ExternalLink className="w-4 h-4 text-dark-600 group-hover:text-dark-400 transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-brand-200 transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold" style={{ color: cert.color }}>
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-dark-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="mt-4 pt-3 border-t border-dark-700/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-dark-500">Credential ID</span>
                      <span className="text-xs font-mono text-dark-400 truncate max-w-[160px]">
                        {cert.credentialId}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Currently studying section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-brand-500/5 via-accent-violet/5 to-transparent border border-brand-500/15"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                Currently Pursuing
              </h4>
              <p className="text-dark-400 text-sm mt-1">
                AWS Certified Developer Associate (DVA-C02) — Expected Q2 2025
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-32 bg-dark-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-500 to-accent-violet rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '70%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <span className="text-sm font-semibold text-brand-400">70%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
