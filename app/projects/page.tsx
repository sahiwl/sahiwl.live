import Image from "next/image";
import allProjects from "../../lib/allProjects";
import { FiGithub } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";

// "use client";
export default function Projects() {
  return (
    <section className="p-20">
      <div className="flex flex-col justify-center items-center">

        {allProjects.map((data,index)=>{
          return(
      <div className="flex flex-col lg:flex-row my-[2.5rem] gap-x-[16rem]">
          <div  key={index} className="md:w-1/2">
          <div className="">

            <h3 className="text-3xl p-3 font-exo2"> {data.name}</h3>
            <p className="block">
           {data.description}
              <br />
                </p>
          </div>
              <div className="p-2 pt-5 flex w-28 md:w-32 justify-between bg-gren-900">
              <a
                href={data.appLink}
                target="/blank"
                >
                <IoIosLink size={30} className="pb-1" />
              </a>
              <a 
              href={data.gitLink}
              target="/blank"
                >
                <FiGithub size={25} className=""/>
              </a>
                  </div>                  
          </div>

          <div className="md:w-1/2 py-5">
            <Image
              className="rounded"
              src={data.image}
              height="400"
              width="400"
              alt=""
              priority
            />
          </div>
        </div>
          )
        })
      }
           
</div>
    </section>
  );
}

