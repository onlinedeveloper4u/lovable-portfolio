
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe, Phone, MessageSquare, Users, Eye, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [lastVisit, setLastVisit] = useState<string>("");

  useEffect(() => {
    // Get stored visitor count or initialize it
    const storedCount = localStorage.getItem('visitorCount');
    const count = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Increment count for this visit
    const newCount = count + 1;
    setVisitorCount(newCount);
    localStorage.setItem('visitorCount', newCount.toString());
    
    // Set last visit timestamp
    const now = new Date().toLocaleString();
    setLastVisit(now);
    localStorage.setItem('lastVisit', now);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-accent/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-accent/10 text-accent-foreground rounded-full mb-4">
            <Mail size={16} className="animate-bounce" />
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] text-transparent bg-clip-text">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss your next project. Feel free to reach out through any of these channels.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Mail,
              title: "Email",
              content: "onlinedeveloper4u@gmail.com",
              href: "mailto:onlinedeveloper4u@gmail.com"
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              content: "Connect with me",
              href: "https://www.linkedin.com/in/onlinedeveloper4u"
            },
            {
              icon: Github,
              title: "GitHub",
              content: "View my projects",
              href: "https://github.com/onlinedeveloper4u"
            },
            {
              icon: Phone,
              title: "Phone",
              content: "+923227221032",
              href: "tel:+923227221032"
            },
            {
              icon: MessageSquare,
              title: "WhatsApp",
              content: "Message me",
              href: "https://wa.me/923227221032"
            },
            {
              icon: Globe,
              title: "Skype",
              content: "live:.cid.94264000f5938ffb",
              href: "skype:live:.cid.94264000f5938ffb?chat"
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              href={item.href}
              target={item.href.startsWith('http') ? "_blank" : undefined}
              rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center p-6 bg-card hover:bg-accent/5 rounded-lg transition-all duration-300 group border border-transparent hover:border-accent/20"
            >
              <item.icon className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{item.content}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Visitor information section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-accent/10 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#58a6ff] to-[#88d1f1] text-transparent bg-clip-text">Visitor Statistics</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-card rounded-lg border border-accent/10 flex flex-col items-center"
            >
              <Users className="w-8 h-8 mb-4 text-[#58a6ff]" />
              <h4 className="font-medium mb-1">Total Visits</h4>
              <p className="text-2xl font-bold text-primary">{visitorCount}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-card rounded-lg border border-accent/10 flex flex-col items-center"
            >
              <Eye className="w-8 h-8 mb-4 text-[#D946EF]" />
              <h4 className="font-medium mb-1">Current Session</h4>
              <p className="text-sm text-muted-foreground">Active now</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-card rounded-lg border border-accent/10 flex flex-col items-center"
            >
              <Clock className="w-8 h-8 mb-4 text-[#F97316]" />
              <h4 className="font-medium mb-1">Last Visit</h4>
              <p className="text-sm text-muted-foreground">{lastVisit}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
