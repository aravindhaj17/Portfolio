
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrollPosition > 0 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
        : 'bg-transparent dark:bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center text-analytics-navy dark:text-white font-bold text-xl">
          <span className="text-analytics-blue">Data</span>Analyst
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-medium hover:text-analytics-blue transition-colors dark:text-gray-300 dark:hover:text-analytics-blue"
            >
              {link.name}
            </button>
          ))}
          <Button onClick={() => scrollTo('footer')} className="bg-analytics-blue hover:bg-analytics-blue/90">Contact Me</Button>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden animate-fadeIn">
            <div className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="py-3 font-medium hover:text-analytics-blue transition-colors dark:text-gray-300 dark:hover:text-analytics-blue"
                >
                  {link.name}
                </button>
              ))}
              <Button onClick={() => scrollTo('footer')} className="bg-analytics-blue hover:bg-analytics-blue/90 mt-3">Contact Me</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
