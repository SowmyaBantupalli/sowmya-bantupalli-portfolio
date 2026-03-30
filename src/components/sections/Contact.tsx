import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, BadgeCheck, Download, ExternalLink, Phone } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sowmya.bantupalli1@gmail.com',
    href: 'mailto:sowmya.bantupalli1@gmail.com',
    color: '#6366f1',
    external: false,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (647) 641-2301',
    href: 'tel:+16476412301',
    color: '#10b981',
    external: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sowmya-b-9a3a16240',
    href: 'https://www.linkedin.com/in/sowmya-b-9a3a16240',
    color: '#0a66c2',
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/SowmyaBantupalli',
    href: 'https://github.com/SowmyaBantupalli',
    color: '#e2e8f0',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mississauga, ON · Canada',
    href: undefined,
    color: '#f59e0b',
    external: false,
  },
  {
    icon: BadgeCheck,
    label: 'Work Authorization',
    value: 'Permanent Resident of Canada',
    href: undefined,
    color: '#10b981',
    external: false,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's build something"
          titleHighlight="great together"
          description="Open to senior frontend engineering roles in Canada. Reach out via any channel below — I typically respond within 24 hours."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-6"
        >
          {/* Profile + intro card */}
          <motion.div variants={fadeInUp}>
            <GlassCard hover={false} className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl ring-2 ring-brand-500/40 ring-offset-2 ring-offset-dark-800 overflow-hidden shadow-glow">
                    <img
                      src="/profile.jpg"
                      alt="Sowmya Bantupalli"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const t = e.currentTarget
                        t.style.display = 'none'
                        const parent = t.parentElement
                        if (parent) {
                          parent.innerHTML =
                            '<div style="width:100%;height:100%;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;color:white;font-size:1.75rem;font-weight:900">SB</div>'
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Name + title + availability */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white">Sowmya Bantupalli</h3>
                  <p className="text-brand-400 font-semibold mt-0.5">Senior Frontend Engineer</p>
                  <p className="text-dark-400 text-sm mt-1">
                    LGS (An IBM Company) · 8+ Years Experience
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                    <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Open to Opportunities
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      No Sponsorship Required
                    </span>
                  </div>
                </div>

                {/* Resume download */}
                <div className="flex-shrink-0">
                  <Button
                    variant="primary"
                    size="md"
                    as="a"
                    href="/Sowmya_Bantupalli_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<Download className="w-4 h-4" />}
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact links grid */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {contactLinks.map((item) => {
              const Icon = item.icon
              const inner = (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-dark-800/60 border border-dark-700/40 hover:border-dark-600/60 transition-all duration-200 h-full group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-dark-500 uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-dark-200 truncate group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>
                  {item.external && (
                    <ExternalLink className="w-3.5 h-3.5 text-dark-600 group-hover:text-dark-400 transition-colors flex-shrink-0" />
                  )}
                </div>
              )

              return (
                <motion.div key={item.label} variants={fadeInUp}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="block h-full"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp}>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-500/10 via-accent-violet/5 to-transparent border border-brand-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-white font-semibold">
                  Looking for a Senior Frontend Engineer?
                </p>
                <p className="text-dark-400 text-sm mt-0.5">
                  React · Angular · TypeScript · NgRx · Azure DevOps — available in Canada, no sponsorship needed.
                </p>
              </div>
              <Button
                variant="outline"
                size="md"
                as="a"
                href="mailto:sowmya.bantupalli1@gmail.com"
                leftIcon={<Mail className="w-4 h-4" />}
                className="flex-shrink-0"
              >
                Send Email
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
