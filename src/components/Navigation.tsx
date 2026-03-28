import { Link, useLocation } from "react-router-dom";
import { Aperture } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { name: "PROJECTS", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl shadow-[0_0_32px_rgba(184,195,255,0.08)]">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="flex items-center gap-4 group">
          <Aperture className="text-primary w-6 h-6 transition-transform group-hover:rotate-90 duration-500" />
          <span className="text-xl font-black tracking-widest text-on-background">KINETIC</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-[10px] tracking-[0.2em] font-bold transition-all duration-300",
                location.pathname === item.path 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <button className="bg-primary text-on-primary-fixed px-6 py-2.5 rounded-lg text-[10px] tracking-[0.2em] font-bold uppercase active:scale-95 transition-all hover:shadow-[0_0_20px_rgba(184,195,255,0.3)]">
          LET'S TALK
        </button>
      </div>
    </header>
  );
}

export function FloatingDock() {
  const location = useLocation();
  
  const navItems = [
    { name: "PROJECTS", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:flex hidden glass-nav px-8 py-4 rounded-full shadow-[0_0_32px_rgba(184,195,255,0.08)]">
      <div className="flex items-center gap-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "text-[10px] tracking-[0.2em] font-bold transition-all duration-300",
              location.pathname === item.path 
                ? "text-primary" 
                : "text-on-surface-variant hover:text-on-background"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
