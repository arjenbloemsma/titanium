// import './globals.:ss'
import { Inter } from 'next/font/google'
import Providers from 'src/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Project Titanium',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
