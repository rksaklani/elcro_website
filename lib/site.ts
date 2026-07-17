export type PageStatus = 'available' | 'experimental' | 'roadmap' | 'information'

export type SiteLink = {
    label: string
    href: string
    description?: string
    status?: PageStatus
}

export type SiteSection = {
    title: string
    body: string
    items?: string[]
    code?: string
}

export type SitePage = {
    slug: string
    title: string
    shortTitle: string
    eyebrow: string
    description: string
    status: PageStatus
    highlights: string[]
    sections: SiteSection[]
    primaryLabel?: string
    primaryHref?: string
    secondaryLabel?: string
    secondaryHref?: string
}

export const site = {
    name: 'Elcro',
    description: 'The AI code editor that keeps you in control.',
    download: '/download-beta',
    version: '0.1.3',
    // Internal distribution host for signed builds (not surfaced as a source link).
    releases: 'https://github.com/rksaklani/elcro/releases',
    latestRelease: 'https://github.com/rksaklani/elcro/releases/tag/v0.1.3',
}

const RELEASE_TAG = 'v0.1.3'

export type DownloadTarget = {
    os: string
    match: string
    arch: string
    format: string
    href: string
    install: string
    available: boolean
    altLabel?: string
    altHref?: string
}

const asset = (name: string) => `${site.releases}/download/${RELEASE_TAG}/${name}`

export const downloadTargets: DownloadTarget[] = [
    {
        os: 'Linux',
        match: 'Linux',
        arch: 'x64',
        format: 'tar.gz archive',
        href: asset('Elcro-Linux-x64.tar.gz'),
        install: 'Extract the archive, then run ./VSCode-linux-x64/elcro. If Chromium reports a sandbox error, run: sudo chown root:root chrome-sandbox && sudo chmod 4755 chrome-sandbox in that folder.',
        available: true,
    },
    {
        os: 'Windows',
        match: 'Win',
        arch: 'x64',
        format: 'portable zip',
        href: asset('Elcro-Windows-x64.zip'),
        install: 'Extract the zip and run Elcro.exe. Windows may show a SmartScreen prompt for this unsigned beta — choose "More info" then "Run anyway".',
        available: true,
    },
    {
        os: 'macOS',
        match: 'Mac',
        arch: 'Apple silicon',
        format: 'app archive',
        href: asset('Elcro-macOS-arm64.zip'),
        install: 'Unzip and move Elcro.app to Applications. This beta is unsigned, so on first launch right-click the app and choose Open. Intel Macs: download the x64 build below.',
        available: true,
        altLabel: 'macOS Intel (x64)',
        altHref: asset('Elcro-macOS-x64.zip'),
    },
]

export const navigation: { label: string; href?: string; items?: SiteLink[] }[] = [
    {
        label: 'Product',
        href: '/product',
        items: [
            { label: 'Overview', href: '/product', description: 'The complete local-first workflow' },
            { label: 'Agent', href: '/product/agent', description: 'Inspect, edit, run, and iterate', status: 'available' },
            { label: 'Tab', href: '/product/tab', description: 'Experimental FIM inline completions', status: 'experimental' },
            { label: 'Quick Edit', href: '/product/quick-edit', description: 'Targeted edits with streaming diffs', status: 'available' },
            { label: 'Models', href: '/product/models', description: 'Bring your own provider or local model', status: 'available' },
            { label: 'MCP', href: '/product/mcp', description: 'Connect agent tools and services', status: 'available' },
            { label: 'Checkpoints', href: '/product/checkpoints', description: 'Review and restore AI changes', status: 'available' },
            { label: 'Privacy', href: '/product/privacy', description: 'Direct-provider architecture', status: 'available' },
        ],
    },
    {
        label: 'Roadmap',
        href: '/roadmap',
        items: [
            { label: 'Semantic Indexing', href: '/roadmap/indexing', description: 'Deeper codebase retrieval', status: 'roadmap' },
            { label: 'Browser', href: '/roadmap/browser', description: 'Inspect and test web apps', status: 'roadmap' },
            { label: 'Review', href: '/roadmap/review', description: 'Dedicated change review workflows', status: 'roadmap' },
            { label: 'Multi-agent', href: '/roadmap/multi-agent', description: 'Parallel isolated worktrees', status: 'roadmap' },
            { label: 'Cloud', href: '/roadmap/cloud', description: 'Optional remote execution', status: 'roadmap' },
            { label: 'CLI', href: '/roadmap/cli', description: 'Agent access from the terminal', status: 'roadmap' },
            { label: 'Mobile', href: '/roadmap/mobile', description: 'Monitor work away from desktop', status: 'roadmap' },
            { label: 'Automations', href: '/roadmap/automations', description: 'Scheduled and event-driven tasks', status: 'roadmap' },
            { label: 'Marketplace', href: '/roadmap/marketplace', description: 'Share skills, rules, and tools', status: 'roadmap' },
        ],
    },
    {
        label: 'Organizations',
        items: [
            { label: 'Teams', href: '/teams', description: 'Open workflows for small teams' },
            { label: 'Enterprise', href: '/enterprise', description: 'Self-managed today, controls on the roadmap' },
            { label: 'Security', href: '/security', description: 'Architecture and responsible disclosure' },
            { label: 'Data use', href: '/data-use', description: 'What Elcro sends and stores' },
        ],
    },
    {
        label: 'Resources',
        items: [
            { label: 'Docs', href: '/docs', description: 'Install, configure, and use Elcro' },
            { label: 'Changelog', href: '/changelog', description: 'Product updates and releases' },
            { label: 'Blog', href: '/blog', description: 'Product notes and technical writing' },
            { label: 'Community', href: '/community', description: 'Tips, workflows, and requests' },
            { label: 'Workshops', href: '/workshops', description: 'Community-led learning sessions' },
            { label: 'Brand', href: '/brand', description: 'Logos and usage guidance' },
            { label: 'Careers', href: '/careers', description: 'Help build Elcro' },
        ],
    },
    { label: 'Pricing', href: '/pricing' },
]

