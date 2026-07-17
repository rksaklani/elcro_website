import { HelpCircle } from 'lucide-react'

const questions = [
    {
        question: 'Does Elcro require an account?',
        answer: 'You can install and try Elcro without an account. Paid plans unlock the full experience.',
    },
    {
        question: 'How much does Elcro cost?',
        answer: 'Elcro offers a free trial, then paid Pro and Team plans. See the pricing page for current tiers. Hosted model providers may also charge for their APIs.',
    },
    {
        question: 'Can I run local models?',
        answer: 'Yes. Elcro supports Ollama and OpenAI-compatible local runtimes, subject to model and hardware capabilities.',
    },
    {
        question: 'Are cloud agents and multi-agent workflows available?',
        answer: 'No. They are clearly marked roadmap directions and have no promised release date.',
    },
]

export const Faq = () => (
    <section className="section faq-section">
        <div className="site-container faq-grid">
            <div>
                <span className="eyebrow"><HelpCircle size={14} /> Questions, answered</span>
                <h2>Know the boundaries before you install.</h2>
            </div>
            <div className="faq-list">
                {questions.map(item => (
                    <details key={item.question}>
                        <summary>{item.question}<span>+</span></summary>
                        <p>{item.answer}</p>
                    </details>
                ))}
            </div>
        </div>
    </section>
)
