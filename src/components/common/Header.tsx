import Link from "next/link";

import { NetflixIcon } from "@/assets/icons";
import { HEADER_NAV_ITEMS } from "@/constants/navItems";

const Header = () => {
  return (
    <header className="w-full px-4 py-6">
      <div className="flex flex-row items-center justify-between">
        <NetflixIcon className="size-14 cursor-pointer" />
        {HEADER_NAV_ITEMS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-body-1 text-white transition-all duration-300 hover:text-gray-700"
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
