import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pricingPlans = {
  monthly: [
    {
      name: 'Basic',
      price: 999,
      description: 'Perfect for small businesses and startups',
      features: [
        'Single platform development',
        'Basic UI/UX design',
        'Standard support',
        '2 revision rounds',
        'Basic analytics',
        '3 months maintenance'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: 2499,
      description: 'Ideal for growing businesses',
      features: [
        'Multi-platform development',
        'Advanced UI/UX design',
        'Priority support',
        'Unlimited revisions',
        'Advanced analytics',
        '6 months maintenance',
        'API integration',
        'Performance optimization'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 4999,
      description: 'For large-scale applications',
      features: [
        'Full-scale development',
        'Premium UI/UX design',
        '24/7 dedicated support',
        'Unlimited revisions',
        'Custom analytics',
        '12 months maintenance',
        'Advanced API integration',
        'Performance optimization',
        'Security auditing',
        'Scalability planning'
      ],
      recommended: false
    }
  ],
  yearly: [
    {
      name: 'Basic',
      price: 899,
      description: 'Perfect for small businesses and startups',
      features: [
        'Single platform development',
        'Basic UI/UX design',
        'Standard support',
        '2 revision rounds',
        'Basic analytics',
        '3 months maintenance'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: 2249,
      description: 'Ideal for growing businesses',
      features: [
        'Multi-platform development',
        'Advanced UI/UX design',
        'Priority support',
        'Unlimited revisions',
        'Advanced analytics',
        '6 months maintenance',
        'API integration',
        'Performance optimization'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 4499,
      description: 'For large-scale applications',
      features: [
        'Full-scale development',
        'Premium UI/UX design',
        '24/7 dedicated support',
        'Unlimited revisions',
        'Custom analytics',
        '12 months maintenance',
        'Advanced API integration',
        'Performance optimization',
        'Security auditing',
        'Scalability planning'
      ],
      recommended: false
    }
  ]
};

function PricingCard({ plan, billing }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${
        plan.recommended ? 'border-2 border-primary' : ''
      }`}
    >
      {plan.recommended && (
        <div className="bg-primary text-white text-center py-2">
          <span className="text-sm font-semibold">Recommended</span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-gray-600">/{billing}</span>
        </div>
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check text-primary mt-1 mr-2"></i>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className={`block text-center py-3 px-6 rounded-md transition-colors duration-200 ${
            plan.recommended
              ? 'bg-primary text-white hover:bg-opacity-90'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  );
}

function Pricing() {
  const [billing, setBilling] = useState('monthly');

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full">
              <button
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  billing === 'monthly'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setBilling('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  billing === 'yearly'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setBilling('yearly')}
              >
                Yearly
                <span className="ml-1 text-xs text-green-500">Save 10%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans[billing].map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} billing={billing} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What's included in the development process?",
                answer: "Our development process includes requirements analysis, UI/UX design, development, testing, deployment, and maintenance. We ensure complete transparency throughout the project."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Yes, you can upgrade your plan at any time. We'll help you transition smoothly to the new plan with pro-rated pricing."
              },
              {
                question: "Do you offer custom solutions?",
                answer: "Yes, we offer custom solutions tailored to your specific needs. Contact us to discuss your requirements and get a custom quote."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We provide different levels of support based on your plan, ranging from standard business hours support to 24/7 dedicated support for enterprise clients."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and find the perfect solution for your needs
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
