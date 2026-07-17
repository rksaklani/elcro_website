import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ChevronDown, Github, Menu } from 'lucide-react'
import { navigation, site, SiteLink, statusLabel } from '@/lib/site'

const MenuLink = ({ item }: { item: SiteLink }) => (
    <Link className="mega-link" href={item.href}>
        <span>
            <strong>{item.label}</strong>
            {item.description && <small>{item.description}</small>}
        </span>
        {item.status && <em className={`menu-status menu-status-${item.status}`}>{statusLabel[item.status]}</em>}
    </Link>
)

export const Header = () => (
    <header className="site-header">
        <div className="site-container nav-shell">
            <Link href="/" className="brand" aria-label="Elcro home">
                <Image src="/elcro/icon.png" alt="" width={36} height={36} priority />
                <span>elcro</span>
            </Link>

            <nav className="desktop-nav" aria-label="Primary navigation">
                {navigation.map(group => group.items ? (
                    <details className="nav-dropdown" key={group.label}>
                        <summary>
                            {group.label}
                            <ChevronDown size={14} />
                        </summary>
                        <div className="mega-menu">
                            <div className="mega-menu-head">
                                <span>{group.label}</span>
                                {group.href && <Link href={group.href}>View all <ArrowUpRight size={13} /></Link>}
                            </div>
                            <div className="mega-menu-grid">
                                {group.items.map(item => <MenuLink item={item} key={item.href} />)}
                            </div>
                        </div>
                    </details>
                ) : (
                    <Link className="direct-nav-link" href={group.href!} key={group.label}>{group.label}</Link>
                ))}
            </nav>

            <div className="nav-actions">
                <a className="icon-link" href={site.github} target="_blank" rel="noreferrer" aria-label="Elcro on GitHub">
                    <Github size={19} />
                </a>
                <Link className="button button-small button-primary nav-download" href={site.download}>
                    Download
                </Link>
                <details className="mobile-nav">
                    <summary aria-label="Open navigation"><Menu size={21} /></summary>
                    <div className="mobile-drawer">
                        <div className="mobile-drawer-head">
                            <span>Navigate Elcro</span>
                            <small>Click menu button to close</small>
                        </div>
                        {navigation.map(group => group.items ? (
                            <details className="mobile-group" key={group.label}>
                                <summary>{group.label}<ChevronDown size={15} /></summary>
                                <div>
                                    {group.href && <Link href={group.href}>Overview</Link>}
                                    {group.items.map(item => (
                                        <Link href={item.href} key={item.href}>
                                            {item.label}
                                            {item.status && item.status !== 'available' && <em>{statusLabel[item.status]}</em>}
                                        </Link>
                                    ))}
                                </div>
                            </details>
                        ) : (
                            <Link className="mobile-direct-link" href={group.href!} key={group.label}>{group.label}</Link>
                        ))}
                        <div className="mobile-actions">
                            <Link className="button button-primary" href={site.download}>Download Elcro</Link>
                            <a className="button button-secondary" href={site.github}>View GitHub</a>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    </header>
)
