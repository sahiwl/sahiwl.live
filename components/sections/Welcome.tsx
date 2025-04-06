"use client";
import Link from "next/link";
import ContributionGraph from "./Contributions";
import { Typewriter } from "../ui/typewriter";
ContributionGraph

export default function Welcome() {
  return (
    <section className="w-full  h-[100vh] md:text-9xl lg:text-5xl sm:text-3xl text-2xl flex flex-row justify-center items-center bg-background font-normal overflow-hidden">
    <div className="whitespace-pre-wrap max-w-2xl">
      <span className="font-oswald font-bold dark:text-[#afbacd] text-slate-950">{"Hi I'm "}</span>
      <Typewriter
        text={[
          " Sahil Kumar Ray",
          "aka sahiwl",
          "your friendly neighborhood coder🕷️",
          "building UIs and mentally recovering by touching grass💆🏻‍♂️",
          "shipping side projects like it's a hobby (because it is🐺)",
          "breaking stuff and learning from it🙆🏻‍♂️",
        ]}
        speed={70}
        className="dark:text-[#00adb5] text-[#4e201c] font-exo2"
        waitTime={1500}
        deleteSpeed={40}
        cursorChar={"_"}
      />
    </div>

      {/* Resume */}
     <div className="absolute -bottom-12 left-1">
        <Link
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md text-xl hover:underline text-slate-900 dark:text-slate-100 font-sometypemono hover:scale-105 transition-transform"
        >
           <p className="relative text-xl">
                Resume <span className="absolute -top-1">&#8599;</span>
              </p>
        </Link>
      </div>
  </section>
  );
}