"use client";
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Unifesto from "@/app/components/unifesto";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Abhinavtej Reddy
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Founder @ <Unifesto />
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Building <Unifesto /> — a smarter, student-first platform for managing and discovering college events. From pre to post Event, we're fixing the chaos behind campus events.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://unifesto.app"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Explore Unifesto
            </a>

            <a
              href="mailto:abhinavtej@unifesto.app"
              className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
            >
              <HiMail className="w-5 h-5" />
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 pt-4"
          >
            <a
              href='https://instagram.com/abhinavtej.reddy'
              className="p-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/abhinavtej"
              className="p-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/abhinavtej"
              className="p-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;