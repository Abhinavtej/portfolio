"use client";
import { motion } from 'framer-motion';
import { HiMail, HiHeart } from 'react-icons/hi';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {icon: FaInstagram, href: 'https://instagram.com/abhinavtej.reddy', label: 'Instagram'},
    { icon: FaGithub, href: 'https://github.com/abhinavtejreddy', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/abhinavtejreddy', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Intro */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                Abhinavtej Reddy
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Building products with intent. Currently working on <span className="text-blue-400 font-medium">Unifesto</span> to simplify campus events for everyone.
              </p>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <HiMail className="w-4 h-4 text-blue-400" />
                <span>abhinavtej@unifesto.app</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Social</h4>
              <div className="flex space-x-4 mb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Abhinavtej Reddy
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Built with <HiHeart className="w-4 h-4 text-red-500 mx-1" /> by Unifesto
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;