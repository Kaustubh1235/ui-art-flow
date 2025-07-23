import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Vellore Institute of Technology",
      degree: "Bachelor of Technology, Computer Science and Technology",
      period: "2022 - 2026",
      grade: "CGPA: 8.4",
      type: "Current"
    },
    {
      institution: "John Milton Public School",
      degree: "CBSE, Class XII",
      period: "2022",
      grade: "Percentage: 92.8%",
      type: "Completed"
    },
    {
      institution: "St. Clare's Sr. Sec School",
      degree: "CBSE, Class X",
      period: "2020",
      grade: "Percentage: 91.6%",
      type: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-scale-in" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey and achievements
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 
                transition-all duration-500 hover:shadow-elegant group animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <Badge variant={edu.type === "Current" ? "default" : "secondary"}>
                      {edu.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-lg font-bold text-primary group-hover:text-primary-glow transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-muted-foreground">{edu.degree}</p>
                </div>
                
                <div className="md:col-span-1 text-right">
                  <div className="flex items-center gap-2 justify-end mb-1">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <Badge variant="outline" className="font-semibold">
                    {edu.grade}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;