    import Link from "next/link"


    export const Footer = () => {
        return (
            // <div className="p-10 w-full max-h-[330px] bottom-0 dark:border-cyan-400 border-t-2 flex justify-around">
            <footer className="flex md:px-4 md:py-4 p-8 pb-20 justify-between w-full border-t-[1px] dark:border-cyan-400 backdrop-blur-xl shadow-xl border-[#4e201c]" >
                <span className="text-zinc-500 font-semibold font-exo2">
                made by sahil 😉
                </span>
                <span className="flex space-x-5 text-zinc-500 font-exo2 font-semibold">
                    <Link href="/links" aria-label="Read more about Seminole tax hike" className=" transition hover:scale-110 duration-300 ease-in-out">connect with me!!</Link>                   
                </span>
            </footer>
        )
    }