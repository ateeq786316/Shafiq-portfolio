export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Graphic Design",
    items: ["Adobe Photoshop", "Canva", "Figma"]
  },
  {
    category: "Photo Editing",
    items: ["Lightroom", "Photoshop"]
  },
  {
    category: "Video Editing",
    items: ["CapCut", "Adobe Premiere Pro"]
  },
  {
    category: "Content Creation",
    items: ["YouTube Production", "Storytelling", "Scripting", "Audience Engagement"]
  }
];