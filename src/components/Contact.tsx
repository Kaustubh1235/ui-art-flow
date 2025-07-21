import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-scale-in" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities and create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 text-primary">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <p className="text-muted-foreground">kaustubharora824@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Phone</h4>
                    <p className="text-muted-foreground">91-7055461524</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Location</h4>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary hover:shadow-glow">
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary hover:shadow-glow">
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-primary">First Name</label>
                    <Input 
                      placeholder="Your first name" 
                      className="border-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-primary">Last Name</label>
                    <Input 
                      placeholder="Your last name" 
                      className="border-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-primary">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-primary">Subject</label>
                  <Input 
                    placeholder="What's this about?" 
                    className="border-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-primary">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hello!" 
                    rows={5}
                    className="border-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;