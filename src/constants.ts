export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const PROJECTS: Project[] = [
  {
    id: "nebulous-core",
    number: "01",
    category: "BRANDING",
    title: "NEBULOUS CORE",
    description: "A complete visual identity system for a futuristic architectural firm specializing in orbital habitats.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9mPpR-TEHeRXgOSZsxcehikYUORvcT13o3-39YGfcPKI97ulkoBEfMpobJVAfVy27B72f-d-n7bPpce5BkNgBJsRjzjDxCYEisvbT8s8NnlZURUVb-z-n2gtmxo4LoZhWMluRFDBpqGTHidg_R6TjFC6Y1QYfJp-A5iHQHhUJFKSmDqhoAoelbM3JNE-hg7f7haWjOTo3wAR_s1iBM1LtyztQ0yEka4QQhmzxzpHjVGDAei2uqop6aBDmEv0ayySVuur_uiXwYf3",
    alt: "Abstract 3D digital art with flowing iridescent purple and blue silk-like textures"
  },
  {
    id: "synthetic-flow",
    number: "02",
    category: "INTERACTION",
    title: "SYNTHETIC FLOW",
    description: "Experimental UI/UX design for a next-generation music production interface utilizing spatial computing.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA08atZB-Qc_Eghh4YzxYxTAdhnDVCumdtt8SUCM54W75tiYr7olaF1DM663-7cOyDrhG0xyR69yvAfq84Wxb7XJI8T01VdXY4cxuas08CzucAKwBvQEPEQPd42CbXiFnHI01DxBjXcPIZNJZeGtMhM-hj5sWN_TWNMkLHXApjlOUKc9VuA7oehlfD6FSyUksCFPBVpdRctv_Tp0gRJEW1FevVHBSH9Nwp_mZborVUk4yXuBU7dpWS1nLeZsmkKgOAXuniH1kNK1kPB",
    alt: "Retro-futuristic computer hardware with neon blue and violet lighting"
  },
  {
    id: "obsidian-engine",
    number: "03",
    category: "DEVELOPMENT",
    title: "OBSIDIAN ENGINE",
    description: "High-performance rendering engine optimized for web-based 3D visualizations and interactive data.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClxTdP1WXPmXSM0JP4L_oKbjnXryuhTNdrorCttvBS01C8XkHtX-Hg0d9WPgBUXVMh6Y6BdTW6PCWtmOn8PN8NIsZR7T939V4wH2RGFK65XCy_hugz9BpKHycJXnz672RUyRZ3y43G-07SG_WClo3AdLfcGd53q0RBZe3OyimLlVriBix-qTHfl4zVf2EUTI9QUUvbR-ooUZsvrki_rHjVVjVQNVjR5qK78ngIRRXjnVJGzXGSqCchQnFT2mxWu9XPZmtU6XlI-yMs",
    alt: "Close-up of a high-end laptop on a minimalist desk at night"
  }
];
