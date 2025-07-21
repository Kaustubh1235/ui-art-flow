import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Avocat - AI-Powered Call Simulator",
      description: "Developed real-time call simulation platform with 95% speech recognition accuracy on 100+ test cases. Reduced response latency by 60% through advanced speech processing. Integrated advanced voice cloning technology for enhanced user experience and realism.",
      technologies: ["OpenAI API", "Porcutype", "Flask", "Speech Recognition", "GitHub"],
      category: "AI Platform",
      year: "2024",
      highlights: ["95% Accuracy", "Real-time Processing", "Voice Cloning"]
    },
    {
      title: "Legally - AI Legal Advisor Platform",
      description: "Built comprehensive legal document analysis platform with 92% classification accuracy. Reduced legal query resolution time by 70% through automated processing. Developed ML optimization algorithms for crop yield prediction and irrigation scheduling.",
      technologies: ["React", "Node.js", "MongoDB", "NLP", "Document Classification", "GitHub"],
      category: "Legal Tech",
      year: "2024",
      highlights: ["92% Classification", "70% Faster Resolution", "ML Optimization"]
    },
    {
      title: "Smart Crop using ConvLSTM",
      description: "Published research paper on Cloud AI-IoT integration in Smart Agriculture (under review). Investigated India's agricultural supply chain challenges and proposed solutions. Developed ML optimization algorithms for precision irrigation control.",
      technologies: ["TensorFlow", "NumPy", "Cloud Computing", "MLOps", "ConvLSTM", "GitHub"],
      category: "Research Project",
      year: "2024",
      highlights: ["Research Paper", "IoT Integration", "Precision Agriculture"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-scale-in" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining AI, machine learning, and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 
                transition-all duration-500 hover:scale-105 hover:shadow-elegant animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-xs hover:bg-muted transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;