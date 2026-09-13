import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'QuoteFlow — Close more jobs', description: 'Turn service leads into booked jobs with instant quotes and follow-up.' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
