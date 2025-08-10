"use client";
import Link from "next/link";
import { Typewriter } from "../ui/typewriter";

export default function Welcome() {
  
  // console.log("RESUME" + process.env.NEXT_PUBLIC_RESUME)
  return (
    <section className="relative w-full min-h-[100vh] py-20 flex flex-col justify-center items-center bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <div className="whitespace-pre-wrap max-w-2xl md:text-9xl lg:text-5xl sm:text-3xl text-2xl">
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
        </div>
      </div>

      {/* Resume */}
      <div className="absolute bottom-10 left-10 sm:left-10">
        <Link
          href={process.env.NEXT_PUBLIC_RESUME || ""}
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