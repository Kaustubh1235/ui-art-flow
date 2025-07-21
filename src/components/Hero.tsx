import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-subtle opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-gradient-primary rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Kaustubh Arora
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & AI Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            Bachelor of Technology in Computer Science & Technology from Vellore Institute of Technology
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <Button variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary hover:shadow-glow">
            <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary hover:shadow-glow">
            <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary hover:shadow-glow">
            <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Contact
          </Button>
        </div>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          onClick={() => scrollToSection('about')}
          className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 animate-scale-in"
          style={{ animationDelay: '0.8s' }}
        >
          Explore My Work
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;