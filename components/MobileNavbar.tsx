"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { PiMoonFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { navLinks } from "./Navbar";

export const MobileNav = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="block md:hidden">
      <nav className="fixed bottom-0 w-full p-2 dark:bg-zinc-900/80 z-[100] rounded-lg border-[1px] shadow-xl dark:border-neutral-800 border-neutral-200 backdrop-blur-md ">
        <div className="flex justify-around items-center">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="flex flex-col items-center justify-center text-[#4e201c] dark:text-[#00ADB5] hover:scale-110 duration-300 ease-in-out">
                <div>{link.icon}</div>
                <span className="text-xs mt-1">{link.label}</span>
              </div>
            </Link>
          ))}
          {mounted && (
            <button
              className="flex flex-col items-center justify-center text-[#4e201c] dark:text-[#00ADB5] hover:scale-110 duration-300 ease-in-out"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <div className="p-1">
                {theme === "dark" ? <FiSun size={20} /> : <PiMoonFill size={20} />}
              </div>
              <span className="text-xs">Theme</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};