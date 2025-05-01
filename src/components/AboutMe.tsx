import { Code, Database, LineChart, Laptop } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutMe = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <h2 className="section-title after:bg-vibrant-purple dark:text-white">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-full animate-slideUp">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Who am I?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a versatile tech professional with expertise in data science, Java development, and UI/UX design. 
              My experience spans developing e-commerce solutions, creating prediction models, and building efficient
              management systems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Currently pursuing Computer Science and Engineering at Lovely Professional University,
              I bring a strong educational foundation to my technical skills, with a passion for creating
              intuitive, data-driven solutions that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Card className="border-l-4 border-l-vibrant-blue dark:bg-gray-900 dark:border-gray-800 dark:border-l-vibrant-blue">
                <CardContent className="flex items-start p-6">
                  <LineChart className="h-10 w-10 text-vibrant-blue mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 dark:text-white">Data Science</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Machine learning, predictive modeling, and data visualization</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-vibrant-purple dark:bg-gray-900 dark:border-gray-800 dark:border-l-vibrant-purple">
                <CardContent className="flex items-start p-6">
                  <Laptop className="h-10 w-10 text-vibrant-purple mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 dark:text-white">UI/UX Design</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Creating intuitive interfaces and seamless user experiences</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-vibrant-orange dark:bg-gray-900 dark:border-gray-800 dark:border-l-vibrant-orange">
                <CardContent className="flex items-start p-6">
                  <Code className="h-10 w-10 text-vibrant-orange mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 dark:text-white">Java Development</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Building robust applications and management systems</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-vibrant-green dark:bg-gray-900 dark:border-gray-800 dark:border-l-vibrant-green">
                <CardContent className="flex items-start p-6">
                  <Database className="h-10 w-10 text-vibrant-green mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 dark:text-white">Full Stack Skills</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">MongoDB, SQL, JavaScript, Python, and more</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
