export interface Channel {
  name: string;
  handle: string;
  url: string;
  focus: string;
  note: string;
}

export const channels: Channel[] = [
  {
    name: "Shafiq Rajput",
    handle: "@shafiqrajput786",
    url: "https://www.youtube.com/@shafiqrajput786/featured",
    focus: "Vlogs, cooking, tech reviews",
    note: "Diverse content with polished editing"
  },
  {
    name: "SR Industry Production", 
    handle: "@srindustryproduction",
    url: "https://www.youtube.com/@srindustryproduction",
    focus: "Automotive: reviews, mods, tutorials",
    note: "Niche-focused, high engagement potential"
  }
];