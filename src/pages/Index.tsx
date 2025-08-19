
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import CVDownloads from "../components/CVDownloads";
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

  return (
    <main className="bg-background text-foreground">
      <Toaster position="top-right" />
      
      {/* Admin button (only shows if authenticated) */}
      {isAuthenticated() && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link to="/admin">
            <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      )}
      
      <Hero />
      <About />
      <Projects />
      <Experience />
      <CVDownloads />
      <Contact />
    </main>
  );
};

export default Index;
