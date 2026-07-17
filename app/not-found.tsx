import Link from 'next/link'
import { ArrowLeft, SearchX } from 'lucide-react'

export default function NotFound() {
    return (
        <main className="not-found">
            <div className="site-container not-found-inner">
                <SearchX size={38} />
                <span>404</span>
                <h1>This route is not in the workspace.</h1>
                <p>The page may have moved, or the feature may still be an untracked idea.</p>
                <Link className="button button-primary" href="/">
                    <ArrowLeft size={17} /> Back to Elcro
                </Link>
            </div>
        </main>
    )
}