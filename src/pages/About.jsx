import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://i.pravatar.cc/300?img=1',
    bio: 'With over 15 years of experience in software development and business leadership.',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: 'https://i.pravatar.cc/300?img=2',
    bio: 'Expert in cloud architecture and emerging technologies.',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: 'https://i.pravatar.cc/300?img=3',
    bio: 'Specialized in full-stack development and system architecture.',
  },
  {
    name: 'Emily Brown',
    role: 'UX Director',
    image: 'https://i.pravatar.cc/300?img=4',
    bio: 'Passionate about creating intuitive and engaging user experiences.',
  },
];

const timeline = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'RK Software Technologies was established with a vision to deliver innovative software solutions.',
  },
  {
    year: '2017',
    title: 'Global Expansion',
    description: 'Expanded operations to serve clients worldwide and opened new offices.',
  },
  {
    year: '2019',
    title: 'Innovation Award',
    description: 'Received industry recognition for innovative software solutions.',
  },
  {
    year: '2021',
    title: 'Technology Evolution',
    description: 'Adopted cutting-edge technologies and expanded service offerings.',
  },
  {
    year: '2023',
    title: 'Market Leader',
    description: 'Established as a market leader in custom software development.',
  },
];

function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-300">
              Building the future of software development with innovation and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-gray-600">
                To deliver innovative and high-quality software solutions that empower businesses 
                to achieve their digital transformation goals and drive sustainable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-gray-600">
                To be the global leader in software development, recognized for our innovation, 
                quality, and commitment to delivering exceptional value to our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex mb-8 relative"
              >
                <div className="w-24 pt-2">
                  <span className="text-xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-grow pl-8 border-l-2 border-primary">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <i className="fas fa-heart text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-gray-600">
                We are passionate about technology and delivering excellence in everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <i className="fas fa-handshake text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of integrity and transparency in all our dealings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <i className="fas fa-users text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and collaborative innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
