import { allSkills } from "@/lib/skills";

export const Skills = function () {
  return (
    <div className="">
      <h1 className="my-5 pt-5 text-6xl md:text-8xl font-exo2 text-center">
       Skills
      </h1>
      <div className="w-full flex flex-wrap justify-evenly items-center md:justify-start md:gap-x-1 md:items-start mb-20">

        {allSkills.map((skill, index) => (
          <div
          key={index} 
          className="flex flex-col transition-all ease-in-out text-center duration-300">
            <div className="h-20 w-20 md:h-24 md:w-24 rounded-full backdrop-blur-3xl dark:bg-slate-800 bg-black/10 grid place-items-center hover:-translate-y-3 transition-all m-4 duration-200">
              <img
                className=""
                src={skill.src}
                height="45"
                width="45"
                loading="lazy"
              />
            </div>
            <p className="">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
