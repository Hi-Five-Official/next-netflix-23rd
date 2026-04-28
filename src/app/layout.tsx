import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Next Netflix",
  description: "CEOS 23rd Week 5&6 Frontend Pair Project",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="h-full bg-white">{children}</body>
    </html>
  );
}
