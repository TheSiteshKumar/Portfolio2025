export interface Dream {
  id: number;
  title: string;
  imageUrl: string;
  status: 'completed' | 'in-progress' | 'planned';
  description?: string;
}

export const dreams: Dream[] = [
  {
    id: 1,
    title: "Learn how to Fly a Plane",
    imageUrl: "https://raw.githubusercontent.com/TheSiteshKumar/sitesh/refs/heads/main/IMG/51%20Dreams/1%20Plane.jpg",
    status: "planned",
    description: "Get a pilot's license and experience the freedom of flight"
  },
  {
    id: 2,
    title: "Half Marathon",
    imageUrl: "https://raw.githubusercontent.com/TheSiteshKumar/sitesh/refs/heads/main/IMG/51%20Dreams/2%20Half%20Marathon.jpg",
    status: "in-progress",
    description: "Complete a half marathon"
  },
  // ... Add all 51 dreams here with appropriate titles and descriptions
];