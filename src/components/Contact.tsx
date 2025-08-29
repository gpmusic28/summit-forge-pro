import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. Marion will contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Contact <span className="text-gradient">Us Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how our comprehensive consulting services 
            can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Call or Text</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Ready to talk? Give us a call or send a text message.</p>
                <a 
                  href="tel:+601274775853" 
                  className="text-primary font-semibold hover:text-primary-glow transition-colors"
                >
                  +60 12 747 5853
                </a>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Email Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Send us an email and we'll respond promptly.</p>
                <a 
                  href="mailto:probizservices.mm@gmail.com" 
                  className="text-primary font-semibold hover:text-primary-glow transition-colors break-all"
                >
                  probizservices.mm@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Response Time</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 48 hours during business days.
                </p>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Free Discovery Call</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Schedule a complimentary discovery call to discuss your needs and see if we're the right fit.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+60 12 345 6789"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        <option value="change-management">Change Management</option>
                        <option value="hr-consultancy">HR Consultancy</option>
                        <option value="life-coaching">Life Coaching</option>
                        <option value="business-coaching">Business Coaching</option>
                        <option value="estate-planning">Estate Planning</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your goals and how we can help you..."
                      rows={5}
                      className="w-full"
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
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't wait for change to happen. Take the first step towards unlocking your organization's 
            full potential with our expert consulting services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => window.open('tel:+601274775853', '_self')}
            >
              Call Now: +60 12 747 5853
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 hover:border-primary/50"
              onClick={() => window.open('mailto:probizservices.mm@gmail.com', '_self')}
            >
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;