export const footerGroups: { label: string; links: SiteLink[] }[] = [
    {
        label: 'Product',
        links: [
            { label: 'Agent', href: '/product/agent' },
            { label: 'Tab', href: '/product/tab' },
            { label: 'Quick Edit', href: '/product/quick-edit' },
            { label: 'Models', href: '/product/models' },
            { label: 'MCP', href: '/product/mcp' },
            { label: 'Download', href: '/download-beta' },
        ],
    },
    {
        label: 'Build next',
        links: [
            { label: 'Roadmap', href: '/roadmap' },
            { label: 'Indexing', href: '/roadmap/indexing' },
            { label: 'Browser', href: '/roadmap/browser' },
            { label: 'Multi-agent', href: '/roadmap/multi-agent' },
            { label: 'Automations', href: '/roadmap/automations' },
            { label: 'Marketplace', href: '/roadmap/marketplace' },
        ],
    },
    {
        label: 'Resources',
        links: [
            { label: 'Docs', href: '/docs' },
            { label: 'Changelog', href: '/changelog' },
            { label: 'Blog', href: '/blog' },
            { label: 'Community', href: '/community' },
            { label: 'Workshops', href: '/workshops' },
        ],
    },
    {
        label: 'Company',
        links: [
            { label: 'About', href: '/about' },
            { label: 'Enterprise', href: '/enterprise' },
            { label: 'Security', href: '/security' },
            { label: 'Brand', href: '/brand' },
            { label: 'Careers', href: '/careers' },
            { label: 'Contact', href: '/contact' },
        ],
    },
    {
        label: 'Legal',
        links: [
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms', href: '/terms' },
            { label: 'Data use', href: '/data-use' },
        ],
    },
]

const shipped = (
    slug: string,
    shortTitle: string,
    eyebrow: string,
    title: string,
    description: string,
    highlights: string[],
    sections: SiteSection[],
    status: PageStatus = 'available',
): SitePage => ({
    slug,
    shortTitle,
    eyebrow,
    title,
    description,
    highlights,
    sections,
    status,
    primaryLabel: 'Download Elcro',
    primaryHref: site.download,
    secondaryLabel: 'See pricing',
    secondaryHref: '/pricing',
})

const planned = (
    slug: string,
    shortTitle: string,
    title: string,
    description: string,
    sections: SiteSection[],
): SitePage => ({
    slug,
    shortTitle,
    eyebrow: 'On the roadmap',
    title,
    description,
    highlights: ['Not shipped', 'No release date promised', 'In active design'],
    sections,
    status: 'roadmap',
    primaryLabel: 'View the roadmap',
    primaryHref: '/roadmap',
    secondaryLabel: 'Use Elcro today',
    secondaryHref: site.download,
})

const info = (
    slug: string,
    shortTitle: string,
    eyebrow: string,
    title: string,
    description: string,
    highlights: string[],
    sections: SiteSection[],
): SitePage => ({
    slug,
    shortTitle,
    eyebrow,
    title,
    description,
    highlights,
    sections,
    status: 'information',
    primaryLabel: 'Download Elcro',
    primaryHref: site.download,
})

