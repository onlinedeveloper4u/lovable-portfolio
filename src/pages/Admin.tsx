
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AdminNavbar from "@/components/AdminNavbar";
import { Toaster } from "sonner";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex">
      <Toaster position="top-right" />
      <div className="w-64 hidden md:block">
        <AdminNavbar />
      </div>
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
