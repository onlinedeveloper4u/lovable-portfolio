import { motion } from "framer-motion";
import { Code, Briefcase, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#FDE1D3] to-[#E5DEFF]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <motion.div 
            className="mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/lovable-uploads/00c85b8d-348e-439d-b3c3-b6c5780b068f.png"
              alt="Muhammad Aqib Rafiqe"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
            />
          </motion.div>
          <motion.span 
            className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-[#8B5CF6] text-white rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Code size={16} />
            Senior Software Engineer
          </motion.span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] text-transparent bg-clip-text"
        >
          Muhammad Aqib Rafiqe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Crafting exceptional digital experiences with modern technologies and innovative solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            Get in Touch
          </motion.a>
          <motion.a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg font-medium border border-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Briefcase size={18} />
            View Experience
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="mt-16"
        >
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;