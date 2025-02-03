import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

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
      <Hero />
      <About />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;