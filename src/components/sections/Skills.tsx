import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Monitor, Database, Palette, TestTube, Cloud, Layers,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { skillCategories } from '@/data/skills'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useScrollInView } from '@/hooks/useScrollInView'
import type { SkillCategory } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  Monitor, Database, Palette, TestTube, Cloud, Layers,
}

interface SkillBarProps {
  name: string
  level: number
  color: string
  isVisible: boolean
  delay: number
}

function SkillBar({ name, level, color, isVisible, delay }: SkillBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-dark-200">{name}</span>
        <span className="text-xs font-semibold text-dark-400 tabular-nums">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

interface CategoryTabProps {
  category: SkillCategory
  isActive: boolean
  onClick: () => void
}

function CategoryTab({ category, isActive, onClick }: CategoryTabProps) {
  const Icon = iconMap[category.icon] ?? Monitor

  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        isActive
          ? 'text-white bg-dark-700 border border-dark-600'
          : 'text-dark-400 hover:text-dark-200 hover:bg-dark-800/50'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: isActive ? `${category.color}30` : 'transparent' }}
      >
        <Icon
          className="w-3.5 h-3.5"
          style={{ color: isActive ? category.color : 'currentColor' }}
        />
      </div>
      {category.title}
    </motion.button>
  )
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)
  const { ref, isInView } = useScrollInView<HTMLDivElement>({ threshold: 0.2 })

  const currentCategory = skillCategories.find((c) => c.id === activeCategory) ?? skillCategories[0]
  const Icon = iconMap[currentCategory.icon] ?? Monitor

  return (
    <section id="skills" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent" />
        <div className="absolute right-0 top-1/2 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Skills"
          title="8+ years of"
          titleHighlight="battle-tested expertise"
          description="From pixel-perfect UIs to distributed system architectures — I bring deep, practitioner-level knowledge across the entire modern web stack."
        />

        <div className="space-y-8">
          {/* Category tabs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {skillCategories.map((category) => (
              <motion.div key={category.id} variants={fadeInUp}>
                <CategoryTab
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              ref={ref}
            >
              <GlassCard hover={false} className="overflow-hidden">
                {/* Card header */}
                <div
                  className={`px-6 py-5 border-b border-dark-700/50 bg-gradient-to-r ${currentCategory.gradient}/10`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${currentCategory.color}20` }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: currentCategory.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{currentCategory.title}</h3>
                      <p className="text-sm text-dark-400">
                        {currentCategory.skills.length} technologies
                      </p>
                    </div>
                    <div className="ml-auto">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                        style={{
                          color: currentCategory.color,
                          borderColor: `${currentCategory.color}40`,
                          backgroundColor: `${currentCategory.color}10`,
                        }}
                      >
                        Expert Level
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills grid */}
                <div className="p-6">
                  <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                    {currentCategory.skills.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={currentCategory.color}
                        isVisible={isInView}
                        delay={i * 0.08}
                      />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* All skills overview cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4"
          >
            {skillCategories.map((category) => {
              const CatIcon = iconMap[category.icon] ?? Monitor
              return (
                <motion.button
                  key={category.id}
                  variants={fadeInUp}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 text-center ${
                    activeCategory === category.id
                      ? 'border-opacity-40 bg-dark-800'
                      : 'border-dark-700/40 bg-dark-800/30 hover:bg-dark-800/60 hover:border-dark-600'
                  }`}
                  style={
                    activeCategory === category.id
                      ? { borderColor: `${category.color}40` }
                      : undefined
                  }
                  whileHover={{ y: -3 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <CatIcon className="w-5 h-5" style={{ color: category.color }} />
                  </div>
                  <span className="text-xs font-medium text-dark-300 leading-tight">
                    {category.title}
                  </span>
                  <span
                    className="text-[10px] font-bold tabular-nums"
                    style={{ color: category.color }}
                  >
                    {category.skills.length} skills
                  </span>
                </motion.button>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
