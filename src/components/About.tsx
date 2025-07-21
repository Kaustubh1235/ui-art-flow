import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-scale-in" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Passionate Developer & Tech Enthusiast
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated Computer Science graduate from Vellore Institute of Technology, 
              specializing in full-stack development and artificial intelligence. With a strong 
              foundation in modern technologies, I create innovative solutions that bridge the 
              gap between complex technical challenges and user-friendly experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My journey in technology is driven by curiosity and a passion for continuous learning. 
              I believe in writing clean, efficient code and building products that make a real difference.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-soft">
                <h4 className="font-semibold mb-2 text-primary">Location</h4>
                <p className="text-muted-foreground">India</p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-soft">
                <h4 className="font-semibold mb-2 text-primary">Focus</h4>
                <p className="text-muted-foreground">Full Stack & AI</p>
              </Card>
            </div>
          </div>
          
          {/* Right Column - Stats */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-8 text-center bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform duration-300 animate-glow">
                <div className="text-4xl font-bold mb-2">3+</div>
                <div className="text-sm uppercase tracking-wide">Years Experience</div>
              </Card>
              <Card className="p-8 text-center bg-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold mb-2 text-primary">10+</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">Projects</div>
              </Card>
              <Card className="p-8 text-center bg-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold mb-2 text-primary">50+</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">Technologies</div>
              </Card>
              <Card className="p-8 text-center bg-gradient-accent text-accent-foreground hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-sm uppercase tracking-wide">Learning</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;