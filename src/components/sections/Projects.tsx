import { motion, AnimatePresence } from 'framer-motion'
import {
  Github, ExternalLink, BarChart3, GitBranch, ShoppingBag, Briefcase,
  ChevronRight, Star,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { projects } from '@/data/projects'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { setFilter } from '@/features/projects/projectsSlice'
import type { ProjectFilter } from '@/features/projects/projectsSlice'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import type { Project } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  BarChart3, GitBranch, ShoppingBag, Briefcase,
}

const filterOptions: { label: string; value: ProjectFilter }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Full Stack', value: 'fullstack' },
]

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon] ?? BarChart3

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative rounded-2xl overflow-hidden bg-dark-800/60 border border-dark-700/40 hover:border-dark-600/60 transition-all duration-300 flex flex-col"
      whileHover={{ y: -6, boxShadow: `0 30px 60px -10px rgba(0,0,0,0.5)` }}
    >
      {/* Project preview header */}
      <div className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Mock UI elements */}
        <div className="absolute inset-4 flex flex-col gap-3">
          {/* Mock header bar */}
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
              <div className="w-2 h-2 rounded-full bg-green-400/70" />
            </div>
            <div className="flex-1 bg-white/10 rounded h-2" />
          </div>
          {/* Mock content */}
          <div className="flex gap-3 flex-1">
            <div className="w-28 bg-black/20 rounded-lg flex flex-col gap-2 p-2">
              {[80, 60, 90, 45, 70].map((w, i) => (
                <div
                  key={i}
                  className="rounded-sm h-1.5 bg-white/25"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="bg-black/15 rounded-lg" />
              ))}
            </div>
          </div>
        </div>

        {/* Project icon overlay */}
        <div className="absolute bottom-4 right-4">
          <div className="w-12 h-12 rounded-xl bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              Featured
            </span>
          </div>
        )}

        {/* Year tag */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium">
            {project.year}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 p-5 flex-1">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors leading-tight mb-2">
            {project.title}
          </h3>
          <p className="text-dark-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Problem solved highlight */}
        <div className="px-3 py-2.5 rounded-xl bg-brand-500/5 border border-brand-500/15">
          <p className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-1">Impact</p>
          <p className="text-xs text-dark-300 leading-relaxed line-clamp-2">{project.problemSolved}</p>
        </div>

        {/* Key features */}
        <div>
          <p className="text-xs font-semibold text-dark-400 uppercase tracking-wide mb-2">
            Key Features
          </p>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs text-dark-400">
                <ChevronRight
                  className="w-3 h-3 text-brand-400 mt-0.5 flex-shrink-0"
                  style={{ color: project.accentColor }}
                />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="default" size="sm">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="default" size="sm">
              +{project.techStack.length - 5}
            </Badge>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mt-auto pt-2 border-t border-dark-700/50">
          <Button
            variant="ghost"
            size="sm"
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<Github className="w-4 h-4" />}
            className="flex-1 justify-center"
          >
            Code
          </Button>
          <Button
            variant="outline"
            size="sm"
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<ExternalLink className="w-4 h-4" />}
            className="flex-1 justify-center"
          >
            Demo
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const dispatch = useAppDispatch()
  const activeFilter = useAppSelector((s) => s.projects.activeFilter)

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent" />
        <div className="absolute -left-20 bottom-1/3 w-64 h-64 bg-accent-violet/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Side Projects"
          title="Personal"
          titleHighlight="hobby projects"
          description="Independent projects built to explore technologies and sharpen skills."
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
              These are personal / hobby projects and are <strong>not</strong> part of my
              professional work history.
            </span>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filterOptions.map((opt) => (
            <motion.button
              key={opt.value}
              variants={fadeInUp}
              onClick={() => dispatch(setFilter(opt.value))}
              className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === opt.value
                  ? 'text-white'
                  : 'text-dark-400 hover:text-dark-200 hover:bg-dark-800/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {activeFilter === opt.value && (
                <motion.span
                  layoutId="projects-filter"
                  className="absolute inset-0 bg-brand-500/15 rounded-xl border border-brand-500/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{opt.label}</span>
              {activeFilter === opt.value && (
                <span className="relative z-10 ml-2 text-xs text-brand-400">
                  {filteredProjects.length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-dark-500"
          >
            <p className="text-lg">No projects found for this filter.</p>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <GlassCard hover={false} className="inline-block">
            <div className="px-8 py-5 flex flex-col sm:flex-row items-center gap-4">
              <div className="text-left">
                <p className="text-white font-semibold">Want to see more?</p>
                <p className="text-dark-400 text-sm">
                  Check out my GitHub for open source contributions and side projects.
                </p>
              </div>
              <Button
                variant="outline"
                size="md"
                as="a"
                href="https://github.com/sowmya-bantupalli"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<Github className="w-4 h-4" />}
                className="flex-shrink-0"
              >
                View GitHub
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
