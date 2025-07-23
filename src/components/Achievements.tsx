import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, BookOpen, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "AWS Certified Cloud Practitioner",
      description: "Score: 800/1000",
      year: "2024",
      icon: Award,
      type: "Certification"
    },
    {
      title: "Research Publication",
      description: "Cloud-AI-IoT Smart Agriculture (Under Review)",
      year: "2024",
      icon: BookOpen,
      type: "Publication"
    },
    {
      title: "Research Assistant at VIT Vellore",
      description: "Led Smart Agriculture Research under Dr. Goutam Majumder, spearheading cross-functional team of 5 researchers in developing sustainable agriculture technologies",
      year: "December 2024 - Present",
      icon: Users,
      type: "Leadership"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Leadership & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-scale-in" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and leadership contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index}
                className={`p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 
                  transition-all duration-500 hover:scale-105 hover:shadow-elegant group animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="mb-2">
                    {achievement.type}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-primary-glow transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="text-xs text-primary font-semibold">
                  {achievement.year}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;