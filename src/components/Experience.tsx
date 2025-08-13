
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, Code2 } from "lucide-react";

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
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-background via-accent/5 to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-accent/20 to-primary/20 text-primary rounded-full mb-6 border border-primary/20">
            <Briefcase size={16} className="animate-pulse" />
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text">
            Career Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional growth and key achievements in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-full"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:-ml-3 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full animate-pulse"></div>
                </div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                    className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Company icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={14} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <Calendar size={14} className="text-accent" />
                      <span className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Achievement badge */}
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <Award size={12} />
                        <span className="font-medium">Key Contributor</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
