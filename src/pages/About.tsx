import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";

export function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <section className="max-w-screen-2xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <span className="block text-[10px] tracking-[0.2em] uppercase text-primary mb-4 font-bold">ESTABLISHED 2018 / THE ARCHITECT</span>
            <h2 className="text-[3.5rem] md:text-[5rem] leading-[0.9] font-black tracking-tighter text-on-background mb-12">
              I CAPTURE THE <span className="text-surface-highest">KINETIC</span> ENERGY OF LIGHT AND SPACE.
            </h2>
            <div className="max-w-xl">
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Based at the intersection of digital craft and visual storytelling. I specialize in building immersive environments that prioritize emotion over decoration. My approach is reductive—stripping away the noise to find the soul of the project.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 aspect-[4/5] bg-surface-lowest overflow-hidden relative group rounded-lg">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBWn7ERHTF1H9DPVMtzItj3vFzO3SYciEk-MSQbzqK8Qo6-ezkSm88vUnWY3WHdZKsSoz1SEBX-LJdMqoHUE5EYWjGJDelvnBBDsMgXcG7ZPHknoQUwF__rLnIvfczayk-s_64Hgqmv35ZZuWwInTqz_s96r_8tlsZymne1R9WekiOVwL_wfzBMWcQHL3Rq82JPjS3xXodSiVpx8LdosWS_V21PixDv-BJfQj7nRxRs9aPx70e7lQfm6aMGYNxW62JvpH3vTEqFLPA" 
              alt="Portrait" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-8 mb-32">
        <div className="mb-16">
          <span className="block text-[10px] tracking-[0.2em] uppercase text-primary mb-2 font-bold">SERVICES</span>
          <h3 className="text-3xl font-bold tracking-tighter uppercase">CORE EXPERTISE</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-outline-variant/10">
          <div className="bg-surface-container p-12 aspect-square flex flex-col justify-between">
            <span className="text-primary text-4xl font-light">01</span>
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Visual Architecture</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Defining structural hierarchy and spatial relationships in digital interfaces.</p>
            </div>
          </div>
          <div className="bg-surface-highest p-12 aspect-square flex flex-col justify-between">
            <span className="text-primary text-4xl font-light">02</span>
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Kinetic Systems</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Developing motion languages that respond intuitively to user interaction.</p>
            </div>
          </div>
          <div className="bg-surface-container p-12 aspect-square flex flex-col justify-between">
            <span className="text-primary text-4xl font-light">03</span>
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Surface Design</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Crafting deep, tonal layers and light-based UI elements for premium experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-8">
        <div className="bg-surface-lowest grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden">
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <span className="block text-[10px] tracking-[0.2em] uppercase text-primary mb-4 font-bold">INQUIRIES</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-none">START THE<br/>CONVERSATION</h2>
            <p className="text-on-surface-variant mb-12 max-w-sm">I’m currently accepting new projects for Q3 2024. Reach out for a consultation on your next digital venture.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-full group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-on-background group-hover:text-on-primary-fixed" />
                </div>
                <span className="font-bold tracking-tight">STUDIO@KINETIC.ROOM</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-full group-hover:bg-primary transition-colors">
                  <MapPin className="w-5 h-5 text-on-background group-hover:text-on-primary-fixed" />
                </div>
                <span className="font-bold tracking-tight">BERLIN, GERMANY</span>
              </div>
            </div>
          </div>
          <div className="p-12 md:p-24 border-l border-outline-variant/10">
            <form className="space-y-12">
              <div className="group">
                <label className="block text-[10px] tracking-widest text-on-surface-variant uppercase mb-2 group-focus-within:text-primary transition-colors font-bold">Your Name</label>
                <input className="w-full bg-transparent border-none p-0 text-xl font-medium focus:ring-0 placeholder-surface-highest" placeholder="Alexander Ross" type="text"/>
                <div className="h-px w-full bg-surface-highest mt-4 group-focus-within:bg-primary transition-colors"></div>
              </div>
              <div className="group">
                <label className="block text-[10px] tracking-widest text-on-surface-variant uppercase mb-2 group-focus-within:text-primary transition-colors font-bold">Email Address</label>
                <input className="w-full bg-transparent border-none p-0 text-xl font-medium focus:ring-0 placeholder-surface-highest" placeholder="alex@studio.com" type="email"/>
                <div className="h-px w-full bg-surface-highest mt-4 group-focus-within:bg-primary transition-colors"></div>
              </div>
              <div className="group">
                <label className="block text-[10px] tracking-widest text-on-surface-variant uppercase mb-2 group-focus-within:text-primary transition-colors font-bold">Project Details</label>
                <textarea className="w-full bg-transparent border-none p-0 text-xl font-medium focus:ring-0 placeholder-surface-highest resize-none" placeholder="Briefly describe your vision..." rows={3}></textarea>
                <div className="h-px w-full bg-surface-highest mt-4 group-focus-within:bg-primary transition-colors"></div>
              </div>
              <button className="w-full py-6 bg-primary text-on-primary-fixed font-black tracking-widest uppercase text-[10px] hover:shadow-[0_0_40px_rgba(184,195,255,0.2)] transition-all" type="submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
