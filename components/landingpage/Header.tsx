'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, Github, Menu, X } from 'lucide-react'
import { navigation, site, SiteLink, statusLabel } from '@/lib/site'

const MenuLink = ({ item, onNavigate }: { item: SiteLink; onNavigate: () => void }) => (
    <Link className="mega-link" href={item.href} onClick={onNavigate}>
        <span>
            <strong>{item.label}</strong>
            {item.description && <small>{item.description}</small>}
        </span>
        {item.status && <em className={`menu-status menu-status-${item.status}`}>{statusLabel[item.status]}</em>}
    </Link>
)

export const Header = () => {
    const pathname = usePathname()
    const headerRef = useRef<HTMLElement>(null)
    const [openMenu, setOpenMenu] = useState<string | null>(null)
    const [mobileOpen, setMobileOpen] = useState(false)

    const closeAll = useCallback(() => {
        setOpenMenu(null)
        setMobileOpen(false)
    }, [])

    useEffect(() => {
        closeAll()
    }, [pathname, closeAll])

    useEffect(() => {
        if (!openMenu && !mobileOpen) return

        const onPointerDown = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                closeAll()
            }
        }
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeAll()
        }

        document.addEventListener('mousedown', onPointerDown)
        document.addEventListener('keydown', onKeyDown)
        return () => {
            document.removeEventListener('mousedown', onPointerDown)
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [openMenu, mobileOpen, closeAll])

    return (
        <header className="site-header" ref={headerRef}>
            <div className="site-container nav-shell">
                <Link href="/" className="brand" aria-label="Elcro home" onClick={closeAll}>
                    <Image src="/elcro/icon.png" alt="" width={36} height={36} priority />
                    <span>elcro</span>
                </Link>

                <nav className="desktop-nav" aria-label="Primary navigation">
                    {navigation.map(group => group.items ? (
                        <div className={`nav-dropdown${openMenu === group.label ? ' is-open' : ''}`} key={group.label}>
                            <button
                                type="button"
                                className="nav-trigger"
                                aria-expanded={openMenu === group.label}
                                onClick={() => setOpenMenu(current => (current === group.label ? null : group.label))}
                            >
                                {group.label}
                                <ChevronDown size={14} />
                            </button>
                            <div className="mega-menu">
                                <div className="mega-menu-head">
                                    <span>{group.label}</span>
                                    {group.href && <Link href={group.href} onClick={closeAll}>View all <ArrowUpRight size={13} /></Link>}
                                </div>
                                <div className="mega-menu-grid">
                                    {group.items.map(item => <MenuLink item={item} key={item.href} onNavigate={closeAll} />)}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link className="direct-nav-link" href={group.href!} key={group.label} onClick={closeAll}>{group.label}</Link>
                    ))}
                </nav>

                <div className="nav-actions">
                    <a className="icon-link" href={site.github} target="_blank" rel="noreferrer" aria-label="Elcro on GitHub">
                        <Github size={19} />
                    </a>
                    <Link className="button button-small button-primary nav-download" href={site.download}>
                        Download
                    </Link>
                    <div className={`mobile-nav${mobileOpen ? ' is-open' : ''}`}>
                        <button
                            type="button"
                            className="mobile-trigger"
                            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen(open => !open)}
                        >
                            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
                        </button>
                        <div className="mobile-drawer">
                            <div className="mobile-drawer-head">
                                <span>Navigate Elcro</span>
                                <small>Tap outside or press Esc to close</small>
                            </div>
                            {navigation.map(group => group.items ? (
                                <details className="mobile-group" key={group.label}>
                                    <summary>{group.label}<ChevronDown size={15} /></summary>
                                    <div>
                                        {group.href && <Link href={group.href} onClick={closeAll}>Overview</Link>}
                                        {group.items.map(item => (
                                            <Link href={item.href} key={item.href} onClick={closeAll}>
                                                {item.label}
                                                {item.status && item.status !== 'available' && <em>{statusLabel[item.status]}</em>}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <Link className="mobile-direct-link" href={group.href!} key={group.label} onClick={closeAll}>{group.label}</Link>
                            ))}
                            <div className="mobile-actions">
                                <Link className="button button-primary" href={site.download} onClick={closeAll}>Download Elcro</Link>
                                <a className="button button-secondary" href={site.github} target="_blank" rel="noreferrer">View GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
