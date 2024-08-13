import About from "@/app/About/page"
import ModeToggle from "@/components/ui/mode-toggle"
import Link from "next/link"
export const Navbar = function () {
    return (
        <header className="dark:border-cyan-400 border-b-2  text-center md:px-16 h-20 w-full px-10 md:py-6 py-4 sticky top-0 backdrop-blur-lg opacity-">
            <div className="flex items-center justify-between mx-auto max-w-6xl text-[#00ADB5]">
                <div className="img ">
                    logo
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
        </header>
    )
}