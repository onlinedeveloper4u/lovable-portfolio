
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

// Define default projects as a fallback
const defaultProjects = [
  {
    title: "Leaf App",
    description: "A social networking app for local communities with features like location-based services, in-app notifications, and custom calendars.",
    technologies: "Swift, SwiftUI, Firebase, MapKit",
    imageUrl: "https://placehold.co/600x400/5046e4/white?text=Leaf+App",
    link: "https://apps.apple.com/us/app/leaf-book-your-friends/id1040588046"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and payment processing.",
    technologies: "React, Node.js, MongoDB, Stripe",
    imageUrl: "https://placehold.co/600x400/e44650/white?text=E-commerce",
    link: "https://example.com/ecommerce"
  },
  {
    title: "Task Management System",
    description: "A comprehensive task management application with team collaboration features and real-time updates.",
    technologies: "React Native, Firebase, Redux",
    imageUrl: "https://placehold.co/600x400/46e450/white?text=Task+App",
    link: "https://example.com/task-app"
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

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-accent/10 text-accent-foreground rounded-full mb-4">
            <Code size={16} />
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Explore some of my recent projects and development work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-accent/10 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="mb-4">
                  <span className="text-xs font-medium bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">
                    {project.technologies}
                  </span>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <span>View Project</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
