import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MarketingPage } from '@/components/site/MarketingPage'
import { pageBySlug, pages, site } from '@/lib/site'
import { baseUrl } from '../sitemap'

type RouteProps = {
    params: {
        slug: string[]
    }
}

const getPage = (segments: string[]) => pageBySlug.get(segments.join('/'))

// `/pricing` has a dedicated route (app/pricing/page.tsx), so exclude it here
// to avoid two routes resolving to the same path.
export const generateStaticParams = () => pages
    .filter(page => page.slug !== 'pricing')
    .map(page => ({
        slug: page.slug.split('/'),
    }))

export const generateMetadata = ({ params }: RouteProps): Metadata => {
    const page = getPage(params.slug)
    if (!page) return {}

    const socialTitle = `${page.shortTitle} — Elcro`
    const canonical = `${baseUrl}/${page.slug}`
    const image = `${baseUrl}/og?title=${encodeURIComponent(page.shortTitle)}&description=${encodeURIComponent(page.description)}`

    return {
        title: page.shortTitle,
        description: page.description,
        alternates: { canonical },
        openGraph: {
            title: socialTitle,
            description: page.description,
            url: canonical,
            siteName: site.name,
            type: 'website',
            images: [{ url: image }],
        },
        twitter: {
            card: 'summary_large_image',
            title: socialTitle,
            description: page.description,
            images: [image],
        },
    }
}

export default function ContentRoute({ params }: RouteProps) {
    const page = getPage(params.slug)
    if (!page) notFound()

    return <MarketingPage page={page} />
}
