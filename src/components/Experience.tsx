
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Briefcase, Calendar, MapPin, Star, Code, Users } from "lucide-react";

// Default experience data
const defaultExperience = [
  {
    id: 1,
    title: "Software Engineer (Freelance)",
    company: "Self-employed",
    location: "Remote",
    period: "October 2024 - Present",
    description: "iOS development using Swift, SwiftUI, and UIKit. MERN stack development and cross-platform solutions.",
    type: "Key Contributor",
    technologies: ["Swift", "SwiftUI", "UIKit", "MERN Stack", "React Native"],
    color: "from-blue-500 to-purple-600",
    icon: Code
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    company: "iParagons",
    location: "Remote",
    period: "November 2022 - Present",
    description: "Full-stack web development using MongoDB, Express.js, React.js, and Node.js.",
    type: "Key Contributor",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    color: "from-green-500 to-teal-600",
    icon: Code
  },
  {
    id: 3,
    title: "iOS Developer",
    company: "iParagons",
    location: "Remote",
    period: "November 2020 - Present",
    description: "Developed the Leaf app, implementing features such as location views, in-app notifications, and custom community calendar.",
    type: "Key Contributor",
    technologies: ["Swift", "iOS", "Location Services", "Push Notifications", "Calendar Integration"],
    color: "from-purple-500 to-pink-600",
    icon: Users
  },
  {
    id: 4,
    title: "Laravel Developer (Internship)",
    company: "Ranglerz",
    location: "Remote",
    period: "2020",
    description: "Contributed to web textile portal project using Laravel framework.",
    type: "Key Contributor",
    technologies: ["Laravel", "PHP", "MySQL", "Web Development"],
    color: "from-orange-500 to-red-600",
    icon: Code
  }
];

const Experience = () => {
  const [experience, setExperience] = useState(defaultExperience);

  useEffect(() => {
    // Load experience from localStorage if available
    const storedExperience = localStorage.getItem("portfolioExperience");
    if (storedExperience) {
      setExperience(JSON.parse(storedExperience));
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-accent/10 text-accent-foreground rounded-full mb-4">
            <Briefcase size={16} className="animate-pulse" />
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] text-transparent bg-clip-text">
            Career Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional growth and key achievements in software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20 hidden md:block" />
          
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="relative mb-12 last:mb-0 group"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-br ${job.color} border-4 border-background shadow-lg hidden md:block z-10`}
              />
              
              {/* Experience Card */}
              <div className="md:ml-20 bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-transparent hover:border-accent/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent/10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-3 mb-3 md:mb-0">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${job.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <job.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="font-medium">{job.company}</span>
                        <MapPin size={14} />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Star size={14} className="text-accent" />
                  <span className="text-sm font-medium text-accent">{job.type}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {job.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: techIndex * 0.1 
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 hover:bg-accent/20 text-accent-foreground rounded-full transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
