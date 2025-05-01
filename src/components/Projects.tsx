
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Projects = () => {
  const projects = [
    {
      title: "IRCTC App",
      description: "Redesigned the IRCTC app using Figma and Fig Jam, focusing on modern UI interfaces with streamlined navigation to minimize usability issues and reduce complexity.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tags: ["Figma", "Fig Jam", "UI/UX Design", "User Research"],
      period: "Jul 2024 - Dec 2024",
      githubLink: "",
    },
    {
      title: "Titanic Survival Prediction",
      description: "Developed a machine learning model to predict survival outcomes for Titanic passengers using Python and classification algorithms, achieving high accuracy in predictions.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tags: ["Python", "Machine Learning", "Data Analysis", "Classification Models"],
      period: "Feb 2024 - Mar 2024",
      githubLink: "https://github.com/aravindhaj17/Titanic-Survival-Prediction/tree/main",
    },
    {
      title: "Attendance Management System",
      description: "Developed an Attendance Management System in Java, featuring user-friendly interfaces and efficient tracking of attendance records.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tags: ["Java", "UI/UX", "Database Management"],
      period: "Jun 2024 - Jul 2024",
      githubLink: "",
    },
    {
      title: "Sales Prediction Model",
      description: "Developed a sales prediction model using Python, leveraging machine learning algorithms to forecast future sales trends and improve decision-making processes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
      tags: ["Python", "Machine Learning", "Data Visualization", "Predictive Modeling"],
      period: "Dec 2024 - Dec 2024",
      githubLink: "",
    },
  ];

  return (
    <section id="projects" className="section relative min-h-screen bg-black overflow-hidden">
      {/* Vercel-style gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#8B5CF6_0%,transparent_50%)] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,#0EA5E9_0%,transparent_50%)] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,#6366F1_0%,transparent_50%)] opacity-20"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-white mb-16 after:bg-vibrant-blue">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 perspective-[2000px]">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-gray-800 bg-gray-900/40 backdrop-blur-xl text-gray-100 
                        transition-all duration-500 animate-slideUp hover:shadow-2xl
                        hover:shadow-vibrant-purple/20 hover:border-gray-700
                        transform-gpu hover:scale-[1.02] hover:rotate-y-[-5deg]"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: 'perspective(2000px) rotateY(0deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative overflow-hidden">
                <AspectRatio ratio={16/9} className="bg-gradient-to-br from-gray-900 to-black">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 
                              group-hover:scale-110 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </AspectRatio>
              </div>
              
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-vibrant-blue group-hover:to-vibrant-purple transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.period}
                  </div>
                </div>
                <CardDescription className="text-gray-300 mt-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-gray-800/50 text-gray-300 border border-gray-700/50 backdrop-blur-sm
                               hover:bg-gray-700/50 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t border-gray-800/50 mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 bg-transparent border-gray-700 text-gray-300
                           hover:bg-gray-800/50 hover:text-white transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => project.githubLink && window.open(project.githubLink, "_blank")}
                  disabled={!project.githubLink}
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button 
                  size="sm"
                  className="flex items-center gap-2 bg-gradient-to-r from-vibrant-blue to-vibrant-purple
                           hover:opacity-90 transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
