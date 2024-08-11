export const Navbar = function () {
    return (
        <header className=" dark:border-zinc-800 border-b-2  text-center md:px-16 px-10 md:py-6 py-4">
            <div className="flex items-center justify-between mx-auto max-w-6xl">
                <div className="img ">
                    logo
                </div>
                <div className="">
                    <nav className="md:block hidden">
                        <ul className="flex items-center gap-x-8">
                            <li>about</li>
                            <li>projects</li>
                            <li>work</li>
                            <li>about</li>
                        </ul>
                    </nav>
                </div>
                <div className="">
                    switch
                </div>
            </div>
        </header>
    )
}