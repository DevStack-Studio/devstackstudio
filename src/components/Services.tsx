import { Smartphone, Globe, Code, Cloud, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Native Performance'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies and frameworks.',
      features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimized'],
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: Code,
      title: 'Software Solutions',
      description: 'Custom software development tailored to your specific business needs and requirements.',
      features: ['Custom Software', 'API Development', 'Database Design', 'Integration'],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: Cloud,
      title: 'Deployment & DevOps',
      description: 'Reliable cloud deployment, CI/CD pipelines, and infrastructure management for scalable applications.',
      features: ['Cloud Hosting', 'CI/CD Pipeline', 'Monitoring', 'Scalability'],
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We offer comprehensive software development services to help your business 
            thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-elevated p-8 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="p-4 bg-brand-primary/10 rounded-2xl w-fit group-hover:bg-brand-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-brand-primary" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                        <span className="text-sm text-text-tertiary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="flex items-center space-x-2 text-brand-primary font-medium group-hover:text-brand-primary-dark transition-colors mt-4">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-elevated p-8 bg-gradient-brand text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our expert development services.
            </p>
            <a href="#contact" className="bg-white text-brand-primary px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-block">
              Get a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;