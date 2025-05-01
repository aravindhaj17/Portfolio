
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Database, LineChart, PenTool, Server, Globe } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");
  
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "C++", level: 75 },
    { name: "SQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Machine Learning", level: 85 },
    { name: "Data Structures", level: 90 },
  ];
  
  const frameworksSkills = [
    { name: "Figma", level: 90 },
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "Ubuntu", level: 80 },
    { name: "Tableau", level: 85 },
    { name: "Figma Frame", level: 90 },
    { name: "Web Flow", level: 80 },
    { name: "React", level: 85 },
  ];
  
  const softSkills = [
    { name: "Problem Solving", level: 95 },
    { name: "Responsive Web Design", level: 90 },
    { name: "Algorithms", level: 85 },
    { name: "UI/UX Research", level: 90 },
    { name: "Data Analysis", level: 95 },
    { name: "Python Scripting", level: 85 },
    { name: "JavaScript Scripting", level: 80 },
    { name: "Attendance Management", level: 90 },
  ];
  
  const renderSkills = (skills: { name: string; level: number }[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 50}ms` }}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ 
                  width: `${skill.level}%`, 
                  background: `linear-gradient(90deg, var(--skill-color-start, #8B5CF6) 0%, var(--skill-color-end, #0EA5E9) 100%)` 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title after:bg-vibrant-orange dark:text-white">Technical Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-vibrant-purple/10 dark:bg-vibrant-purple/20 flex items-center justify-center mb-2">
              <Code2 className="h-8 w-8 text-vibrant-purple" />
            </div>
            <span className="text-sm font-medium dark:text-gray-300">Languages</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-vibrant-orange/10 dark:bg-vibrant-orange/20 flex items-center justify-center mb-2">
              <Database className="h-8 w-8 text-vibrant-orange" />
            </div>
            <span className="text-sm font-medium dark:text-gray-300">Databases</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-vibrant-blue/10 dark:bg-vibrant-blue/20 flex items-center justify-center mb-2">
              <LineChart className="h-8 w-8 text-vibrant-blue" />
            </div>
            <span className="text-sm font-medium dark:text-gray-300">Data Analysis</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-vibrant-green/10 dark:bg-vibrant-green/20 flex items-center justify-center mb-2">
              <Server className="h-8 w-8 text-vibrant-green" />
            </div>
            <span className="text-sm font-medium dark:text-gray-300">Technologies</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-vibrant-pink/10 dark:bg-vibrant-pink/20 flex items-center justify-center mb-2">
              <PenTool className="h-8 w-8 text-vibrant-pink" />
            </div>
            <span className="text-sm font-medium dark:text-gray-300">UI/UX Design</span>
          </div>
        </div>
        
        <style>
          {`
            :root {
              --skill-color-start: #8B5CF6;
              --skill-color-end: #0EA5E9;
            }
            [data-tab="technical"] {
              --skill-color-start: #8B5CF6;
              --skill-color-end: #0EA5E9;
            }
            [data-tab="frameworks"] {
              --skill-color-start: #F97316;
              --skill-color-end: #FBBF24;
            }
            [data-tab="soft"] {
              --skill-color-start: #10B981;
              --skill-color-end: #3B82F6;
            }
          `}
        </style>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="technical" data-tab="technical">Languages</TabsTrigger>
            <TabsTrigger value="frameworks" data-tab="frameworks">Technologies & Frameworks</TabsTrigger>
            <TabsTrigger value="soft" data-tab="soft">Specialized Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical" className="animate-fadeIn" data-tab="technical">
            {renderSkills(technicalSkills)}
          </TabsContent>
          
          <TabsContent value="frameworks" className="animate-fadeIn" data-tab="frameworks">
            {renderSkills(frameworksSkills)}
          </TabsContent>
          
          <TabsContent value="soft" className="animate-fadeIn" data-tab="soft">
            {renderSkills(softSkills)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
