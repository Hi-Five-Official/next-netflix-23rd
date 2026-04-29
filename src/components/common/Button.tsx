import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button = ({ children, icon, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex h-11 cursor-pointer items-center justify-center rounded-sm bg-gray-600 transition-all duration-200 hover:bg-gray-800",
        className,
      )}
      {...props}
    >
      {icon ? (
        <span className="text-label-1 flex items-center gap-3 text-black">
          {icon}
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
