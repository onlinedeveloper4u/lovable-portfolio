import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-accent/10 text-accent-foreground rounded-full mb-4">
            <Mail size={16} />
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Let's connect and discuss your next project.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <a
            href="mailto:onlinedeveloper4u@gmail.com"
            className="flex flex-col items-center p-6 bg-card hover:bg-accent/5 rounded-lg transition-colors group"
          >
            <Mail className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground text-center">onlinedeveloper4u@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/onlinedeveloper4u"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-card hover:bg-accent/5 rounded-lg transition-colors group"
          >
            <Linkedin className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground text-center">Connect with me</p>
          </a>
          <a
            href="https://github.com/onlinedeveloper4u"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-card hover:bg-accent/5 rounded-lg transition-colors group"
          >
            <Github className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground text-center">View my projects</p>
          </a>
          <a
            href="https://www.fiverr.com/onlinedeveloper4u"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-card hover:bg-accent/5 rounded-lg transition-colors group"
          >
            <Globe className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Fiverr</h3>
            <p className="text-sm text-muted-foreground text-center">Hire me on Fiverr</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;