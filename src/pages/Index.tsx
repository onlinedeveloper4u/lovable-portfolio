
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Smartphone, Globe, Code2 } from "lucide-react";
import Hero from "../components/Hero";
import SpecialtySection from "../components/SpecialtySection";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { Toaster } from "sonner";
import { isAuthenticated } from "@/lib/auth";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      
      if (link?.hash) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // iOS Development data
  const iosSkills = [
    { name: "Swift", level: 95 },
    { name: "SwiftUI", level: 90 },
    { name: "UIKit", level: 88 },
    { name: "Core Data", level: 85 },
    { name: "Combine", level: 82 },
    { name: "Xcode", level: 92 }
  ];

  const iosProjects = [
    {
      id: 1,
      title: "Leaf - Book Your Friends",
      description: "AI-powered event planner for small group gatherings with smart checklists, group scheduler, and micro-planner assistant. Import events from multiple platforms.",
      image: "/lovable-uploads/0535b3ff-2532-4ceb-9b7d-02e62f7af27a.png",
      technologies: ["iOS", "Swift", "AI Integration", "Event Planning", "Group Scheduling"],
      links: {
        demo: "https://apps.apple.com/lt/app/leaf-book-your-friends/id1040588046"
      }
    },
    {
      id: 2,
      title: "Ombi - Preview Restaurants",
      description: "Immersive iOS app that lets you preview and book authentic restaurants through video. Experience the ambiance and see the food before you visit.",
      image: "/lovable-uploads/24e71ac5-ca00-4833-89e1-cd14ba31993b.png",
      technologies: ["iOS", "Video Streaming", "Restaurant Booking", "Mobile App"],
      links: {
        demo: "https://apps.apple.com/us/app/ombi-preview-restaurants/id1598753264"
      }
    }
  ];

  // MERN Stack data
  const mernSkills = [
    { name: "MongoDB", level: 90 },
    { name: "Express.js", level: 92 },
    { name: "React.js", level: 95 },
    { name: "Node.js", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "REST APIs", level: 90 }
  ];

  const mernProjects = [
    {
      id: 3,
      title: "Portfolio Management System",
      description: "Full-stack web application with admin panel for managing portfolio content, projects, and contact information with real-time updates.",
      image: "/lovable-uploads/df3c2462-8c16-4857-af52-f04431d42543.png",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Admin Panel"],
      links: {
        demo: "https://onlinedeveloper4u.vercel.app/"
      }
    },
    {
      id: 4,
      title: "Web Textile Portal",
      description: "E-commerce platform for textile industry with inventory management, order processing, and customer portal built with modern MERN stack.",
      image: "/lovable-uploads/3b088c36-08e3-491e-a599-587326bd45ed.png",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "E-commerce"],
      links: {}
    }
  ];

  // React Native data
  const reactNativeSkills = [
    { name: "React Native", level: 92 },
    { name: "Expo", level: 88 },
    { name: "Redux", level: 85 },
    { name: "Navigation", level: 90 },
    { name: "Native Modules", level: 80 },
    { name: "TypeScript", level: 85 }
  ];

  const reactNativeProjects = [
    {
      id: 5,
      title: "Creator Music Studio",
      description: "Cross-platform music creation app with advanced audio recording, multi-track editing, virtual instruments, and collaboration tools.",
      image: "/lovable-uploads/49782510-2ca3-4464-acd4-d75f002421ba.png",
      technologies: ["React Native", "Audio Production", "Music Creation", "Cross-platform"],
      links: {
        demo: "https://apps.apple.com/us/app/creator-music-studio/id6445974873"
      }
    },
    {
      id: 6,
      title: "Cross-Platform Event App",
      description: "React Native implementation of the Leaf event planning features with cross-platform compatibility and native performance.",
      image: "/lovable-uploads/00c85b8d-348e-439d-b3c3-b6c5780b068f.png",
      technologies: ["React Native", "Cross-platform", "Event Planning", "Mobile"],
      links: {}
    }
  ];

  return (
    <main className="bg-background text-foreground">
      <Toaster position="top-right" />
      
      {/* Admin button (only shows if authenticated) */}
      {isAuthenticated() && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link to="/admin">
            <Button size="icon" variant="secondary" className="rounded-full shadow-lg glass-effect">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      )}
      
      <Hero />
      
      <SpecialtySection
        id="ios-specialty"
        title="iOS Development"
        icon={<Smartphone className="w-8 h-8" />}
        description="Native iOS applications with Swift, SwiftUI, and UIKit. Creating seamless user experiences with performance and design excellence."
        skills={iosSkills}
        projects={iosProjects}
        gradient="from-blue-500 to-cyan-600"
      />
      
      <SpecialtySection
        id="mern-specialty"
        title="MERN Stack"
        icon={<Globe className="w-8 h-8" />}
        description="Full-stack web development with MongoDB, Express.js, React.js, and Node.js. Building scalable and modern web applications."
        skills={mernSkills}
        projects={mernProjects}
        gradient="from-green-500 to-emerald-600"
      />
      
      <SpecialtySection
        id="react-native-specialty"
        title="React Native"
        icon={<Code2 className="w-8 h-8" />}
        description="Cross-platform mobile development with React Native. One codebase, multiple platforms, native performance."
        skills={reactNativeSkills}
        projects={reactNativeProjects}
        gradient="from-purple-500 to-violet-600"
      />
      
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
