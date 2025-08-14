
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
    title: "Leaf - Book Your Friends",
    description: "The playful, AI-powered event planner that makes organizing small group gatherings a breeze! Import events, manage RSVPs, and coordinate plans with smart checklists and group scheduling.",
    technologies: "iOS, Swift, AI Integration, Event Planning",
    imageUrl: "https://placehold.co/600x400/22c55e/white?text=Leaf+App",
    link: "https://apps.apple.com/lt/app/leaf-book-your-friends/id1040588046"
  },
  {
    title: "Ombi - Preview Restaurants",
    description: "An immersive iOS & web app that lets you preview and book authentic restaurants through video. Experience the ambiance and see the food before you visit.",
    technologies: "iOS, Video Streaming, Restaurant Booking",
    imageUrl: "https://placehold.co/600x400/f97316/white?text=Ombi+App",
    link: "https://apps.apple.com/us/app/ombi-preview-restaurants/id1598753264"
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
