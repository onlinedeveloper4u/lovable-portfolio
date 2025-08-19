
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('ios-specialty');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-background">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-accent/20 rounded-full"
        />
        
        {/* Gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 100, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 glass-effect text-accent-foreground rounded-full text-sm font-medium border border-accent/20">
            <Sparkles className="w-4 h-4 animate-pulse text-accent" />
            Senior Software Engineer
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none"
        >
          <span className="block text-foreground">Muhammad</span>
          <span className="block gradient-text pulse-glow">Aqib Rafiqe</span>
        </motion.h1>

        {/* Specialty areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8"
        >
          <div className="flex items-center gap-2 text-lg md:text-xl text-muted-foreground">
            <Smartphone className="w-5 h-5 text-blue-400" />
            <span>iOS Development</span>
          </div>
          <div className="flex items-center gap-2 text-lg md:text-xl text-muted-foreground">
            <Globe className="w-5 h-5 text-green-400" />
            <span>MERN Stack</span>
          </div>
          <div className="flex items-center gap-2 text-lg md:text-xl text-muted-foreground">
            <Code2 className="w-5 h-5 text-purple-400" />
            <span>React Native</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Bringing ideas to life across web and mobile platforms with cutting-edge technology and beautiful design
        </motion.p>

        {/* Floating tech icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6 md:gap-12 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.3, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="p-6 glass-effect rounded-2xl floating-animation border border-blue-500/20"
            style={{ animationDelay: '0s' }}
          >
            <Smartphone className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3, rotate: -360 }}
            transition={{ duration: 0.6 }}
            className="p-6 glass-effect rounded-2xl floating-animation border border-green-500/20"
            style={{ animationDelay: '2s' }}
          >
            <Globe className="w-8 h-8 text-green-400" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="p-6 glass-effect rounded-2xl floating-animation border border-purple-500/20"
            style={{ animationDelay: '4s' }}
          >
            <Code2 className="w-8 h-8 text-purple-400" />
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button 
            size="lg" 
            onClick={scrollToNext}
            className="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 transform hover:scale-105 glow-primary"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore My Specialties
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

