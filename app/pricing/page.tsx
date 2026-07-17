import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, KeyRound, Server, ShieldCheck } from 'lucide-react'
import { SiteCta } from '@/components/site/MarketingPage'
import { baseUrl } from '../sitemap'

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'Elcro pricing. Pay for the editor, not your data. Bring your own model key and keep your code private, or opt into managed inference.',
    alternates: { canonical: `${baseUrl}/pricing` },
}

type Tier = {
    name: string
    price: string
    cadence: string
    tagline: string
    features: string[]
    cta: { label: string; href: string }
    featured?: boolean
}

const tiers: Tier[] = [
    {
        name: 'Free trial',
        price: '$0',
        cadence: 'to get started',
        tagline: 'Explore Elcro with no account.',
        features: [
            'Full editor and VS Code extensions',
            'Agent, Quick Edit, and autocomplete',
            'Bring your own model key',
            'Local models with Ollama',
            'Capped AI actions',
        ],
        cta: { label: 'Download Elcro', href: '/download-beta' },
    },
    {
        name: 'Pro',
        price: '$15',
        cadence: 'per month',
        tagline: 'For developers who code with AI every day.',
        features: [
            'Everything in Free trial',
            'Unlimited in-editor AI actions',
            'All shipped features and checkpoints',
            'Optional managed inference add-on',
            'Priority updates and email support',
        ],
        cta: { label: 'Start free trial', href: '/download-beta' },
        featured: true,
    },
    {
        name: 'Team',
        price: '$25',
        cadence: 'per user / month',
        tagline: 'Shared billing and central management.',
        features: [
            'Everything in Pro',
            'Centralized license and billing',
            'Shared rules and configuration',
            'Seat management',
            'Volume discounts',
        ],
        cta: { label: 'Contact sales', href: '/contact' },
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        cadence: '',
        tagline: 'Self-hosted, SSO, and compliance.',
        features: [
            'Everything in Team',
            'Self-hosted or air-gapped deployment',
            'SSO / SCIM (roadmap)',
            'Audit logs and security review',
            'Dedicated support and SLA',
        ],
        cta: { label: 'Contact sales', href: '/contact' },
    },
]

export default function PricingPage() {
    return (
        <main className="pricing-page">
            <section className="site-container pricing-hero">
                <div className="eyebrow"><ShieldCheck size={14} /> Pay for the editor, not your data</div>
                <h1>Simple pricing. Your code stays yours.</h1>
                <p>
                    Elcro is a paid editor. You bring your own model key, so your license stays
                    affordable and your code never passes through Elcro. Model API usage is billed
                    by your provider unless you choose managed inference.
                </p>
            </section>

            <section className="site-container pricing-grid">
                {tiers.map(tier => (
                    <article className={`pricing-tier${tier.featured ? ' tier-featured' : ''}`} key={tier.name}>
                        {tier.featured && <span className="tier-flag">Most popular</span>}
                        <h2>{tier.name}</h2>
                        <div className="tier-price">
                            <strong>{tier.price}</strong>
                            {tier.cadence && <span>{tier.cadence}</span>}
                        </div>
                        <p className="tier-tagline">{tier.tagline}</p>
                        <Link
                            className={`button ${tier.featured ? 'button-primary' : 'button-secondary'}`}
                            href={tier.cta.href}
                        >
                            {tier.cta.label} <ArrowRight size={16} />
                        </Link>
                        <ul className="tier-features">
                            {tier.features.map(feature => (
                                <li key={feature}><Check size={15} /> {feature}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            <p className="pricing-fine-print">
                Prices are introductory and shown per user. Model and API usage from hosted
                providers is billed separately unless you use Elcro managed inference.
            </p>

            <section className="site-container pricing-options">
                <div className="section-heading">
                    <span className="eyebrow">Two ways to run models</span>
                    <h2>Private by default. Managed if you want it.</h2>
                </div>
                <div className="options-grid">
                    <article className="option-card">
                        <div className="option-icon"><KeyRound size={22} /></div>
                        <h3>Bring your own key</h3>
                        <p>
                            Add your provider API key or connect a local model. Requests go directly
                            to your endpoint — Elcro never sees or stores your code or prompts. You
                            pay the provider for usage.
                        </p>
                        <ul className="tier-features">
                            <li><Check size={15} /> Fully private, direct-to-provider</li>
                            <li><Check size={15} /> Works with local models offline</li>
                            <li><Check size={15} /> Included on every plan</li>
                        </ul>
                    </article>
                    <article className="option-card">
                        <div className="option-icon"><Server size={22} /></div>
                        <h3>Managed inference <em>(optional)</em></h3>
                        <p>
                            Prefer not to manage keys? Add Elcro managed inference and use bundled
                            models with one bill. It is opt-in — turn it off any time to return to
                            fully private bring-your-own-key.
                        </p>
                        <ul className="tier-features">
                            <li><Check size={15} /> No API keys to manage</li>
                            <li><Check size={15} /> One consolidated invoice</li>
                            <li><Check size={15} /> Opt-in, never required</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="site-container pricing-transparency">
                <div className="option-icon"><ShieldCheck size={22} /></div>
                <div>
                    <h2>How Elcro makes money</h2>
                    <p>
                        We charge a license fee for the editor and its agent features — like a
                        professional developer tool. We do not sell your data, we never train on
                        your code, and bring-your-own-key requests are never proxied through us.
                        Teams and enterprises pay for administration, self-hosting, and support.
                    </p>
                </div>
            </section>

            <SiteCta
                title="Start free. Upgrade when you are ready."
                description="Download Elcro, try it with your own key, and move to a paid plan whenever it earns its place in your workflow."
            />
        </main>
    )
}
