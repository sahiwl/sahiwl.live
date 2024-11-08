"use client";
import About from "@/app/about/page";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { PiMoonFill } from "react-icons/pi";

export const NavLinks = () => {
  return (
    <>
      <ul className="md:flex md:items-center text-[#00ADB5] sm:flex-wrap gap-x-8
      gap-y-4 ">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/links">Links</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </>
  );
};

export const Navbar = function () {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log('toggleNavbar');
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="">
      <div className="bg-cyan-900/55 top-0 w-full fixed ">i</div>
      <div className={`dark:border-cyan-400 border-b-2 text-center md:px-16 w-full px-10 md:py-6 fixed top-0 z-30 py-4 backdrop-blur-lg bg-opacity-100 ${isOpen ? 'h-auto' : 'h-20'}`}>        <div className="flex items-center justify-between mx-auto max-w-6xl text-[#00ADB5]">
          <div className="img ">
            <Link href="/">logo</Link>
          </div>
          {/* <nav className=""> */}
          <nav className=" w-1/3 justify-end">
            <div className="hidden justify-between md:flex">
              <NavLinks />
            </div>
            <div className="md:hidden">
              <button onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </nav>
          <div className="">
            {mounted === true && (
              <button
                // dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-700 hover:bg-zinc-800
                className="w-full flex justify-center items-center shadow  bg-gray-400 dark:bg-transparent hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <div className="p-2 text-zinc-100">
                  {theme === "dark" ? <FiSun /> : <PiMoonFill />}
                </div>
              </button>
            )}
          </div>
        </div>

            {/* Mobile navigation links - visible when isOpen is true */}
            {isOpen && (
      <div className=" md:hidden flex basis-full flex-col items-center">
        <NavLinks />
      </div>
    )}
      </div>
    </div>
  );
};
