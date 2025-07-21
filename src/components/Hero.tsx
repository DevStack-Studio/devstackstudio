import { ArrowRight, Code, Smartphone, Globe, Cloud } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding bg-gradient-surface">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                Building Digital
                <span className="text-gradient block">
                  Solutions
                </span>
                That Scale
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
                We create modern web applications, mobile apps, and software solutions 
                that drive business growth and deliver exceptional user experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="btn-secondary">
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-primary">50+</div>
                <div className="text-sm text-text-tertiary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-primary">100%</div>
                <div className="text-sm text-text-tertiary">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-primary">24/7</div>
                <div className="text-sm text-text-tertiary">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-primary">3+</div>
                <div className="text-sm text-text-tertiary">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern software development workspace"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-6 -left-6 p-4 bg-card rounded-2xl shadow-lg border border-card-border">
              <Code className="h-8 w-8 text-brand-primary" />
            </div>
            <div className="absolute -top-6 -right-6 p-4 bg-card rounded-2xl shadow-lg border border-card-border">
              <Smartphone className="h-8 w-8 text-brand-primary" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 bg-card rounded-2xl shadow-lg border border-card-border">
              <Globe className="h-8 w-8 text-brand-primary" />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 bg-card rounded-2xl shadow-lg border border-card-border">
              <Cloud className="h-8 w-8 text-brand-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;