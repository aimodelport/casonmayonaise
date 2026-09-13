import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QuoteFlow — Quote faster. Win more work.',
  description: 'QuoteFlow helps contractors manage leads, quotes, approvals, and customers in one focused workspace.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
