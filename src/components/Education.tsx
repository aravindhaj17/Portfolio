
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Calendar, Briefcase } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      duration: "Aug 2022 - Present",
      icon: GraduationCap
    },
    {
      degree: "12th with Science - Percentage: 92%",
      institution: "Nava Bharath National School",
      location: "Coimbatore, Tamil Nadu",
      duration: "Jun 2021 - Mar 2022",
      icon: BookOpen
    },
    {
      degree: "10th - Percentage: 80%",
      institution: "Nava Bharath International School",
      location: "Coimbatore, Tamil Nadu",
      duration: "Jun 2019 - Mar 2021",
      icon: BookOpen
    }
  ];
  
  const internships = [
    {
      role: "UI/UX Intern",
      company: "Code Soft",
      description: "Designed and developed an e-commerce website UI/UX with a focus on visually appealing aesthetics, intuitive navigation, and user-friendly search functionality. Implemented clear product categorization to enhance discoverability and improve the overall shopping experience.",
      duration: "Dec 2024 - Dec 2024",
      icon: Briefcase
    },
    {
      role: "Data Science Intern",
      company: "Code Alpha",
      description: "Developed a sales prediction model using Python, leveraging machine learning algorithms to forecast future sales trends. Preprocessed and analyzed large datasets to extract valuable insights. Implemented data visualization techniques for clear representation of predictions. Enhanced decision-making processes by providing accurate predictions.",
      duration: "Dec 2024 - Dec 2024",
      icon: Briefcase
    },
    {
      role: "Java Intern",
      company: "Cipher Schools",
      description: "Developed an Attendance Management System in Java, featuring user-friendly interfaces and efficient tracking of attendance records.",
      duration: "Jun 2024 - Jul 2024",
      icon: Briefcase
    }
  ];
  
  const certifications = [
    {
      name: "Data Analysis with Tableau",
      issuer: "Coursera",
      link: "https://tinyurl.com/2dzv6ax",
      date: "Mar 2024",
      icon: Award
    },
    {
      name: "Algorithms and Data Structures",
      issuer: "Coursera",
      link: "https://tinyurl.com/4au9exjh",
      date: "Nov 2024",
      icon: Award
    }
  ];

  return (
    <section id="education" className="section bg-gray-950 dark:bg-gray-950">
      <div className="container mx-auto">
        <h2 className="section-title text-white after:bg-vibrant-green">Education & Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-white">
              <GraduationCap className="mr-2 text-vibrant-purple" /> Education
            </h3>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-vibrant-purple animate-slideUp bg-gray-900 border-gray-800 text-white" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{item.degree}</CardTitle>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.duration}
                      </div>
                    </div>
                    <CardDescription className="text-vibrant-blue font-medium">
                      {item.institution}
                    </CardDescription>
                    <CardDescription className="text-gray-400">
                      {item.location}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mb-6 flex items-center mt-10 text-white">
              <Award className="mr-2 text-vibrant-orange" /> Certifications
            </h3>
            
            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <Card key={index} className="animate-slideUp bg-gray-900 border-gray-800 text-white" style={{ animationDelay: `${(index + 2) * 150}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-vibrant-orange/10 mr-4">
                        <cert.icon className="h-6 w-6 text-vibrant-orange" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{cert.name}</h4>
                        <div className="flex justify-between">
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-vibrant-blue hover:underline"
                          >
                            {cert.issuer}
                          </a>
                          <p className="text-sm text-gray-400">{cert.date}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-white">
              <Briefcase className="mr-2 text-vibrant-green" /> Internships
            </h3>
            
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <Card key={index} className="border-l-4 border-l-vibrant-green animate-slideUp bg-gray-900 border-gray-800 text-white" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-vibrant-green">{internship.role}</CardTitle>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {internship.duration}
                      </div>
                    </div>
                    <CardDescription className="font-medium text-gray-300">
                      {internship.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{internship.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-lg bg-gray-800 border border-gray-700">
              <h4 className="font-medium text-vibrant-blue mb-2">Key Skills from Experiences</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-vibrant-purple mr-2">•</span>
                  <span>UI/UX design with focus on user experience and interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vibrant-orange mr-2">•</span>
                  <span>Data preprocessing and analytics for meaningful insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vibrant-green mr-2">•</span>
                  <span>Full-stack development with both frontend and backend expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vibrant-blue mr-2">•</span>
                  <span>Machine learning implementation for predictive modeling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
