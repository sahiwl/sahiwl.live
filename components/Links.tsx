"use client";
import {allLinks} from "../lib/links"
export default function LinksComp(){
    return (
        <div className="bg-gradient-to-r dark:from-zinc-900 dark:via-custom-dark dark:to-neutral-900 md:mx-20 mx-16 mt-10 opacity-80 bg-inc-800/40 border-[1px] dark:border-neutral-800 border-neutral-200 shadow-xl min-w-96 rounded-xl ">
            <div className="flex flex-col mx-5 py-5">
            {allLinks.map((link, index) => (
          <div
            key={index}
            className="bg-transparent backdrop-blur-3xl flex dark:border-neutral-800 border-neutral-300 justify-between px-2 border-[1px] rounded-lg my-2 cursor-pointer hover:-translate-y-1
            hover:scale-110 duration-200 ease-in-out font-spacegrotesk"
            onClick={() => window.open(link.url, "_blank")}
            >
            <p className="dark:text-zinc-300 text-zinc-800 m-2">{link.icon({})}</p>
            <p className="dark:text-zinc-300 text-zinc-800 text-sm lg:text-base md:text-base m-1">
             &nbsp;
              {link.value}
            </p>
          </div>
        ))}

        </div>
        </div>
    );
  }
  