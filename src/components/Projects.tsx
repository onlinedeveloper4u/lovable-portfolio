
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

// Define default projects as a fallback
const defaultProjects = [
  {
    title: "Leaf - Book Your Friends",
    description: "The playful, AI-powered event planner that makes organizing small group gatherings a breeze! Import events, manage RSVPs, and coordinate plans with smart checklists and group scheduling.",
    technologies: "iOS, Swift, AI Integration, Event Planning",
    imageUrl: "https://placehold.co/600x400/22c55e/white?text=Leaf+App",
    link: "https://apps.apple.com/lt/app/leaf-book-your-friends/id1040588046"
  },
  {
    title: "Ombi - Preview Restaurants",
    description: "An immersive iOS & web app that lets you preview and book authentic restaurants through video. Experience the ambiance and see the food before you visit.",
    technologies: "iOS, Video Streaming, Restaurant Booking",
    imageUrl: "https://placehold.co/600x400/f97316/white?text=Ombi+App",
    link: "https://apps.apple.com/us/app/ombi-preview-restaurants/id1598753264"
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
