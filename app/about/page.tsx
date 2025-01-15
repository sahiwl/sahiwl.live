import Image from "next/image";
import About from "../../content/about.mdx"
export default function about() {
  return (
    <main className="md:py-20 py-24 mx-16 md:mx-20 md:my-24 my-20 dark:text-zinc-200 ">
      <section className="grid md:grid-cols-2 grid-rows-1 justify-items-center">
        <div className="md:order-1 order-2">
          <About />

        </div>
        <aside className="flex flex-col md:order-1 md:justify-self-center justify-self-start gap-y-8">
          <div id="img" className="md:fixed static md:right-[2%] lg:right-[10%]">
            <Image
              className="rounded-3xl"
              src="/sahil.jpeg"
              height="370"
              width="370"
              alt=""
            />
            <a href="mailto:work.saahilkr@gmail.com">
              <p className="relative mt-3 mx-3 text-sm">
                hmu <span className="absolute -top-1">&#8599;</span>
              </p>
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}
