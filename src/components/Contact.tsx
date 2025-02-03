import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent-foreground rounded-full mb-4">
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
          className="flex justify-center space-x-6"
        >
          <a
            href="https://www.linkedin.com/in/onlinedeveloper4u"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@example.com"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;