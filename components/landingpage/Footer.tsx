import Link from 'next/link'
import { downloadLink, githubLink } from '../links'

export const Footer = () => (
    <footer className="site-footer">
        <div className="site-container footer-grid">
            <div>
                <Link href="/" className="brand footer-brand">
                    <img src="/elcro/icon.png" alt="" width={34} height={34} />
                    <span>elcro</span>
                </Link>
                <p>Open-source AI coding, under your control.</p>
            </div>

            <div className="footer-links">
                <Link href={downloadLink}>Download</Link>
                <a href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
                <a href={`${githubLink}/issues`} target="_blank" rel="noreferrer">Issues</a>
            </div>

            <p className="footer-legal">
                © {new Date().getFullYear()} Elcro. Based on Void and Code - OSS.
            </p>
        </div>
    </footer>
)
