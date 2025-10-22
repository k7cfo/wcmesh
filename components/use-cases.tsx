import { Tent, AlertTriangle, Building2, Cpu } from "lucide-react"

export function UseCases() {
  const useCases = [
    {
      icon: AlertTriangle,
      title: "Emergency Response",
      description: "Disaster recovery and emergency communications when traditional infrastructure fails",
    },
    {
      icon: Tent,
      title: "Outdoor Activities",
      description: "Stay connected during hiking, camping, and remote expeditions",
    },
    {
      icon: Building2,
      title: "Tactical Security",
      description: "Secure communications for individuals and private security operations",
    },
    {
      icon: Cpu,
      title: "IoT Networks",
      description: "Connect sensors and devices in remote locations without internet",
    },
  ]

  return (
    <section className="py-20 bg-black border-y-2 border-wcm-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-wcm-green mb-4">{":[USE CASES]"}</h2>
          <div className="h-1 w-24 bg-wcm-green mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div key={index} className="border-2 border-wcm-green p-6 bg-wcm-dark-gray">
                <Icon className="w-10 h-10 text-wcm-green mb-4" />
                <h3 className="font-mono text-xl font-bold text-wcm-light-gray mb-3">{useCase.title}</h3>
                <p className="font-mono text-sm text-wcm-light-gray leading-relaxed">{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
