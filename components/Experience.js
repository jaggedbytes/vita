function Experience() {
  return (
    <>
      <div
        className="
          basis-full
          md:basis-7/12
          min-w-[300px]
          font-mono
          text-sm
          sm:text-base
          mb-8
          mr-8
          md:mr-0
          transition-all
          hover:text-deep-pink
        "
      >
        <h2 className="font-mono text-lg font-bold mb-3">
          ✨ Experience
        </h2>
        <div
          className="
            grid
            grid-cols-4
            gap-2
            text-black
            border-b-4
            px-2
            pt-2
            pb-4
            hover:text-deep-pink
            hover:border-black
            transition-all
            hover:translate-x-1
          "
        >
          <div className="col-span-1 justify-self-end pr-2 font-bold text-xs md:text-base w-full">Current</div>
          <div className="col-span-3 font-bold text-base md:text-lg">
            Researching Web 3.0, DeFi, and blockchain technologies
          </div>
        </div>
        
        <div
          className="
            grid
            grid-cols-4
            gap-2
            text-gray-500
            border-b-2
            px-2
            pt-3
            pb-4
            hover:text-deep-pink
            hover:border-slate-400
            transition-all
            hover:translate-x-1
          "
        >
          <div className="col-span-1 justify-self-end pr-2 text-xs md:text-base w-full">2021&mdash;2022</div>
          <div className="col-span-3">
            A much-needed personal year
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-4
            gap-2
            text-gray-500
            border-b-2
            px-2
            pt-3
            pb-4
            hover:text-deep-pink
            hover:border-slate-400
            transition-all
            hover:translate-x-1
          "
        >
          <div className="col-span-1 justify-self-end pr-2 text-xs md:text-base w-full">2015&mdash;2020</div>
          <div className="col-span-3">
            Custom e-commerce app &amp; IT for Floyd Home
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-4
            gap-2
            text-gray-500
            border-b-2
            px-2
            pt-3
            pb-4
            hover:text-deep-pink
            hover:border-slate-400
            transition-all
            hover:translate-x-1
          "
        >
          <div className="col-span-1 justify-self-end pr-2 text-xs md:text-base w-full">2012&mdash;2014</div>
          <div className="col-span-3">
            IT for a public school system
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-4
            gap-2
            text-gray-500
            border-b-2
            px-2
            pt-3
            pb-4
            hover:text-deep-pink
            hover:border-slate-400
            transition-all
            hover:translate-x-1
          "
        >
          <div className="col-span-1 justify-self-end pr-2 text-xs md:text-base w-full">2008&mdash;2012</div>
          <div className="col-span-3">
            B. S. in <span className="line-through">Computer Science</span> Architecture
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-4
            gap-2
            text-gray-500
            border-b-2
            px-2
            pt-3
            pb-4
            hover:text-deep-pink
            hover:border-slate-400
            transition-all
            hover:translate-x-1
          "
        >
          <div className="col-span-1 justify-self-end pr-2 text-xs md:text-base w-full">1990&mdash;2012</div>
          <div className="col-span-3">
            Cursed myself with a gnarly spell of self-doubt
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience