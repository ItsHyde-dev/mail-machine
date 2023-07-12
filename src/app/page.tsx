export default function Home() {
  return <main className="w-full h-full">
    <section className="flex flex-row items-end p-[40px]">
      <div className="text-4xl text-white font-mysans font-semibold">Mail Machine v.1.0</div>
      <section className="flex flex-row gap-[30px] ml-auto">
        <div className="text-2xl text-white font-mysans font-light">Home</div>
        <div className="text-2xl text-white font-mysans font-light">About</div>
        <div className="text-2xl text-white font-mysans font-light">Contact</div>
      </section>
    </section>
    <div className="flex flex-column justify-center absolute left-">
        <div className="text-5xl text-lilac">
          Welcome
        </div>
    </div>
  </main>;
}
