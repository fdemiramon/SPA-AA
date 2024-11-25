import React from "react";
import { HeartIcon } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-8 text-base-content/80">
      <div className="flex items-center gap-2">
        <p>Made with</p>
        <HeartIcon className="w-4 h-4 text-red-500 animate-pulse" />
        <p>by 0x32d6 © {currentYear}</p>
      </div>
    </footer>
  );
};
