import { useState } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="relative">
      {/* Netlify Form */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={() => setIsSubmitted(true)}
        className="space-y-6"
      >
        {/* Netlify hidden field */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Form Fields */}
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
            rows={5}
            required
            className="w-full p-3 border rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-primary text-white py-3 px-6 rounded-md font-semibold hover:shadow-glow transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {/* ✅ Thank You Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">✅ Thank you!</h2>
            <p className="text-gray-600">
              We’ve received your message and will get back to you soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-6 py-2 bg-gradient-primary text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
