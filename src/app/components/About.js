"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLightBulb, HiUsers, HiCpuChip, HiRocketLaunch, HiSparkles } from 'react-icons/hi2';
import Unifesto from '@/app/components/unifesto';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: HiRocketLaunch,
      title: 'Founder & CEO – unifesto',
      description: 'Leading the vision, tech, and growth of a student-focused event management platform.',
    },
    {
      icon: HiCpuChip,
      title: 'AI-First Builder',
      description: 'Blending GenAI with React, Next.js, Firebase, and more — to build fast, automate smart, and craft modern user experiences.',
    },
    {
      icon: HiLightBulb,
      title: 'Product Mindset',
      description: 'Obsessed with solving real-world campus chaos with usable, scalable solutions.',
    },
    {
      icon: HiUsers,
      title: 'Team-Driven Execution',
      description: 'Collaborating with student clubs, devs, and designers to build for scale.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I build things that matter — starting with <Unifesto />, a platform reshaping how student events are discovered, organized, and experienced.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I’m Abhinavtej — a developer-turned-founder. I started <Unifesto /> to solve a pain every student felt: scattered forms, missed events, and messy coordination.
              </p>
              <p>
                With a background in full-stack development and a drive to ship useful things, I’m focused on building clean, usable tools that actually get adopted. I care about simplicity, speed, and solving for the user.
              </p>
              <p>
                I’m also exploring how generative AI can unlock new ways of building, automating, and enhancing user experience — both in <Unifesto /> and beyond.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'Firebase', 'Tailwind', 'Gen AI', 'NLP'].map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 mt-1">
                  <highlight.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;