import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Olym3 Scan - Surface the Signal. Build the Future.',
  description: 'Empowering users with real-time Olym3 blockchain transaction visibility, verifiable proofs, and advanced proof technologies.',
  keywords: 'Olym3, blockchain, transaction explorer, verifiable proofs, proof technologies, Web3, Olym3 Scan',
  authors: [{ name: 'Olym3 Scan Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00D4FF',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="olym3">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.gif" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Olym3 Scan - Surface the Signal. Build the Future." />
        <meta property="og:description" content="Empowering users with real-time Olym3 blockchain transaction visibility, verifiable proofs, and advanced proof technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.olym3scan.xyz" />
        <meta property="og:image" content="/logo.gif" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Olym3 Scan - Surface the Signal. Build the Future." />
        <meta name="twitter:description" content="Empowering users with real-time Olym3 blockchain transaction visibility, verifiable proofs, and advanced proof technologies." />
        <meta name="twitter:image" content="/logo.gif" />
      </head>
      <body className={`${inter.className} bg-base-100 text-base-content antialiased`}>
        {children}
      </body>
    </html>
  )
}
