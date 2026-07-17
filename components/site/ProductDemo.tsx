import { Check, Sparkles } from 'lucide-react'

export const ProductDemo = () => (
    <div className="code-window" aria-label="Illustration of Elcro Agent editing a TypeScript project">
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
