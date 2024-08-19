import Image from "next/image";
import platypus from "../../public/platypus.jpg";

export default function about() {
  return (
    // <div className="p-3">
    //     <br />
    //     <br />
    //     <br />
    //     <p className="italic">This is /aboutme.</p>
    // </div>

    <main className="md:py-20 py-24 mx-16 md:mx-20 md:my-24 my-20">
      <section className="grid md:grid-cols-2 grid-rows-1 justify-items-center">
        <div className="md:order-1 order-2">
          <h3 className="">Hi im sahiwl aka sahil</h3>
          <div className="text-sm md:leading-7 leading-loose">
            <p>
            Currently pursuing a bachelor's degree in computer science, I am a self-driven, career-oriented software developer with a focus on front-end development and open-source. My area of expertise is creating client-side interactive web applications.
            mostly using technologies such as Python, Next.js, TypeScript, and JavaScript.
            </p>
            <p>
            I make a sincere effort to learn in every setting, favourable or not, because I firmly believe in lifelong learning and personal development. Aside from studying, I like to write technical articles and make projects that help and inspire other developers.
            My most recent entries are available on freeCodeCamp, and this website hosts my personal blog.
            </p>

            <h3 className="bg-slate-600 pt-4">What im upto nowadays?</h3>

            <p>dehadi majdoori</p>

          </div>
        </div>
        <aside className="flex flex-col md:order-1 md:justify-self-center justify-self-start gap-y-8">
          <div id="img" className="">
            <Image className="rounded-3xl" src={"/platypus.jpg"} height="350" width="350" alt="" />
            <a href="mailto:work.saahilkr@gmail.com">
          <p className="relative mt-3 mx-3 text-sm">hmu <span className="absolute -top-1">&#8599;</span></p>
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}
