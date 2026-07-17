import { Check, Minus } from 'lucide-react'

const rows = [
    ['Your code used for training', false, 'Never'],
    ['Mandatory Elcro account', false, 'No'],
    ['Model request path', true, 'Direct to your endpoint'],
    ['Local model support', true, 'Ollama and compatible APIs'],
    ['Hosted cloud agents', false, 'Roadmap, not shipped'],
]

export const ControlComparison = () => (
    <section className="section comparison-section">
        <div className="site-container comparison-shell">
            <div className="section-heading">
                <span className="eyebrow"><Check size={14} /> The product today</span>
                <h2>Control is an architecture choice.</h2>
                <p>No vague promises: this is the current Elcro boundary.</p>
            </div>
            <div className="comparison-grid" role="table" aria-label="Current Elcro product characteristics">
                <div className="comparison-head" role="row">
                    <span role="columnheader">Characteristic</span>
                    <span role="columnheader">Current Elcro behavior</span>
                </div>
                {rows.map(([label, positive, value]) => (
                    <div className="comparison-row" role="row" key={String(label)}>
                        <span role="cell">{label}</span>
                        <strong role="cell">
                            {positive ? <Check size={15} /> : <Minus size={15} />}
                            {value}
                        </strong>
                    </div>
                ))}
            </div>
        </div>
    </section>
)
