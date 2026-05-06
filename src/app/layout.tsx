import "@/app/globals.css";

import type { Metadata } from "next";

import BottomNavbar from "@/components/common/BottomNavbar";
import HomeIndicator from "@/components/common/HomeIndicator";
import QueryProvider from "@/providers/QueryProvider";

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
      <body className="flex justify-center bg-white">
        <QueryProvider>
          <div className="relative min-h-dvh w-93.75 bg-black">
            {children}
            <div className="z-sticky fixed bottom-0 w-[inherit]">
              <BottomNavbar />
              <HomeIndicator />
            </div>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
