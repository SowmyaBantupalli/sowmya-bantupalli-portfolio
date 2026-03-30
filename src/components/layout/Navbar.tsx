import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Code2 } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { toggleMobileMenu, closeMobileMenu } from '@/features/ui/uiSlice'
import { navItems } from '@/data/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()
  const mobileMenuOpen = useAppSelector((s) => s.ui.mobileMenuOpen)
  const activeSection = useAppSelector((s) => s.ui.activeSection)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    dispatch(closeMobileMenu())
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-dark-950/80 dark:bg-dark-950/90 backdrop-blur-xl border-b border-dark-800/50 shadow-lg'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-violet flex items-center justify-center shadow-glow">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white hidden sm:block">
              Sowmya<span className="text-brand-400">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                  )}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-dark-700/70 rounded-lg"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl text-dark-300 hover:text-white hover:bg-dark-800/50 transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* CTA */}
            <Button
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex"
              as="a"
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            >
              Hire Me
            </Button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => dispatch(toggleMobileMenu())}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 rounded-xl text-dark-300 hover:text-white hover:bg-dark-800/50 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => dispatch(closeMobileMenu())}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 bg-dark-900 border-l border-dark-700/50 flex flex-col"
            >
              <div className="h-16 flex items-center justify-between px-6 border-b border-dark-700/50">
                <span className="font-bold text-white">Menu</span>
                <button
                  onClick={() => dispatch(closeMobileMenu())}
                  className="p-2 rounded-lg hover:bg-dark-700 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-dark-300" />
                </button>
              </div>
              <ul className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                        activeSection === item.id
                          ? 'bg-brand-500/15 text-brand-300 border border-brand-500/20'
                          : 'text-dark-300 hover:text-white hover:bg-dark-800'
                      )}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="p-6 border-t border-dark-700/50">
                <Button variant="primary" size="md" className="w-full" onClick={() => handleNavClick('#contact')}>
                  Let's Talk
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
