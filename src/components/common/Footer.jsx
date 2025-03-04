import { Link } from 'react-router-dom';

const navigation = {
  main: [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: 'fab fa-facebook',
    },
    {
      name: 'Instagram',
      href: '#',
      icon: 'fab fa-instagram',
    },
    {
      name: 'Twitter',
      href: '#',
      icon: 'fab fa-twitter',
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: 'fab fa-linkedin',
    },
  ],
};

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">RK</span>
              <span className="text-xl font-semibold text-white">Software</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Delivering innovative software solutions for web, mobile, and desktop applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@rksoftware.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Tech Street, Silicon Valley, CA 94025</p>
            </div>
            {/* Social Links */}
            <div className="mt-6">
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`${item.icon} text-2xl`} aria-hidden="true" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} RK Software Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
