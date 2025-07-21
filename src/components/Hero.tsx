import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Blue Bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-float blur-xl" />
        <div className="absolute top-32 right-32 w-24 h-24 bg-primary/30 rounded-full animate-float blur-lg" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary-glow/15 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-primary/25 rounded-full animate-float blur-xl" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-32 right-20 w-36 h-36 bg-primary-glow/20 rounded-full animate-float blur-2xl" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-primary/35 rounded-full animate-float blur-lg" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-16 w-44 h-44 bg-primary/10 rounded-full animate-float blur-3xl" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-16 left-1/2 w-24 h-24 bg-primary-glow/25 rounded-full animate-float blur-xl" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-7xl md:text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight animate-fade-in">
          Kaustubh Arora
        </h1>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown className="w-6 h-6 text-primary/70" />
      </div>
    </section>
  );
};

export default Hero;