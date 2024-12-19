import Image from "next/image";
// import platypus from "../../public/platypus.jpg";

export default function about() {
  return (
    // <div className="p-3">
    //     <br />-
    //     <br />
    //     <br />
    //     <p className="italic">This is /aboutme.</p>
    // </div>
    <main className="md:py-20 py-24 mx-16 md:mx-20 md:my-24 my-20 dark:text-zinc-200 ">
      <section className="grid md:grid-cols-2 grid-rows-1 justify-items-center">
        <div className="md:order-1 order-2">
          <h3 className="font-exo2">Hi im sahil <p className="font-sometypemono italic hover:underline">aka sahiwl (pronounced same)</p></h3>
          <div className="text-sm md:leading-7 leading-loose">
            <p>
              hi, i am sahil (aka sahiwl on the internet) ~ currently a cs
              undergrad, a 20year old human being whose has keen interest in
              computers, dev, and a little bit of designing(i suck at it).
            </p>
            <br />
            <p>
              Apart from tech and studies, im really into basketball (i played
              zonals and represented my school for ~4years in middleschool), a
              music enthusiast, i sometimes journal about things i cannot
              control (ocd was never my cue) and im really an ambivert ~&nbsp;
              <u>best of both words(hover: introverts and extroverts)</u> ig.
              And sometimes when im really really bored out of hell, i read
              (rarer than a haileys come im telling you right now). So, to
              abridge it all up, just a friendly neighborhood guy learning to
              stand up on his own knees, in life.
            </p>
            <br />
            <h4 className="font-exo2">his'story</h4>
            <p> 
              I started programming back in 2020 with python, learnt the basics,
              how to program a few basic(hover: show programs) programs and for
              some reason unbeknownst to me at that time, I stopped. As I
              finished high school, I studied sql and python (only because it
              was in my curriculum) and had the basic go of it, you know.
            </p>
            <p>
              . <br />
              . <br />
              . <br />
              . <br />
            </p>

            <p className="">
            A few months later, i decided to give this a shot? Finally i came to
            my senses, and tried web-dev. Made the very obvious blunder of going
            through tutorial-hell, hated it when didn't understood basic
            dom-manipulation. Gave it up once again. huh.. <br />
            but <i>There's more to the story than meets the eye-</i> <br />
            you see, everyone eventually connects and finds a way to do get
            their shit together. so did i, and im kinda proud of the fact that
            this time when i tried it again - not only it made sense, but i was
            ,kind of enjoying the small wins. and no no, dont get me wrong by
            the very details of my moody-development journey~ im not some very
            genious or creative developer,&nbsp;
            <i>just a guy who enjoys writing code</i> and will get there,
            someday.
            </p>
       
            <h3 className="pt-4 font-exo2">What im upto nowadays?</h3>
            <p>
              Apart from working on this, i dont have too many things as i
              linearly planned down what i want to focus on this semseter, apart
              from uni-academics (which never was a priority duh :D). <br />&nbsp;
              <br />
              Things on my to-learn-list:
            </p>
            <ul className="list-[square] mt-3 ml-7 text-base">
              <li>Data Structures</li>
              <li>Leetcoding -_-</li>
              <li>Exploring Design Tools like Figma</li>
              <li>Redux </li>
            </ul>
            

            <h4 className="mt-12">setup</h4>
                <p>
                  <span>Macbook Air M2</span>
                </p>


          </div>
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
