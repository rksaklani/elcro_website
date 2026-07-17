import Link from 'next/link'
import { ArrowRight, Blocks, Bot, Globe, Search } from 'lucide-react'

const roadmap = [
    { icon: Search, title: 'Semantic indexing', text: 'Hybrid local retrieval for large codebases.', href: '/roadmap/indexing' },
    { icon: Globe, title: 'Browser tools', text: 'Runtime evidence for frontend work.', href: '/roadmap/browser' },
    { icon: Bot, title: 'Multi-agent', text: 'Parallel agents in isolated Git worktrees.', href: '/roadmap/multi-agent' },
    { icon: Blocks, title: 'Automations', text: 'Explicit scheduled and event-driven workflows.', href: '/roadmap/automations' },
]

export const RoadmapPreview = () => (
    <section className="section roadmap-preview">
        <div className="site-container">
            <div className="section-heading">
                <span className="status-badge status-roadmap">Roadmap</span>
                <h2>Clear about what comes next.</h2>
                <p>These capabilities are directions, not hidden beta features or promised release dates.</p>
            </div>
            <div className="roadmap-preview-grid">
                {roadmap.map(({ icon: Icon, ...item }) => (
                    <Link href={item.href} className="roadmap-preview-card" key={item.href}>
                        <Icon size={20} />
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <span>Read the plan <ArrowRight size={14} /></span>
                    </Link>
                ))}
            </div>
        </div>
    </section>
)
