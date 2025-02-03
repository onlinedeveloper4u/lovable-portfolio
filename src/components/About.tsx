import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent-foreground rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Background</h2>
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
              I am a Senior Software Engineer with extensive experience in modern development tools and technologies. Currently working as a freelance developer, I specialize in iOS development using Swift, SwiftUI, and UIKit, as well as full-stack development with the MERN stack.
            </p>
            <p className="text-lg text-muted-foreground">
              At iParagons, I've contributed significantly to the development of the Leaf app and various web applications, implementing key features and enhancing user experiences through innovative solutions.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-accent/5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>iOS Development (Swift, SwiftUI, UIKit)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>MERN Stack Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Cross-platform Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Modern Web Technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;