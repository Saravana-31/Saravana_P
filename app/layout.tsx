import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import ChatbotWrapper from '@/components/ChatbotWrapper'

// SEO: Enhanced metadata for portfolio
export const metadata: Metadata = {
  title: 'Saravana P – AIML Developer | Portfolio',
  description: 'Portfolio of Saravana P, AIML Developer. Explore projects, skills, resume, and connect with me.',
  keywords: ['AIML', 'Developer', 'AI', 'Machine Learning', 'Portfolio', 'Projects'],
  openGraph: {
    title: 'Saravana P – AIML Developer | Portfolio',
    description: 'Portfolio of Saravana P, AIML Developer. Explore projects, skills, resume, and connect with me.',
    type: 'website',
    url: 'https://saravana-p.tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saravana P – AIML Developer | Portfolio',
    description: 'Portfolio of Saravana P, AIML Developer. Explore projects, skills, resume, and connect with me.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* SEO: Structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Saravana P',
              url: 'https://saravana-p.tech',
              sameAs: [
                'https://www.linkedin.com/in/saravana-p/',
                'https://github.com/saravana-31',
              ],
              jobTitle: 'AIML Developer',
            }),
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <ChatbotWrapper />
      </body>
    </html>
  )
}
