import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.svg" 
              alt="MM Pro Biz Services" 
              className="h-16 w-auto" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-medium">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors font-medium">Contact</button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-primary hover:shadow-glow transition-all duration-300">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors font-medium">Contact</button>
              <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 mt-4">Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
