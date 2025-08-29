import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium consulting environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Premium Consulting Services</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-up">
            Unlock Your 
            <span className="text-gradient block">Organization's</span>
            Full Potential
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-fade-up">
            Transform your business with expert consulting in change management, HR solutions, 
            life coaching, and estate planning. Your breakthrough awaits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg"
            >
              Schedule Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/5 hover:border-primary/50"
            >
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-up">
            <div className="text-center md:text-left">
              <div className="text-3xl font-heading font-bold text-gradient mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-heading font-bold text-gradient mb-2">500+</div>
              <div className="text-muted-foreground">Clients Transformed</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-heading font-bold text-gradient mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-primary-glow/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;