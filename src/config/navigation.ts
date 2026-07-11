export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "Discover", href: "/", description: "Curated releases and platform highlights" },
  { label: "Library", href: "/library", description: "Player-owned titles and collections" },
  { label: "Community", href: "/community", description: "Clubs, streams, and events" },
  { label: "Studio", href: "/studio", description: "Creator and publisher tools" },
];

export const sidebarNavigation: NavigationItem[] = [
  { label: "Featured", href: "/" },
  { label: "New Releases", href: "/new" },
  { label: "Top Charts", href: "/charts" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Downloads", href: "/downloads" },
];
