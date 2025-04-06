import Image from "next/image";
import allProjects from "../../lib/allProjects";
import { FiGithub } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";

// "use client";
export default function Projects() {
  return (
    <div className="px-20 pb-20 md:pt-20">
      <div className="flex flex-col justify-center items-center">
        {allProjects.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col container lg:flex-row my-[2.5rem] gap-x-[16rem]"
            >
              <div className="md:w-1/2">
                <div className="">
                  <h3 className="text-3xl py-3 font-exo2"> {data.name}</h3>
                  <p className="block md">
                    {data.description}
                    <br />
                  </p>
                </div>
                <div className="flex  flex-wrap -ml-4">
                    {data.skills.map((skills, index)=>(
                     <div
                     key={index}
                     className="flex flex-col pt-2 transition-all ease-in-out text-center duration-300 mx-2"
                   >
                     <div className="h-12 w-12 md:h-16 md:w-16 rounded-full backdrop-blur-3xl dark:bg-slate-800 bg-black/10 grid place-items-center hover:-translate-y-3 transition-all md:m-4 m-2 duration-200">
                       <img src={skills.url}
                         height="25"
                         width="25"
                         loading="lazy"
                       />
                     </div>
                     <p className="">{skills.name}</p>
                   </div>
                    ))}
                   </div>
                <div className="p-2 pt-8 flex w-28 md:w-32 justify-between">
                  <a href={data.appLink} target="/blank">
                    <IoIosLink size={30} className="pb-1" />
                  </a>
                  <a href={data.gitLink} target="/blank">
                    <FiGithub size={25} className="" />
                  </a>
                </div>


              </div>

              <div className="md:w-1/2 py-5">
                <Image
                  className="rounded"
                  src={data.image}
                  height="800"
                  width="800"
                  alt=""
                  priority
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
