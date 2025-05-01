
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
  };
  
  return (
    <footer className="bg-gradient-to-br from-analytics-navy to-analytics-navy/90 dark:from-gray-900 dark:to-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-analytics-blue" />
                <p>Erode, Tamil Nadu 638459</p>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-analytics-blue" />
                <p>aravindhaj2005@gmail.com</p>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-analytics-blue" />
                <p>9865185910</p>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/in/aravindh2005/" target="_blank" rel="noopener noreferrer" className="hover:text-analytics-blue transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/aravindhaj17" target="_blank" rel="noopener noreferrer" className="hover:text-analytics-blue transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:aravindhaj2005@gmail.com" className="hover:text-analytics-blue transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input type="text" placeholder="Your Name" className="bg-white/10 border-white/20 placeholder:text-white/50 text-white" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="bg-white/10 border-white/20 placeholder:text-white/50 text-white" />
                </div>
              </div>
              <div>
                <Input type="text" placeholder="Subject" className="bg-white/10 border-white/20 placeholder:text-white/50 text-white" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="bg-white/10 border-white/20 placeholder:text-white/50 text-white min-h-[120px]" />
              </div>
              <Button type="submit" className="bg-analytics-blue hover:bg-analytics-blue/90 text-white">Send Message</Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Aravindh Jothimani | Data Analyst Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
