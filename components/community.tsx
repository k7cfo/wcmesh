export function Community() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-wcm-green p-8 sm:p-12 bg-wcm-dark-gray">
          <div className="mb-8 text-center">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-wcm-green mb-4">{":[WHO WE ARE]"}</h2>
            <div className="h-1 w-24 bg-wcm-green mx-auto" />
          </div>

          <div className="space-y-6 font-mono text-wcm-light-gray">
            <p className="text-lg leading-relaxed">
              <span className="text-wcm-green font-bold">:(WCMESH)</span> is a community of radio enthusiasts
            </p>

            <p className="text-lg leading-relaxed">
              <span className="text-wcm-green font-bold">:[Doers, at their core]</span> at the bench, unwilling to wait for "better" and building the future of mesh on the west coast
            </p>

            <p className="text-lg leading-relaxed">
              <span className="text-wcm-green font-bold">:[Undeterred by challenge]</span> members are rolling up their sleeves, compiling code, heating up the soldering iron, and building a robust community mesh
            </p>

            <p className="text-xl text-wcm-green font-bold text-center mt-8">One [packet] at a time</p>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://discord.com/invite/wcmesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono px-8 py-3 bg-wcm-green text-black font-bold hover:bg-wcm-yellow transition-colors border-2 border-wcm-green hover:border-wcm-yellow"
            >
              {"[JOIN THE COMMUNITY]"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
