import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Github, Linkedin, MapPin, Phone, Mail, Twitter } from 'lucide-react';

// Custom Kaggle icon using SVG for better visual consistency
const KaggleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth={2}>
    <path d="M4 5v14h4v-9l5 9h4l-5-9 5-5h-4l-5 5v-5z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/louayfj', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/louayfaraj84608', label: 'X (Twitter)' },
    { icon: KaggleIcon, href: 'https://www.kaggle.com/louayfaraj', label: 'Kaggle' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/louayfaraj', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'About Me', href: '#about-me' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-xl p-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BarChart2 className="w-8 h-8 text-primary-400" />
                <span className="text-xl font-bold gradient-text">
                  LouayAnalyst
                </span>
              </div>
              <p className="text-gray-300">
                Transforming data into actionable insights for better business decisions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bangkok, Thailand</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>louayfaraj41@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+66 (065) 552-0168</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass-effect p-2 rounded-lg hover:text-primary-400 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} LouayAnalyst. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;