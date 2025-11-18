import { Radio, Users, MapPin, MessageSquare } from 'lucide-react'

export function GettingStarted() {
  return (
    <section id="getting-started" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-wcm-light-gray mb-4">
            Get Started with West Coast Mesh
          </h2>
          <p className="font-mono text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Join your community to experience reliable communications without traditional infrastructure
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1: Join Discord */}
          <article className="border border-wcm-green bg-wcm-dark-gray p-8 hover:border-wcm-green hover:shadow-[0_0_15px_rgba(156,242,91,0.3)] transition-all">
            <div className="flex justify-center mb-6">
              <Users className="w-12 h-12 text-wcm-green" strokeWidth={1.5} />
            </div>
            <h3 className="font-mono text-lg font-bold text-wcm-light-gray mb-3 text-center">
              1. Join Discord
            </h3>
            <p className="font-mono text-sm text-muted-foreground text-center leading-relaxed">
              Connect with the community for setup help and network updates
            </p>
            <div className="mt-4 text-center">
              <a
                href="https://discord.com/invite/wcmesh"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-wcm-green hover:text-wcm-yellow transition-colors underline"
              >
                {">"} Join Discord
              </a>
            </div>
          </article>

          {/* Step 2: Get a Device */}
          <article className="border border-wcm-green bg-wcm-dark-gray p-8 hover:border-wcm-green hover:shadow-[0_0_15px_rgba(156,242,91,0.3)] transition-all">
            <div className="flex justify-center mb-6">
              <Radio className="w-12 h-12 text-wcm-green" strokeWidth={1.5} />
            </div>
            <h3 className="font-mono text-lg font-bold text-wcm-light-gray mb-3 text-center">
              2. Get a Device
            </h3>
            <p className="font-mono text-sm text-muted-foreground text-center leading-relaxed">
              Acquire a LoRa-compatible device. Shop around or try the following:
            </p>
            <div className="mt-4 text-center">
              <a
                href="https://store.rokland.com/products/wismesh-tag-from-rakwireless-mokosmart-meshtastic-compatible-card-sized-node-us915-mhz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-wcm-green hover:text-wcm-yellow transition-colors underline"
              >
                {">"} WisMesh Tag
              </a>
            </div>
          </article>

          {/* Step 3: Configure Settings */}
          <article className="border border-wcm-green bg-wcm-dark-gray p-8 hover:border-wcm-green hover:shadow-[0_0_15px_rgba(156,242,91,0.3)] transition-all">
            <div className="flex justify-center mb-6">
              <MapPin className="w-12 h-12 text-wcm-green" strokeWidth={1.5} />
            </div>
            <h3 className="font-mono text-lg font-bold text-wcm-light-gray mb-3 text-center">
              3. Configure Settings
            </h3>
            <p className="font-mono text-sm text-muted-foreground text-center leading-relaxed">
              Talk with fellow members on discord to determine the best frequency for your area
            </p>
          </article>

          {/* Step 4: Start Messaging */}
          <article className="border border-wcm-green bg-wcm-dark-gray p-8 hover:border-wcm-green hover:shadow-[0_0_15px_rgba(156,242,91,0.3)] transition-all">
            <div className="flex justify-center mb-6">
              <MessageSquare className="w-12 h-12 text-wcm-green" strokeWidth={1.5} />
            </div>
            <h3 className="font-mono text-lg font-bold text-wcm-light-gray mb-3 text-center">
              4. Start Messaging
            </h3>
            <p className="font-mono text-sm text-muted-foreground text-center leading-relaxed">
              Begin communicating with others on the mesh network
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
