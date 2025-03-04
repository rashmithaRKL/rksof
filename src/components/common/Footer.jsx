import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "/services" },
        { label: "Mobile Apps", href: "/services" },
        { label: "Desktop Software", href: "/services" },
        { label: "UI/UX Design", href: "/services" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "Instagram", href: "https://instagram.com" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="inline-block mb-6">
              <motion.h2 
                className="text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 text-transparent bg-clip-text"
                whileHover={{ scale: 1.05 }}
              >
                RK Software
              </motion.h2>
            </Link>
            <p className="text-gray-400 mb-6">
              Creating innovative software solutions that drive business growth and success.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'github'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`fab fa-${social} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RK Software. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;
