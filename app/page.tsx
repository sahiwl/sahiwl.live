import '@fontsource/proza-libre';
import Projects from './Projects/page';
export default function Home() {
  return (
    <div className="pt-32 mx-5 lg:mx-20 flex flex-col items-start min-h-[100vh]">
      <div className="dark:text-white">
        <div className="max-w-[60vh] text-[#acbacf]">
          <h2 className="text-3xl md:text-6xl">Hii, it's</h2>
          <strong className="font-[proza] text-6xl md:text-[12rem]">Sahil</strong>
        </div>
        <div className="p-48"> lets check this out

        </div>
      </div>
      <div className="m-auto ">
        <h1 className="text-8xl text-center">Projects</h1>
        <Projects />
      </div>
    </div>

  );
}
