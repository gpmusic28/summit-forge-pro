import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/logo.svg" 
              alt="MM Pro Biz Services" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-background/80 mb-4 max-w-md">
              Comprehensive consulting services to unlock your organization's full potential. 
              Expert guidance in change management, HR solutions, life coaching, and estate planning.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+601274775853" className="text-background/80 hover:text-primary transition-colors">
                  +60 12 3171408
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:probizservices.mm@gmail.com" className="text-background/80 hover:text-primary transition-colors">
                  probizservices.mm@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-primary">Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-primary transition-colors text-left"
                >
                  Change Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-primary transition-colors text-left"
                >
                  HR Consultancy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-primary transition-colors text-left"
                >
                  Life Coaching
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-primary transition-colors text-left"
                >
                  Estate Planning
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-background/80 hover:text-primary transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-background/80 hover:text-primary transition-colors text-left"
                >
                  About Marion
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-background/80 hover:text-primary transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="tel:+601274775853" className="text-background/80 hover:text-primary transition-colors">
                  Book Discovery Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} MM Pro Biz Services. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              Transforming businesses through expert consulting
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;