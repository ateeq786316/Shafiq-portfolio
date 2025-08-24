export interface Service {
  title: string;
  points: string[];
  icon: string;
}

export const services: Service[] = [
  {
    title: "🎬 Video Editing",
    icon: "Video",
    points: [
      "Professional cuts & pacing to maintain audience engagement",
      "Seamless transitions & cinematic effects", 
      "Branded titles, captions, and subtitles for accessibility",
      "Sound design, mixing & voice-over synchronization",
      "Advanced color correction & grading for visual impact",
      "Editing promos, reels, vlogs, tutorials & corporate videos",
      "👉 Get a custom quote today!"
    ]
  },
  {
    title: "🎨 Graphic Design",
    icon: "Palette",
    points: [
      "Unique logos & complete brand identity systems",
      "Eye-catching posters, flyers, brochures & business cards",
      "Engaging social media kits & ad creatives for campaigns",
      "Interactive UI/UX mockups (Figma, Canva, Photoshop)",
      "Infographics & custom illustrations for storytelling",
      "👉 Let's design your brand!"
    ]
  },
  {
    title: "✨ Motion Graphics",
    icon: "Zap",
    points: [
      "Animated logos, intros & outros",
      "Lower-thirds & branded overlays",
      "Dynamic kinetic typography & transitions", 
      "Animated charts, graphs & infographics",
      "Explainer video assets for marketing/education",
      "👉 Level up your content with motion!"
    ]
  },
  {
    title: "📸 Photo Editing & Retouching",
    icon: "Camera",
    points: [
      "Professional color correction & enhancement",
      "High-end portrait retouching & cleanup",
      "Background/object removal with precision",
      "Creative looks, composites & digital art",
      "Montages, collages & event highlights",
      "👉 Transform your photos today!"
    ]
  }
];