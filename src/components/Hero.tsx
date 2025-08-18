
import { motion } from "framer-motion";
import { Code, Mail, Download, Briefcase, Sparkles, ArrowDown } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-gradient-hero opacity-5 animate-gradient" />
      </div>
      
      {/* Floating elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute top-32 right-20 w-3 h-3 bg-accent rounded-full opacity-40"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-32 left-20 w-1 h-1 bg-primary rounded-full opacity-80"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect mb-8 group hover:glow-effect transition-all duration-500"
        >
          <Sparkles size={18} className="text-primary animate-pulse" />
          <span className="text-sm font-medium text-foreground font-code tracking-wide">
            Senior Software Engineer – iOS, React Native, MERN
          </span>
          <Sparkles size={18} className="text-accent animate-pulse" />
        </motion.div>
        
        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 gradient-text text-shadow leading-tight"
        >
          Muhammad Aqib
          <br />
          <span className="text-5xl md:text-7xl lg:text-8xl">Rafiqe</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-light"
        >
          Bringing ideas to life across{" "}
          <span className="text-primary font-medium">web</span> and{" "}
          <span className="text-accent font-medium">mobile</span> – specializing in{" "}
          <span className="text-primary font-medium">iOS</span>,{" "}
          <span className="text-accent font-medium">React Native</span>, and{" "}
          <span className="text-primary font-medium">MERN stack</span> development.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 flex-wrap mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            <Mail size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="relative z-10">Get in Touch</span>
          </motion.a>
          
          <motion.a
            href="#cv-downloads"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-secondary text-white rounded-xl font-semibold shadow-2xl hover:shadow-accent/25 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            <Download size={20} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
            <span className="relative z-10">Download CV</span>
          </motion.a>
          
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 glass-effect text-foreground rounded-xl font-semibold shadow-xl hover:glow-effect transition-all duration-300 border-2 border-transparent hover:border-primary/30"
          >
            <Briefcase size={20} className="group-hover:rotate-12 transition-transform" />
            <span>View Projects</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-sm text-muted-foreground font-medium tracking-wide">
            Discover My Work
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full border border-primary/30 cursor-pointer hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowDown size={16} className="text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

