import LinksComp from "@/components/Links"


export default function links() {
  return (
    <main className="dark:text-zinc-200 min-h-full w-full">
      <section className="flex flex-col items-center justify-between md:py-10 py-24 mx-8 md:mx-10 md:my-20 my-20">
        <div className="" id="heading">
          <h3 className="font-exo2">Links</h3>
          <p>me on the internet in different aliases-</p>
        </div>
          <div className="flex justify-center">
            <LinksComp />
            </div>                
      </section>
    </main>
  );
}
