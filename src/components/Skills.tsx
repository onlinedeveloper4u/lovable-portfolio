import { motion } from "framer-motion";
import { Smartphone, Globe, Database, Code2, Zap, Palette } from "lucide-react";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillCategories = [
    {
      icon: Smartphone,
      title: "iOS Development",
      skills: ["Swift", "SwiftUI", "UIKit", "Core Data", "Combine", "Xcode"],
      color: "from-blue-500 to-purple-600",
      glowColor: "shadow-blue-500/20"
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      skills: ["React Native", "Expo", "Redux", "Navigation", "Native Modules"],
      color: "from-green-500 to-blue-500",
      glowColor: "shadow-green-500/20"
    },
    {
      icon: Database,
      title: "MERN Stack",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "GraphQL"],
      color: "from-yellow-500 to-orange-500",
      glowColor: "shadow-yellow-500/20"
    },
    {
      icon: Code2,
      title: "Frontend",
      skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/20"
    },
    {
      icon: Zap,
      title: "Backend & Tools",
      skills: ["Laravel", "Git", "AWS", "Docker", "CI/CD", "Testing"],
      color: "from-red-500 to-yellow-500",
      glowColor: "shadow-red-500/20"
    },
    {
      icon: Palette,
      title: "AI & Integration",
      skills: ["AI Integration", "Event Planning APIs", "Video Streaming", "Audio Processing"],
      color: "from-teal-500 to-cyan-500",
      glowColor: "shadow-teal-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-accent/10 text-accent-foreground rounded-full mb-4">
            <Code2 size={16} className="animate-pulse" />
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] text-transparent bg-clip-text">
            Technical Arsenal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning mobile, web, and backend technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`relative p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-transparent hover:border-accent/20 transition-all duration-300 group overflow-hidden ${category.glowColor} hover:shadow-2xl`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: skillIndex * 0.1 
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 hover:bg-accent/20 text-accent-foreground rounded-full transition-all duration-200 cursor-default"
                    >
                      {skill}
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

export default Skills;