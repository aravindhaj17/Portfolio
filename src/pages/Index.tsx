
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = "Aravindh Jothimani | Portfolio";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
