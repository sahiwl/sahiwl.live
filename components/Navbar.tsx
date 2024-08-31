"use client"
import About from "@/app/About/page"
import { useTheme } from "next-themes";
import Link from "next/link"
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { PiMoonFill } from "react-icons/pi";

export const Navbar = function () {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
    return <div className="">
        <div className="bg-cyan-900/55 top-0 w-full fixed ">....</div>
        <div className="dark:border-cyan-400 border-b-2 text-center md:px-16 h-20 w-full px-10 md:py-6 fixed top-0 z-30 py-4 backdrop-blur-lg bg-opacity-100">
            <div className="flex items-center justify-between mx-auto max-w-6xl text-[#00ADB5]">
                <div className="img ">
                    <Link href="/">logo</Link>
              </div>
                <div className="">
                    <nav className="md:block hidden">
                        <ul className="flex items-center gap-x-8">
                           <li><Link href="/About">about</Link></li>
                            <li><Link href="/Projects">projects</Link></li>
                            <li>work</li>
                            <li>about</li>
                        </ul>                       
                    </nav>
                </div>
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
        </div>
    </div>
}