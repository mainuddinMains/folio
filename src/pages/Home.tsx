import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PROJECTS } from "@/src/constants";
import { cn } from "@/src/lib/utils";

export function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-8 mb-24 md:mb-48">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-primary mb-4 block">PORTFOLIO 2024</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-on-background mb-8">
              CRAFTING <br/>DIGITAL <br/>VELOCITY.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-4">
            <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-sm">
              High-end digital experiences focused on tonal depth, kinetic motion, and technical precision.
            </p>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="max-w-screen-2xl mx-auto px-8 space-y-24 md:space-y-48">
        {PROJECTS.map((project, index) => (
          <Link 
            key={project.id}
            to={`/project/${project.id}`}
            className="group block"
          >
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className={cn(
                "col-span-12 md:col-span-8 relative overflow-hidden bg-surface-lowest",
                index % 2 !== 0 && "md:order-2"
              )}>
                <img 
                  src={project.image} 
                  alt={project.alt}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/9] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                />
              </div>
              <div className={cn(
                "col-span-12 md:col-span-4 md:pt-12",
                index % 2 !== 0 && "md:order-1"
              )}>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-on-surface-variant block mb-4">
                  {project.number} / {project.category}
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-on-background mb-6">{project.title}</h2>
                <p className="text-on-surface-variant font-light leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 group/link">
                  <span className="text-[10px] tracking-[0.2em] font-bold text-primary uppercase">VIEW CASE STUDY</span>
                  <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover/link:translate-x-2" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Marquee Section */}
      <section className="mt-48 py-24 border-y border-outline-variant/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex gap-20 text-[6rem] md:text-[10rem] font-black text-surface-highest tracking-tighter uppercase opacity-30 select-none">
            <span>Branding</span>
            <span>•</span>
            <span>Motion</span>
            <span>•</span>
            <span>Digital</span>
            <span>•</span>
            <span>Strategy</span>
            <span>•</span>
            <span>Branding</span>
            <span>•</span>
            <span>Motion</span>
            <span>•</span>
            <span>Digital</span>
            <span>•</span>
            <span>Strategy</span>
            <span>•</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

import { cn } from "@/src/lib/utils";
