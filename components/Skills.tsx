import { allSkills } from "@/lib/skills";

export const Skills = function () {
  return (
    <div className="py-20">
      <h1 className="my-5 pt-5 text-6xl md:text-8xl dark:text-[#acbacf] text-[#4e201c] font-exo2 text-center">
       Skills
      </h1>
      <div className="w-full flex flex-wrap justify-center items-center mb-20">
        {allSkills.map((skill, index) => (
          <div
        key={index}
        className="flex flex-col transition-all ease-in-out text-center duration-300 mx-2">
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
