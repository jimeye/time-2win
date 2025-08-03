import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import WhatsAppChat from '@/components/ui/WhatsAppChat'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})
const helveticaNeue = Inter({ 
  subsets: ['latin'],
  variable: '--font-helvetica-neue'
})

export const metadata: Metadata = {
  title: 'TIME-2WIN - Lotterie de Montres de Luxe',
  description: 'Participez à nos compétitions exclusives pour gagner des montres de luxe, voitures de luxe et sacs de luxe authentiques. Transparence garantie avec Randomdraws.',
  keywords: 'lotterie, montres de luxe, voitures de luxe, sacs de luxe, compétition, Rolex, Hermes, Cartier',
  authors: [{ name: 'TIME-2WIN' }],
  openGraph: {
    title: 'TIME-2WIN - Lotterie de Montres de Luxe',
    description: 'Participez à nos compétitions exclusives pour gagner des montres de luxe authentiques.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${montserrat.variable} ${helveticaNeue.variable} bg-black`}>
        {children}
        <WhatsAppChat />
      </body>
    </html>
  )
}
