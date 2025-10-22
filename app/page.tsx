import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Mission } from "@/components/mission"
import { GettingStarted } from "@/components/getting-started"
import { UseCases } from "@/components/use-cases"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Mission />
      <GettingStarted />
      <UseCases />
      <Community />
      <Footer />
    </main>
  )
}
