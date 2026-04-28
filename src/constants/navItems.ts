import { ComingSoonIcon, DownloadIcon, HomeIcon, MoreIcon, SearchIcon } from "@/assets/icons";

export const HEADER_NAV_ITEMS = [
  { label: "TV Shows", href: "/tv" },
  { label: "Movies", href: "/movie" },
  { label: "My List", href: "/my" },
];

export const BOTTOM_NAV_ITEMS = [
  { label: "Home", href: "/home", Icon: HomeIcon },
  { label: "Search", href: "/search", Icon: SearchIcon },
  { label: "Coming Soon", href: "/coming-soon", Icon: ComingSoonIcon },
  { label: "Downloads", href: "/downloads", Icon: DownloadIcon },
  { label: "More", href: "/more", Icon: MoreIcon },
];
