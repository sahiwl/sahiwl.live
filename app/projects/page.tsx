import Image from "next/image";

// "use client";

export default function Projects() {
  return (
    <section className="p-20">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row my-[2.5rem] gap-x-[16rem]">
          <div className="md:w-1/2">
            <h3 className="text-3xl p-3">WeatherApp</h3>
            <p className="block">
              A simple weather app that gives you real-time weather info for any
              city. Built with Vite and React, it’s got a clean UI and fetches
              data instantly so you can plan your day. Deployed on Vercel for
              easy access.
              <br />
              <a
                href="https://howistheweather.vercel.app/"
                target="/blank"
                className="underline"
              >
                Live Link{" "}
              </a>
            </p>
          </div>
          <div className="md:w-1/2 py-5">
            <Image
              className="rounded-xl"
              src={"/wapp.jpg"}
              height="400"
              width="400"
              alt=""
              priority
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row my-[2.5rem] gap-x-[16rem]">
          <div className="md:w-1/2">
            <h3 className="text-3xl p-3"> To-Do List App</h3>
            <p className="block">
              A minimalist to-do list app to help keep track of daily tasks.
              Built with Vite and React, it’s fast and super easy to use.
              Deployed on Vercel for quick access anytime.
              <br />
              <a
                href="https://sahiwl-todo.vercel.app/"
                target="/blank"
                className="underline"
              >
                Live Link{" "}
              </a>
            </p>
          </div>
          <div className="md:w-1/2 py-5">
            <Image
              className="rounded"
              src={"/todoapp.png"}
              height="400"
              width="400"
              alt=""
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
;
