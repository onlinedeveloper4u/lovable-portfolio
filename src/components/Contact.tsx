
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Linkedin, Github, Globe, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";

// Default contact info as a fallback
const defaultContactInfo = {
  email: "onlinedeveloper4u@gmail.com",
  linkedin: "https://www.linkedin.com/in/onlinedeveloper4u",
  github: "https://github.com/onlinedeveloper4u",
  phone: "+923227221032",
  whatsapp: "https://wa.me/923227221032",
  skype: "live:.cid.94264000f5938ffb"
};

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(defaultContactInfo);

  useEffect(() => {
    // Load contact info from localStorage if available
    const storedContactInfo = localStorage.getItem("portfolioContactInfo");
    if (storedContactInfo) {
      setContactInfo(JSON.parse(storedContactInfo));
    }
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

  // Create contact items array from the contactInfo object
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      content: contactInfo.email,
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Connect with me",
      href: contactInfo.linkedin
    },
    {
      icon: Github,
      title: "GitHub",
      content: "View my projects",
      href: contactInfo.github
    },
    {
      icon: Phone,
      title: "Phone",
      content: contactInfo.phone,
      href: `tel:${contactInfo.phone}`
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      content: "Message me",
      href: contactInfo.whatsapp
    },
    {
      icon: Globe,
      title: "Skype",
      content: contactInfo.skype,
      href: `skype:${contactInfo.skype}?chat`
    }
  ];

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
          {contactItems.map((item, index) => (
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

      </div>
    </section>
  );
};

export default Contact;
