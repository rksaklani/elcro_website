import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { footerGroups, site } from '@/lib/site'

export const Footer = () => (
    <footer className="site-footer">
        <div className="site-container footer-shell">
            <div className="footer-intro">
                <Link href="/" className="brand footer-brand">
                    <Image src="/elcro/icon.png" alt="" width={34} height={34} />
                    <span>elcro</span>
                </Link>
                <p>AI coding,<br />under your control.</p>
                <div className="footer-actions">
                    <Link className="button button-small button-primary" href={site.download}>Download</Link>
                    <Link className="button button-small button-secondary" href="/pricing">Pricing</Link>
                </div>
            </div>

            <div className="footer-groups">
                {footerGroups.map(group => (
                    <div className="footer-group" key={group.label}>
                        <h2>{group.label}</h2>
                        {group.links.map(link => link.href.startsWith('http') ? (
                            <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                                {link.label} <ArrowUpRight size={11} />
                            </a>
                        ) : (
                            <Link href={link.href} key={link.href}>{link.label}</Link>
                        ))}
                    </div>
                ))}
            </div>

            <div className="footer-legal">
                <span>© {new Date().getFullYear()} Elcro. All rights reserved.</span>
                <span>Elcro is a trademark of its respective owner. Not affiliated with Cursor or Microsoft.</span>
            </div>
        </div>
    </footer>
)
