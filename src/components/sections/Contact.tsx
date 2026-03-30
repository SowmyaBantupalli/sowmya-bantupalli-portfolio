import { useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, MapPin, Clock } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { setContactFormStatus } from '@/features/ui/uiSlice'
import { fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sowmya.bantupalli@email.com',
    href: 'mailto:sowmya.bantupalli@email.com',
    color: '#6366f1',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sowmya-bantupalli',
    href: 'https://linkedin.com/in/sowmya-bantupalli',
    color: '#0a66c2',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/sowmya-bantupalli',
    href: 'https://github.com/sowmya-bantupalli',
    color: '#e2e8f0',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote (US / India)',
    href: undefined,
    color: '#10b981',
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Mon–Fri, 9am–6pm EST',
    href: undefined,
    color: '#f59e0b',
  },
]

function ContactForm() {
  const dispatch = useAppDispatch()
  const status = useAppSelector((s) => s.ui.contactFormStatus)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setContactFormStatus('loading'))

    // Simulate API call — in production connect to your backend/Formspree/EmailJS
    await new Promise((resolve) => setTimeout(resolve, 1800))

    // Simulate success
    dispatch(setContactFormStatus('success'))
    formRef.current?.reset()

    // Reset after 5 seconds
    setTimeout(() => dispatch(setContactFormStatus('idle')), 5000)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-dark-300">
            Full Name <span className="text-brand-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-dark-600 text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200 text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-dark-300">
            Email Address <span className="text-brand-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-dark-600 text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200 text-sm"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-dark-300">
          Subject <span className="text-brand-400">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Senior Frontend Developer Role at Acme Corp"
          className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-dark-600 text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200 text-sm"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-dark-300">
          Message <span className="text-brand-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, role, or opportunity..."
          className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-dark-600 text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200 text-sm resize-none"
        />
      </div>

      {/* Status messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
        >
          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <p className="text-sm text-emerald-300">
            Message sent successfully! I'll get back to you within 24 hours.
          </p>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20"
        >
          <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
          <p className="text-sm text-rose-300">
            Something went wrong. Please try emailing me directly.
          </p>
        </motion.div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={status === 'loading'}
        disabled={status === 'success'}
        rightIcon={<Send className="w-4 h-4" />}
        className="w-full"
      >
        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : "Send Message"}
      </Button>
    </form>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's build something"
          titleHighlight="great together"
          description="Have a challenging frontend problem, an exciting opportunity, or just want to connect? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={fadeInLeft}>
              <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-dark-400 leading-relaxed text-sm">
                I'm currently open to senior frontend engineering roles and consulting opportunities.
                Reach out via any channel — I typically respond within 24 hours.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-800/60 border border-dark-700/40 hover:border-dark-600/60 transition-all duration-200">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon className="w-4.5 h-4.5" style={{ color: item.color, width: '18px', height: '18px' }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-dark-500 uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-dark-200 truncate">{item.value}</p>
                    </div>
                  </div>
                )

                return (
                  <motion.div key={item.label} variants={fadeInLeft}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA callout */}
            <motion.div
              variants={fadeInLeft}
              className="p-5 rounded-2xl bg-gradient-to-br from-brand-500/10 via-accent-violet/5 to-transparent border border-brand-500/20"
            >
              <p className="text-white font-semibold mb-1">Open to remote opportunities</p>
              <p className="text-dark-400 text-sm leading-relaxed">
                Senior Frontend, React Lead, or Frontend Architect roles. Available for US time zones.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">
                  Actively interviewing
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-3"
          >
            <GlassCard hover={false} className="p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-dark-400 text-sm mt-1">
                  Fill out the form and I'll get back to you shortly.
                </p>
              </div>
              <ContactForm />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
