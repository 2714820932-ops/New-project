import { useAnimations } from './hooks/useAnimations';
import GradualBlur from './components/GradualBlur';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { lazy, Suspense } from 'react';
const Balatro = lazy(() => import('./components/Balatro'));
const SplashCursor = lazy(() => import('./components/SplashCursor'));
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  useAnimations();
  return (
    <>
      <Suspense fallback={null}><SplashCursor /></Suspense>
      <Navbar />
      <Hero />
      <div className="balatro-section-wrapper">
        <Suspense fallback={null}><Balatro
          isRotate
          mouseInteraction={true}
          pixelFilter={500}
          color1="#0a1628"
          color2="#001a2e"
          color3="#080808"
          contrast={2.5}
          lighting={0.3}
          spinAmount={0.35}
          spinSpeed={5.0}
        /></Suspense>
        <div className="balatro-content">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
