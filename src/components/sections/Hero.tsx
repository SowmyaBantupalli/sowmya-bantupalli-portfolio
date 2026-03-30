import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Particle canvas animation
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrameId: number
    const particles: Array<{
      x: number; y: number; vx: number; vy: number
      radius: number; opacity: number; color: string
    }> = []

    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#a5b4fc', '#818cf8']

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const init = () => {
      resize()
      particles.length = 0
      const count = Math.floor((canvas.width * canvas.height) / 12000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawConnections()
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
      })
      animFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()
    const resizeObserver = new ResizeObserver(init)
    resizeObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(animFrameId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/sowmya-bantupalli', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sowmya-bantupalli', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sowmya.bantupalli@email.com', label: 'Email' },
]

const techBadges = ['React 18', 'Angular 17', 'TypeScript', 'Azure', 'AWS', 'Redux Toolkit']

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-950"
      aria-label="Hero section"
    >
      {/* Particle background */}
      <ParticleCanvas />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Status badge */}
          <motion.div variants={fadeInUp}>
            <Badge variant="success" size="md" dot className="px-4 py-1.5 text-sm">
              Available for Senior Roles
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              <span className="block">Senior Frontend</span>
              <span className="block bg-gradient-to-r from-brand-400 via-accent-violet to-accent-cyan bg-clip-text text-transparent animate-gradient-x">
                Developer
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-dark-300 tracking-wide">
              Angular & React Expert · 8+ Years Experience
            </p>
          </motion.div>

          {/* Value proposition */}
          <motion.p
            variants={fadeInUp}
            className="text-dark-300 text-lg max-w-2xl leading-relaxed"
          >
            I architect and build{' '}
            <span className="text-white font-semibold">high-performance, scalable</span> web
            applications that serve millions of users. Specializing in{' '}
            <span className="text-brand-400 font-semibold">React</span> and{' '}
            <span className="text-accent-violet font-semibold">Angular</span> ecosystems with deep
            expertise in TypeScript, cloud infrastructure, and modern DevOps practices.
          </motion.p>

          {/* Tech stack badges */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-dark-800/80 border border-dark-700/60 text-dark-200 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: 'rgba(99,102,241,0.4)', color: '#fff' }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button
              variant="primary"
              size="xl"
              onClick={scrollToProjects}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="min-w-[180px]"
            >
              View Projects
            </Button>
            <Button
              variant="glass"
              size="xl"
              as="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<Download className="w-5 h-5" />}
              className="min-w-[180px]"
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl bg-dark-800/60 border border-dark-700/60 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-700 hover:border-brand-500/40 transition-all duration-200 backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
            <span className="text-dark-600 text-sm ml-2 hidden sm:block">
              Let's connect →
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-dark-500 hover:text-white transition-colors group"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
