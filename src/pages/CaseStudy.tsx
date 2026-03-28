import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { PROJECTS } from "@/src/constants";

export function CaseStudy() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <section className="px-8 max-w-screen-2xl mx-auto mb-24">
        <div className="mb-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-bold">CASE STUDY / 2024</span>
          <h1 className="text-5xl md:text-[5.5rem] font-black tracking-tighter leading-[0.9] mt-4 uppercase">
            {project.title.split(' ')[0]} <br/> {project.title.split(' ')[1]}
          </h1>
        </div>
        <div className="relative w-full aspect-[21/9] overflow-hidden rounded-lg group">
          <img 
            src={project.image} 
            alt={project.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
        </div>
      </section>

      <section className="px-8 max-w-screen-2xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <aside className="md:col-span-3 space-y-12">
            <div>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-on-surface-variant font-bold mb-4">Role</span>
              <p className="text-sm font-medium">Creative Direction<br/>Visual Identity<br/>Motion Design</p>
            </div>
            <div>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-on-surface-variant font-bold mb-4">Client</span>
              <p className="text-sm font-medium">Lumina Systems Inc.</p>
            </div>
            <div>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-on-surface-variant font-bold mb-4">Timeline</span>
              <p className="text-sm font-medium">4 Months / Q1-Q2</p>
            </div>
          </aside>

          <article className="md:col-span-7 space-y-12">
            <p className="text-2xl md:text-3xl leading-snug font-light text-on-background">
              Redefining the digital interaction layer for high-precision scientific instruments through a lens of <span className="text-primary italic">cinematic utility</span> and minimal aesthetic reduction.
            </p>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              <p>
                In this project, we explored the boundary between tool and environment. The brief required a visual system that felt invisible until needed, utilizing deep tonal shifts to represent complex data hierarchies without the visual clutter of traditional dashboard elements.
              </p>
              <p>
                The result is a monochromatic workspace punctuated by electric blue accents, where light itself becomes the primary navigational cursor. Every element was stripped to its core essence, leaving only the kinetic energy of the user's intent.
              </p>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-black tracking-widest text-[10px] uppercase rounded-lg hover:shadow-[0_0_32px_rgba(184,195,255,0.3)] transition-all active:scale-95">
                Launch Project Experience
              </button>
              <button className="px-10 py-5 border border-outline-variant/20 text-on-background font-black tracking-widest text-[10px] uppercase rounded-lg hover:bg-surface-container transition-colors">
                View Documentation
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className="px-8 max-w-screen-2xl mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[800px]">
          <div className="md:col-span-2 md:row-span-2 bg-surface-container rounded-lg overflow-hidden relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3xZkjyKXCSjvxtmmlSi27hEf8cgoK_kOXXnJnV08tbGSMM7hGl07-n14Me2m-SmSN34ulGrt1y33HhDlTS48uFIR8CGPR1roe1P7BSuxVRHa8q5uECqYkksrHslTCHqSBZdM88pmRc6dWBRhsBzUUQ7fsnRvdmDx8TJYuxwC4vGob4PMf0htemKq486P9VAn_MsYeNbjcgOQDR21_W4JnrNDsMG8LMw0B7biZZAYq8NxwKoOyTyTY2Yxc2KRIecD_S38FOhlGoAMW" 
              alt="Detail" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>
          <div className="md:col-span-2 bg-surface-lowest rounded-lg p-12 flex flex-col justify-end relative overflow-hidden">
            <div className="z-10 relative">
              <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-bold">Process</span>
              <h3 className="text-2xl font-black uppercase mt-2">Iterative Reduction</h3>
            </div>
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_#b8c3ff_0%,_transparent_70%)]"></div>
          </div>
          <div className="md:col-span-1 bg-surface-highest rounded-lg overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcNWQVK1IaWLrZRuXuWTnvjlEzqG2nVL4ggqcF4F1JkRATx20dZLrRt-4MWrMGd8Pyy67T4YGxpx6IVwIpGDQEtqtjBxGIlWOjgl9ieav0TLr0LUvLEP3KqUCr61NseTP5mj3muXLxZbIuc6PbWWY1RlVPOVkE_Sz0Uuyl7SG5Th2-dDMZAUXiKxh4W0D1rCF6EehZLzJSoipe6DFgqnO_doEGsK9VAgZ7lNYGoBCGkT1jBNFCp7c4zzUt099RvJ53si_5SiZ29Fv9" 
              alt="Light test" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-1 bg-surface-container rounded-lg flex items-center justify-center p-8 text-center border border-outline-variant/10">
            <p className="text-[10px] leading-relaxed tracking-widest text-on-surface-variant uppercase font-bold">
              "The design is not just what it looks like, it's how it moves."
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
