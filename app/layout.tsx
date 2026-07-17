import './globals.css'
import { Footer } from '@/components/landingpage/Footer'
import { Header } from '@/components/landingpage/Header'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="icon" href="/elcro/favicon.png" />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
