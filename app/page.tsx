import { ClientShell } from "@/components/client-shell"
import { Hero } from "@/sections/hero"
import { About } from "@/sections/about"
import { Skills } from "@/sections/skills"
import { Projects } from "@/sections/projects"
import { Achievements } from "@/sections/achievements"
import { Journey } from "@/sections/journey"
import { GithubSection } from "@/sections/github"
import { FAQ } from "@/sections/faq"
import { Contact } from "@/sections/contact"
import { Footer } from "@/sections/footer"

export default function Page() {
  return (
    <ClientShell>
      <main>
        <Hero />
        <div className="gradient-line" />
        <About />
        <div className="gradient-line" />
        <Skills />
        <div className="gradient-line" />
        <Projects />
        <div className="gradient-line" />
        <Achievements />
        <div className="gradient-line" />
        <Journey />
        <div className="gradient-line" />
        <GithubSection />
        <div className="gradient-line" />
        <FAQ />
        <div className="gradient-line" />
        <Contact />
      </main>
      <Footer />
    </ClientShell>
  )
}
