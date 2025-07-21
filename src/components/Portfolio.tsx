import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React, Node.js, and Stripe integration for seamless online shopping.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      type: 'Web Application'
    },
    {
      title: 'Task Management App',
      description: 'Cross-platform mobile app for team collaboration and project management with real-time updates.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux', 'Push Notifications'],
      type: 'Mobile App'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard for business intelligence with interactive charts and data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      type: 'Web Application'
    },
    {
      title: 'Healthcare Portal',
      description: 'Secure patient management system with appointment scheduling and telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      tags: ['Next.js', 'TypeScript', 'AWS', 'HIPAA Compliant'],
      type: 'Enterprise Software'
    },
    {
      title: 'Food Delivery App',
      description: 'Full-stack food delivery platform with real-time tracking and payment processing.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      tags: ['Flutter', 'Express.js', 'MongoDB', 'Socket.io'],
      type: 'Mobile App'
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, progress tracking, and interactive learning tools.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Video Streaming'],
      type: 'Web Application'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-surface">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore some of our recent projects that showcase our expertise 
            in creating innovative digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-elevated group hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-colors duration-300"></div>
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-card/90 text-text-secondary text-xs font-medium rounded-full backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-2">
                  <button className="p-2 bg-card/90 text-text-secondary hover:text-brand-primary rounded-full backdrop-blur-sm transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-card/90 text-text-secondary hover:text-brand-primary rounded-full backdrop-blur-sm transition-colors">
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-surface-secondary text-text-tertiary text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Want to see more of our work or discuss your project?
          </p>
          <a href="#contact" className="btn-primary">
            Let's Talk About Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;