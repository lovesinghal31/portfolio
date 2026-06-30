import { siteConfig } from "@/config/site"

export function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: siteConfig.links.email,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SGSITS, Indore",
    },
  }

  return <JsonLd schema={schema} />
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  }

  return <JsonLd schema={schema} />
}

export function SoftwareSourceCodeJsonLd({
  name,
  description,
  url,
  codeRepository,
  programmingLanguage,
  dateCreated,
}: {
  name: string
  description: string
  url: string
  codeRepository?: string
  programmingLanguage?: string[]
  dateCreated?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name,
    description,
    url,
    ...(codeRepository && { codeRepository }),
    ...(programmingLanguage && { programmingLanguage }),
    ...(dateCreated && { dateCreated }),
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }

  return <JsonLd schema={schema} />
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <JsonLd schema={schema} />
}
