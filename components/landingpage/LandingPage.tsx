import Link from 'next/link'
import {
    ArrowRight,
    Bot,
    Braces,
    Check,
    Code2,
    Cpu,
    Download,
    Github,
    LockKeyhole,
    Plug,
    RotateCcw,
    ShieldCheck,
    Sparkles,
    SquareTerminal,
    Zap,
} from 'lucide-react'
import { downloadLink, githubLink } from '../links'

const features = [
    {
        icon: Bot,
        title: 'Agent that closes the loop',
        description: 'Ask Elcro to inspect files, make edits, run commands, read diagnostics, and iterate on the result.',
    },
    {
        icon: Zap,
        title: 'Fast inline edits',
        description: 'Use Quick Edit, streaming diffs, and Fast Apply to change code without losing your flow.',
    },
    {
        icon: Cpu,
        title: 'Any model, your choice',
        description: 'Connect directly to Anthropic, OpenAI, Gemini, OpenRouter, Ollama, or an OpenAI-compatible endpoint.',
    },
    {
        icon: Plug,
        title: 'MCP built in',
        description: 'Give the agent access to your own tools through local stdio, HTTP, and SSE MCP servers.',
    },
    {
        icon: RotateCcw,
        title: 'Review every change',
        description: 'Accept or reject granular diffs and return to checkpoints when an experiment goes the wrong way.',
    },
    {
        icon: Braces,
        title: 'Your VS Code workflow',
        description: 'Keep the editor, keybindings, themes, extensions, terminal, and source control you already know.',
    },
]

const modelLogos = [
    { src: '/ollama.png', name: 'Ollama' },
    { src: '/claude-icon.png', name: 'Anthropic' },
    { src: '/openai-logomark.png', name: 'OpenAI' },
    { src: '/gemini.png', name: 'Gemini' },
    { src: '/openrouter.png', name: 'OpenRouter' },
]

const CodeWindow = () => (
    <div className="code-window" aria-label="Elcro agent editing a TypeScript project">
        <div className="window-bar">
            <div className="window-dots"><span /><span /><span /></div>
            <span>elcro — local-first agent</span>
            <span className="window-status"><span /> private</span>
        </div>
        <div className="editor-shell">
            <aside className="file-tree">
                <div className="tree-label">EXPLORER</div>
                <p>⌄ src</p>
                <p className="tree-active">◇ agent.ts</p>
                <p>◇ models.ts</p>
                <p>◇ index.ts</p>
                <p>package.json</p>
            </aside>
            <div className="editor-code">
                <div><span className="line-number">1</span><span className="code-purple">export async function</span> <span className="code-blue">runAgent</span>() {'{'}</div>
                <div><span className="line-number">2</span>&nbsp;&nbsp;<span className="code-purple">const</span> context = <span className="code-blue">await</span> workspace.<span className="code-blue">inspect</span>()</div>
                <div className="code-added"><span className="line-number">3</span>&nbsp;&nbsp;<span className="code-purple">const</span> plan = <span className="code-blue">await</span> model.<span className="code-blue">reason</span>(context)</div>
                <div className="code-added"><span className="line-number">4</span>&nbsp;&nbsp;<span className="code-purple">await</span> tools.<span className="code-blue">apply</span>(plan)</div>
                <div><span className="line-number">5</span>{'}'}</div>
                <div className="cursor-line"><span className="line-number">6</span><span className="code-cursor" /></div>
            </div>
            <aside className="agent-panel">
                <div className="agent-heading"><Sparkles size={15} /> Agent</div>
                <p className="agent-prompt">Make the provider connection private by default.</p>
                <div className="agent-step"><Check size={13} /> Read provider settings</div>
                <div className="agent-step"><Check size={13} /> Updated request path</div>
                <div className="agent-step agent-running"><span /> Running typecheck</div>
                <div className="agent-result">2 files changed <strong>+18</strong> <em>−7</em></div>
            </aside>
        </div>
    </div>
)

