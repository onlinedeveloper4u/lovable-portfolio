
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

// Define default experiences as a fallback
const defaultExperiences = [
  {
    title: "Software Engineer (Freelance)",
    company: "Self-employed",
    period: "October 2024 - Present",
    description: "iOS development using Swift, SwiftUI, and UIKit. MERN stack development and cross-platform solutions.",
  },
  {
    title: "MERN Stack Developer",
    company: "iParagons",
    period: "November 2022 - Present",
    description: "Full-stack web development using MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    title: "iOS Developer",
    company: "iParagons",
    period: "November 2020 - Present",
    description: "Developed the Leaf app, implementing features such as location views, in-app notifications, and custom community calendar.",
  },
  {
    title: "Laravel Developer (Internship)",
    company: "Ranglerz",
    period: "2020",
    description: "Contributed to web textile portal project using Laravel framework.",
  },
];

const Experience = () => {
  const [experiences, setExperiences] = useState(defaultExperiences);

  useEffect(() => {
    // Load experiences from localStorage if available
    const storedExperiences = localStorage.getItem("portfolioExperiences");
    if (storedExperiences) {
      setExperiences(JSON.parse(storedExperiences));
    }
  }, []);

  return (
    <section id="experience" className="py-20 px-4 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-accent/10 text-accent-foreground rounded-full mb-4">
            <Briefcase size={16} />
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Journey</h2>
        </motion.div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 group">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-accent-foreground flex items-center gap-2">
                    <Calendar size={14} />
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
              <div className="absolute left-0 top-0 h-full w-px bg-border md:left-1/2 md:-ml-px"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
