import { motion } from "framer-motion";
import { Code, Briefcase, Mail, ArrowDown } from "lucide-react";

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
    <section className="min-h-screen flex items-center justify-center px-4 py-20 md:py-0 bg-gradient-to-br from-[#FDE1D3] to-[#E5DEFF]">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/00c85b8d-348e-439d-b3c3-b6c5780b068f.png"
            alt="Muhammad Aqib Rafiqe"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
          />
        </motion.div>
        <motion.span 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-[#8B5CF6] text-white rounded-full mb-4"
        >
          <Code size={16} className="animate-bounce" />
          Senior Software Engineer
        </motion.span>
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] text-transparent bg-clip-text"
        >
          Muhammad Aqib Rafiqe
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Crafting exceptional digital experiences with modern technologies and innovative solutions.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            <Mail size={18} className="animate-bounce" />
            Get in Touch
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg font-medium border border-white/30 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Briefcase size={18} />
            View Experience
          </motion.a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mt-16"
        >
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
