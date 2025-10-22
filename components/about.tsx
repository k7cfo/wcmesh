import { Radio, Shield, Zap } from "lucide-react"

export function About() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-wcm-green mb-4">{":[WHAT IS WCMESH]"}</h2>
          <div className="h-1 w-24 bg-wcm-green mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-lg text-wcm-light-gray mb-6 leading-relaxed">
              West Coast Mesh is a multi-platform system for enabling secure text-based communications utilizing LoRa
              radio hardware.
            </p>
            <p className="font-mono text-lg text-wcm-light-gray leading-relaxed">
              It can be used for Off-Grid Communication, Emergency Response & Disaster Recovery, Outdoor Activities,
              Tactical Security including law enforcement and private security, and also IoT sensor networks.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
              <Radio className="w-8 h-8 text-wcm-green mb-3" />
              <h3 className="font-mono text-xl font-bold text-wcm-light-gray mb-2">{":[LoRa Radio]"}</h3>
              <p className="font-mono text-sm text-wcm-light-gray">
                Long-range, low-power radio technology for reliable mesh networking
              </p>
            </div>

            <div className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
              <Shield className="w-8 h-8 text-wcm-green mb-3" />
              <h3 className="font-mono text-xl font-bold text-wcm-light-gray mb-2">{":[Secure]"}</h3>
              <p className="font-mono text-sm text-wcm-light-gray">
                End-to-end encrypted communications without internet dependency
              </p>
            </div>

            <div className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
              <Zap className="w-8 h-8 text-wcm-green mb-3" />
              <h3 className="font-mono text-xl font-bold text-wcm-light-gray mb-2">{":[Decentralized]"}</h3>
              <p className="font-mono text-sm text-wcm-light-gray">No central servers, no single point of failure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
