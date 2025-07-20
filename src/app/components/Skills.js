"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGooglecloud,
  SiAmazonaws,
  SiAmazonwebservices
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    {
      label: "Frontend",
      stack: [
        { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "React", icon: SiReact, color: "text-blue-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      ],
    },
    {
      label: "Backend",
      stack: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Express.js", icon: SiNodedotjs, color: "text-gray-800" },
        { name: "Python", icon: SiPython, color: "text-blue-500" },
        { name: "Flask", icon: SiFlask, color: "text-gray-700" },
        { name: "PHP", icon: SiPhp, color: "text-indigo-700" },
        { name: "Java", icon: FaJava, color: "text-red-600" },
      ],
    },
    {
      label: "Database & Cloud",
      stack: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "text-blue-500" },
      ],
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Quick Learning",
    "Adaptability",
    "Attention to Detail",
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tools and technologies I use to build fast, modern web products.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {group.label}
              </h3>
              <div className="space-y-4">
                {group.stack.map((skill, j) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.1 + j * 0.05,
                    }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                    <span className="font-medium text-gray-900">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.05 }}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm hover:bg-blue-200 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;