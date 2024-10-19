import "@fontsource/proza-libre";
import Projects from "./projects/page";
import { Skills } from "@/components/Skills";
export default function Home() {
  return (
    <div className="pt-32 mx-5 lg:mx-20 flex flex-col items-start min-h-[100vh]">
      <div className="dark:text-white w-full">
        <section className=" text-[#acbacf] flex h-[100vh]">
          <div className="flex-auto w-64 py-20">
            <h1 className="text-3xl md:text-9xl font-inter">Hii, it's</h1>            
            <h1 className=" text-6xl md:text-[16rem]"> Sahil</h1>
              {" "}
              <div className="">
              <ul className="list-disc ml-4">
                <li>Self-driven and highly curious frontend web developer.</li>
                <li>Currently pursuing B.Tech Computer Science with Specialization in
              IOT. My native work environment consists of working with
              technologies like JavaScript, Next.js, TypeScript and Python.</li>
              <li>Always up for joining conferences, hackathons, clubs etc <a href="https://discord.com/users/550329365444034561" target="/blank">
              <span className="relative mr-3">
                hmu <span className="absolute -top-2 -ml-2">&#8599;</span>
                </span>
            </a> for collaborations on such events.</li>
              </ul>
              </div>
          </div>
          <div className="flex-auto w-16 mx-auto">
            <img src="" alt="" />
            <aside className="justify-self-start gap-y-8">
          <div id="img" className="md:mx-20 md:visible invisible">
            <img
              className="rounded-full mx-auto"
              src={"/platypus.jpeg"}
              height="370"
              width="370"
              alt=""/>
            </div>
            </aside>
          </div>
        </section>

        {/* Skills */}
        <Skills />
      </div>
      <div className="m-auto ">
        <h1 className="text-6xl md:text-8xl text-center">Projects</h1>
        <Projects />
      </div>
    </div>
  );
}
