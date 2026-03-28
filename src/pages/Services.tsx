import { motion } from "motion/react";
import { Aperture, ArrowRight } from "lucide-react";

export function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 px-8 max-w-screen-2xl mx-auto"
    >
      <section className="mb-32">
        <div className="flex flex-col gap-2 mb-6">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">CAPABILITIES</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] max-w-4xl text-on-background">
            BENDING LIGHT. <br/> SHAPING CODE.
          </h2>
        </div>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mt-12">
          We bridge the gap between abstract vision and tactile digital reality through a specialized suite of services designed for the next era of the web.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* UI/UX */}
        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container p-12 flex flex-col justify-between min-h-[500px] rounded-lg">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALJ8iMd5H5Kkqp7jiDbx5bVX8068DJnRGo9rP96pw-_PwZRdryZrP1kEt_Nl6CJxChFjyGPWkEPUoqbqYARFYW6DDBpP2lonTHD2Qx0C7SqcnkSAikdD7QRH6go7hGmRBiADP5GXZEzc9KukSaTSvCL8Zp_5GF0aiqGF75w8EKVKIbLYM3K188srYPpB4k_KFnWWIysbyQ_0p6Wdhdg4y2nBdBoSflviUR_yLeikFep3GIG2q3QOE01wYJnv8hoDJzVk_ECq08GQ41" 
              alt="UI/UX" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <span className="text-[10px] tracking-[0.3em] font-bold text-primary mb-4 block">01 / DESIGN</span>
            <h3 className="text-4xl font-bold tracking-tight text-on-background mb-6">UI/UX DESIGN</h3>
            <p className="max-w-md text-on-surface-variant leading-relaxed text-lg">
              Creating immersive interfaces that prioritize sensory feedback and fluid movement. Our design philosophy centers on the kinetic relationship between user and screen.
            </p>
          </div>
          <div className="relative z-10 flex gap-4 mt-8 flex-wrap">
            {["Interaction Models", "Visual Systems", "Prototyping"].map(tag => (
              <span key={tag} className="px-3 py-1 text-[10px] tracking-widest bg-surface-highest/50 backdrop-blur-md rounded-full border border-outline-variant/20 uppercase font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Branding */}
        <div className="md:col-span-4 group bg-surface-container p-10 flex flex-col justify-end min-h-[500px] border-l border-outline-variant/10 rounded-lg">
          <div className="mb-auto">
            <Aperture className="w-10 h-10 text-primary" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.3em] font-bold text-primary mb-4 block">02 / IDENTITY</span>
            <h3 className="text-3xl font-bold tracking-tight text-on-background mb-4">BRANDING</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Defining the soul of digital entities through typography, motion, and tonal depth.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[10px] tracking-widest font-bold text-on-background group-hover:text-primary transition-colors uppercase">
              EXPLORE METHOD <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Web Dev */}
        <div className="md:col-span-12 group relative bg-surface-lowest border border-outline-variant/10 p-12 md:p-20 flex flex-col md:flex-row gap-12 items-center rounded-lg">
          <div className="flex-1 order-2 md:order-1">
            <span className="text-[10px] tracking-[0.3em] font-bold text-primary mb-4 block">03 / EXECUTION</span>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-background mb-8">WEB DEVELOPMENT</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-10">
              High-performance engineering that translates complex design into seamless digital experiences. We specialize in bespoke React architectures and high-fidelity motion implementation.
            </p>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {["Next.js & React", "Creative Coding", "WebGL / Three.js", "Performance Optimization"].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm tracking-wide text-on-background/80">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-surface-highest overflow-hidden rounded-xl order-1 md:order-2">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEKjyCzLzVVdbzWZyZkOyvVDzUpCGZVAvZHlRkUixMSAkczuaAOOIiCgA6FU1s4hNoI52IozFbgkeUFGi69s-a-3i1bPPzkKfU2xyZztkeh6-iXhQq_gaBEVO4pyPfSEdOAbdhE19zKV-QA0Puxbns5QOxe93l98FRRtkrRe-PlhHFIdTeZ_igI3JzfbtAcqI8en6lIhUCkSp1Tf_HXEeyJHWWk8qFHn6DVIjTj15Bhk2aytb9RDBj_DbVrWkR2HM9eFYhscwpq35d" 
              alt="Web Dev" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>

      <section className="mt-48 py-32 text-center border-t border-outline-variant/10">
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-on-background mb-12">HAVE A PROJECT IN MIND?</h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="px-12 py-5 bg-gradient-to-br from-primary to-primary-container rounded-lg text-on-primary-fixed font-black tracking-widest text-[10px] uppercase hover:shadow-[0_0_40px_rgba(184,195,255,0.2)] transition-all">
            START A CONVERSATION
          </button>
          <button className="px-12 py-5 border border-outline-variant/20 rounded-lg text-on-background font-bold tracking-widest text-[10px] uppercase hover:bg-surface-container transition-colors">
            DOWNLOAD CAPABILITIES
          </button>
        </div>
      </section>
    </motion.div>
  );
}
