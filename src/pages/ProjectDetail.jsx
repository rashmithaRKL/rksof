import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API or database
  const project = {
    id: parseInt(id),
    title: "E-Commerce Platform",
    client: "Global Retail Solutions",
    duration: "6 months",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3",
    description: "A comprehensive e-commerce solution with real-time inventory management, advanced analytics, and seamless payment integration.",
    challenge: "The client needed a scalable e-commerce platform that could handle high traffic volumes while maintaining fast loading times and providing real-time inventory updates across multiple warehouses.",
    solution: "We developed a custom e-commerce platform using React.js for the frontend and Node.js for the backend. The solution includes real-time inventory tracking, advanced analytics dashboard, and integration with multiple payment gateways.",
    features: [
      "Real-time inventory management",
      "Multi-warehouse support",
      "Advanced analytics dashboard",
      "Secure payment processing",
      "Mobile-responsive design",
      "Customer account management"
    ],
    technologies: [
      { name: "React.js", icon: "react" },
      { name: "Node.js", icon: "node" },
      { name: "MongoDB", icon: "database" },
      { name: "AWS", icon: "cloud" }
    ],
    results: [
      "50% increase in online sales",
      "30% reduction in inventory management time",
      "99.9% uptime",
      "40% improvement in page load speed"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back Button */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div variants={itemVariants} className="relative rounded-xl overflow-hidden mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-300">{project.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { label: "Client", value: project.client },
            { label: "Duration", value: project.duration },
            { label: "Category", value: project.category }
          ].map((detail, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 rounded-lg p-6"
            >
              <h3 className="text-gray-400 mb-2">{detail.label}</h3>
              <p className="text-xl font-semibold">{detail.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-400 leading-relaxed">{project.challenge}</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-400 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-lg p-6"
                whileHover={{ y: -5 }}
              >
                <i className="fas fa-check text-yellow-400 mr-2"></i>
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-full px-6 py-3 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <i className={`fas fa-${tech.icon} text-yellow-400 mr-2`}></i>
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
              >
                <i className="fas fa-chart-line text-yellow-400 mr-2"></i>
                {result}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Screenshots */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6">Project Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-[300px] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
