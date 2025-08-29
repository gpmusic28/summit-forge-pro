import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, Target, Heart, Users } from "lucide-react";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Heart,
      title: "Be Healthier",
      items: ["Create a Lifestyle of Well-Being", "Become Mindful of Nutrition", "Become Stronger and More Flexible"]
    },
    {
      icon: Star,
      title: "Be Happier",
      items: ["Enjoy Meaningful Relationships", "Become Emotionally Intelligent", "Create Healthy Boundaries"]
    },
    {
      icon: Target,
      title: "Be More Successful",
      items: ["Create A Clear Vision", "Unleash Your Creativity", "Take Consistent Action"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Meet Your Coach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Your <span className="text-gradient">Breakthrough</span> Awaits
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/30" />
              <p className="text-lg leading-relaxed text-muted-foreground pl-8">
                I am <span className="font-semibold text-primary">Marion Manuel</span>, and as a professional coach, 
                my role is as your guide, assisting you to improve your life, health, relationships, 
                performance, business, and achieve your goals.
              </p>
            </div>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Through the life coaching process, I share insights, models, and techniques to help you 
              make the most of your life – in all areas of your life. I believe wholeheartedly that 
              every person can learn, grow, transform, and succeed.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I am happy to facilitate that discovery by providing a safe place and a positive process 
              for personal growth, empowerment, achievement, and transformation.
            </p>

            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Schedule Your Discovery Call
            </Button>
          </div>

          {/* Coaching Benefits */}
          <div className="space-y-6">
            <h3 className="text-3xl font-heading font-bold mb-8">Transform Your Life</h3>
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="card-premium">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-xl mb-3 text-gradient">
                        {benefit.title}
                      </h4>
                      <ul className="space-y-2">
                        {benefit.items.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Life Coaching Is */}
        <div className="bg-gradient-subtle rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold mb-4">What is Life Coaching?</h3>
            <p className="text-xl text-primary font-medium">A process to change your life now</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-xl">What Life Coaching IS:</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>A partnership for personal growth and empowerment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Focus on your priorities and meaningful goals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Encourages personal responsibility and self-discovery</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Helps you align with your integrity and strengths</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-xl">What Life Coaching is NOT:</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                  <span>Not therapy, counseling, or consulting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                  <span>No diagnosing or labeling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                  <span>Not about dwelling on past problems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                  <span>Not a quick fix or magic solution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Business Coaching Section */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold mb-4">Business Coaching</h3>
            <p className="text-xl text-primary font-medium">Create, Run, Improve and Grow Your Business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-heading font-semibold">Strategy</h4>
              <p className="text-sm text-muted-foreground">Know your market, customer, and competitors</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-heading font-semibold">Measurement</h4>
              <p className="text-sm text-muted-foreground">Track productivity, costs, and resources</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-heading font-semibold">Communication</h4>
              <p className="text-sm text-muted-foreground">Build trust and improve team dynamics</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-heading font-semibold">Growth</h4>
              <p className="text-sm text-muted-foreground">Scale your business and plan exit strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;