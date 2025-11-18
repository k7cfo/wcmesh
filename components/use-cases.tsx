import { Tent, AlertTriangle, Building2, Cpu } from 'lucide-react'

export function UseCases() {
  return (
    <section className="py-20 bg-background border-y-2 border-wcm-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mb-12 text-center">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-wcm-green mb-4">{":[USE CASES]"}</h2>
          <div className="h-1 w-24 bg-wcm-green mx-auto" />
        </header>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Use Case 1: Emergency Response */}
          <article className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
            <AlertTriangle className="w-10 h-10 text-wcm-green mb-4" />
            <h3 className="font-mono text-xl font-bold text-wcm-light-gray mb-3">Emergency Response</h3>
            <p className="font-mono text-sm text-wcm-light-gray leading-relaxed">
              Disaster recovery and emergency communications when traditional infrastructure fails
            </p>
          </article>

          {/* Use Case 2: Outdoor Activities */}
          <article className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
            <Tent className="w-10 h-10 text-wcm-green mb-4" />
            <h3 className="font-mono text-xl font-bold text-wcm-light-gray mb-3">Outdoor Activities</h3>
            <p className="font-mono text-sm text-wcm-light-gray leading-relaxed">
              Stay connected during hiking, camping, and remote expeditions
            </p>
          </article>

          {/* Use Case 3: Tactical Security */}
          <article className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
            <Building2 className="w-10 h-10 text-wcm-green mb-4" />
            <h3 className="font-mono text-xl font-bold text-wcm-light-gray mb-3">Tactical Security</h3>
            <p className="font-mono text-sm text-wcm-light-gray leading-relaxed">
              Secure communications for individuals 
            </p>
          </article>

          {/* Use Case 4: IoT Networks */}
          <article className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
            <Cpu className="w-10 h-10 text-wcm-green mb-4" />
            <h3 className="font-mono text-xl font-bold text-wcm-light-gray mb-3">IoT Networks</h3>
            <p className="font-mono text-sm text-wcm-light-gray leading-relaxed">
              Connect sensors and devices in remote locations without internet
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
