import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python (Expert)", "C++ (Advanced)", "R", "JavaScript", "TypeScript"]
    },
    {
      title: "Machine Learning & AI",
      icon: "🤖",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Random Forest", "ConvLSTM", "SHAP"]
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: ["React", "Node.js", "Next.js", "REST APIs", "GraphQL", "Flask"]
    },
    {
      title: "Cloud & Database",
      icon: "☁️",
      skills: ["AWS (Certified)", "MongoDB", "MySQL", "ERAS", "ciscdb", "xammy"]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Docker", "Postman", "VSCode", "Git", "LeetCode (1500)", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-scale-in" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 
                transition-all duration-500 hover:scale-105 hover:shadow-elegant group animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="w-full justify-center py-2 hover:bg-primary hover:text-primary-foreground 
                      transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Machine Learning & AI", "AI-Powered Call Simulators", "Cloud Computing",
                "Database Management", "Web Development", "System Development"
              ].map((skill, i) => (
                <Badge 
                  key={i} 
                  variant="secondary" 
                  className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;