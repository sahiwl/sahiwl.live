"use client";
import Link from "next/link";
import ContributionGraph from "./Contributions";
ContributionGraph

export default function Welcome() {
  return (
    <div className="w-full h-[100vh] text-white flex flex-col justify-center items-center p-4">
      {/* Main Content */}
      <div className="text-center dark:text-gray-400 text-slate-900">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Sahil. </h1>

        {/* Subheading */}
        <p className="text-lg dark:text-gray-400 text-slate-900 mb-8">
          Full-stack developer.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            href="/links"
            className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Get in Touch
          </Link>
          <Link
            href="/projects"
            className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>
<div className="w-full p-4">
      <ContributionGraph/>
</div>

    </div>
  );
}