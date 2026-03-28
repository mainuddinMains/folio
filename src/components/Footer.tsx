import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-surface-lowest w-full py-20 px-8 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <span className="text-lg font-bold text-on-background tracking-widest">KINETIC</span>
          <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-on-surface-variant">© 2024 THE KINETIC DARKROOM. ALL RIGHTS RESERVED.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
          {["PROJECTS", "SERVICES", "ABOUT", "CONTACT"].map((item) => (
            <Link
              key={item}
              to={item === "PROJECTS" ? "/" : `/${item.toLowerCase()}`}
              className="text-[10px] tracking-[0.2em] uppercase font-bold text-on-surface-variant hover:text-on-background transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex gap-6">
          <div className="w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center text-primary">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
          </div>
          <div className="w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center text-primary">
            <span className="w-2 h-2 bg-primary rounded-full rotate-45"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
