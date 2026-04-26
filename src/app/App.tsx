import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { KeyHighlights } from './components/KeyHighlights';
import { Education } from './components/Education';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  useEffect(() => {
    document.body.style.fontFamily = 'Poppins, sans-serif';
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <KeyHighlights />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
