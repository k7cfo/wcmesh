export function Mission() {
  return (
    <section className="py-20 bg-black border-y-2 border-wcm-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-wcm-green mb-4">{":[OUR MISSION]"}</h2>
          <div className="h-1 w-24 bg-wcm-green mx-auto" />
        </div>

        <p className="font-mono text-xl text-wcm-light-gray leading-relaxed mb-8 text-balance text-center">
          Our mission is to create the most reliable and secure decentralized mesh radio networking system which can be
          used for communications by anyone.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
            <div className="font-mono text-4xl font-bold text-wcm-green mb-2">01</div>
            <h3 className="font-mono text-lg font-bold text-wcm-light-gray mb-2">Security</h3>
            <p className="font-mono text-sm text-wcm-light-gray">Military-grade encryption for all communications</p>
          </div>

          <div className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
            <div className="font-mono text-4xl font-bold text-wcm-green mb-2">02</div>
            <h3 className="font-mono text-lg font-bold text-wcm-light-gray mb-2">Reliability</h3>
            <p className="font-mono text-sm text-wcm-light-gray">Robust mesh networking that works when you need it</p>
          </div>

          <div className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
            <div className="font-mono text-4xl font-bold text-wcm-green mb-2">03</div>
            <h3 className="font-mono text-lg font-bold text-wcm-light-gray mb-2">Efficiency</h3>
            <p className="font-mono text-sm text-wcm-light-gray">Low-power operation for extended battery life</p>
          </div>
        </div>
      </div>
    </section>
  )
}
