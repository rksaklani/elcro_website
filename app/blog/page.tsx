import type { Metadata } from 'next'
import { MarketingPage } from '@/components/site/MarketingPage'
import { pageBySlug } from '@/lib/site'

const page = pageBySlug.get('blog')!

export const metadata: Metadata = {
    title: 'Blog',
    description: page.description,
}

export default function BlogPage() {
    return <MarketingPage page={page} />
}
