import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const mulish = Mulish({
  subsets: ['latin'],
  display: 'auto',
  preload: true,
  style: 'normal',
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-mulish',
})

export const metadata: Metadata = {
  title: 'Link Masker',
  description: 'Mask your original URLs in a fun & fast way!',
  metadataBase: new URL('https://link-masker.sivaramp.com'),
  alternates: { canonical: new URL('https://link-masker.sivaramp.com') },
  twitter: {
    title: 'Link Masker',
    description: 'Mask your original URLs in a fun & fast way!',
    creator: '@SivaramPg',
    card: 'summary_large_image',
    images: [
      {
        type: 'image/png',
        url: '/og.png',
        width: 800,
        height: 800,
        alt: 'Link Masker',
      },
    ],
  },
  openGraph: {
    title: 'Link Masker',
    description: 'Mask your original URLs in a fun & fast way!',
    locale: 'en_US',
    siteName: 'Link Masker',
    url: new URL('https://link-masker.sivaramp.com'),
    type: 'website',
    images: [
      {
        type: 'image/png',
        url: '/og.png',
        width: 800,
        height: 800,
        alt: 'Link Masker',
      },
    ],
  },
  icons: {
    icon: ['/favicon.ico'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Navbar />
        {children} <Analytics />
        <Footer />
      </body>
    </html>
  )
}
