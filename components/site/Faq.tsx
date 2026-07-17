import { HelpCircle } from 'lucide-react'

const questions = [
    {
        question: 'Does Elcro require an account?',
        answer: 'No. The desktop app can be installed and configured without an Elcro account.',
    },
    {
        question: 'Is Elcro free?',
        answer: 'The editor is open-source and has no Elcro subscription. Hosted model providers may charge for their APIs.',
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
