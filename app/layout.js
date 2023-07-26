import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CSY Club : IIIT-K',
  description: 'Generated by the CyberSecurity Club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section id="body_section">
          <div className="ellipse" id="ellipse1"></div>
          <div className="ellipse" id="ellipse2"></div>
        </section>
        <section>
          <section className={inter.className}>{children}
            <div className="container">
            </div>
          </section>
        </section>
      </body>
    </html>
  )
}
