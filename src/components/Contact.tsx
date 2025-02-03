import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe, Phone, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

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
            Let's connect and discuss your next project. Feel free to reach out through any of these channels.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:onlinedeveloper4u@gmail.com"
            className="flex flex-col items-center p-6 bg-card hover:bg-accent/5 rounded-lg transition-colors group"
          >
            <Mail className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground text-center">onlinedeveloper4u@gmail.com</p>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/onlinedeveloper4u"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-card hover:bg-accent/5 rounded-lg transition-colors group"
          >
            <Linkedin className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground text-center">Connect with me</p>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/onlinedeveloper4u"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-card hover:bg-accent/5 rounded-lg transition-colors group"
          >
            <Github className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground text-center">View my projects</p>
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-6 bg-card hover:bg-accent/5 rounded-lg transition-colors group"
          >
            <Phone className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground text-center">+923227221032</p>
          </motion.div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/923227221032"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-card hover:bg-accent/5 rounded-lg transition-colors group"
          >
            <MessageSquare className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm text-muted-foreground text-center">Message me</p>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="skype:live:.cid.94264000f5938ffb?chat"
            className="flex flex-col items-center p-6 bg-card hover:bg-accent/5 rounded-lg transition-colors group"
          >
            <Globe className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Skype</h3>
            <p className="text-sm text-muted-foreground text-center">live:.cid.94264000f5938ffb</p>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="mailto:onlinedeveloper4u@gmail.com">
              Send me an email
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;