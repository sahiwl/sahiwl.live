import "@fontsource/proza-libre";
import Projects from "./projects/page";
import { Skills } from "@/components/Skills";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (

    <main className="pt-32 mx-5 lg:mx-20 flex flex-col items-start min-h-[100vh]">
      <div className=" w-full">
        <section className=" dark:text-[#acbacf] flex">
          <div className="flex-auto w-64 pt-20 ">
            <h1 className="text-3xl md:text-9xl font-spacegrotesk">
              Hii, it's
            </h1>
            <h2 className=" text-6xl font-exo2 md:text-[16rem]">Sahil</h2>
            <div className="">
              <ul className="list-disc ml-4">
                <li className="">
                  Self-driven and highly curious frontend web developer.
                </li>
                <li>
                  Currently pursuing B.Tech Computer Science with Specialization
                  in IOT. My native work environment consists of working with
                  technologies like JavaScript, Next.js, TypeScript and Python.
                </li>
                <li>
                  Always up for joining conferences, hackathons, clubs etc &nbsp;
                  <a
                    href="https://discord.com/users/550329365444034561"
                    target="/blank"
                  >
                    <span className="relative mr-3">
                      hmu <span className="absolute -top-2 -ml-2">&#8599;</span>
                    </span>
                  </a>
                  for collaborations on such events.
                </li>
                
              </ul>

            </div>
          </div>
          <div className="flex-auto w-16 mx-auto">
            <aside className="justify-self-start gap-y-8">
              <div id="img" className="md:mx-20 md:visible invisible">
                <img
                  className="rounded-full mx-auto"
                  src={"/sahil.jpeg"}
                  height="370"
                  width="370"
                  alt=""
                />
              </div>
            </aside>
            <aside className="relative right-10 translate-y-16 md:left-1/2 md:-translate-x-10 md:translate-y-44 ">
                    <Link className="hover:underline dark:text-cyan-500  text-yellow-800 font-spacegrotesk text-2xl" href="resume.pdf">
                    Resume
                    {/*   <span className="absolute -top-2 text-sm">&#8599;</span> */}
                    </Link>

            </aside>
          </div>
        </section>

        {/* Skills */}
        <Skills />
      </div>
      <div className="m-auto ">
        <h1 className="text-6xl md:text-8xl font-exo2 text-center dark:text-[#acbacf] text-[#4e201c]">Projects</h1>
        <Projects />
      </div>
    </main>

  );
}
