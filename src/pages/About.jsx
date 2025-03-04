import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "3", label: "Office Locations" }
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      bio: "15+ years of software development experience"
    },
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      bio: "Expert in full-stack development"
    },
    {
      name: "Michael Chen",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3",
      bio: "Passionate about creating beautiful user experiences"
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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-6"
            variants={itemVariants}
          >
            Building the future of software development
          </motion.h1>
          <motion.p 
            className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            with innovation and excellence
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To deliver innovative and high-quality software solutions that empower businesses 
                to achieve their digital transformation goals through cutting-edge technology 
                and exceptional service.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To be the global leader in software development, recognized for our innovation, 
                quality, and commitment to delivering exceptional value to our clients through 
                transformative digital solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-xl aspect-square mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-gray-300">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-yellow-400">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "🎯",
                title: "Excellence",
                description: "We strive for excellence in everything we do"
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "We embrace new technologies and creative solutions"
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "We maintain the highest standards of professional integrity"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
