import { Link } from 'react-router-dom';
import AnimatedScene from '../components/3d/AnimatedScene';

function Home() {
  return (
    <div className="relative">
      {/* Hero Section with 3D Animation */}
      <section className="relative min-h-screen flex items-center">
        <AnimatedScene />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
              Innovative Software Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 slide-up">
              We create cutting-edge web, mobile, and desktop applications that drive business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link to="/projects" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Applications */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <i className="fas fa-globe text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-3">Web Applications</h3>
              <p className="text-gray-600">
                Modern, responsive web applications built with cutting-edge technologies.
              </p>
            </div>

            {/* Mobile Applications */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <i className="fas fa-mobile-alt text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-3">Mobile Applications</h3>
              <p className="text-gray-600">
                Native and cross-platform mobile apps for iOS and Android.
              </p>
            </div>

            {/* Desktop Applications */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <i className="fas fa-desktop text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-3">Desktop Applications</h3>
              <p className="text-gray-600">
                Powerful desktop software solutions for Windows, macOS, and Linux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose RK Software?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Innovation */}
            <div className="text-center">
              <i className="fas fa-lightbulb text-4xl text-secondary mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge solutions using the latest technologies
              </p>
            </div>

            {/* Quality */}
            <div className="text-center">
              <i className="fas fa-check-circle text-4xl text-secondary mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                High-quality code and exceptional user experience
              </p>
            </div>

            {/* Support */}
            <div className="text-center">
              <i className="fas fa-headset text-4xl text-secondary mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600">
                24/7 dedicated support and maintenance
              </p>
            </div>

            {/* Experience */}
            <div className="text-center">
              <i className="fas fa-star text-4xl text-secondary mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text-gray-600">
                Years of experience in software development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our software solutions can help your business grow.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
