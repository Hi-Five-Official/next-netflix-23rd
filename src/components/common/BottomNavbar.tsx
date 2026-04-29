"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BOTTOM_NAV_ITEMS } from "@/constants/navItems";
import { cn } from "@/lib/utils/cn";

const BottomNavbar = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <nav className="flex h-14 w-full items-center bg-gray-900">
      {BOTTOM_NAV_ITEMS.map(({ label, href, Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-1 flex-col items-center gap-2 transition-all duration-300",
              isActive ? "text-white" : "text-gray-700 hover:text-white",
            )}
          >
            <Icon className="size-4.5" />
            <span className="text-caption-2">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavbar;
