import Link from 'next/link'
import Image from 'next/image'
import {
    ArrowRight,
    Check,
    Code2,
    Cpu,
    Download,
    Github,
    LockKeyhole,
    ShieldCheck,
    Sparkles,
    SquareTerminal,
} from 'lucide-react'
import { downloadLink, githubLink } from '../links'
import { FeatureGrid } from '../site/FeatureGrid'
import { Faq } from '../site/Faq'
import { ProductDemo } from '../site/ProductDemo'
import { RoadmapPreview } from '../site/RoadmapPreview'
import { ControlComparison } from '../site/ControlComparison'

const modelLogos = [
    { src: '/ollama.png', name: 'Ollama' },
    { src: '/claude-icon.png', name: 'Anthropic' },
    { src: '/openai-logomark.png', name: 'OpenAI' },
    { src: '/gemini.png', name: 'Gemini' },
    { src: '/openrouter.png', name: 'OpenRouter' },
]

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
                                <Download size={19} /> Download Elcro
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
                            <Image src="/elcro/icon.png" alt="" width={38} height={38} priority />
                            <div><strong>Elcro 0.1</strong><span>Built on Code - OSS</span></div>
                        </div>
                        <ProductDemo />
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
                    <FeatureGrid />
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

            <ControlComparison />

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
                                <Image src={model.src} alt="" width={38} height={38} />
                                <span>{model.name}</span>
                            </div>
                        ))}
                        <div className="model-chip model-chip-wide"><Code2 size={22} /><span>Any OpenAI-compatible API</span></div>
                    </div>
                </div>
            </section>

            <RoadmapPreview />

            <section className="section workflow-section">
                <div className="site-container">
                    <div className="section-heading compact">
                        <div className="eyebrow"><SquareTerminal size={14} /> A short path to useful</div>
                        <h2>Download. Connect. Build.</h2>
                    </div>
                    <div className="steps">
                        <div><span>01</span><strong>Download Elcro</strong><p>Native builds for Linux, Windows, and macOS.</p></div>
                        <div><span>02</span><strong>Choose a provider</strong><p>Add a key or connect your local model.</p></div>
                        <div><span>03</span><strong>Open your project</strong><p>Chat, edit, run, and review in one place.</p></div>
                    </div>
                </div>
            </section>

            <Faq />

            <section className="site-container final-cta">
                <Image src="/elcro/icon.png" alt="" width={72} height={72} />
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
