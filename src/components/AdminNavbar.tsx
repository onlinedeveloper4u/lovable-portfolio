
import { Link, useNavigate } from "react-router-dom";
import { Home, Briefcase, User, Mail, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full border-r p-4 bg-card">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-1">Portfolio Admin</h2>
        <p className="text-sm text-muted-foreground">Manage your content</p>
      </div>
      
      <nav className="space-y-2 flex-1">
        <Link to="/admin" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors">
          <Home size={18} />
          <span>Dashboard</span>
        </Link>
        <Link to="/admin/experience" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors">
          <Briefcase size={18} />
          <span>Experience</span>
        </Link>
        <Link to="/admin/projects" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors">
          <User size={18} />
          <span>Projects</span>
        </Link>
        <Link to="/admin/contact" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors">
          <Mail size={18} />
          <span>Contact Info</span>
        </Link>
      </nav>
      
      <Button variant="ghost" className="mt-auto flex items-center gap-2" onClick={handleLogout}>
        <LogOut size={16} />
        <span>Logout</span>
      </Button>
    </div>
  );
};

export default AdminNavbar;
