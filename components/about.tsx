import { Radio, Shield, Zap } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mb-12 text-center">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-wcm-green mb-4">{":[WHAT IS WCMESH]"}</h2>
          <div className="h-1 w-24 bg-wcm-green mx-auto" />
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main Description */}
          <article className="space-y-6">
            <p className="font-mono text-lg text-wcm-light-gray leading-relaxed">
              West Coast Mesh is a community hub for individuals building the West Coast&#39;s largest decentralized mesh network. This network is entirely user-supplied, powered by people like you.
            </p>
            <p className="font-mono text-lg text-wcm-light-gray leading-relaxed">
              {"Our community utilizes MeshCore software, enabling secure connections for Off-Grid use, Family Communications, Emergency Response & Disaster Recovery, Outdoor Activities, and IoT sensor networks."}
            </p>
          </article>

          {/* Feature Cards */}
          <div className="grid gap-6">
            {/* Feature 1: LoRa Radio */}
            <article className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
              <Radio className="w-8 h-8 text-wcm-green mb-3" />
              <h3 className="font-mono text-xl font-bold text-wcm-light-gray mb-2">{":[LoRa Radio]"}</h3>
              <p className="font-mono text-sm text-wcm-light-gray">
                Long-range, low-power radio technology for reliable mesh networking
              </p>
            </article>

            {/* Feature 2: Secure */}
            <article className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
              <Shield className="w-8 h-8 text-wcm-green mb-3" />
              <h3 className="font-mono text-xl font-bold text-wcm-light-gray mb-2">{":[Secure]"}</h3>
              <p className="font-mono text-sm text-wcm-light-gray">
                End-to-end encrypted communications without internet dependency
              </p>
            </article>

            {/* Feature 3: Decentralized */}
            <article className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
              <Zap className="w-8 h-8 text-wcm-green mb-3" />
              <h3 className="font-mono text-xl font-bold text-wcm-light-gray mb-2">{":[Decentralized]"}</h3>
              <p className="font-mono text-sm text-wcm-light-gray">No central servers, no single point of failure</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
