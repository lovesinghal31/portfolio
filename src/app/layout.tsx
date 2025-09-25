import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../app/globals.css'
import { ThemeProvider } from '../components/theme-provider'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { SITE } from '../lib/data'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} – ${SITE.tagline}`,
    template: `%s – ${SITE.name}`
  },
  description: SITE.description,
  alternates: { canonical: SITE.url },
  openGraph: {
    title: `${SITE.name} – ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} – ${SITE.tagline}`,
    description: SITE.description,
    images: [SITE.ogImage]
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        {/* Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] bg-primary text-primary-foreground px-4 py-2 rounded shadow"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main" className="flex-1 focus:outline-none">
            {children}
          </main>
          {/* Structured Data */}
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: SITE.name,
                url: SITE.url,
                description: SITE.description,
                sameAs: [
                  'https://github.com/lovesinghal31',
                  'https://www.linkedin.com/in/love-singhal-65abb9333/',
                  'https://hashnode.com/@lovesinghal'
                ]
              })
            }}
          />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
