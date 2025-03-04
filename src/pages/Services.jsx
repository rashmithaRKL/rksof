import { motion } from 'framer-motion';

const services = [
  {
    id: 'web',
    title: 'Web Applications',
    icon: 'fas fa-globe',
    description: 'Custom web applications that drive business growth and user engagement.',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Development',
      'Cloud Integration'
    ],
    technologies: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL']
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    icon: 'fas fa-mobile-alt',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-platform Solutions',
      'Mobile UI/UX Design',
      'App Store Optimization',
      'Push Notifications'
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase', 'GraphQL']
  },
  {
    id: 'desktop',
    title: 'Desktop Applications',
    icon: 'fas fa-desktop',
    description: 'Powerful desktop software solutions for Windows, macOS, and Linux.',
    features: [
      'Cross-platform Development',
      'System Integration',
      'Custom UI Development',
      'Database Management',
      'Automated Updates',
      'Offline Functionality'
    ],
    technologies: ['Electron', 'Qt', '.NET', 'Java', 'Python', 'SQLite']
  }
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="text-center mb-6">
          <i className={`${service.icon} text-5xl text-primary`}></i>
          <h3 className="text-2xl font-bold mt-4">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-6 text-center">
          {service.description}
        </p>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-primary">Key Features</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <i className="fas fa-check-circle text-secondary mr-2"></i>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-primary">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-dark text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive software solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: 'fas fa-lightbulb',
                title: 'Discovery',
                description: 'Understanding your requirements and business objectives'
              },
              {
                icon: 'fas fa-pencil-ruler',
                title: 'Planning',
                description: 'Detailed project planning and architecture design'
              },
              {
                icon: 'fas fa-code',
                title: 'Development',
                description: 'Agile development with regular updates and feedback'
              },
              {
                icon: 'fas fa-rocket',
                title: 'Deployment',
                description: 'Testing, deployment, and ongoing support'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <i className={`${step.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business
            </p>
            <button className="btn bg-white text-primary hover:bg-gray-100">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
