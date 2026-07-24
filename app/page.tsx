import LandingPage from "@/components/landingpage/LandingPage";
import { baseUrl } from "./sitemap";

const title = 'Elcro — The AI code editor that keeps you in control'
const shortTitle = 'Elcro'
const description = 'A private AI code editor with direct model access, local agents, autocomplete, MCP tools, and full control over your data.'
const ogImage = `${baseUrl}/og?title=${encodeURIComponent(shortTitle)}&description=${encodeURIComponent(description)}`


// returns params
export const metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: shortTitle,
    description,
    type: 'website',
    url: `${baseUrl}`,
    images: [
      {
        url: ogImage,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: shortTitle,
    description,
    images: [ogImage],
  },
}





export default function Home() {
  return (
    <main className='min-h-screen'>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: shortTitle,
            description: description,
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Windows, macOS, Linux',
            softwareVersion: '0.1.16',
            url: baseUrl,
            image: ogImage,
            author: {
              '@type': 'Organization',
              name: 'Elcro',
              url: baseUrl
            }
          }),
        }}
      />
      <LandingPage />
    </main>
  );
}
