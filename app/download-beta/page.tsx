import type { Metadata } from 'next'
import Image from 'next/image'
import { Apple, Download, Github, MonitorDown, Terminal } from 'lucide-react'
import { downloadTargets, site } from '@/lib/site'

export const metadata: Metadata = {
    title: 'Download',
    description: 'Download the open-source, local-first Elcro AI coding IDE for Linux, Windows, and macOS.',
    alternates: { canonical: '/download-beta' },
}

const osIcon: Record<string, typeof Apple> = {
    Linux: Terminal,
    Windows: MonitorDown,
    macOS: Apple,
}

export default function DownloadPage() {
    return (
        <main className="download-page">
            <div className="site-container">
                <section className="download-hero">
                    <Image src="/elcro/icon.png" alt="Elcro icon" width={86} height={86} priority />
                    <div className="eyebrow"><Download size={14} /> Open source · Version {site.version}</div>
                    <h1>Download Elcro.</h1>
                    <p>
                        Get the Elcro desktop build for your platform. No account, subscription,
                        or mandatory cloud connection required.
                    </p>
                </section>

                <section className="download-grid">
                    {downloadTargets.map(target => {
                        const Icon = osIcon[target.os] ?? MonitorDown
                        return (
                            <article className="download-tile" key={target.os}>
                                <div className="download-tile-icon"><Icon size={26} /></div>
                                <h2>Elcro for {target.os}</h2>
                                <p className="download-tile-meta">{target.arch} · {target.format}</p>
                                <a className={`button ${target.available ? 'button-primary' : 'button-secondary'}`} href={target.href} target="_blank" rel="noreferrer">
                                    <Download size={17} /> {target.available ? 'Download' : 'Get from releases'}
                                </a>
                                {target.altHref && (
                                    <a className="download-alt-link" href={target.altHref} target="_blank" rel="noreferrer">
                                        {target.altLabel}
                                    </a>
                                )}
                                {!target.available && <span className="download-tag">Building — grab the latest asset</span>}
                                <p className="download-tile-install">{target.install}</p>
                            </article>
                        )
                    })}
                </section>

                <section className="download-card">
                    <div className="download-card-main">
                        <div className="download-card-icon"><Github size={25} /></div>
                        <div>
                            <h2>Build from source</h2>
                            <p>Inspect every line, contribute, or produce your own platform build.</p>
                        </div>
                    </div>
                    <a className="button button-secondary" href={site.github} target="_blank" rel="noreferrer">
                        Open GitHub
                    </a>
                </section>

                <div className="install-note">
                    All archives, checksums, and previous versions live on the{' '}
                    <a className="text-link" href={site.releases} target="_blank" rel="noreferrer">GitHub releases page</a>.
                    Builds are produced automatically for each platform from the tagged source.
                </div>
            </div>
        </main>
    )
}
