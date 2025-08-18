
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink, Github, Smartphone, Globe, Users, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Default projects data
const defaultProjects = [
  {
    id: 1,
    title: "Leaf - Book Your Friends",
    description: "Planning a casual hangout or hobby meetup shouldn't feel like a full-time job. Meet Leaf – the playful, AI-powered event planner that makes organizing small group gatherings a breeze! Whether you're the friend who always hosts or just getting into event planning, Leaf keeps event scheduling, task management, and social organizing all in one place. No more juggling multiple apps or endless text chains — Leaf turns coordinating plans into part of the fun. Import events from Partiful, Luma, Eventbrite, SeatGeek, and Fandango. Smart checklists, AI-generated descriptions, group scheduler, and micro-planner assistant help you focus on the fun while Leaf handles the details.",
    image: "/lovable-uploads/0535b3ff-2532-4ceb-9b7d-02e62f7af27a.png",
    technologies: ["iOS", "Swift", "AI Integration", "Event Planning", "Group Scheduling"],
    icon: Users,
    color: "from-green-500 to-teal-600",
    links: {
      demo: "https://apps.apple.com/lt/app/leaf-book-your-friends/id1040588046",
      github: null
    }
  },
  {
    id: 2,
    title: "Ombi - Preview Restaurants",
    description: "An immersive iOS & web app that lets you preview and book authentic restaurants through video. Experience the ambiance and see the food before you visit. Discover restaurants through immersive video previews that showcase the atmosphere, cuisine, and dining experience. Book tables directly through the app and make informed dining decisions with real restaurant footage.",
    image: "/lovable-uploads/24e71ac5-ca00-4833-89e1-cd14ba31993b.png",
    technologies: ["iOS", "Video Streaming", "Restaurant Booking", "Mobile App"],
    icon: Globe,
    color: "from-orange-500 to-red-600",
    links: {
      demo: "https://apps.apple.com/us/app/ombi-preview-restaurants/id1598753264",
      github: null
    }
  },
  {
    id: 3,
    title: "Creator Music Studio",
    description: "Your ultimate companion for music creation and production. Creator Music Studio transforms your creative process with powerful tools for composing, recording, and producing professional-quality music. Whether you're a seasoned producer or just starting your musical journey, this comprehensive studio provides everything you need to bring your musical ideas to life. Features include advanced audio recording, multi-track editing, virtual instruments, effects processing, and seamless collaboration tools.",
    image: "/lovable-uploads/49782510-2ca3-4464-acd4-d75f002421ba.png",
    technologies: ["iOS", "Audio Production", "Music Creation", "Digital Audio Workstation"],
    icon: Music,
    color: "from-purple-500 to-pink-600",
    links: {
      demo: "https://apps.apple.com/us/app/creator-music-studio/id6445974873",
      github: null
    }
  }
];

const Projects = () => {
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    // Load projects from localStorage if available
    const storedProjects = localStorage.getItem("portfolioProjects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-accent/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-accent/10 text-accent-foreground rounded-full mb-4">
            <Smartphone size={16} className="animate-bounce" />
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] text-transparent bg-clip-text">
            Projects & Applications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent projects and development work showcasing modern mobile and web solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="overflow-hidden border-transparent hover:border-accent/20 transition-all duration-300 bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-accent/10">
                <CardContent className="p-0">
                  <div className="lg:flex lg:items-stretch">
                    {/* Project Image */}
                    <div className="lg:w-1/3 relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-64 lg:h-full"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                        
                        {/* Floating Icon */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.2,
                            type: "spring",
                            stiffness: 200
                          }}
                          className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-br ${project.color} text-white shadow-lg`}
                        >
                          <project.icon size={20} />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <motion.h3 
                          className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-accent transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        
                        <p className="text-muted-foreground mb-4 text-sm lg:text-base leading-relaxed line-clamp-4 lg:line-clamp-none">
                          {project.description}
                        </p>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
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

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {project.links.demo && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              variant="default" 
                              size="sm" 
                              className="group/btn"
                              asChild
                            >
                              <a 
                                href={project.links.demo} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <Smartphone size={16} />
                                App Store
                                <motion.div
                                  whileHover={{ x: 2 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ExternalLink size={14} />
                                </motion.div>
                              </a>
                            </Button>
                          </motion.div>
                        )}
                        
                        {project.links.github && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              variant="outline" 
                              size="sm" 
                              asChild
                            >
                              <a 
                                href={project.links.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <Github size={16} />
                                Code
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