const productPages: SitePage[] = [
    shipped(
        'product',
        'Product',
        'The local-first AI editor',
        'One editor from first thought to reviewed change.',
        'Elcro combines a familiar VS Code-based foundation with agentic chat, inline completions, targeted edits, direct model access, MCP tools, and file checkpoints.',
        ['Agentic chat', 'FIM autocomplete', 'Direct providers'],
        [
            { title: 'Work at the right level', body: 'Use Tab for small continuations, Quick Edit for a selection, or Agent mode for work that spans files and commands.', items: ['Tab completions', 'Quick Edit and Apply', 'Normal, Gather, and Agent chat modes'] },
            { title: 'Keep control of every change', body: 'Edits stream into the editor as diffs. Review changes individually, accept a group, reject an experiment, or restore a checkpoint.' },
            { title: 'Connect your own stack', body: 'Choose hosted or local models and extend Agent with MCP tools. Elcro does not require an Elcro-hosted inference service.' },
        ],
    ),
    shipped(
        'product/agent',
        'Agent',
        'Local agent workflow',
        'Give the task to an agent that can act.',
        'Elcro Agent can inspect the workspace, search files, edit code, read diagnostics, run temporary commands, and work with persistent terminals under your approval controls.',
        ['File and search tools', 'Terminal execution', 'Approval controls'],
        [
            { title: 'Three ways to chat', body: 'Normal mode answers directly. Gather mode collects context. Agent mode enters a tool loop that can act on the project.', items: ['Normal chat', 'Gather mode', 'Agent mode'] },
            { title: 'Tools with visible consequences', body: 'Agent tools cover file reads, text search, directory inspection, create, delete, edit, diagnostics, and terminal execution. Destructive steps remain visible for review.' },
            { title: 'Designed for local work', body: 'The tool loop runs in the desktop app against your workspace. Model requests follow the provider configuration you choose.' },
        ],
    ),
    shipped(
        'product/tab',
        'Tab',
        'Experimental inline autocomplete',
        'Test FIM completions without mistaking them for a finished feature.',
        'Elcro includes an experimental, disabled-by-default fill-in-the-middle provider with debounce, caching, cancellation, and acceptance tracking.',
        ['Experimental', 'FIM models only', 'Disabled by default'],
        [
            { title: 'Built for coding models', body: 'Select a dedicated autocomplete model instead of spending an expensive chat model on every keystroke.' },
            { title: 'Responsive by design', body: 'Requests debounce while you type, cancel when context changes, and reuse safe cached results where possible.' },
            { title: 'Current boundary', body: 'Elcro Tab uses editor-local context today. Semantic repository retrieval and coordinated cross-file predictions belong to the roadmap.' },
        ],
        'experimental',
    ),
    shipped(
        'product/quick-edit',
        'Quick Edit',
        'Targeted AI edits',
        'Describe the change. Review the diff.',
        'Select code, invoke Quick Edit, and stream a focused transformation into the editor. The same edit engine powers Apply and Agent edit tools.',
        ['Selection-aware', 'Streaming diffs', 'Fast Apply'],
        [
            { title: 'Small surface area', body: 'Quick Edit starts with the selected range, making intent and review easier than a whole-file rewrite.' },
            { title: 'Fast Apply when possible', body: 'Search-and-replace blocks update large files efficiently. Slow Apply remains available when a rewrite is required.' },
            { title: 'You approve the result', body: 'Diff zones expose additions and removals before they become accepted changes.' },
        ],
    ),
    shipped(
        'product/models',
        'Models',
        'Bring your own model',
        'Use the model that fits the job.',
        'Configure separate models for Chat, Autocomplete, Quick Edit, and Apply across hosted providers, local runtimes, and OpenAI-compatible endpoints.',
        ['Hosted providers', 'Ollama and vLLM', 'Per-feature selection'],
        [
            { title: 'Direct provider access', body: 'Elcro sends requests to the endpoint configured for each provider rather than requiring an Elcro inference proxy.' },
            { title: 'Local is a first-class choice', body: 'Elcro can discover locally running providers and supports Ollama, vLLM, LM Studio, and compatible endpoints.' },
            { title: 'Provider costs still apply', body: 'Hosted model usage is billed by the provider you choose, separately from your Elcro plan.' },
        ],
    ),
    shipped(
        'product/mcp',
        'MCP',
        'Extensible agent tools',
        'Connect Elcro to the tools you already use.',
        'Configure MCP servers and expose their tools to Agent over local stdio, Streamable HTTP, or SSE transports.',
        ['stdio', 'Streamable HTTP', 'SSE'],
        [
            { title: 'Tool discovery', body: 'Elcro watches MCP configuration, connects enabled servers, discovers tools, and makes them available to the local agent loop.' },
            { title: 'Control each server', body: 'Toggle servers and tools without rebuilding the editor. Keep sensitive integrations local when a stdio server is the right fit.' },
            { title: 'Current boundary', body: 'Tool calls are supported. Full MCP prompts, resources, rich image/audio results, elicitation, and apps are roadmap work.' },
        ],
    ),
    shipped(
        'product/checkpoints',
        'Checkpoints',
        'Reversible AI work',
        'Experiment without losing the path back.',
        'Chat checkpoints preserve AI-touched file contents and diff state so you can move backward or forward through an agent session.',
        ['File snapshots', 'Backward restore', 'Forward restore'],
        [
            { title: 'Attached to the conversation', body: 'A checkpoint links code state to the moment in chat that produced it, making an experiment easier to understand.' },
            { title: 'More than undo', body: 'Restore the set of files changed by the AI rather than relying on a single editor buffer history.' },
            { title: 'Current boundary', body: 'Checkpoints focus on AI-touched files. They are not a replacement for Git, backups, or full environment snapshots.' },
        ],
    ),
    shipped(
        'product/privacy',
        'Privacy',
        'No mandatory Elcro cloud',
        'Your provider relationship stays direct.',
        'Elcro does not require an account or route model requests through an Elcro-managed inference backend, and sends no product analytics.',
        ['No mandatory account', 'No Elcro inference proxy', 'Local configuration'],
        [
            { title: 'Know where requests go', body: 'Model prompts go to the provider or local endpoint you configure. That provider’s data policy still applies.' },
            { title: 'Local product state', body: 'Settings, chat state, and workspace operations live in the desktop application rather than a hosted Elcro account.' },
            { title: 'Your code is yours', body: 'Elcro never uses your code or prompts to train models, and does not send them to Elcro servers.' },
        ],
    ),
]

