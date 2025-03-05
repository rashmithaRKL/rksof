import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import ProjectDetailScene from '../components/3d/ProjectDetailScene';

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
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* 3D Scene */}
      <div className="h-[60vh] relative overflow-hidden">
        <ProjectDetailScene technologies={project.technologies} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </div>

      <motion.div
        className="container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back Button */}
        <motion.div variants={itemVariants} className="mb-12">
          <Link
            to="/projects"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors group"
          >
            <motion.span
              className="mr-2 transform group-hover:-translate-x-1 transition-transform"
              whileHover={{ x: -4 }}
            >
              ←
            </motion.span>
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Overview */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { label: "Client", value: project.client },
            { label: "Duration", value: project.duration },
            { label: "Category", value: project.category }
          ].map((detail, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-gray-400 text-sm uppercase mb-2">{detail.label}</h3>
              <p className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent">
                {detail.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-300 leading-relaxed mb-16 max-w-4xl"
        >
          {project.description}
        </motion.p>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              The Challenge
            </h2>
            <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Our Solution
            </h2>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <i className="fas fa-check text-yellow-400 mr-2"></i>
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent">
            Results & Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50"
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <i className="fas fa-chart-line text-yellow-400 mr-2"></i>
                {result}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Screenshots */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent">
            Project Screenshots
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden group relative"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
