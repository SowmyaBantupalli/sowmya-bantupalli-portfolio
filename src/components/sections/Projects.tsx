import { motion } from 'framer-motion'
import { Github, ExternalLink, Briefcase } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { projects } from '@/data/projects'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
}

export function Projects() {
  const project = projects[0]
  const Icon = iconMap[project.icon] ?? Briefcase

  return (
    <section id="projects" className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent" />
        <div className="absolute -left-20 bottom-1/3 w-64 h-64 bg-accent-violet/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Personal React Projects"
          title="Hands-on"
          titleHighlight="React project"
          description="A personal project built independently to practice and demonstrate React skills."
        />

        {/* Disclaimer */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 flex justify-center"
        >
          <div className="inline-flex items-start gap-2 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 text-sm max-w-xl text-center">
            <span className="mt-0.5 flex-shrink-0">ℹ</span>
            <span>
              This is a personal project built independently and is{' '}
              <strong>not</strong> part of my professional work history.
            </span>
          </div>
        </motion.div>

        {/* Single project card — centered, constrained width */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.article
            variants={fadeInUp}
            className="group w-full max-w-2xl rounded-2xl overflow-hidden bg-dark-800/60 border border-dark-700/40 hover:border-dark-600/60 transition-all duration-300 flex flex-col"
            whileHover={{ y: -6, boxShadow: '0 30px 60px -10px rgba(0,0,0,0.5)' }}
          >
            {/* Header banner */}
            <div
              className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}
            >
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Mock UI chrome */}
              <div className="absolute inset-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/70" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                    <div className="w-2 h-2 rounded-full bg-green-400/70" />
                  </div>
                  <div className="flex-1 bg-white/10 rounded h-2" />
                </div>
                <div className="flex gap-3 flex-1">
                  <div className="w-28 bg-black/20 rounded-lg flex flex-col gap-2 p-2">
                    {[80, 60, 90, 45, 70].map((w, i) => (
                      <div key={i} className="rounded-sm h-1.5 bg-white/25" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="bg-black/15 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 right-4">
                <div className="w-12 h-12 rounded-xl bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Year */}
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-4 p-6 flex-1">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Key features */}
              <div>
                <p className="text-xs font-semibold text-dark-400 uppercase tracking-wide mb-2">
                  Key Features
                </p>
                <ul className="space-y-1.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-dark-400">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="default" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-dark-700/50">
                <Button
                  variant="ghost"
                  size="md"
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<Github className="w-4 h-4" />}
                  className="flex-1 justify-center"
                >
                  View on GitHub
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<ExternalLink className="w-4 h-4" />}
                  className="flex-1 justify-center"
                >
                  Live Demo
                </Button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
