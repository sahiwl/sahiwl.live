import LinksComp from "@/components/Links"


export default function links() {
  return (
    <main className="text-zinc-200 min-h-full w-full">
      <section className="b-slate-900  flex flex-col items-center justify-between md:py-20 py-24 mx-16 md:mx-20 md:my-24 my-20">
        <div className="" id="heading">
          <h3>Links</h3>
          <p>me on the internet in different aliases-</p>
        </div>
          <div className="flex justify-center">
            <LinksComp />
            </div>                
      </section>
    </main>
  );
}
