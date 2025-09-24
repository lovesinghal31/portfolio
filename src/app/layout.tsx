import type { Metadata } from 'next'
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
  title: `${SITE.name} – ${SITE.tagline}`,
  description: SITE.description,
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
  metadataBase: new URL('https://example.com')
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>        
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
