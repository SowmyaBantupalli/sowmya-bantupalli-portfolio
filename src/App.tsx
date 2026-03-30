import { lazy, Suspense, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingSkeleton from './components/ui/LoadingSkeleton';

const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  const { isDark } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSkeleton />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
