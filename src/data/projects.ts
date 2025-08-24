export interface Project {
  id: string;
  type: "Video" | "Design";
  title: string;
  tools: string[];
  thumb: string;
  videoUrl?: string;
  instagramUrl?: string;
  images?: string[];
  summary: string;
  details: string[];
}

export const projects: Project[] = [
  {
    id: "proj1",
    type: "Video",
    title: "Cinematic Product Reel",
    tools: ["Premiere Pro", "CapCut"],
    thumb: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600",
    instagramUrl: "https://www.instagram.com/mshafiq.rajput786/reel/C1T7s20IhxD/",
    summary: "Fast-paced, story-led reel with color grading and SFX.",
    details: [
      "Objective: boost engagement",
      "Role: editing, grading, SFX", 
      "Result: strong retention"
    ]
  },
  {
    id: "proj2", 
    type: "Design",
    title: "Brand Poster Series",
    tools: ["Photoshop", "Figma"],
    thumb: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    summary: "Bold typographic posters for a launch.",
    details: [
      "Objective: event visibility",
      "Role: design & layout"
    ]
  },
  {
    id: "proj3",
    type: "Video", 
    title: "Automotive Review Edit",
    tools: ["CapCut", "Premiere Pro"],
    thumb: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Technical review with dynamic transitions and graphics.",
    details: [
      "Objective: educate viewers", 
      "Role: full post-production",
      "Result: increased subscriber retention"
    ]
  },
  {
    id: "proj4",
    type: "Design",
    title: "Social Media Kit",
    tools: ["Canva", "Photoshop"],
    thumb: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    summary: "Complete brand identity for social platforms.",
    details: [
      "Objective: brand consistency",
      "Role: visual identity design"
    ]
  },
  {
    id: "proj5",
    type: "Video",
    title: "Cooking Tutorial Series", 
    tools: ["CapCut", "Premiere Pro"],
    thumb: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Step-by-step cooking videos with clear instruction flow.",
    details: [
      "Objective: educational content",
      "Role: editing, graphics, timing"
    ]
  },
  {
    id: "proj6",
    type: "Design",
    title: "Tech Review Thumbnails",
    tools: ["Photoshop", "Figma"],
    thumb: "https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    summary: "Eye-catching thumbnails for tech review videos.",
    details: [
      "Objective: improve click-through rates",
      "Role: thumbnail design & optimization"
    ]
  }
];