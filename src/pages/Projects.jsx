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
      description: "Modern e-commerce solution with real-time inventory",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore our portfolio
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          of successful projects and innovative solutions
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter}
              className={`px-6 py-2 rounded-full capitalize ${
                selectedFilter === filter 
                  ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Link to={`/project/${project.id}`}>
                  <div className="relative overflow-hidden rounded-xl aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex gap-2">
                          {project.technologies.map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ 
                                opacity: hoveredProject === project.id ? 1 : 0,
                                x: hoveredProject === project.id ? 0 : -20
                              }}
                              transition={{ delay: index * 0.1 }}
                              className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-sm"
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
