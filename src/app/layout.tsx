import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lato',
})

const kultureDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/tan_kulture_display.otf',
      weight: '700',
    },
  ],
  variable: '--font-kulture',
})

export const metadata: Metadata = {
  title: 'WONCHIS by Flex',
  description: 'Muy pronto, el snack definitivo!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${kultureDisplay.variable} ${lato.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
