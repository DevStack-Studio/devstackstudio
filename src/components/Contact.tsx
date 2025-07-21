import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@devstackstudio.net',
      link: 'mailto:hello@devstackstudio.net'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Remote & On-site',
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear about your ideas 
            and discuss how we can help bring them to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary">
                Let's Start a Conversation
              </h3>
              <p className="text-text-secondary">
                Whether you have a specific project in mind or just want to explore 
                possibilities, we're here to help. Reach out to us and let's discuss 
                how we can turn your vision into reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center space-x-4">
                  <div className="p-3 bg-brand-primary/10 rounded-xl">
                    <info.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">{info.title}</div>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-text-secondary hover:text-brand-primary transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <div className="text-text-secondary">{info.details}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="card-flat p-6 space-y-4">
              <h4 className="font-semibold text-text-primary">Our Process</h4>
              <div className="space-y-3 text-sm text-text-secondary">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span>Initial consultation and project discussion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span>Detailed proposal and timeline planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span>Development with regular updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <span>Testing, deployment, and ongoing support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elevated p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="software">Software Solutions</option>
                    <option value="deployment">Deployment & DevOps</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border-light rounded-lg focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-colors resize-none"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;