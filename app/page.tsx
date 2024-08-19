import '@fontsource/proza-libre';
import Projects from './Projects/page';
import { Skills } from '@/components/Skills';
export default function Home() {
  return (
    <div className="pt-32 mx-5 lg:mx-20 flex flex-col items-start min-h-[100vh]">
      <div className="dark:text-white w-full">
        <div className="max-w-[60vh] text-[#acbacf]">
          <h2 className="text-3xl md:text-6xl">Hii, it's</h2>
          <h1 className='absolute -z-20 text-4xl text-white'>kuch bhi </h1>
          <h2 className="font-[proza] text-6xl md:text-[12rem]">Sahil</h2>
          <p> &#x2022; Self-driven and highly curious full stack web developer.
            <br />
            Currently pursuing B.Tech Computer Science with Specialization in IOT. My native work environment consists of working with technologies like JavaScript, Next.js, TypeScript and Python.
          </p>
        </div>

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
