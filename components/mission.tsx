export function Mission() {
  return (
    <section className="py-20 bg-background border-y-2 border-wcm-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mb-8 text-center">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-wcm-green mb-4">{":[OUR MISSION]"}</h2>
          <div className="h-1 w-24 bg-wcm-green mx-auto" aria-hidden="true" />
        </header>

        {/* Mission Statement */}
        <article className="font-mono text-xl text-wcm-light-gray leading-relaxed mb-8 text-balance text-center">
          <p>
            Our mission is to create the most reliable and secure decentralized mesh radio networking system which can
            be used for communications by anyone.
          </p>
        </article>

        {/* Mission Pillars Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {/* Pillar 1: Security */}
          <article className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
            <div className="font-mono text-4xl font-bold text-wcm-green mb-2" aria-hidden="true">01</div>
            <h3 className="font-mono text-lg font-bold text-wcm-light-gray mb-2">Security</h3>
            <p className="font-mono text-sm text-wcm-light-gray">Encryption for all communications</p>
          </article>

          {/* Pillar 2: Reliability */}
          <article className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
            <div className="font-mono text-4xl font-bold text-wcm-green mb-2" aria-hidden="true">02</div>
            <h3 className="font-mono text-lg font-bold text-wcm-light-gray mb-2">Reliability</h3>
            <p className="font-mono text-sm text-wcm-light-gray">Robust mesh networking that just works</p>
          </article>

          {/* Pillar 3: Efficiency */}
          <article className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
            <div className="font-mono text-4xl font-bold text-wcm-green mb-2" aria-hidden="true">03</div>
            <h3 className="font-mono text-lg font-bold text-wcm-light-gray mb-2">Efficiency</h3>
            <p className="font-mono text-sm text-wcm-light-gray">Low-power operation for extended battery life</p>
          </article>
        </div>
      </div>
    </section>
  )
}
