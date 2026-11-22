export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  type: string;
  cover: string;
  intro: string;
  role: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "after-hours",
    number: "01",
    title: "After Hours",
    category: "EVENT / PHOTOGRAPHY",
    year: "2026",
    type: "Photography",
    cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1800&q=85",
    intro: "A study of live energy, fleeting expressions and the atmosphere that exists between the stage and the crowd.",
    role: ["Photography", "Visual direction", "Selection & edit"],
    gallery: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=85"
    ]
  },
  {
    slug: "the-form",
    number: "02",
    title: "The Form",
    category: "BRAND / FILM",
    year: "2026",
    type: "Cinematography",
    cover: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=85",
    intro: "A cinematic visual exploration of shape, material and movement, designed to give a product a distinct point of view.",
    role: ["Cinematography", "Editing", "Colour"],
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=85"
    ]
  },
  {
    slug: "quiet-presence",
    number: "03",
    title: "Quiet Presence",
    category: "PORTRAIT / PHOTO",
    year: "2025",
    type: "Photography",
    cover: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1800&q=85",
    intro: "Portraits built around natural light, honest expressions and the character found in understated moments.",
    role: ["Portrait photography", "Art direction", "Retouching"],
    gallery: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1800&q=85"
    ]
  },
  {
    slug: "visual-noise",
    number: "04",
    title: "Visual Noise",
    category: "DESIGN / ART DIRECTION",
    year: "2025",
    type: "Graphic Design",
    cover: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85",
    intro: "An experimental visual direction exploring type, contrast and composition across a flexible graphic language.",
    role: ["Graphic design", "Typography", "Art direction"],
    gallery: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1800&q=85"
    ]
  }
];
