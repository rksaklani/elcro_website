import Link from 'next/link'
import { Github } from 'lucide-react'
import { downloadLink, githubLink } from '../links'

export const Header = () => (
    <header className="site-header">
        <div className="site-container nav-shell">
            <Link href="/" className="brand" aria-label="Elcro home">
                <img src="/elcro/icon.png" alt="" width={36} height={36} />
                <span>elcro</span>
            </Link>

            <nav className="nav-links" aria-label="Primary navigation">
                <a href="/#features">Features</a>
                <a href="/#privacy">Privacy</a>
                <a href="/#models">Models</a>
            </nav>

            <div className="nav-actions">
                <a className="icon-link" href={githubLink} target="_blank" rel="noreferrer" aria-label="Elcro on GitHub">
                    <Github size={19} />
                </a>
                <Link className="button button-small button-primary" href={downloadLink}>
                    Download
                </Link>
            </div>
        </div>
    </header>
)
