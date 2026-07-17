import type { Metadata } from 'next'
import { MarketingPage } from '@/components/site/MarketingPage'
import { pageBySlug } from '@/lib/site'

const page = pageBySlug.get('changelog')!

export const metadata: Metadata = {
    title: 'Changelog',
    description: page.description,
}

export default function ChangelogPage() {
    return <MarketingPage page={page} />
}
