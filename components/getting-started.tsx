import { Radio, Users, MapPin, MessageSquare } from "lucide-react"

export function GettingStarted() {
  const steps = [
    {
      number: 1,
      title: "Get a Device",
      description: "Acquire a LoRa-compatible device configured for our network settings",
      icon: Radio,
    },
    {
      number: 2,
      title: "Join Discord",
      description: "Connect with the community for setup help and network updates",
      icon: Users,
    },
    {
      number: 3,
      title: "Configure Settings",
      description: "Apply our mesh settings to connect to the West Coast network",
      icon: MapPin,
    },
    {
      number: 4,
      title: "Start Messaging",
      description: "Begin communicating with others on the mesh network",
      icon: MessageSquare,
    },
  ]

  return (
    <section id="getting-started" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-wcm-light-gray mb-4">
            Get Started with West Coast Mesh
          </h2>
          <p className="font-mono text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Join our growing network and experience reliable communication without traditional infrastructure
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="border border-wcm-green bg-wcm-dark-gray p-8 hover:border-wcm-green hover:shadow-[0_0_15px_rgba(156,242,91,0.3)] transition-all"
              >
                <div className="flex justify-center mb-6">
                  <Icon className="w-12 h-12 text-wcm-green" strokeWidth={1.5} />
                </div>
                <h3 className="font-mono text-lg font-bold text-wcm-light-gray mb-3 text-center">
                  {step.number}. {step.title}
                </h3>
                <p className="font-mono text-sm text-gray-400 text-center leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
