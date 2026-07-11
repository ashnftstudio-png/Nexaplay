export type StoreGame = {
  id: string;
  title: string;
  logo: string;
  cover: string;
  rating: number;
  price: number | "Free";
  discount?: number;
  tags: string[];
  releaseDate: string;
  platforms: ("PC" | "Xbox" | "PlayStation" | "Switch" | "VR")[];
  features: string[];
  accent: string;
};

export const storeNavItems = ["Home", "Browse", "Categories", "Top Sellers", "New Releases", "Coming Soon", "Special Offers"] as const;
export const genres = ["Action", "Adventure", "RPG", "Racing", "Sports", "Strategy", "Simulation", "Indie", "Multiplayer", "Horror"] as const;
export const sortOptions = ["Popularity", "Newest", "Highest Rated", "Price Low to High", "Price High to Low", "Alphabetical"] as const;
export const filterGroups = [
  { title: "Genre", options: ["Action", "Adventure", "RPG", "Racing", "Strategy", "Indie"] },
  { title: "Platform", options: ["PC", "Xbox", "PlayStation", "Switch", "VR"] },
  { title: "Price", options: ["Free", "Under $20", "$20 - $40", "Premium"] },
  { title: "Rating", options: ["90+", "80+", "70+", "Family friendly"] },
  { title: "Features", options: ["Cloud saves", "Cross-play", "Achievements", "Ray tracing"] },
  { title: "Multiplayer", options: ["Co-op", "PvP", "MMO", "Local multiplayer"] },
  { title: "Controller support", options: ["Full", "Partial"] },
  { title: "VR support", options: ["VR optional", "VR required"] },
] as const;

export const games: StoreGame[] = [
  { id: "nova-drift", title: "Nova Drift: Eclipse", logo: "ND", cover: "from-cyan-400 via-blue-600 to-slate-950", rating: 96, price: 59.99, discount: 25, tags: ["Action", "Space", "Co-op"], releaseDate: "2026-06-18", platforms: ["PC", "Xbox", "PlayStation"], features: ["Cross-play", "Cloud saves"], accent: "cyan" },
  { id: "emberfall", title: "Emberfall Kingdoms", logo: "EK", cover: "from-orange-400 via-rose-600 to-slate-950", rating: 92, price: 49.99, tags: ["RPG", "Fantasy", "Open World"], releaseDate: "2026-05-02", platforms: ["PC", "PlayStation"], features: ["Achievements", "Controller"], accent: "rose" },
  { id: "velocity", title: "Velocity Apex", logo: "VA", cover: "from-fuchsia-400 via-violet-700 to-slate-950", rating: 89, price: 39.99, discount: 40, tags: ["Racing", "Multiplayer"], releaseDate: "2026-04-11", platforms: ["PC", "Xbox", "Switch"], features: ["PvP", "Controller"], accent: "violet" },
  { id: "deep-signal", title: "Deep Signal", logo: "DS", cover: "from-emerald-300 via-teal-700 to-slate-950", rating: 94, price: 29.99, tags: ["Horror", "Indie"], releaseDate: "2026-03-27", platforms: ["PC", "VR"], features: ["VR optional", "Atmospheric"], accent: "emerald" },
  { id: "skyforge", title: "Skyforge Tactics", logo: "ST", cover: "from-amber-300 via-lime-700 to-slate-950", rating: 87, price: "Free", tags: ["Strategy", "PvP"], releaseDate: "2026-07-30", platforms: ["PC", "Switch"], features: ["Free to play", "Ranked"], accent: "amber" },
  { id: "atlas", title: "Atlas Frontier", logo: "AF", cover: "from-sky-300 via-indigo-700 to-slate-950", rating: 91, price: 69.99, discount: 10, tags: ["Simulation", "Adventure"], releaseDate: "2026-09-14", platforms: ["PC", "Xbox", "PlayStation"], features: ["Co-op", "Cloud saves"], accent: "sky" },
];

export const searchSuggestions = ["space co-op", "open world RPG", "controller support", "VR horror", "games under $20"];
export const recentSearches = ["racing", "strategy co-op", "special offers"];
