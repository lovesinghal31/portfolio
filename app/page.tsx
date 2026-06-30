import type { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"
import { ClientShell } from "@/components/client-shell"
import { PersonJsonLd, WebsiteJsonLd, FAQJsonLd } from "@/components/seo/json-ld"
import { faqItems } from "@/data/faq"
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

export const metadata: Metadata = constructMetadata({
  url: "/",
})

export default function Page() {
  return (
    <ClientShell>
      <PersonJsonLd />
      <WebsiteJsonLd />
      <FAQJsonLd faqs={faqItems} />
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