export default function LandingPage() {
    return (
        <main>
            <section className="hero">
                <div className="hero-glow hero-glow-one" />
                <div className="hero-glow hero-glow-two" />
                <div className="site-container hero-content">
                    <div className="hero-copy">
                        <div className="eyebrow"><span /> Open source. Local first.</div>
                        <h1>Your code stays <span>yours.</span></h1>
                        <p>
                            Elcro is the AI coding IDE for developers who want powerful agents,
                            direct model access, and complete control over their data.
                        </p>
                        <div className="hero-actions">
                            <Link className="button button-primary" href={downloadLink}>
                                <Download size={19} /> Download for Linux
                            </Link>
                            <a className="button button-secondary" href={githubLink} target="_blank" rel="noreferrer">
                                <Github size={19} /> View source
                            </a>
                        </div>
                        <div className="hero-note">
                            <ShieldCheck size={16} />
                            No mandatory account · BYOK · Local models supported
                        </div>
                    </div>
                    <div className="hero-product">
                        <div className="product-badge">
                            <img src="/elcro/icon.png" alt="" />
                            <div><strong>Elcro 0.1</strong><span>Built on Code - OSS</span></div>
                        </div>
                        <CodeWindow />
                    </div>
                </div>
            </section>

            <section className="principles">
                <div className="site-container principle-grid">
                    <div><strong>Direct</strong><span>Requests go to your provider</span></div>
                    <div><strong>Portable</strong><span>Your models, keys, and tools</span></div>
                    <div><strong>Inspectable</strong><span>Open source from UI to agent</span></div>
                    <div><strong>Compatible</strong><span>Built on the VS Code foundation</span></div>
                </div>
            </section>

            <section id="features" className="section">
                <div className="site-container">
                    <div className="section-heading">
                        <div className="eyebrow"><Sparkles size={14} /> AI without the black box</div>
                        <h2>Everything you need to move from idea to working code.</h2>
                        <p>Elcro combines a familiar editor with practical AI tools that stay under your control.</p>
                    </div>
                    <div className="feature-grid">
                        {features.map(({ icon: Icon, title, description }) => (
                            <article className="feature-card" key={title}>
                                <div className="feature-icon"><Icon size={21} /></div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="privacy" className="section privacy-section">
                <div className="site-container privacy-grid">
                    <div className="privacy-visual">
                        <div className="privacy-ring ring-one" />
                        <div className="privacy-ring ring-two" />
                        <div className="privacy-core">
                            <LockKeyhole size={36} />
                            <strong>Local first</strong>
                            <span>Your workspace</span>
                        </div>
                        <div className="orbit-label orbit-one">API keys</div>
                        <div className="orbit-label orbit-two">Source code</div>
                        <div className="orbit-label orbit-three">Chat history</div>
                    </div>
                    <div className="privacy-copy">
                        <div className="eyebrow"><LockKeyhole size={14} /> Designed for control</div>
                        <h2>Skip the AI middleman.</h2>
                        <p>
                            Elcro connects directly to the model provider you configure. Use a hosted frontier model,
                            an internal endpoint, or run fully local with Ollama.
                        </p>
                        <ul className="check-list">
                            <li><Check size={16} /> No Elcro account required</li>
                            <li><Check size={16} /> No upstream Void analytics</li>
                            <li><Check size={16} /> Keys remain on your machine</li>
                            <li><Check size={16} /> Auditable open-source codebase</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="models" className="section models-section">
                <div className="site-container models-grid">
                    <div>
                        <div className="eyebrow"><Cpu size={14} /> Model freedom</div>
                        <h2>Use the right model for every job.</h2>
                        <p>
                            Choose separate models for chat, autocomplete, Quick Edit, and Apply.
                            Switch providers without switching editors.
                        </p>
                        <a className="text-link" href={githubLink} target="_blank" rel="noreferrer">
                            Explore the integrations <ArrowRight size={16} />
                        </a>
                    </div>
                    <div className="model-cloud">
                        {modelLogos.map(model => (
                            <div className="model-chip" key={model.name}>
                                <img src={model.src} alt="" />
                                <span>{model.name}</span>
                            </div>
                        ))}
                        <div className="model-chip model-chip-wide"><Code2 size={22} /><span>Any OpenAI-compatible API</span></div>
                    </div>
                </div>
            </section>

            <section className="section workflow-section">
                <div className="site-container">
                    <div className="section-heading compact">
                        <div className="eyebrow"><SquareTerminal size={14} /> A short path to useful</div>
                        <h2>Download. Connect. Build.</h2>
                    </div>
                    <div className="steps">
                        <div><span>01</span><strong>Download Elcro</strong><p>Install the native Linux x64 build.</p></div>
                        <div><span>02</span><strong>Choose a provider</strong><p>Add a key or connect your local model.</p></div>
                        <div><span>03</span><strong>Open your project</strong><p>Chat, edit, run, and review in one place.</p></div>
                    </div>
                </div>
            </section>

            <section className="site-container final-cta">
                <img src="/elcro/icon.png" alt="" />
                <div className="eyebrow"><span /> Built in the open</div>
                <h2>Build faster without giving up control.</h2>
                <p>Elcro is free, open source, and ready for your next project.</p>
                <div className="hero-actions">
                    <Link className="button button-primary" href={downloadLink}>
                        <Download size={19} /> Get Elcro
                    </Link>
                    <a className="button button-secondary" href={githubLink} target="_blank" rel="noreferrer">
                        <Github size={19} /> Star on GitHub
                    </a>
                </div>
            </section>
        </main>
    )
}
