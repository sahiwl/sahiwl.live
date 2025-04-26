import "@fontsource/proza-libre";
import Projects from "./projects/page";
import { Skills } from "@/components/sections/Skills";
import Welcome from "@/components/sections/Welcome";
import ContributionGraph from "@/components/sections/Contributions";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Welcome />
        
        <div className="py-16">
          <ContributionGraph />
        </div>
        
        <div className="py-16">
          <Skills />
        </div>
      </div>
    </main>
  );
}
