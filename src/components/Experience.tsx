import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Technical Intern",
      company: "DRDO-AEEDE",
      location: "ML Research & Atmospheric Sciences",
      period: "May 2025 - June 2025",
      type: "Internship",
      description: [
        "Selected among top 10 of 1500+ candidates for prestigious summer training program",
        "Developed ensemble learning models using Random Forest and Ridge Regression for leaf spectral forecasting",
        "Engineered complex data processing pipeline with ELAS and utilized atmospheric parameters",
        "Achieved 15% RMSE reduction through ensemble methods and SHAP-based feature importance analysis",
        "Worked under guidance on UAV data processing and forecasting algorithms"
      ],
      technologies: ["Python", "Machine Learning", "Random Forest", "Ridge Regression", "SHAP", "Data Processing"]
    },
    {
      title: "AI Engineering Intern",
      company: "Fission Labs",
      location: "AI Systems Development",
      period: "June 2025 - Present",
      type: "Current",
      description: [
        "Building Agentic AI systems for automated task orchestration and decision-making",
        "Developed complex backend services with optimized real-time processing capabilities",
        "Enhanced system performance through advanced AI handling and resource optimization",
        "Gained expertise in scalable AI architecture with production-ready deployment"
      ],
      technologies: ["AI Systems", "Python", "Backend Development", "System Optimization", "Real-time Processing"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-scale-in" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey in technology and research
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 
                transition-all duration-500 hover:shadow-elegant group ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left Column - Company Info */}
                <div className="md:col-span-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={exp.type === "Current" ? "default" : "secondary"} className="mb-2">
                      {exp.type}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-primary-glow transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold mb-2">{exp.company}</p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="md:col-span-2">
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;