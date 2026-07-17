import type { Metadata } from 'next'
import { Download, Github, PackageOpen, ShieldCheck } from 'lucide-react'
import { githubLink, linuxDownloadLink, releaseLink } from '@/components/links'

export const metadata: Metadata = {
    title: 'Download Elcro',
    description: 'Download the open-source, local-first Elcro AI coding IDE.',
}

export default function DownloadPage() {
    return (
        <main className="download-page">
            <div className="site-container">
                <section className="download-hero">
                    <img src="/elcro/icon.png" alt="Elcro icon" />
                    <div className="eyebrow"><ShieldCheck size={14} /> Open source · Linux x64</div>
                    <h1>Download Elcro.</h1>
                    <p>
                        Get the first Elcro desktop build. No account, subscription,
                        or mandatory cloud connection required.
                    </p>
                </section>

                <section className="download-card">
                    <div className="download-card-main">
                        <div className="download-card-icon"><PackageOpen size={25} /></div>
                        <div>
                            <h2>Elcro for Linux</h2>
                            <p>x64 · tar.gz archive · version 0.1.0</p>
                        </div>
                    </div>
                    <a className="button button-primary" href={linuxDownloadLink}>
                        <Download size={18} /> Download
                    </a>
                </section>

                <div className="install-note">
                    Extract the archive, then run <code>./elcro/elcro</code>. If Chromium reports a sandbox
                    permission error, configure <code>chrome-sandbox</code> as documented in the release notes.
                </div>

                <section className="download-card">
                    <div className="download-card-main">
                        <div className="download-card-icon"><Github size={25} /></div>
                        <div>
                            <h2>Build from source</h2>
                            <p>Inspect every line, contribute, or produce your own platform build.</p>
                        </div>
                    </div>
                    <a className="button button-secondary" href={githubLink} target="_blank" rel="noreferrer">
                        Open GitHub
                    </a>
                </section>

                <div className="install-note">
                    Looking for checksums or older versions? Visit the{' '}
                    <a className="text-link" href={releaseLink} target="_blank" rel="noreferrer">GitHub releases page</a>.
                    Windows and macOS packages are on the roadmap.
                </div>
            </div>
        </main>
    )
}