const roadmapPages: SitePage[] = [
    info(
        'roadmap',
        'Roadmap',
        'What is shipped and what is next',
        'What Elcro has, what comes next, and what is only an idea.',
        'The roadmap separates shipped capabilities from experiments and future work. It is directional, not a promise of dates or commercial availability.',
        ['Transparent status', 'Honest labels', 'No invented launch dates'],
        [
            { title: 'Near-term foundation', body: 'Improve distribution, model compatibility, edit reliability, documentation, and local retrieval before adding expensive infrastructure.' },
            { title: 'Local power next', body: 'Semantic indexing, browser tooling, review workflows, skills, hooks, and isolated worktrees can make the local product substantially stronger.' },
            { title: 'Cloud only when justified', body: 'Remote agents, mobile control, and automations require durable backend systems. They remain roadmap work until Elcro has the security and operational foundation to support them.' },
        ],
    ),
    planned('roadmap/indexing', 'Semantic Indexing', 'Help Agent understand large repositories.', 'Elcro has lexical file and text search today. This roadmap item adds an incremental semantic index and retrieval layer without making cloud hosting mandatory.', [
        { title: 'Planned scope', body: 'Incremental local indexing, symbols, embeddings, ignore controls, index health, and hybrid lexical-semantic retrieval.' },
        { title: 'Privacy target', body: 'Prefer a local index and user-selected embedding provider. Make remote processing explicit rather than automatic.' },
    ]),
    planned('roadmap/browser', 'Browser', 'Let Agent inspect the application it changes.', 'A future browser tool would close the loop for frontend work through navigation, screenshots, console output, network inspection, and structured page context.', [
        { title: 'Planned scope', body: 'Workspace-isolated browser state, screenshots, accessibility snapshots, console and network evidence, plus deliberate interaction tools.' },
        { title: 'Safety first', body: 'Origin controls, visible sessions, confirmation for sensitive actions, and no hidden account automation.' },
    ]),
    planned('roadmap/review', 'Review', 'A workflow dedicated to finding problems.', 'The current generic agent can inspect diffs and diagnostics. Dedicated review and debug modes need stronger evidence collection, severity handling, and focused user interfaces.', [
        { title: 'Local review', body: 'Review working-tree changes, explain risks, point to exact lines, and avoid low-confidence noise.' },
        { title: 'Debug evidence', body: 'Instrument an app, reproduce behavior, gather runtime evidence, explain the cause, and remove temporary instrumentation.' },
    ]),
    planned('roadmap/multi-agent', 'Multi-agent', 'Parallel work without file conflicts.', 'Elcro does not currently orchestrate subagents. The target is isolated local agents that use Git worktrees and return reviewable results.', [
        { title: 'Isolation model', body: 'One branch and worktree per agent, explicit merge or cherry-pick, and clear cleanup.' },
        { title: 'Resource limits', body: 'Bound concurrency, terminal usage, model spend, and filesystem scope so parallel work remains understandable.' },
    ]),
    planned('roadmap/cloud', 'Cloud Agents', 'Optional remote execution, not a mandatory dependency.', 'Cloud agents require secure repositories, secrets, isolated compute, logs, artifact handling, billing, and abuse controls. None of that is shipped today.', [
        { title: 'Long-term direction', body: 'Opt-in hosted runners or self-hosted workers that can build, test, and return a branch for review.' },
        { title: 'Required foundation', body: 'Identity, isolation, secret management, network policy, audit logs, retention controls, and reliable cancellation.' },
    ]),
    planned('roadmap/cli', 'CLI', 'Bring Elcro Agent to the terminal.', 'The desktop build includes a launcher, but Elcro does not yet ship a standalone coding-agent CLI.', [
        { title: 'Planned scope', body: 'Interactive prompts, non-interactive scripts, JSON output, rules, MCP, approvals, and resumable local sessions.' },
        { title: 'Shared core', body: 'Reuse provider adapters and agent tools rather than creating a separate behavior model.' },
    ]),
    planned('roadmap/mobile', 'Mobile', 'Observe and guide work away from the desk.', 'Elcro has no mobile application or hosted agent control plane today.', [
        { title: 'Depends on cloud', body: 'A mobile client only becomes useful after secure remote agents, identity, notifications, and session handoff exist.' },
        { title: 'Possible first step', body: 'A read-only status and review experience before remote code execution or secret access.' },
    ]),
    planned('roadmap/automations', 'Automations', 'Run explicit agent workflows on schedules and events.', 'Elcro does not have durable jobs, webhooks, event triggers, or always-on agents today.', [
        { title: 'Planned triggers', body: 'Git hosting events, schedules, webhooks, and manually invoked reusable workflows.' },
        { title: 'Operational requirements', body: 'Idempotency, concurrency controls, logs, retries, budgets, secrets, auditability, and safe output destinations.' },
    ]),
    planned('roadmap/marketplace', 'Marketplace', 'Share extensions for the agent layer.', 'Elcro already benefits from editor extensions and MCP servers. A dedicated marketplace for rules, skills, hooks, and agent presets is not shipped.', [
        { title: 'Open format first', body: 'Use repository-friendly formats that work without a central marketplace.' },
        { title: 'Distribution later', body: 'Add discovery, signatures, permissions, provenance, moderation, and updates only after the formats are stable.' },
    ]),
]

