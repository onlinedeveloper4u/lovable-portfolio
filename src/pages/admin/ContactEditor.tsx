
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Save, Mail, Linkedin, Github, Globe, Phone, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Default contact info that matches the existing data
const defaultContactInfo = {
  email: "onlinedeveloper4u@gmail.com",
  linkedin: "https://www.linkedin.com/in/onlinedeveloper4u",
  github: "https://github.com/onlinedeveloper4u",
  phone: "+923227221032",
  whatsapp: "https://wa.me/923227221032",
  skype: "live:.cid.94264000f5938ffb"
};

const ContactEditor = () => {
  const [contactInfo, setContactInfo] = useState(defaultContactInfo);

  useEffect(() => {
    // Load contact info from localStorage or use defaults
    const storedContactInfo = localStorage.getItem("portfolioContactInfo");
    if (storedContactInfo) {
      setContactInfo(JSON.parse(storedContactInfo));
    }
  }, []);

  const handleUpdate = (field: string, value: string) => {
    setContactInfo({
      ...contactInfo,
      [field]: value,
    });
  };

  const handleSave = () => {
    localStorage.setItem("portfolioContactInfo", JSON.stringify(contactInfo));
    toast.success("Contact information saved successfully!");
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Contact Information</h1>
            <p className="text-muted-foreground">Update your contact details</p>
          </div>
          <Button 
            onClick={handleSave}
            className="flex items-center gap-2"
          >
            <Save size={16} />
            Save Changes
          </Button>
        </div>
      </motion.div>

      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail size={16} />
                Email Address
              </label>
              <Input
                value={contactInfo.email}
                onChange={(e) => handleUpdate("email", e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Linkedin size={16} />
                LinkedIn Profile
              </label>
              <Input
                value={contactInfo.linkedin}
                onChange={(e) => handleUpdate("linkedin", e.target.value)}
                placeholder="https://www.linkedin.com/in/yourprofile"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Github size={16} />
                GitHub Profile
              </label>
              <Input
                value={contactInfo.github}
                onChange={(e) => handleUpdate("github", e.target.value)}
                placeholder="https://github.com/yourusername"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Phone size={16} />
                Phone Number
              </label>
              <Input
                value={contactInfo.phone}
                onChange={(e) => handleUpdate("phone", e.target.value)}
                placeholder="+1234567890"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MessageSquare size={16} />
                WhatsApp
              </label>
              <Input
                value={contactInfo.whatsapp}
                onChange={(e) => handleUpdate("whatsapp", e.target.value)}
                placeholder="https://wa.me/1234567890"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Globe size={16} />
                Skype ID
              </label>
              <Input
                value={contactInfo.skype}
                onChange={(e) => handleUpdate("skype", e.target.value)}
                placeholder="your.skype.id"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactEditor;
