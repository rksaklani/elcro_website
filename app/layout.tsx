import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Footer } from '@/components/landingpage/Footer'
import { Header } from '@/components/landingpage/Header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
    title: {
        default: 'Elcro — The AI code editor that keeps you in control',
        template: '%s — Elcro',
    },
    description: site.description,
    applicationName: site.name,
    keywords: ['AI code editor', 'AI IDE', 'local AI', 'coding agent', 'MCP', 'Ollama'],
    authors: [{ name: 'Elcro' }],
    creator: 'Elcro',
    icons: {
        icon: '/elcro/favicon.png',
        apple: '/elcro/icon.png',
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    colorScheme: 'dark',
    themeColor: '#06070b',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <a className="skip-link" href="#page-content">Skip to content</a>
                <Header />
                <div id="page-content">{children}</div>
                <Footer />
            </body>
        </html>
    )
}
