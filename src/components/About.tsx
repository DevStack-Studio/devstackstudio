import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision & Quality',
      description: 'We deliver pixel-perfect solutions with meticulous attention to detail and code quality.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you throughout the entire process.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, using the latest technologies and best practices.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of the curve, implementing cutting-edge solutions for modern challenges.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                About <span className="text-gradient">DevStack Studio</span>
              </h2>
              <p className="text-lg text-text-secondary">
                We are a modern software development company specializing in creating 
                scalable web applications, mobile apps, and comprehensive software solutions. 
                Our team combines technical expertise with creative design to deliver 
                products that exceed expectations.
              </p>
              <p className="text-text-secondary">
                Founded with the vision of bridging the gap between innovative technology 
                and practical business solutions, we help companies transform their ideas 
                into powerful digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-text-primary">Our Mission</h3>
                <p className="text-sm text-text-secondary">
                  To empower businesses with cutting-edge technology solutions that drive growth and innovation.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-text-primary">Our Vision</h3>
                <p className="text-sm text-text-secondary">
                  To be the leading software development partner for companies looking to scale and innovate.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="card-elevated p-6 group hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="p-3 bg-brand-primary/10 rounded-xl w-fit group-hover:bg-brand-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-text-primary">{value.title}</h3>
                    <p className="text-sm text-text-secondary">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;