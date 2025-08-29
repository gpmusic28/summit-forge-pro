import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Heart, FileText, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Change Management",
      description: "Navigate transitions smoothly with our tailored change management strategies. We guide organizations through technology implementations, cultural shifts, and operational transformations.",
      features: [
        "Optimizing business operations",
        "Reducing implementation costs",
        "Accessing specialized expertise",
        "Increasing overall efficiency"
      ]
    },
    {
      icon: Users,
      title: "Human Resource Consultancy",
      description: "Enhance your workforce's performance with comprehensive HR solutions including talent acquisition, employee engagement, compliance, and training programs.",
      features: [
        "Talent acquisition strategies",
        "Employee engagement programs",
        "Compliance management",
        "Training and development"
      ]
    },
    {
      icon: Heart,
      title: "Life Coaching",
      description: "Professional coaching to improve your life, health, relationships, performance, and business. Unlock your potential through personal growth and transformation.",
      features: [
        "Personal development coaching",
        "Leadership skill enhancement",
        "Team dynamics improvement",
        "Goal achievement strategies"
      ]
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description: "Secure your legacy with comprehensive estate planning services. We guide you through wills, trusts, and asset protection strategies for peace of mind.",
      features: [
        "Will and trust creation",
        "Asset protection strategies",
        "Legacy planning",
        "Family wealth preservation"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Comprehensive <span className="text-gradient">Consulting Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide tailored solutions designed to meet your unique organizational needs, 
            delivering measurable results that contribute to your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-premium animate-scale-hover group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  onClick={scrollToContact}
                  className="w-full border-primary/30 hover:bg-primary/5 hover:border-primary/50 group-hover:shadow-elegant transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h3 className="text-3xl font-heading font-bold mb-8 text-gradient">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-heading font-semibold text-xl">Tailored Solutions</h4>
              <p className="text-muted-foreground">Every organization is unique; our services are customized to meet your specific needs and challenges.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-heading font-semibold text-xl">Results-Driven</h4>
              <p className="text-muted-foreground">We focus on delivering measurable results that contribute to your organization's long-term success.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-heading font-semibold text-xl">Client-Centric</h4>
              <p className="text-muted-foreground">Your satisfaction is our priority. We work closely with you to ensure alignment with your goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;