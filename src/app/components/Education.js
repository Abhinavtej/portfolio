"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiAcademicCap, HiStar, HiBookOpen } from "react-icons/hi";

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const educationHistory = [
    {
      degree: "B.Tech in Computer Science - AI & ML",
      school: "Malla Reddy University",
      period: "2022 - 2026",
      score: "GPA: 8.99 (Till 5th Semester)",
      description:
        "Focused on Artificial Intelligence, Machine Learning, and Full Stack Web Development.",
      coursework: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Data Structures",
        "Python Programming",
        "Full Stack Web Development",
      ],
      achievements: [
        "President of the IE Cell",
        "Incharge of Centre for Innovation and Entrepreneurship",
        "Organized technical summits, workshops and hackathons",
      ],
    },
    {
      degree: "Intermediate - MPC",
      school: "Narayana Junior College, Vijayawada",
      period: "2020 - 2022",
      score: "Percentage: 89.2%",
      description:
        "Completed intermediate education with a strong foundation in Mathematics, Physics, and Chemistry.",
      coursework: ["Mathematics", "Physics", "Chemistry"],
    },
    {
      degree: "SSC",
      school: "Sri Chaitanya High School, Vijayawada",
      period: "2019 - 2020",
      score: "CGPA: 10.0",
      description:
        "Excelled in high school with a perfect CGPA and active participation in academic events.",
      coursework: ["Mathematics", "Science", "English"],
    },
  ];

  const certifications = [
    {
      name: "Develop GenAI Apps with Gemini and Streamlit.",
      issuer: "Google Cloud ",
      date: "May 2024",
    },
    {
      name: "Responsive Web Design",
      issuer: "Google Cloud ",
      date: "May 2024",
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "March 2025",
    },
    {
      name: "Programming in Java",
      issuer: "NPTEL",
      date: "May 2024",
    },
    {
      name: "City of Moreton Bay - Entrepreneurship and Innovation Job Simulation",
      issuer: "Forage",
      date: "April 2025",
    },
    {
      name: "NEC '24 Basic Track - Top 50",
      issuer: "E-Cell - IIT Bombay",
      date: "March 2025",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey driven by curiosity, passion for technology, and continuous learning.
          </p>
        </motion.div>

        {/* Education Timeline */}
        {educationHistory.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white rounded-lg shadow-md p-8 mb-10"
          >
            <div className="flex items-start space-x-4 mb-6">
              <HiAcademicCap className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                <p className="text-blue-600 text-lg font-semibold">{edu.school}</p>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mt-1">
                  <span>{edu.period}</span>
                  <span className="font-medium">{edu.score}</span>
                </div>
                <p className="text-gray-700 mt-4 mb-4">{edu.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Achievements only for B.Tech */}
              {edu.achievements && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <HiStar className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Coursework */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <HiBookOpen className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {cert.name}
                </h4>
                <p className="text-blue-600 font-medium">{cert.issuer}</p>
                <p className="text-gray-600 text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
