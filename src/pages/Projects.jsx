import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = ['all', 'web', 'mobile', 'desktop'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3",
      description: "Full-featured online shopping platform with real-time inventory",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3",
      description: "Cross-platform mobile app for fitness tracking",
      technologies: ["React Native", "Firebase", "Redux"]
    },
    {
      id: 3,
      title: "Data Analytics Suite",
      category: "desktop",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      description: "Enterprise-level data analytics software",
      technologies: ["Electron", "Python", "TensorFlow"]
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      description: "Comprehensive social media management platform",
      technologies: ["Vue.js", "GraphQL", "AWS"]
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Our Projects
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore our portfolio of innovative solutions and successful implementations
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter}
              className={`px-8 py-3 rounded-full capitalize text-lg transition-all duration-300 ${
                selectedFilter === filter 
                  ? 'bg-gradient-to-r from-yellow-400 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 backdrop-blur-sm'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="sync">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                variants={projectVariants}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.4 }
                }}
                className="relative group backdrop-blur-sm bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <motion.h3 
                          className="text-2xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ 
                            y: hoveredProject === project.id ? 0 : 20,
                            opacity: hoveredProject === project.id ? 1 : 0
                          }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-300 mb-4"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ 
                            y: hoveredProject === project.id ? 0 : 20,
                            opacity: hoveredProject === project.id ? 1 : 0
                          }}
                          transition={{ delay: 0.1 }}
                        >
                          {project.description}
                        </motion.p>
                        <div className="flex gap-2 flex-wrap">
                          {project.technologies.map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ 
                                opacity: hoveredProject === project.id ? 1 : 0,
                                x: hoveredProject === project.id ? 0 : -20
                              }}
                              transition={{ delay: index * 0.1 }}
                              className="px-4 py-1 bg-gradient-to-r from-yellow-400/20 to-purple-600/20 rounded-full text-yellow-400 text-sm backdrop-blur-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
