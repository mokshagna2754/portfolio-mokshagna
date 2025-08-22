import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import UIUXSkills from '@/components/UIUXSkills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />  
      <Skills />
      <UIUXSkills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
