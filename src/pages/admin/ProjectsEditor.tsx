
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { TrashIcon, PlusCircle, Save, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Default projects data
const defaultProjects = [
  {
    title: "Leaf App",
    description: "A social networking app for local communities with features like location-based services, in-app notifications, and custom calendars.",
    technologies: "Swift, SwiftUI, Firebase, MapKit",
    imageUrl: "https://placehold.co/600x400/5046e4/white?text=Leaf+App",
    link: "https://example.com/leaf-app"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and payment processing.",
    technologies: "React, Node.js, MongoDB, Stripe",
    imageUrl: "https://placehold.co/600x400/e44650/white?text=E-commerce",
    link: "https://example.com/ecommerce"
  },
  {
    title: "Task Management System",
    description: "A comprehensive task management application with team collaboration features and real-time updates.",
    technologies: "React Native, Firebase, Redux",
    imageUrl: "https://placehold.co/600x400/46e450/white?text=Task+App",
    link: "https://example.com/task-app"
  }
];

const ProjectsEditor = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Load projects from localStorage or use defaults
    const storedProjects = localStorage.getItem("portfolioProjects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    } else {
      setProjects(defaultProjects);
    }
  }, []);

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        description: "",
        technologies: "",
        imageUrl: "https://placehold.co/600x400/cccccc/333333?text=New+Project",
        link: ""
      },
    ]);
  };

  const handleRemoveProject = (index: number) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  const handleUpdateProject = (index: number, field: string, value: string) => {
    const newProjects = [...projects];
    newProjects[index] = {
      ...newProjects[index],
      [field]: value,
    };
    setProjects(newProjects);
  };

  const handleSave = () => {
    localStorage.setItem("portfolioProjects", JSON.stringify(projects));
    toast.success("Projects saved successfully!");
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
            <h1 className="text-3xl font-bold mb-2">Projects</h1>
            <p className="text-muted-foreground">Manage your portfolio projects</p>
          </div>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={handleAddProject}
              className="flex items-center gap-2"
            >
              <PlusCircle size={16} />
              Add Project
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
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Title</label>
                    <Input
                      value={project.title}
                      onChange={(e) => handleUpdateProject(index, "title", e.target.value)}
                      placeholder="e.g. Mobile App"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Technologies Used</label>
                    <Input
                      value={project.technologies}
                      onChange={(e) => handleUpdateProject(index, "technologies", e.target.value)}
                      placeholder="e.g. React, Node.js, MongoDB"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project URL</label>
                  <Input
                    value={project.link}
                    onChange={(e) => handleUpdateProject(index, "link", e.target.value)}
                    placeholder="https://example.com/project"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Image URL</label>
                  <div className="flex gap-2">
                    <Input
                      value={project.imageUrl}
                      onChange={(e) => handleUpdateProject(index, "imageUrl", e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                    <Button variant="outline" className="flex-shrink-0">
                      <Upload size={16} className="mr-2" />
                      Upload
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={project.description}
                    onChange={(e) => handleUpdateProject(index, "description", e.target.value)}
                    placeholder="Describe your project"
                    rows={4}
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveProject(index)}
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

export default ProjectsEditor;
