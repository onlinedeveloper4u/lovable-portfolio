
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Smartphone } from "lucide-react";
import leafIcon from "/lovable-uploads/00c85b8d-348e-439d-b3c3-b6c5780b068f.png";
import ombiIcon from "/lovable-uploads/3b088c36-08e3-491e-a599-587326bd45ed.png";
import creatorIcon from "@/assets/creator-app-icon.png";

// Define default projects as a fallback
const defaultProjects = [
  {
    title: "Leaf - Book Your Friends",
    description: "Planning a casual hangout or hobby meetup shouldn't feel like a full-time job. Meet Leaf – the playful, AI-powered event planner that makes organizing small group gatherings a breeze! Whether you're the friend who always hosts or just getting into event planning, Leaf keeps event scheduling, task management, and social organizing all in one place. No more juggling multiple apps or endless text chains — Leaf turns coordinating plans into part of the fun. Import events from Partiful, Luma, Eventbrite, SeatGeek, and Fandango. Smart checklists, AI-generated descriptions, group scheduler, and micro-planner assistant help you focus on the fun while Leaf handles the details.",
    technologies: "iOS, Swift, AI Integration, Event Planning, Group Scheduling",
    imageUrl: leafIcon,
    link: "https://apps.apple.com/lt/app/leaf-book-your-friends/id1040588046",
    isApp: true
  },
  {
    title: "Ombi - Preview Restaurants",
    description: "An immersive iOS & web app that lets you preview and book authentic restaurants through video. Experience the ambiance and see the food before you visit. Discover restaurants through immersive video previews that showcase the atmosphere, cuisine, and dining experience. Book tables directly through the app and make informed dining decisions with real restaurant footage.",
    technologies: "iOS, Video Streaming, Restaurant Booking, Mobile App",
    imageUrl: ombiIcon,
    link: "https://apps.apple.com/us/app/ombi-preview-restaurants/id1598753264",
    isApp: true
  },
  {
    title: "Creator Music Studio",
    description: "Your ultimate companion for music creation and production. Creator Music Studio transforms your creative process with powerful tools for composing, recording, and producing professional-quality music. Whether you're a seasoned producer or just starting your musical journey, this comprehensive studio provides everything you need to bring your musical ideas to life. Features include advanced audio recording, multi-track editing, virtual instruments, effects processing, and seamless collaboration tools.",
    technologies: "iOS, Audio Production, Music Creation, Digital Audio Workstation",
    imageUrl: creatorIcon,
    link: "https://apps.apple.com/us/app/creator-music-studio/id6445974873",
    isApp: true
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
              <div className="h-48 overflow-hidden bg-gradient-to-br from-background to-accent/5 flex items-center justify-center">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500 rounded-2xl shadow-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
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
                  <span>{project.isApp ? "App Store" : "View Project"}</span>
                  <Smartphone size={14} />
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
