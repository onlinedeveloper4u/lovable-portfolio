import { motion } from "framer-motion";
import { Code, Briefcase, Mail, ArrowDown, FileDown } from "lucide-react";
import html2pdf from 'html2pdf.js';

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

  const generateResume = () => {
    const element = document.getElementById('portfolio-content');
    const opt = {
      margin: 1,
      filename: 'Muhammad_Aqib_Rafiqe_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 md:py-0 bg-gradient-to-br from-[#FDE1D3] to-[#E5DEFF]">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
        id="portfolio-content"
      >
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
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] text-transparent bg-clip-text animate-text"
        >
          Muhammad Aqib Rafiqe
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in"
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail size={18} className="animate-bounce" />
            Get in Touch
          </motion.a>
          <motion.button
            onClick={generateResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg font-medium border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FileDown size={18} className="animate-pulse" />
            Download Resume
          </motion.button>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg font-medium border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
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
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;