import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, Heart, ExternalLink } from 'lucide-react'
import { navItems } from '@/data/navigation'

const socialLinks = [
  { icon: Github, href: 'https://github.com/sowmya-bantupalli', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sowmya-bantupalli', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sowmya.bantupalli@email.com', label: 'Email' },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800/50">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-dark-800/50">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-violet flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Sowmya<span className="text-brand-400">.</span>
              </span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed max-w-xs">
              Senior Frontend Developer crafting high-performance React & Angular applications with
              pixel-perfect precision.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-700 hover:border-dark-600 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-dark-400 hover:text-brand-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-dark-600 group-hover:bg-brand-400 transition-colors" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:sowmya.bantupalli@email.com"
                className="flex items-center gap-2.5 text-sm text-dark-400 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-brand-400" />
                sowmya.bantupalli@email.com
              </a>
              <a
                href="https://linkedin.com/in/sowmya-bantupalli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-dark-400 hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-brand-400" />
                linkedin.com/in/sowmya-bantupalli
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              </a>
              <a
                href="https://github.com/sowmya-bantupalli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-dark-400 hover:text-white transition-colors group"
              >
                <Github className="w-4 h-4 text-brand-400" />
                github.com/sowmya-bantupalli
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm flex items-center gap-1.5">
            Built with{' '}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React, TypeScript &
            Framer Motion
          </p>
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Sowmya Bantupalli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
