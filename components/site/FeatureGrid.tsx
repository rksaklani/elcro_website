import Link from 'next/link'
import { Bot, Braces, Cpu, Plug, RotateCcw, Zap } from 'lucide-react'

const features = [
    {
        icon: Bot,
        title: 'Agent that closes the loop',
        description: 'Inspect files, make edits, run commands, read diagnostics, and iterate on the result.',
        href: '/product/agent',
    },
    {
        icon: Zap,
        title: 'Fast inline edits',
        description: 'Use Quick Edit, streaming diffs, and Fast Apply without losing your flow.',
        href: '/product/quick-edit',
    },
    {
        icon: Cpu,
        title: 'Any model, your choice',
        description: 'Connect directly to hosted providers, Ollama, or a compatible endpoint.',
        href: '/product/models',
    },
    {
        icon: Plug,
        title: 'MCP built in',
        description: 'Give Agent access to tools through stdio, Streamable HTTP, and SSE servers.',
        href: '/product/mcp',
    },
    {
        icon: RotateCcw,
        title: 'Review every change',
        description: 'Accept or reject diffs and return to checkpoints when an experiment goes wrong.',
        href: '/product/checkpoints',
    },
    {
        icon: Braces,
        title: 'Your VS Code workflow',
        description: 'Keep the editor, keybindings, themes, extensions, terminal, and source control you know.',
        href: '/product',
    },
]

export const FeatureGrid = () => (
    <div className="feature-grid">
        {features.map(({ icon: Icon, title, description, href }) => (
            <Link className="feature-card" href={href} key={title}>
                <div className="feature-icon"><Icon size={21} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="feature-card-link">Explore feature →</span>
            </Link>
        ))}
    </div>
)
