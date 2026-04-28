"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/constants/navItems";
import { cn } from "@/utils/cn";

const BottomNavbar = () => {
  const pathname = usePathname();

  // if (pathname === "/") return null;

  // TODO : bg-gray-900 바꾸기, text-[10px] 제거, text-gray-700 바꾸기
  return (
    <nav className="flex h-14 w-full items-center bg-amber-300 py-2">
      {NAV_ITEMS.map(({ label, href, Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-1 flex-col items-center gap-2 transition-all duration-300",
              isActive ? "text-white" : "text-gray-700",
            )}
          >
            <Icon className="size-4.5" />
            <span className="text-caption2 text-[10px]">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavbar;
