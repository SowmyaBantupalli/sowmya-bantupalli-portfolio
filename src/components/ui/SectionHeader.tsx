import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleHighlight?: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`flex flex-col gap-4 mb-16 ${alignClass}`}
    >
      {eyebrow && (
        <motion.div variants={fadeInUp}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2
        variants={fadeInUp}
        className="text-4xl md:text-5xl font-bold text-white dark:text-white leading-tight"
      >
        {title}{' '}
        {titleHighlight && (
          <span className="bg-gradient-to-r from-brand-400 to-accent-violet bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        )}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className={`text-dark-300 text-lg leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
