
// Simple auth utility functions
// In a production app, this would use a proper authentication system

export const isAuthenticated = (): boolean => {
  return localStorage.getItem("isAuthenticated") === "true";
};

export const login = (username: string, password: string): boolean => {
  // This is just for demo purposes
  // In a real app, this would validate against a backend
  if (username === "admin" && password === "password123") {
    localStorage.setItem("isAuthenticated", "true");
    return true;
  }
  return false;
};

export const logout = (): void => {
  localStorage.removeItem("isAuthenticated");
};
