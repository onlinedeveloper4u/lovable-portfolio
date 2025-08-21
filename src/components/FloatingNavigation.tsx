import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, Calendar, FileDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navigationItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "projects", icon: Briefcase, label: "Projects" },
  { id: "experience", icon: Calendar, label: "Experience" },
  { id: "cv-downloads", icon: FileDown, label: "CV" },
  { id: "contact", icon: Mail, label: "Contact" },
];

const FloatingNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2"
    >
      {navigationItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="group relative"
          >
            <Button
              size="icon"
              variant={isActive ? "default" : "outline"}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "w-12 h-12 rounded-full transition-all duration-300 shadow-lg",
                "hover:scale-110 hover:shadow-xl",
                isActive && "scale-110 shadow-primary/25",
                "backdrop-blur-sm bg-background/80 border-border/50"
              )}
            >
              <Icon className={cn(
                "h-5 w-5 transition-colors",
                isActive ? "text-primary-foreground" : "text-foreground"
              )} />
            </Button>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              {item.label}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-popover border-y-4 border-y-transparent" />
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default FloatingNavigation;