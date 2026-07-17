import type { Metadata } from 'next'
import Image from 'next/image'
import { Apple, Download, MonitorDown, Terminal } from 'lucide-react'
import { downloadTargets, site } from '@/lib/site'

export const metadata: Metadata = {
    title: 'Download',
    description: 'Download the Elcro AI code editor for Linux, Windows, and macOS.',
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
                    <div className="eyebrow"><Download size={14} /> Version {site.version}</div>
                    <h1>Download Elcro.</h1>
                    <p>
                        Get the Elcro desktop app for your platform, then start your free trial.
                        No mandatory cloud connection required.
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

                <div className="install-note">
                    Every download is the full Elcro desktop app. Start a free trial on first launch,
                    then upgrade to a paid plan from inside the editor or the{' '}
                    <a className="text-link" href="/pricing">pricing page</a>.
                </div>
            </div>
        </main>
    )
}