const docsPages: SitePage[] = [
    info('docs', 'Documentation', 'Learn Elcro', 'From first launch to a reviewed change.', 'Practical guides for installing Elcro, choosing models, using Agent, connecting MCP tools, and getting the most from your plan.', ['Install', 'Configure', 'Use'], [
        { title: 'Start here', body: 'Download the app for your platform, then open a project and configure at least one model provider.', items: ['Install Elcro', 'Configure a provider', 'Choose feature models', 'Run your first Agent task'] },
        { title: 'Core guides', body: 'Read focused pages for local models, Agent modes, MCP servers, and privacy.' },
    ]),
    info('docs/getting-started', 'Getting started', 'Documentation', 'Your first ten minutes with Elcro.', 'Install the desktop app, choose a provider, open a project, and make a reviewed AI edit.', ['Quick install', 'One provider', 'One reviewed change'], [
        { title: '1. Install', body: 'Download Elcro for your platform from the download page and launch it.' },
        { title: '2. Choose a model', body: 'Open Elcro Settings, enable a provider, add its endpoint or API key, and assign models to Chat, Autocomplete, Quick Edit, and Apply.' },
        { title: '3. Try the workflow', body: 'Open a project, ask Agent to explain one area, use Quick Edit on a selection, and review the resulting diff.' },
    ]),
    info('docs/install', 'Install', 'Documentation', 'Install Elcro on your platform.', 'Elcro ships desktop apps for Windows, macOS, and Linux. Download the build for your platform from the download page.', ['Windows', 'macOS', 'Linux'], [
        { title: 'Windows and macOS', body: 'Download the installer or app archive, then launch Elcro. On first launch, start your free trial.' },
        { title: 'Linux', body: 'Download and extract the archive, then launch the executable.', code: 'tar -xzf Elcro-Linux-x64.tar.gz\ncd VSCode-linux-x64\n./elcro' },
    ]),
    info('docs/models', 'Models', 'Documentation', 'Configure providers and feature models.', 'Elcro lets each AI feature use a separate provider and model.', ['Chat', 'Autocomplete', 'Quick Edit and Apply'], [
        { title: 'Provider settings', body: 'Enable a provider, add the required API key or endpoint, refresh available models when supported, and verify the selected model.' },
        { title: 'Model roles', body: 'Use a capable instruction model for Agent and edits. Use a fast FIM-compatible model for autocomplete.' },
        { title: 'Direct requests', body: 'Your selected provider receives prompts directly. Review its pricing, retention, and training policy.' },
    ]),
    info('docs/ollama', 'Ollama', 'Documentation', 'Run Elcro with a local model.', 'Connect Elcro to Ollama for local inference without hosted API credits.', ['Local endpoint', 'Autodetection', 'Open models'], [
        { title: 'Install a model', body: 'Install Ollama and pull a model suited to your hardware.', code: 'ollama pull qwen2.5-coder:7b' },
        { title: 'Connect Elcro', body: 'Start Ollama, enable the Ollama provider in Elcro Settings, refresh models, and assign one to a feature.' },
    ]),
    info('docs/agent', 'Agent', 'Documentation', 'Use Normal, Gather, and Agent modes.', 'Choose how much autonomy Elcro should use for each task.', ['Normal', 'Gather', 'Agent'], [
        { title: 'Normal mode', body: 'Ask questions and receive a response without entering the autonomous tool loop.' },
        { title: 'Gather mode', body: 'Let Elcro collect workspace context before answering.' },
        { title: 'Agent mode', body: 'Allow file, diagnostic, edit, and terminal tools. Review approvals and diffs as work progresses.' },
    ]),
    info('docs/mcp', 'MCP', 'Documentation', 'Connect tool servers to Agent.', 'Elcro supports MCP tool discovery and calls over stdio, Streamable HTTP, and SSE.', ['Configuration file', 'Server toggles', 'Tool calls'], [
        { title: 'Add a server', body: 'Open the MCP configuration from Elcro Settings and define a local command or remote endpoint. Restart or refresh the server after editing.' },
        { title: 'Review trust', body: 'An MCP server can expose powerful tools. Inspect its source, command, environment, and network destination before enabling it.' },
    ]),
    info('docs/updates', 'Updates', 'Documentation', 'Keep Elcro up to date.', 'Elcro publishes new desktop builds for each platform. Download the latest version from the download page or update from inside the editor when prompted.', ['Latest build', 'All platforms', 'In-app prompts'], [
        { title: 'Get the latest', body: 'Visit the download page to grab the newest release for Windows, macOS, or Linux.' },
        { title: 'Release notes', body: 'The changelog summarizes what changed in each version.' },
    ]),
]

