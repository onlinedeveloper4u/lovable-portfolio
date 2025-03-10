
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { TrashIcon, PlusCircle, Save } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// In a real application, this would come from a backend
// Default experiences that match the existing data
const defaultExperiences = [
  {
    title: "Software Engineer (Freelance)",
    company: "Self-employed",
    period: "October 2024 - Present",
    description: "iOS development using Swift, SwiftUI, and UIKit. MERN stack development and cross-platform solutions.",
  },
  {
    title: "MERN Stack Developer",
    company: "iParagons",
    period: "November 2022 - Present",
    description: "Full-stack web development using MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    title: "iOS Developer",
    company: "iParagons",
    period: "November 2020 - Present",
    description: "Developed the Leaf app, implementing features such as location views, in-app notifications, and custom community calendar.",
  },
  {
    title: "Laravel Developer (Internship)",
    company: "Ranglerz",
    period: "2020",
    description: "Contributed to web textile portal project using Laravel framework.",
  },
];

const ExperienceEditor = () => {
  const [experiences, setExperiences] = useState<any[]>([]);

  useEffect(() => {
    // Load experiences from localStorage or use defaults
    const storedExperiences = localStorage.getItem("portfolioExperiences");
    if (storedExperiences) {
      setExperiences(JSON.parse(storedExperiences));
    } else {
      setExperiences(defaultExperiences);
    }
  }, []);

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "",
        company: "",
        period: "",
        description: "",
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  };

  const handleUpdateExperience = (index: number, field: string, value: string) => {
    const newExperiences = [...experiences];
    newExperiences[index] = {
      ...newExperiences[index],
      [field]: value,
    };
    setExperiences(newExperiences);
  };

  const handleSave = () => {
    localStorage.setItem("portfolioExperiences", JSON.stringify(experiences));
    toast.success("Experience data saved successfully!");
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
            <h1 className="text-3xl font-bold mb-2">Experience</h1>
            <p className="text-muted-foreground">Manage your work experience</p>
          </div>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={handleAddExperience}
              className="flex items-center gap-2"
            >
              <PlusCircle size={16} />
              Add Experience
            </Button>
            <Button 
              onClick={handleSave}
              className="flex items-center gap-2"
            >
              <Save size={16} />
              Save All
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Title</label>
                    <Input
                      value={exp.title}
                      onChange={(e) => handleUpdateExperience(index, "title", e.target.value)}
                      placeholder="e.g. Senior Developer"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company</label>
                    <Input
                      value={exp.company}
                      onChange={(e) => handleUpdateExperience(index, "company", e.target.value)}
                      placeholder="e.g. Tech Company Inc."
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Time Period</label>
                  <Input
                    value={exp.period}
                    onChange={(e) => handleUpdateExperience(index, "period", e.target.value)}
                    placeholder="e.g. January 2020 - Present"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={exp.description}
                    onChange={(e) => handleUpdateExperience(index, "description", e.target.value)}
                    placeholder="Describe your responsibilities and achievements"
                    rows={4}
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveExperience(index)}
                    className="flex items-center gap-2"
                  >
                    <TrashIcon size={16} />
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperienceEditor;
