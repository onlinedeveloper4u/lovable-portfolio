
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Linkedin, Github, Globe, Phone, MessageSquare, Users, Eye, Clock, Activity, MapPin, BarChart } from "lucide-react";
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
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [lastVisit, setLastVisit] = useState<string>("");
  const [location, setLocation] = useState<string>("Unknown");

  useEffect(() => {
    // Load contact info from localStorage if available
    const storedContactInfo = localStorage.getItem("portfolioContactInfo");
    if (storedContactInfo) {
      setContactInfo(JSON.parse(storedContactInfo));
    }

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

    // Get location from browser if available (timezone as a proxy for location)
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone) {
        const region = timezone.split('/')[1]?.replace(/_/g, ' ') || timezone;
        setLocation(region);
      }
    } catch (error) {
      console.error('Error getting timezone:', error);
    }

    // Show welcome toast
    toast.success("Thanks for visiting! 👋", {
      description: `You are visitor #${newCount}`,
      duration: 4000,
    });
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

        {/* Enhanced Visitor information section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 pt-10 border-t border-accent/10 max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#0EA5E9] via-[#58a6ff] to-[#88d1f1] text-transparent bg-clip-text">
              Visitor Analytics
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Real-time statistics about your visit to my portfolio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#0c1c2c] to-[#182d49] rounded-2xl border border-[#2a4363] shadow-lg flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTM2NWQiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#58a6ff] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <Users className="w-12 h-12 mb-6 text-[#58a6ff]" />
              <h4 className="font-medium mb-2 text-[#a8c7fa]">TOTAL VISITS</h4>
              <p className="text-4xl font-bold text-white mb-2">
                {visitorCount.toLocaleString()}
              </p>
              <div className="mt-3 px-3 py-1 bg-[#1d4ed8]/20 rounded-full text-xs font-medium text-[#93c5fd] flex items-center">
                <Activity size={12} className="mr-1" /> Active tracking
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#3a1349] to-[#561e70] rounded-2xl border border-[#6e3191] shadow-lg flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiM2YjIxYTgiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#D946EF] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <MapPin className="w-12 h-12 mb-6 text-[#D946EF]" />
              <h4 className="font-medium mb-2 text-[#e9d5ff]">LOCATION</h4>
              <p className="text-2xl font-bold text-white mb-2">{location}</p>
              <div className="mt-3 px-3 py-1 bg-[#a21caf]/20 rounded-full text-xs font-medium text-[#e9d5ff] flex items-center">
                <BarChart size={12} className="mr-1" /> Geolocation data
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#7a2800] to-[#a63c02] rounded-2xl border border-[#c85000] shadow-lg flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNjMjQxMDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#F97316] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <Clock className="w-12 h-12 mb-6 text-[#F97316]" />
              <h4 className="font-medium mb-2 text-[#fed7aa]">LAST VISIT</h4>
              <p className="text-xl font-bold text-white mb-2 text-center">{lastVisit}</p>
              <div className="mt-3 px-3 py-1 bg-[#ea580c]/20 rounded-full text-xs font-medium text-[#fed7aa] flex items-center">
                <Eye size={12} className="mr-1" /> Session tracking
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-10 text-sm text-muted-foreground"
          >
            <p>Analytics data stored locally and not shared with third parties.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
