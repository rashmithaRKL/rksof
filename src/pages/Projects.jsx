import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    image: 'https://picsum.photos/seed/ecommerce/600/400',
    description: 'A full-featured e-commerce platform with advanced features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    client: 'Global Retail Inc.'
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'mobile',
    image: 'https://picsum.photos/seed/fitness/600/400',
    description: 'Mobile app for tracking workouts and health metrics.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    client: 'FitLife Solutions'
  },
  {
    id: 3,
    title: 'Inventory Management System',
    category: 'desktop',
    image: 'https://picsum.photos/seed/inventory/600/400',
    description: 'Desktop application for managing inventory and sales.',
    technologies: ['Electron', 'SQLite', 'TypeScript'],
    client: 'Warehouse Pro'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    category: 'web',
    image: 'https://picsum.photos/seed/dashboard/600/400',
    description: 'Analytics dashboard for social media management.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL'],
    client: 'Social Analytics Co.'
  },
  {
    id: 5,
    title: 'Real Estate App',
    category: 'mobile',
    image: 'https://picsum.photos/seed/realestate/600/400',
    description: 'Property listing and management mobile application.',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    client: 'Property Connect'
  },
  {
    id: 6,
    title: 'Video Editing Suite',
    category: 'desktop',
    image: 'https://picsum.photos/seed/video/600/400',
    description: 'Professional video editing software for content creators.',
    technologies: ['C++', 'Qt', 'FFmpeg'],
    client: 'Creative Studios'
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Applications' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'desktop', name: 'Desktop Software' }
];

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/projects/${project.id}`}
            className="btn bg-white text-primary hover:bg-gray-100"
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Client:</span> {project.client}
        </p>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  );

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio of successful projects and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
