import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jakub Sopel',
  description: 'Jakub Sopel Landing page',
  manifest: 'https://rave1.github.io/js-landing/manifest.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-base-200'>
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
