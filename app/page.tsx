import "@fontsource/proza-libre";
import Projects from "./projects/page";
import { Skills } from "@/components/sections/Skills";
import Welcome from "@/components/sections/Welcome";
import ContributionGraph from "@/components/sections/Contributions";


export default function Home() {
  return (

    <main className="mx-5 lg:mx-20 flex flex-col items-start min-h-[100vh]">
      <div className=" w-full">
          <Welcome />
        {/* Skills */}
        <div className="pt-8"></div>
              <ContributionGraph/>
        
        <Skills />
      </div>
      <div className="m-auto ">
        <h1 className="text-6xl md:text-8xl font-exo2 text-center dark:text-[#acbacf] text-[#4e201c]">Projects</h1>
        <Projects />
      </div>
    </main>

  );
}
