import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: ["123 Innovation Street", "Tech Valley, CA 94025"]
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon - Fri, 9am - 6pm"]
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["info@rksoftware.com", "support@rksoftware.com"]
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
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-4"
            variants={itemVariants}
          >
            Get in touch with us
          </motion.h1>
          <motion.p 
            className="text-xl text-center text-gray-400 mb-16"
            variants={itemVariants}
          >
            to discuss your next project
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: 'name', label: 'Full Name', type: 'text' },
                  { name: 'email', label: 'Email Address', type: 'email' },
                  { name: 'subject', label: 'Subject', type: 'text' }
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    className="relative"
                    initial={false}
                    animate={
                      focusedField === field.name || formState[field.name]
                        ? { scale: 1, y: -25 }
                        : { scale: 1, y: 0 }
                    }
                  >
                    <input
                      type={field.type}
                      name={field.name}
                      value={formState[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                      required
                    />
                    <label
                      className={`absolute left-4 transition-all duration-200 ${
                        focusedField === field.name || formState[field.name]
                          ? 'text-sm text-yellow-400'
                          : 'text-gray-400'
                      }`}
                    >
                      {field.label}
                    </label>
                  </motion.div>
                ))}

                <motion.div
                  className="relative"
                  initial={false}
                  animate={
                    focusedField === 'message' || formState.message
                      ? { scale: 1, y: -25 }
                      : { scale: 1, y: 0 }
                  }
                >
                  <textarea
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-200 ${
                      focusedField === 'message' || formState.message
                        ? 'text-sm text-yellow-400'
                        : 'text-gray-400'
                    }`}
                  >
                    Your Message
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold py-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              variants={containerVariants}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="text-4xl">{info.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-400">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Map or Additional Content */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900"
              >
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
