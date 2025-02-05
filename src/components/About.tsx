
import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Layers } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[#8B5CF6] text-white rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] text-transparent bg-clip-text">
            Professional Background
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I am a Senior Software Engineer with extensive experience in modern development tools and technologies. Currently working as a freelance developer, I specialize in iOS development using Swift, SwiftUI, and UIKit, as well as full-stack development with the MERN stack and React Native for cross-platform mobile applications.
            </p>
            <p className="text-lg text-muted-foreground">
              At iParagons, I've contributed significantly to the development of the Leaf app and various web applications, implementing key features and enhancing user experiences through innovative solutions.
            </p>
          </div>
          <div className="space-y-6">
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-[#E5DEFF] to-[#FFDEE2]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#8B5CF6]">Core Expertise</h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Code2 className="w-5 h-5 text-[#F97316]" />
                  <span>iOS Development (Swift, SwiftUI, UIKit)</span>
                </motion.li>
                <motion.li 
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Globe className="w-5 h-5 text-[#0EA5E9]" />
                  <span>MERN Stack Development</span>
                </motion.li>
                <motion.li 
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Smartphone className="w-5 h-5 text-[#D946EF]" />
                  <span>React Native Development</span>
                </motion.li>
                <motion.li 
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Layers className="w-5 h-5 text-[#8B5CF6]" />
                  <span>Cross-platform Development</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
