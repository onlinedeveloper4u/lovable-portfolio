
import { motion } from "framer-motion";
import { Code, Briefcase, Mail, Download } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 md:py-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1117] border border-[#30363d] mb-6"
        >
          <Code size={20} className="text-[#58a6ff]" />
          <span className="text-gray-200 font-medium">Senior Software Engineer</span>
          <Code size={20} className="text-[#58a6ff]" />
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#58a6ff] via-[#88d1f1] to-[#58a6ff] text-transparent bg-clip-text animate-text"
        >
          Muhammad Aqib Rafiqe
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          iOS Developer | MERN Stack Developer | Building innovative mobile and web solutions with Swift, SwiftUI, React, and Node.js
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 flex-wrap"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#58a6ff] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <motion.div
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail size={18} />
            </motion.div>
            Get in Touch
          </motion.a>
          
          <motion.a
            href="#cv-downloads"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#22c55e] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Download size={18} />
            </motion.div>
            Download CV
          </motion.a>
          
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d1117] text-gray-200 rounded-lg font-medium border border-[#30363d] shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Briefcase size={18} />
            </motion.div>
            View Experience
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

