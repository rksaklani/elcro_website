import Link from 'next/link'
import { ArrowRight, Check, Map, ShieldCheck, Sparkles } from 'lucide-react'
import { pages, SitePage, site, statusLabel } from '@/lib/site'

const statusIcon = {
    available: Check,
    experimental: Sparkles,
    roadmap: Map,
    information: ShieldCheck,
}

export const StatusBadge = ({ status }: Pick<SitePage, 'status'>) => {
    const Icon = statusIcon[status]

    return (
        <span className={`status-badge status-${status}`}>
            <Icon size={13} aria-hidden="true" />
            {statusLabel[status]}
        </span>
    )
}

export const SiteCta = ({
    title = 'Build with your tools, models, and rules.',
    description = 'Elcro puts you in control of your models, keys, and data.',
}: {
    title?: string
    description?: string
}) => (
    <section className="site-container page-cta">
        <div>
            <span className="eyebrow"><Sparkles size={14} /> AI coding, under your control</span>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className="page-cta-actions">
            <Link className="button button-primary" href={site.download}>Download Elcro</Link>
            <Link className="button button-secondary" href="/pricing">See pricing</Link>
        </div>
    </section>
)

const RelatedPages = ({ page }: { page: SitePage }) => {
    if (!['product', 'roadmap', 'docs'].includes(page.slug)) return null
    const related = pages.filter(candidate =>
        candidate.slug.startsWith(`${page.slug}/`) && candidate.slug.split('/').length === 2,
    )

    return (
        <section className="site-container related-pages">
            <div className="section-heading">
                <span className="eyebrow"><Sparkles size={14} /> Explore {page.shortTitle}</span>
                <h2>Go deeper.</h2>
            </div>
            <div className="related-grid">
                {related.map(candidate => (
                    <Link href={`/${candidate.slug}`} className="related-card" key={candidate.slug}>
                        <StatusBadge status={candidate.status} />
                        <h3>{candidate.shortTitle}</h3>
                        <p>{candidate.description}</p>
                        <span>Open page <ArrowRight size={14} /></span>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export const MarketingPage = ({ page }: { page: SitePage }) => (
    <main className="marketing-page">
        <section className="page-hero">
            <div className="page-grid" aria-hidden="true" />
            <div className="site-container page-hero-inner">
                <div className="page-breadcrumb">
                    <Link href="/">Elcro</Link>
                    <span>/</span>
                    <span>{page.shortTitle}</span>
                </div>
                <StatusBadge status={page.status} />
                <p className="page-eyebrow">{page.eyebrow}</p>
                <h1>{page.title}</h1>
                <p className="page-description">{page.description}</p>

                <div className="page-actions">
                    {page.primaryHref && page.primaryLabel && (
                        <Link className="button button-primary" href={page.primaryHref}>
                            {page.primaryLabel} <ArrowRight size={17} />
                        </Link>
                    )}
                    {page.secondaryHref && page.secondaryLabel && (
                        <Link className="button button-secondary" href={page.secondaryHref}>
                            {page.secondaryLabel}
                        </Link>
                    )}
                </div>

                <div className="highlight-strip">
                    {page.highlights.map((highlight, index) => (
                        <div key={highlight}>
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <strong>{highlight}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="site-container page-sections">
            {page.status === 'roadmap' && (
                <aside className="roadmap-notice">
                    <Map size={19} />
                    <div>
                        <strong>This capability is not available in Elcro today.</strong>
                        <p>The page describes a direction for open design discussion, not a launch commitment or release date.</p>
                    </div>
                </aside>
            )}

            {page.sections.map((section, index) => (
                <article className="content-section" key={section.title}>
                    <span className="content-number">{String(index + 1).padStart(2, '0')}</span>
                    <div className="content-copy">
                        <h2>{section.title}</h2>
                        <p>{section.body}</p>
                        {section.items && (
                            <ul className="content-list">
                                {section.items.map(item => (
                                    <li key={item}><Check size={15} /> {item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {section.code ? (
                        <div className="code-card">
                            <div className="code-card-bar">
                                <span /><span /><span />
                                <em>terminal</em>
                            </div>
                            <pre><code>{section.code}</code></pre>
                        </div>
                    ) : (
                        <div className="content-visual" aria-hidden="true">
                            <span>{page.shortTitle}</span>
                            <div className="visual-line visual-line-one" />
                            <div className="visual-line visual-line-two" />
                            <div className="visual-node" />
                        </div>
                    )}
                </article>
            ))}
        </section>

        <RelatedPages page={page} />

        <SiteCta
            title={page.status === 'roadmap' ? 'Use what Elcro ships today.' : undefined}
            description={page.status === 'roadmap' ? 'Agent, Tab, Quick Edit, model choice, MCP tools, and checkpoints are available now.' : undefined}
        />
    </main>
)
