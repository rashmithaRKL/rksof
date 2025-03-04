import { motion } from 'framer-motion';
import AnimatedScene from '../components/3d/AnimatedScene';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatedScene />
      
      {/* Hero Section */}
      <motion.div
        className="relative z-10 container mx-auto px-4 pt-32 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-red-500"
          variants={itemVariants}
        >
          Innovative Software Solutions for Your Business
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl"
          variants={itemVariants}
        >
          We create cutting-edge web, mobile, and desktop applications that drive business growth.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-6"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-yellow-400 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        className="relative z-10 bg-gradient-to-b from-transparent to-gray-900 py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Fast Development",
                description: "Quick turnaround with quality code delivery"
              },
              {
                icon: "💡",
                title: "Innovative Solutions",
                description: "Cutting-edge technology implementation"
              },
              {
                icon: "🛠️",
                title: "Scalable Architecture",
                description: "Built to grow with your business needs"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
