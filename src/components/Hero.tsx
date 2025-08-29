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

        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-primary-glow/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;