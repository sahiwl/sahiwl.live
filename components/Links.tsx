"use client";
import {allLinks} from "../lib/links"
export default function LinksComp(){
    return (
        <div className="bg-gradient-to-r dark:from-[#18181b] dark:via-custom-dark dark:to-neutral-900 md:mx-20 mx-16 mt-10 opacity-80 bg-inc-800/40 border-[1px] border-neutral-800 shadow-xl min-w-96 rounded-xl">
            <div className="flex flex-col mx-5 py-5">
            {allLinks.map((link, index) => (
          <div
            key={index}
            className="bg-trasnparent backdrop-blur-3xl flex border-neutral-800 justify-between px-2 border-[1px] rounded-lg my-2 font-inter cursor-pointer hover:-translate-y-1
            hover:scale-110 duration-200 ease-in-out"
            onClick={() => window.open(link.url, "_blank")}
          >
            <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
              {link.name} <span className="dark:text-zinc-600 text-zinc-500">{" // "}</span>{" "}
              {link.value}
            </p>
            {/* <p className="dark:text-zinc-300 text-zinc-800 m-0">{link.icon({})}</p> */}
          </div>
        ))}

        </div>
        </div>
    );
  }
  