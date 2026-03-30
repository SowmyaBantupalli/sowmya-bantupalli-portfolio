import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, ExternalLink, ChevronDown, CheckCircle2, Briefcase } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { experiences } from '@/data/experience'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function Experience() {
  const [expandedId, setExpandedId] = useState<string>(experiences[0].id)

  return (
    <section id="experience" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent" />
        <div className="absolute right-0 top-1/4 w-80 h-80 bg-accent-violet/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Work Experience"
          title="8+ Years of"
          titleHighlight="Building at Scale"
          description="From junior developer to senior architect — a career built on delivering impact at world-class organizations."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  className={`relative lg:w-[calc(50%-2rem)] ${
                    isLeft ? 'lg:mr-auto' : 'lg:ml-auto'
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`hidden lg:flex absolute top-6 ${
                      isLeft ? '-right-10' : '-left-10'
                    } w-5 h-5 rounded-full border-2 border-brand-500 bg-dark-900 z-10 items-center justify-center`}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-brand-400"
                      animate={isExpanded ? { scale: [1, 1.4, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    className="rounded-2xl border overflow-hidden cursor-pointer"
                    style={{
                      borderColor: isExpanded ? `${getGradientColor(exp.gradient)}40` : 'rgba(51,65,85,0.5)',
                      backgroundColor: 'rgba(15,23,42,0.8)',
                    }}
                    whileHover={{
                      borderColor: `${getGradientColor(exp.gradient)}30`,
                    }}
                    onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                  >
                    {/* Card header - always visible */}
                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        {/* Company indicator */}
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center`}
                        >
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="text-lg font-bold text-white leading-tight">
                                {exp.role}
                              </h3>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-brand-400 font-semibold text-sm">
                                  {exp.company}
                                </span>
                                {exp.companyUrl && (
                                  <a
                                    href={exp.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-dark-500 hover:text-brand-400 transition-colors"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {exp.endDate === 'Present' && (
                                <Badge variant="success" size="sm" dot>
                                  Current
                                </Badge>
                              )}
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-4 h-4 text-dark-400" />
                              </motion.div>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 mt-2">
                            <span className="flex items-center gap-1.5 text-xs text-dark-400">
                              <Calendar className="w-3.5 h-3.5" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-dark-400">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>

                          <p className="text-dark-400 text-sm leading-relaxed mt-2.5 line-clamp-2">
                            {exp.summary}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-0 border-t border-dark-700/40 mt-0">
                            <div className="pt-4 space-y-4">
                              {/* Achievements */}
                              <div>
                                <h4 className="text-xs font-bold text-dark-300 uppercase tracking-wider mb-3">
                                  Key Achievements
                                </h4>
                                <ul className="space-y-2">
                                  {exp.achievements.map((achievement) => (
                                    <li
                                      key={achievement}
                                      className="flex items-start gap-2.5 text-sm text-dark-300 leading-relaxed"
                                    >
                                      <CheckCircle2
                                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                                        style={{ color: getGradientColor(exp.gradient) }}
                                      />
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Tech stack */}
                              <div>
                                <h4 className="text-xs font-bold text-dark-300 uppercase tracking-wider mb-2">
                                  Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                  {exp.techStack.map((tech) => (
                                    <Badge key={tech} variant="default" size="sm">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function getGradientColor(gradient: string): string {
  const colorMap: Record<string, string> = {
    'from-blue-500 to-indigo-600': '#6366f1',
    'from-violet-500 to-purple-600': '#8b5cf6',
    'from-emerald-500 to-teal-600': '#10b981',
    'from-amber-500 to-orange-600': '#f59e0b',
  }
  return colorMap[gradient] ?? '#6366f1'
}
