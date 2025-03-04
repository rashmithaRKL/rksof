import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Sample project data (in a real app, this would come from an API or database)
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    image: 'https://picsum.photos/seed/ecommerce/600/400',
    description: 'A full-featured e-commerce platform with advanced features.',
    longDescription: `Our team developed a comprehensive e-commerce solution that includes 
    product management, inventory tracking, order processing, and customer relationship management. 
    The platform features a responsive design, secure payment integration, and real-time analytics.`,
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    client: 'Global Retail Inc.',
    duration: '6 months',
    features: [
      'Advanced product search and filtering',
      'Secure payment processing',
      'Real-time inventory management',
      'Customer account management',
      'Order tracking system',
      'Analytics dashboard'
    ],
    results: [
      '50% increase in online sales',
      '30% improvement in customer engagement',
      'Reduced operational costs by 25%',
      'Improved inventory accuracy to 99.9%'
    ],
    testimonial: {
      text: "RK Software delivered an exceptional e-commerce platform that exceeded our expectations. Their team's expertise and dedication were invaluable to our project's success.",
      author: "Jane Smith",
      position: "CTO, Global Retail Inc."
    }
  },
  // Add more projects as needed
];

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id)) || projects[0];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-dark text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/projects" className="text-gray-300 hover:text-white mb-6 inline-block">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg shadow-lg mb-8"
                />
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-gray-600 mb-8">{project.longDescription}</p>

                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-2 mb-8">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
                  <ul className="space-y-2 mb-8">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-chart-line text-secondary mt-1 mr-2"></i>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Client</h4>
                    <p className="text-gray-600">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Duration</h4>
                    <p className="text-gray-600">{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-8 p-6 bg-white rounded-lg">
                  <i className="fas fa-quote-left text-3xl text-primary mb-4"></i>
                  <p className="text-gray-600 italic mb-4">{project.testimonial.text}</p>
                  <div>
                    <p className="font-semibold">{project.testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{project.testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            </div>
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
            <h2 className="text-3xl font-bold mb-6">Interested in a Similar Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create a custom solution for your business
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
