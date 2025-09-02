const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left side info */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2">📞 Call or Text</h3>
              <p className="text-muted-foreground mb-2">
                Ready to talk? Give us a call or send a text message.
              </p>
              <p className="font-medium text-primary">+60 12 747 5853</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2">📧 Email Us</h3>
              <p className="text-muted-foreground mb-2">
                Send us an email and we'll respond promptly.
              </p>
              <p className="font-medium text-primary">
                probizservices.mm@gmail.com
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2">⏱ Response Time</h3>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 48 hours during
                business days.
              </p>
            </div>
          </div>

          {/* Right side form */}
          <div className="p-6 bg-white rounded-lg shadow-md border">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              action="/thank-you"
              className="space-y-6"
            >
              {/* Netlify hidden input */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full p-3 border rounded-md" 
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full p-3 border rounded-md" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Phone Number</label>
                  <input 
                    type="text" 
                    name="phone" 
                    className="w-full p-3 border rounded-md" 
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Service of Interest</label>
                  <select 
                    name="service" 
                    className="w-full p-3 border rounded-md"
                  >
                    <option>Business Consulting</option>
                    <option>Change Management</option>
                    <option>HR Solutions</option>
                    <option>Life Coaching</option>
                    <option>Estate Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Message *</label>
                <textarea 
                  name="message" 
                  required 
                  rows={5} 
                  className="w-full p-3 border rounded-md"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-primary text-white py-3 px-6 rounded-md font-semibold hover:shadow-glow transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
