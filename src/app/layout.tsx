import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Next Netflix",
  description: "CEOS 23rd Week 5&6 Frontend Pair Project",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Next Netflix",
    description: "CEOS 23rd Week 5&6 Frontend Pair Project",
    images: [
      {
        url: "https://next-netflix-23rd.vercel.app/og_image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="h-full bg-white">{children}</body>
    </html>
  );
}
