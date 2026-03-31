import { motion } from 'framer-motion'
import { MapPin, Briefcase, Coffee, Zap } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations'

const highlights = [
  {
    icon: Zap,
    title: 'Performance-First Engineering',
    description: 'Obsessed with Core Web Vitals, bundle optimization, and delivering sub-second load times at scale.',
    color: '#f59e0b',
    gradient: 'from-amber-500/10 to-orange-500/5',
    border: 'border-amber-500/20',
  },
  {
    icon: Briefcase,
    title: 'Enterprise Architecture',
    description: 'Designed micro-frontend systems and design systems adopted by teams of 50+ engineers across global organizations.',
    color: '#6366f1',
    gradient: 'from-brand-500/10 to-violet-500/5',
    border: 'border-brand-500/20',
  },
  {
    icon: Coffee,
    title: 'Full-Stack Perspective',
    description: 'Deep frontend expertise paired with cloud (Azure/AWS) and DevOps knowledge for end-to-end ownership.',
    color: '#10b981',
    gradient: 'from-emerald-500/10 to-teal-500/5',
    border: 'border-emerald-500/20',
  },
]

const coreStack = [
  { name: 'React', color: '#61dafb', bg: 'rgba(97,218,251,0.1)' },
  { name: 'Angular', color: '#dd0031', bg: 'rgba(221,0,49,0.1)' },
  { name: 'TypeScript', color: '#3178c6', bg: 'rgba(49,120,198,0.1)' },
  { name: 'Redux', color: '#764abc', bg: 'rgba(118,74,188,0.1)' },
  { name: 'Azure', color: '#0078d4', bg: 'rgba(0,120,212,0.1)' },
  { name: 'AWS', color: '#ff9900', bg: 'rgba(255,153,0,0.1)' },
  { name: 'Docker', color: '#2496ed', bg: 'rgba(36,150,237,0.1)' },
  { name: 'GraphQL', color: '#e10098', bg: 'rgba(225,0,152,0.1)' },
  { name: 'Node.js', color: '#339933', bg: 'rgba(51,153,51,0.1)' },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-40 top-1/2 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute -right-40 top-1/4 w-80 h-80 bg-accent-violet/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="Turning complex problems into"
          titleHighlight="elegant solutions"
          description="I'm a passionate Senior Frontend Developer with 8+ years of experience building enterprise-grade applications that scale. I specialize in creating seamless user experiences backed by clean, maintainable architecture."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Profile content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            {/* Profile photo + name */}
            <motion.div variants={fadeInLeft} className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl ring-2 ring-brand-500/40 overflow-hidden flex-shrink-0 shadow-glow">
                <img
                  src="/profile.jpg"
                  alt="Sowmya Bantupalli"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const t = e.currentTarget
                    t.src = '/profile.svg'
                    t.onerror = () => {
                      t.style.display = 'none'
                      t.parentElement!.innerHTML =
                        '<div class="w-full h-full bg-gradient-to-br from-brand-500 to-accent-violet flex items-center justify-center text-white text-2xl font-black">SB</div>'
                    }
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sowmya Bantupalli</h3>
                <p className="text-brand-400 font-semibold text-sm">Senior Frontend Engineer</p>
                <p className="text-dark-400 text-sm">LGS (An IBM Company) · Mississauga, ON</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInLeft} className="space-y-4">
              <p className="text-dark-300 text-lg leading-relaxed">
                With over{' '}
                <span className="text-white font-semibold">8 years of frontend engineering</span>,
                I specialize in building scalable, high-performance web applications using{' '}
                <span className="text-brand-400 font-medium">React</span> and{' '}
                <span className="text-accent-violet font-medium">Angular</span> at{' '}
                <span className="text-white font-semibold">LGS (An IBM Company)</span>.
              </p>
              <p className="text-dark-300 leading-relaxed">
                Expert in architecting reusable UI component libraries, optimizing state management
                with <span className="text-brand-400 font-medium">NgRx</span> and{' '}
                <span className="text-accent-violet font-medium">Redux Toolkit</span>, and
                streamlining CI/CD pipelines via{' '}
                <span className="text-accent-cyan font-medium">Azure DevOps</span> and Argo CD.
              </p>
              <p className="text-dark-300 leading-relaxed">
                AWS and Azure certified professional focused on integrating RESTful services,
                improving application reliability through robust unit testing, and driving
                observability via Grafana and Dynatrace.
              </p>
            </motion.div>

            {/* Location & availability */}
            <motion.div variants={fadeInLeft} className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-800 border border-dark-700 text-sm text-dark-300">
                <MapPin className="w-4 h-4 text-brand-400" />
                Mississauga, ON · Canada
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Permanent Resident — Work Authorized
              </div>
            </motion.div>

            {/* Highlight cards */}
            <motion.div variants={staggerContainer} className="space-y-3 pt-2">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInLeft}
                  className={`flex gap-4 p-4 rounded-xl bg-gradient-to-r ${item.gradient} border ${item.border}`}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-0.5">{item.title}</h4>
                    <p className="text-sm text-dark-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Core Stack */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard className="p-6" hover={false}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Core Stack
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {coreStack.map(({ name, color, bg }) => (
                  <motion.div
                    key={name}
                    className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-dark-700/50 cursor-default"
                    style={{ backgroundColor: bg }}
                    whileHover={{ scale: 1.05, borderColor: `${color}50` }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-xs font-medium text-dark-300">{name}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
