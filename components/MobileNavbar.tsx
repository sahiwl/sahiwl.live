"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiHeadphones, FiSun } from "react-icons/fi";
import { PiMoonFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { LuUser } from "react-icons/lu";
import { IoIosLink } from "react-icons/io";
import { LiaLaptopCodeSolid } from "react-icons/lia";
// import { navLinks } from "./Navbar";

export const MobileNav = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

   const mobileNavLinks = [
    { href: "/", label: "Home", icon: <GrHomeRounded size={18} /> },
    { href: "/about", label: "About", icon: <LuUser size={20} /> },
    { href: "/links", label: "Links", icon: <IoIosLink size={22} /> },
    {
      href: "/projects",
      label: "Projects",
      icon: <LiaLaptopCodeSolid size={25} />,
    },
    { href: "/listensto", label: "ListensTo", icon: <FiHeadphones size={20} /> },
  ];

  return (
    <div className="block md:hidden">
      <nav className="fixed bottom-0 w-full p-2 dark:bg-zinc-900/80 z-[100] rounded-t-2xl border-[1px]  dark:border-neutral-800 border-neutral-400 backdrop-blur-md ">
        <div className="flex justify-around items-center">
          {mobileNavLinks.map((link, index) => (
            <Link key={index} className="button-navm" href={link.href}>
              <div className="flex flex-col items-center justify-center text-[#4e201c] dark:text-[#00ADB5]">
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