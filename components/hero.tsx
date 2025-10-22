import { AnimatedHeadline } from "./animated-headline"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Terminal grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#9CF25B 1px, transparent 1px), linear-gradient(90deg, #9CF25B 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex flex-col items-center">
          <img
            src="/images/design-mode/WCMESH_Wordmark_Hero_GREEN.png"
            alt="West Coast Mesh Logo"
            className="w-64 sm:w-80 lg:w-[28rem] h-auto md:w-[247px]"
          />
        </div>

        {/* Animated headline component */}
        <AnimatedHeadline />

        {/* Terminal prompt style tagline */}
        <div className="font-mono text-wcm-green text-lg sm:text-xl mb-8">
          <span className="text-wcm-green">{">"}</span>{" "}
          <span className="text-balance text-wcm-light-gray">
            Reliable, decentralized, encrypted communications you can use today
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#getting-started"
            className="font-mono px-8 py-3 bg-wcm-green text-black font-bold hover:bg-wcm-yellow transition-colors border-2 border-wcm-green hover:border-wcm-yellow"
          >
            {"[GET STARTED]"}
          </a>
        </div>
      </div>
    </section>
  )
}
