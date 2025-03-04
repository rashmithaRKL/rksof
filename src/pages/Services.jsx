import { motion } from 'framer-motion';
import { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: "🌐",
      title: "Web Applications",
      description: "Custom web applications that scale with your business",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Real-time Applications"
      ],
      color: "from-red-600 to-yellow-500"
    },
    {
      icon: "📱",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile solutions",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Apps",
        "Mobile UI/UX Design"
      ],
      color: "from-yellow-400 to-red-500"
    },
    {
      icon: "🖥️",
      title: "Desktop Applications",
      description: "Powerful desktop software solutions",
      features: [
        "Windows Applications",
        "macOS Applications",
        "Cross-platform Solutions",
        "System Integration"
      ],
      color: "from-black via-red-600 to-yellow-500"
    }
  ];

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
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-4"
          variants={itemVariants}
        >
          Comprehensive software solutions
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-gray-400 mb-16"
          variants={itemVariants}
        >
          tailored to your business needs
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-xl bg-gradient-to-br ${service.color} transform transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-200 mb-6">{service.description}</p>
              
              <motion.ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: hoveredService === index ? 1 : 0.7,
                      x: hoveredService === index ? 0 : -10
                    }}
                    transition={{ delay: featureIndex * 0.1 }}
                  >
                    <span className="text-yellow-400">→</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                className="mt-8 px-6 py-3 bg-black bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight
                ]
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
