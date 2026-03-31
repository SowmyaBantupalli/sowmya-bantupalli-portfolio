import { Suspense, lazy } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useTheme } from '@/hooks/useTheme'
import { useActiveSection } from '@/hooks/useActiveSection'
import { Skeleton } from '@/components/ui/LoadingSkeleton'

// Code-split all sections with lazy loading
const Hero = lazy(() =>
  import('@/components/sections/Hero').then((m) => ({ default: m.Hero }))
)
const About = lazy(() =>
  import('@/components/sections/About').then((m) => ({ default: m.About }))
)
const Skills = lazy(() =>
  import('@/components/sections/Skills').then((m) => ({ default: m.Skills }))
)
const Projects = lazy(() =>
  import('@/components/sections/Projects').then((m) => ({ default: m.Projects }))
)
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((m) => ({ default: m.Experience }))
)
const Certifications = lazy(() =>
  import('@/components/sections/Certifications').then((m) => ({
    default: m.Certifications,
  }))
)
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact }))
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
})

function SectionLoader() {
  return (
    <div className="py-24 space-y-8 max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="h-8 w-32 rounded-full" />
        <Skeleton className="h-12 w-80" />
        <Skeleton className="h-5 w-96" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-64 rounded-2xl" />
        ))}
      </div>
    </div>
  )
}

function ThemeInitializer() {
  useTheme()
  return null
}

function ActiveSectionTracker() {
  useActiveSection()
  return null
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeInitializer />
      <ActiveSectionTracker />

      <div className="min-h-screen bg-slate-100 dark:bg-dark-950 transition-colors duration-300">
        <Navbar />

        <main id="main-content" role="main">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Suspense fallback={<SectionLoader />}>
                <Hero />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <About />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Skills />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Experience />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Certifications />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Projects />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Contact />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </QueryClientProvider>
  )
}
