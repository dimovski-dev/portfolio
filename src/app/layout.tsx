
import { Open_Sans } from 'next/font/google'

import './global.css'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: "Dimovski's portfolio",
  description: 'This is my portfolio as a software developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
          <main className={inter.className}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