const resourcePages: SitePage[] = [
    info('pricing', 'Pricing', 'Plans for every developer', 'Start free. Upgrade when you need more.', 'Elcro offers a free trial to explore the editor, then paid Pro and Team plans for daily professional work. Bring your own model key or use local models on any plan.', ['Free trial', 'Pro for individuals', 'Team for organizations'], [
        { title: 'Free trial', body: 'Explore Elcro with the full editor and a capped number of AI actions. No credit card required to start.', items: ['Full editor', 'Limited AI actions', 'Bring your own key'] },
        { title: 'Pro', body: 'For developers who use AI every day. Higher limits, priority model routing, and all shipped product features.', items: ['Unlimited editor use', 'Higher AI limits', 'Priority support'] },
        { title: 'Team', body: 'For organizations that want shared billing and central management. Seat-based pricing with volume options.', items: ['Centralized billing', 'Seat management', 'Volume discounts'] },
    ]),
    info('teams', 'Teams', 'Use Elcro together', 'Shared code, explicit configuration, no new platform required.', 'Teams can adopt the desktop editor, commit project instructions, share MCP setup patterns, and use their existing Git workflow. Centralized administration is not shipped.', ['Git-based collaboration', 'Shared project guidance', 'No team dashboard'], [
        { title: 'What works today', body: 'Standardize editor settings, provider guidance, and project rules across your team’s repositories.' },
        { title: 'What does not', body: 'Elcro has no centralized billing, organization accounts, team analytics, enforced rules, SSO, or managed marketplace.' },
    ]),
    info('enterprise', 'Enterprise', 'Control-first foundation', 'Architecture for organizations that value control.', 'Elcro can be evaluated and deployed with your approved providers, but it is an early product and holds no Elcro-specific compliance certifications yet.', ['Direct providers', 'Private by design', 'Roadmap controls'], [
        { title: 'Useful today', body: 'Pin a version, choose approved providers, use internal compatible endpoints, and distribute through existing software management.' },
        { title: 'Not claimed', body: 'No SOC 2 report, SSO, SCIM, audit dashboard, centralized policy service, contractual SLA, or managed support is currently offered.' },
        { title: 'Evaluate deliberately', body: 'Organizations should complete their own provider, endpoint, update, and extension review before deployment.' },
    ]),
    info('security', 'Security', 'Architecture and disclosure', 'Security starts with accurate boundaries.', 'Elcro is an early product. This page documents the current trust model without claiming third-party certification.', ['No certification claim', 'Provider-aware threat model', 'Coordinated disclosure'], [
        { title: 'Client and extensions', body: 'The desktop app can read and modify workspace files, run terminal commands, load extensions, and connect to configured services. Treat those capabilities as privileged.' },
        { title: 'Agent safety', body: 'Review tool approvals, diffs, terminal commands, MCP servers, model endpoints, and generated code. Use version control and backups.' },
        { title: 'Report a vulnerability', body: 'Email the Elcro security contact to coordinate a private report. Avoid publishing sensitive exploit details publicly before a fix ships.' },
    ]),
    info('data-use', 'Data use', 'Plain-language data flow', 'Elcro has no account database or inference proxy.', 'The desktop app stores product state locally and sends AI requests to the provider or endpoint you configure. Extensions and MCP servers have their own behavior.', ['Local app state', 'Configured providers', 'No Elcro analytics destination'], [
        { title: 'Model requests', body: 'Prompts can contain code and conversation context. They go to the configured model endpoint, so its privacy and retention policy governs that request.' },
        { title: 'Local state', body: 'Settings, chat history, checkpoints, logs, caches, and extension data can exist on the workstation.' },
        { title: 'Third-party integrations', body: 'Extensions, MCP servers, model providers, Git hosts, and downloaded updates are separate systems. Review each one before use.' },
    ]),
    info('changelog', 'Changelog', 'Releases', 'A short record of what changed.', 'Elcro publishes new desktop builds for each platform. This page adds editorial release notes as the product grows.', ['0.1 initial build', 'Multi-platform', 'Regular updates'], [
        { title: 'Elcro 0.1', body: 'First desktop release for Windows, macOS, and Linux with agentic chat, Quick Edit, autocomplete, direct-provider model access, MCP tools, and checkpoints.' },
        { title: 'Follow along', body: 'Watch this page and in-app update prompts for the latest versions.' },
    ]),
    info('blog', 'Blog', 'Notes from the team', 'Technical writing without invented momentum.', 'The Elcro blog covers the decisions behind a private, control-first AI editor.', ['Product notes', 'Architecture', 'Workflows'], [
        { title: 'Why Elcro is private by design', body: 'A coding agent is powerful enough to deserve explicit endpoints, visible tools, and reviewable changes, without sending your code to a vendor.' },
        { title: 'Control as a feature', body: 'Direct model access, bring-your-own-key, and local models keep you in charge of cost, latency, and data.' },
        { title: 'What comes next', body: 'Distribution quality, model support, reliable edits, semantic retrieval, browser evidence, and worktree isolation matter more than a long list of unchecked boxes.' },
    ]),
    info('community', 'Community', 'Connect with users', 'A place for Elcro users to share and learn.', 'Join other Elcro users to share workflows, prompts, provider setups, and tips. Feature requests and bug reports are welcome through our support channels.', ['Share workflows', 'Ask questions', 'Request features'], [
        { title: 'Share what works', body: 'Post reliable Agent prompts, provider configurations, and MCP setups that make you faster.' },
        { title: 'Shape the roadmap', body: 'Bring concrete use cases and constraints. Well-described requests help prioritize what ships next.' },
    ]),
    info('workshops', 'Workshops', 'Learn from the team', 'Practical workflows, not product theater.', 'Elcro is building a program of recorded and live sessions to help you get more from the editor.', ['Guided sessions', 'Practical workflows', 'Reusable materials'], [
        { title: 'Suggested sessions', body: 'Local models with Ollama, reliable Agent prompts, MCP server safety, and reviewing AI-generated diffs.' },
        { title: 'Get notified', body: 'Watch this page for upcoming session dates and recordings.' },
    ]),
    info('brand', 'Brand', 'Elcro identity', 'A fast mark for a developer-controlled tool.', 'Use the official Elcro icon and wordmark provided in our brand kit. Do not imply endorsement, certification, or an official relationship with other products.', ['Icon', 'Wordmark', 'Guidelines'], [
        { title: 'Assets', body: 'The brand kit includes the square icon and full wordmark in dark and light variants.' },
        { title: 'Usage', body: 'Keep sufficient contrast and clear space. Do not distort, recolor individual mark elements, or combine the Elcro name with third-party product names.' },
    ]),
    info('careers', 'Careers', 'Growing the team', 'Help build the AI editor developers control.', 'Elcro is early and growing. If you care about developer tools, performance, and privacy, we would like to hear from you.', ['Product', 'Engineering', 'Design'], [
        { title: 'Where help matters', body: 'Reliability, packaging, model adapters, semantic retrieval, browser tooling, accessibility, and security.' },
        { title: 'Get in touch', body: 'Reach out through our contact channel with your background and what you would like to work on.' },
    ]),
    info('about', 'About', 'A product with a direction', 'A private, control-first AI coding environment.', 'Elcro is an AI code editor focused on direct model providers, local models, privacy, and keeping developers in control of their data.', ['Private by design', 'Direct providers', 'Independent product'], [
        { title: 'Why this exists', body: 'Developers should be able to choose the model path and keep a capable editor without a mandatory hosted account or handing over their code.' },
        { title: 'What this is not', body: 'Elcro is not affiliated with Cursor or Microsoft.' },
    ]),
    info('contact', 'Contact', 'Get in touch', 'Questions, bugs, ideas, and security reports.', 'Reach the Elcro team for product help, sales questions, or security reports.', ['Support', 'Sales', 'Security'], [
        { title: 'Product support', body: 'Include your OS, app version, expected behavior, and reproduction steps so we can help quickly.' },
        { title: 'Security', body: 'Email our security contact for a private coordination channel rather than posting sensitive vulnerability details publicly.' },
    ]),
    info('privacy', 'Privacy policy', 'Legal information', 'Privacy for the Elcro website and desktop app.', 'This is a plain-language policy, not a substitute for the policies of model providers, extensions, MCP servers, or payment processors.', ['Minimal website data', 'No Elcro inference proxy', 'Third parties remain separate'], [
        { title: 'Website', body: 'The website collects only what is needed to provide the service and process payments. Hosting infrastructure may retain standard request logs.' },
        { title: 'Desktop', body: 'The app stores state locally and contacts services selected by the user, including model providers, extension sources, Git remotes, and MCP servers.' },
        { title: 'Changes', body: 'Material policy changes will be posted on this page.' },
    ]),
    info('terms', 'Terms', 'Legal information', 'Use Elcro responsibly.', 'Elcro is provided under the Elcro end-user license agreement and the plan you purchase.', ['License agreement', 'Paid plans', 'User-controlled integrations'], [
        { title: 'Software license', body: 'Your rights and obligations come from the Elcro end-user license agreement and applicable third-party notices.' },
        { title: 'Generated code', body: 'You are responsible for reviewing generated output, commands, dependencies, security, correctness, and licensing before use.' },
        { title: 'Third parties', body: 'Model providers, extensions, MCP servers, Git hosts, and other integrations have separate terms.' },
    ]),
    info('students', 'Students', 'Discounts for learners', 'Build and learn with Elcro.', 'Elcro plans a student discount program. Students can start with the free trial and bring their own local models today.', ['Free trial', 'Local models', 'Student discount planned'], [
        { title: 'Get started', body: 'Download Elcro, start the free trial, and connect a local model with Ollama to keep costs low while you learn.' },
        { title: 'Manage model costs', body: 'Use local models when hardware permits, or review provider free tiers and education programs independently.' },
    ]),
    info('research', 'Research', 'Open engineering questions', 'Measure before making frontier claims.', 'Elcro does not run a formal AI research lab. Research-oriented work should be reproducible, benchmarked, and connected to product reliability.', ['Evaluation harnesses', 'Retrieval quality', 'Edit reliability'], [
        { title: 'Useful questions', body: 'How often do edits apply correctly? Which context improves completion acceptance? When does semantic retrieval beat lexical search? What tool policies reduce risk?' },
        { title: 'Publish evidence', body: 'Share datasets where licensing permits, evaluation code, model versions, prompts, hardware, costs, and failure cases.' },
    ]),
]

export const pages = [...productPages, ...roadmapPages, ...docsPages, ...resourcePages]

export const pageBySlug = new Map(pages.map(page => [page.slug, page]))

export const allInternalRoutes = [
    '/',
    '/download-beta',
    ...pages.map(page => `/${page.slug}`),
]

export const statusLabel: Record<PageStatus, string> = {
    available: 'Available now',
    experimental: 'Experimental',
    roadmap: 'Roadmap',
    information: 'Project information',
}
