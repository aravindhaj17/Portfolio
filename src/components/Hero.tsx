
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-24 bg-gradient-to-br from-vibrant-blue/10 to-vibrant-purple/10 dark:from-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-10 w-72 h-72 bg-vibrant-purple opacity-5 dark:opacity-10 rounded-full"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-vibrant-orange opacity-5 dark:opacity-10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fadeIn">
            <h2 className="text-lg md:text-xl font-semibold text-vibrant-blue mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 dark:text-white">Aravindh Jothimani</h1>
            <h3 className="text-xl md:text-2xl font-medium text-vibrant-purple mb-6">
              Data Analyst
            </h3>
            <div className="flex flex-col gap-3 mb-6">
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-2 text-vibrant-orange" />
                Erode, Tamil Nadu 638459
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-vibrant-orange" />
                <a href="mailto:aravindhaj2005@gmail.com" className="hover:text-vibrant-blue transition-colors">
                  aravindhaj2005@gmail.com
                </a>
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="mr-2">📱</span>
                9865185910
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-vibrant-blue hover:bg-vibrant-blue/90">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <Button variant="outline" className="border-vibrant-purple text-vibrant-purple hover:bg-vibrant-purple/10 dark:border-vibrant-purple/70 dark:text-vibrant-purple/90">
                Contact Me
              </Button>
            </div>
            
            <div className="flex mt-8 gap-4">
              <a href="https://www.linkedin.com/in/aravindh2005/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-vibrant-blue transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/aravindhaj17" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-vibrant-orange transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-vibrant-blue/90 to-vibrant-purple rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg animate-fadeIn">
              <img 
                src="\public\lovable-uploads\68144ea4-29ea-465a-bc26-d1b66421aece.png" 
                alt="Aravindh Jothimani" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-600 dark:text-gray-400 hover:text-vibrant-blue transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
