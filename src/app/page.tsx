import Nav from "@/components/sections/Nav"
import Hero from "@/components/sections/Hero"
import Metrics from "@/components/sections/Metrics"
import Timeline from "@/components/sections/Timeline"
import Skills from "@/components/sections/Skills"
import Engineering from "@/components/sections/Engineering"
import Terminal from "@/components/sections/Terminal"
import Certifications from "@/components/sections/Certifications"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative bg-grid">
        <Hero />
        <Metrics />
        <Timeline />
        <Skills />
        <Engineering />
        <Terminal />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
