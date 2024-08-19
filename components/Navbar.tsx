import About from "@/app/About/page"
import ModeToggle from "@/components/ui/mode-toggle"
import Link from "next/link"
export const Navbar = function () {
    return <div className="">
        <div className="dark:border-cyan-400 border-b-2 text-center md:px-16 h-20 w-full px-10 md:py-6 fixed top-0 z-30 py-4 backdrop-blur-lg bg-opacity-100">
            <div className="flex items-center justify-between mx-auto max-w-6xl text-[#00ADB5]">
                <div className="img ">
                    <Link href="/">logo</Link>
                </div>
                <div className="">
                    <nav className="md:block hidden">
                        <ul className="flex items-center gap-x-8">
                           <li><Link href="/About">about</Link></li>
                            <li><Link href="/Projects">projects</Link></li>
                            <li>work</li>
                            <li>about</li>
                        </ul>
                        
                    </nav>
                </div>
                <div className="">
                    <ModeToggle></ModeToggle>
                </div>
            </div>
        </div>
    </div>
}