<script>
    import { base } from "$app/paths";
    import ProjectShowcase from "./ProjectShowcase.svelte";
    import TerminalHero from "./TerminalHero.svelte";

    $: cvHref = `${base}/assets/cv/output/CurriculumVitae.pdf`;

    const projects = [
        {
            name: "SignalForge",
            icon: "fa-solid fa-shield-halved",
            accent: "rose",
            private: true,
            tagline:
                "Cross-LLM security lab: specialist agents, methodology skills, executable adapters, detection replay, and scope-aware safety hooks.",
            stack: [
                "Claude Code / Codex",
                "Python",
                "Detection replay",
                "Eval harness",
                "Safety hooks",
                "DFIR / RE",
            ],
            body: "An open-lane security toolkit that lets multiple LLMs operate from one auditable security contract—offense is always paired with matching detection and remediation, behind fast scope gates. Private for now; happy to walk through it.",
            highlights: [
                "Specialist agents for red, blue, purple, DFIR, reverse engineering, and detection engineering.",
                "Executable parsers and tool adapters—real inputs in, normalized findings out—not just prompts.",
                "Detection replay over recorded telemetry plus an eval harness that scores agent behavior.",
                "Scope-aware safety hooks (.cy-lab / .cy-scope) so high-impact actions require explicit authorization.",
            ],
        },
        {
            name: "Chatster",
            icon: "fa-solid fa-comments",
            accent: "violet",
            tagline:
                "Real-time chat reference stack: Go WebSocket hub, SQLite history, React UI, Docker, and portfolio-grade ops docs.",
            github: "https://github.com/AliSinaDevelo/Chatster",
            stack: [
                "Go 1.22",
                "Gorilla WebSocket",
                "SQLite",
                "React 18",
                "Prometheus",
                "Docker",
                "GitHub Actions",
            ],
            body: "End-to-end stack meant to read like production work: structured logging, metrics, health checks, rate limits, and explicit security controls—not a weekend demo with a README stub.",
            highlights: [
                "Buffered hub with per-client write serialization for safe concurrent WebSocket writes.",
                "Replays the last 50 messages on connect; SQLite persistence with tolerant timestamp parsing.",
                "GET /health with DB ping (503 when degraded) and GET /metrics for Prometheus scraping.",
                "Abuse controls: max username/message size, per-IP WebSocket upgrade rate limit, optional Origin allowlist.",
                "slog JSON logs, graceful shutdown, CI for Go + frontend tests, coverage, ESLint, and Docker Compose.",
            ],
        },
        {
            name: "Quorabust",
            icon: "fa-solid fa-layer-group",
            accent: "emerald",
            tagline:
                "Installable Python library for Quora-style duplicate detection—features, training CLI, HTTP API, and observability.",
            github: "https://github.com/AliSinaDevelo/Quorabust",
            stack: [
                "Python",
                "XGBoost",
                "TF–IDF",
                "HTTP API + /docs",
                "Prometheus",
                "Docker",
                "Pytest",
            ],
            body: "Goes beyond a Kaggle notebook: packaged preprocessing, model training and persistence, a served prediction API with metrics and optional A/B artifacts, plus docs for load testing and Grafana.",
            highlights: [
                "clean_text → feature builders → XGBoost; optional embedding backend instead of classic TF–IDF.",
                "quorabust-train and quorabust-serve CLIs; GET /metrics, POST /predict, variant header for A/B, interactive /docs.",
                "Saved pickles include meta: training size, metrics, CSV checksum, git revision, feature means for drift awareness.",
                "Ruff, mypy, pytest with coverage gates, pre-commit; enterprise/scaling notes and container-friendly layout.",
            ],
        },
        {
            name: "news-api",
            icon: "fa-solid fa-bolt",
            accent: "sky",
            tagline:
                "Express + TypeScript news search API on top of GNews—caching, hardening, and full ops surface.",
            github: "https://github.com/AliSinaDevelo/news-api",
            stack: [
                "Node.js",
                "TypeScript",
                "Express",
                "Redis",
                "OpenAPI",
                "Prometheus",
                "Kubernetes",
            ],
            body: "Designed like something you could run behind a load balancer: upstream timeouts, response validation, optional API keys, Redis-backed deduplication of identical searches, and CI that ships SBOMs and provenance—not only npm test.",
            highlights: [
                "Helmet, configurable rate limits, optional CLIENT_API_KEYS + X-API-Key on /api/*, TRUST_PROXY for real client IPs.",
                "Pino JSON logs, x-request-id, GET /metrics; optional OpenTelemetry export to OTLP.",
                "GET /health and GET /ready; contract published at GET /openapi.yaml; graceful shutdown on SIGTERM/SIGINT.",
                "Multi-stage Docker (non-root + healthcheck), Compose, example K8s manifests; CodeQL, dependency review, lockfile attestation in CI.",
            ],
        },
        {
            name: "StreamHive",
            icon: "fa-solid fa-network-wired",
            accent: "amber",
            tagline:
                "Go library and CLI for experimenting with distributed, content-addressed storage over TCP.",
            github: "https://github.com/AliSinaDevelo/StreamHive",
            stack: [
                "Go 1.22+",
                "TCP / TLS",
                "Custom framing (SHV1)",
                "BlobStore API",
                "Prometheus",
                "Docker",
            ],
            body: "Focuses on the unglamorous layer: connection handling, framing, metrics, and health endpoints before global replication exists—public API versioned in CHANGELOG (v0.2.0, pre-1.0) with honest architecture docs.",
            highlights: [
                "TCPTransport with context-aware listen/dial, TLS hooks, length-prefixed SHV1 frames, peer caps, and metrics.",
                "MemoryStore implements BlobStore; wire handshake version constant for app-level protocols.",
                "HTTP /livez, /readyz, /metrics alongside the TCP surface for orchestrator-friendly deployments.",
                "Makefile and golangci-lint; CI pins Actions to commit SHAs, uploads coverage and CycloneDX SBOM.",
            ],
        },
    ];

    const experience = [
        {
            company: "WineHub Commerce",
            role: "Full Stack / Backend Engineer",
            where: "Adelaide, Australia (remote)",
            period: "Nov 2024 — Present",
            highlights: [
                "3×–10× query and workload improvements on critical paths.",
                "MariaDB → PostgreSQL migration; ~60% infrastructure cost reduction.",
                "Go microservices for analytics, billing, and webhooks; BI dashboards and reporting.",
                "Integrations: Sovos ShipCompliant, Avalara, VinoShipper, WineDirect; automated compliance and reporting.",
            ],
        },
        {
            company: "Moneyviz srl",
            role: "Full Stack Developer",
            where: "Turin, Italy",
            period: "May 2024 — Nov 2024",
            highlights: [
                "Financial analytics in Laravel and Vue.js—portfolio tracking and visualization.",
                "Faster analytical queries by tightening ingestion and transformation pipelines.",
                "Aligned backend and UI with product stakeholders for consistent reporting.",
            ],
        },
        {
            company: "RUN Polito APS-ETS",
            role: "Software Developer",
            where: "Turin, Italy",
            period: "Sep 2022 — May 2024",
            highlights: [
                "Internal tooling in Go and JavaScript for a multi-team student organization.",
                "Automation that cut manual coordination and sped up internal requests.",
                "Legacy refactors for reliability and easier feature work.",
            ],
        },
        {
            company: "WEEEOpen",
            role: "Back-end Developer",
            where: "Turin, Italy",
            period: "May 2022 — Aug 2022",
            highlights: [
                "Django backend performance and stability; React integration for cleaner API → UI data flow.",
            ],
        },
        {
            company: "Open source & freelance",
            role: "Software Developer",
            where: "Remote",
            period: "Sep 2021 — Present",
            highlights: [
                "Event-driven prototypes with Kafka and Node.js; contributions focused on APIs, docs, and developer experience.",
                "Independent scoping and delivery across small end-to-end projects.",
            ],
        },
    ];

    const skillGroups = [
        {
            title: "Languages",
            items: ["Go", "Python", "PHP", "JavaScript", "TypeScript", "SQL", "C", "Java"],
        },
        {
            title: "Frameworks",
            items: ["React", "Vue.js", "Django", "Laravel", "FastAPI", "Symfony", "Gin"],
        },
        {
            title: "Data & infra",
            items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "SQLite", "Docker", "Kubernetes", "AWS", "Terraform", "Kafka", "CI/CD"],
        },
    ];
</script>

<main class="flex flex-col flex-1 px-4 sm:px-6">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 py-10 sm:py-16 lg:py-20 items-center"
    >
        <div class="flex flex-col text-center lg:text-left gap-6 md:gap-8">
            <p class="mono inline-flex items-center gap-2 self-center lg:self-start text-xs tracking-wide text-violet-300/90">
                <span class="relative flex h-2 w-2">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                Turin, Italy · open to remote roles
            </p>
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
                <span class="poppins text-violet-400">Alisina</span> Karimi
                <br />
                <span class="text-white">Backend / Platform Engineer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I build and optimize <span class="text-white font-medium">scalable backends</span>,
                <span class="text-white font-medium">data-heavy products</span>, and
                <span class="text-white font-medium">integrations</span> that hold up in production—currently
                shipping Go services, PostgreSQL migrations, and AWS platform work remotely for an
                Australia-based commerce company.
            </p>
            <div class="mono flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xs text-slate-400">
                <span class="text-emerald-300/90">▸ EU-based contractor (partita IVA) or EOR</span>
                <span class="text-slate-600">·</span>
                <span>no visa sponsorship needed</span>
            </div>
            <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                    href="#contact"
                    class="blueShadow text-base sm:text-lg poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 font-medium"
                >
                    <span
                        class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                    />
                    <span class="relative z-[1]">Get in touch &rarr;</span>
                </a>
                <a
                    href={cvHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-base sm:text-lg poppins px-6 py-3 rounded-full border border-violet-500/50 text-violet-200 hover:bg-violet-500/10 hover:border-violet-400 duration-200 font-medium"
                >
                    Download résumé (PDF)
                </a>
            </div>
        </div>
        <TerminalHero />
    </section>

    <section id="experience" class="py-16 lg:py-24 scroll-mt-24">
        <div class="max-w-3xl mx-auto text-center mb-14">
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90 mb-2">Experience</p>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Where I have <span class="poppins text-violet-400">shipped</span> value
            </h3>
        </div>
        <div class="max-w-3xl mx-auto flex flex-col gap-10">
            {#each experience as job}
                <article
                    class="relative pl-6 sm:pl-8 border-l-2 border-violet-700/70 hover:border-violet-500/80 transition-colors"
                >
                    <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                        <h4 class="text-xl sm:text-2xl font-semibold poppins">{job.company}</h4>
                        <span class="text-sm text-violet-300/90 whitespace-nowrap">{job.period}</span>
                    </div>
                    <p class="text-violet-200/90 font-medium">{job.role}</p>
                    <p class="text-sm text-slate-400 mb-4">{job.where}</p>
                    <ul class="list-disc list-outside ml-4 space-y-2 text-slate-300 text-sm sm:text-base">
                        {#each job.highlights as line}
                            <li>{line}</li>
                        {/each}
                    </ul>
                </article>
            {/each}
        </div>
    </section>

    <section class="py-16 lg:py-28 flex flex-col gap-16 scroll-mt-24" id="projects">
        <div class="max-w-3xl mx-auto flex flex-col gap-3 text-center">
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90">Projects</p>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Code you can <span class="poppins text-violet-400">inspect</span>
            </h3>
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
                A cross-LLM security lab plus four public repositories spanning real-time messaging, ML serving,
                hardened HTTP APIs, and low-level distributed systems—each with tests, containers or CI, and
                documentation meant for reviewers and operators. Use
                <strong class="text-slate-300 font-medium">See on GitHub</strong> on any public card to open the repo.
            </p>
        </div>

        <div class="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:gap-12">
            {#each projects as project}
                <ProjectShowcase {project} />
            {/each}
        </div>
        <p class="text-center text-slate-500 text-sm">
            More work on
            <a class="text-violet-400 hover:underline font-medium" href="https://github.com/AliSinaDevelo"
                >github.com/AliSinaDevelo</a
            >.
        </p>
    </section>

    <section id="skills" class="py-16 lg:py-24 scroll-mt-24">
        <div class="max-w-4xl mx-auto text-center mb-12">
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90 mb-2">Skills</p>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Stack aligned with <span class="poppins text-violet-400">my résumé</span>
            </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {#each skillGroups as group}
                <div class="rounded-xl border border-violet-900/50 bg-slate-900/30 p-6">
                    <h4 class="poppins font-semibold text-violet-300 mb-4">{group.title}</h4>
                    <div class="flex flex-wrap gap-2">
                        {#each group.items as tag}
                            <span
                                class="text-xs sm:text-sm px-3 py-1 rounded-full bg-violet-950/80 text-slate-200 border border-violet-800/50"
                            >
                                {tag}
                            </span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
        <p class="text-center text-slate-500 text-sm mt-10 max-w-2xl mx-auto">
            Certifications (high level): Stanford Algorithms Specialization, DeepLearning.AI Machine Learning, Meta
            Back-end and Front-end Developer programs.
        </p>
    </section>

    <section
        id="about"
        class="py-16 lg:py-24 flex flex-col gap-10 scroll-mt-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1 before:bg-violet-700/80 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1 after:bg-violet-700/80 py-6"
        >
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90">About</p>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Beyond the <span class="poppins text-violet-400">job title</span>
            </h3>
        </div>
        <div class="max-w-2xl mx-auto space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
                Computer Engineering background from Politecnico di Torino. My professional
                roles are where I learned to trade off latency, cost, and maintainability under real constraints.
            </p>
            <p>
                I play the <strong class="text-white font-medium">violin</strong> and contribute to open source when I
                can—both keep me honest about practice, feedback, and iteration.
            </p>
            <p class="text-slate-400 text-sm sm:text-base">
                Languages: English and Persian (bilingual), German (professional), Italian and French (fluent).
            </p>
        </div>
    </section>

    <section id="contact" class="py-16 lg:py-24 scroll-mt-24">
        <div class="max-w-3xl mx-auto text-center mb-12">
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90 mb-2">Contact</p>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Let&rsquo;s <span class="poppins text-violet-400">talk</span>
            </h3>
            <p class="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                Open to remote backend / platform roles (EU-based contractor via partita IVA, or EOR).
                No visa sponsorship needed. Based in Turin (CET) — happy to align with US/AU/NZ time zones.
            </p>
        </div>

        <div class="max-w-2xl mx-auto">
            <a
                href="mailto:alisinakarimi.2003@gmail.com"
                class="group flex items-center gap-4 rounded-2xl border border-violet-900/50 bg-slate-900/30 px-5 py-4 transition-colors hover:border-violet-500/50 hover:bg-violet-950/20"
            >
                <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-slate-900/80 text-violet-300">
                    <i class="fa-solid fa-envelope" aria-hidden="true" />
                </span>
                <span class="flex flex-col">
                    <span class="text-xs uppercase tracking-wide text-slate-500">Email</span>
                    <span class="text-sm sm:text-base text-slate-200 group-hover:text-white">alisinakarimi.2003@gmail.com</span>
                </span>
                <i class="fa-solid fa-arrow-up-right-from-square ml-auto text-xs text-slate-500 group-hover:text-violet-300" aria-hidden="true" />
            </a>

            <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                    href="https://github.com/AliSinaDevelo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center gap-4 rounded-2xl border border-violet-900/50 bg-slate-900/30 px-5 py-4 transition-colors hover:border-violet-500/50 hover:bg-violet-950/20"
                >
                    <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-slate-900/80 text-violet-300">
                        <i class="fa-brands fa-github" aria-hidden="true" />
                    </span>
                    <span class="flex flex-col">
                        <span class="text-xs uppercase tracking-wide text-slate-500">GitHub</span>
                        <span class="text-sm sm:text-base text-slate-200 group-hover:text-white">AliSinaDevelo</span>
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/alisina-karimi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center gap-4 rounded-2xl border border-violet-900/50 bg-slate-900/30 px-5 py-4 transition-colors hover:border-violet-500/50 hover:bg-violet-950/20"
                >
                    <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-slate-900/80 text-violet-300">
                        <i class="fa-brands fa-linkedin-in" aria-hidden="true" />
                    </span>
                    <span class="flex flex-col">
                        <span class="text-xs uppercase tracking-wide text-slate-500">LinkedIn</span>
                        <span class="text-sm sm:text-base text-slate-200 group-hover:text-white">Alisina Karimi</span>
                    </span>
                </a>
            </div>

            <div class="mt-4 flex flex-col sm:flex-row items-stretch gap-4">
                <a
                    href="mailto:alisinakarimi.2003@gmail.com?subject=Book%20a%20chat"
                    class="blueShadow flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-slate-950 font-medium transition-transform hover:scale-[1.01]"
                >
                    <i class="fa-solid fa-calendar-check" aria-hidden="true" />
                    <span>Book a chat</span>
                </a>
                <a
                    href={cvHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/50 px-6 py-3 text-violet-200 font-medium transition-colors hover:bg-violet-500/10 hover:border-violet-400"
                >
                    <i class="fa-solid fa-file-arrow-down" aria-hidden="true" />
                    <span>Download résumé (PDF)</span>
                </a>
            </div>
        </div>
    </section>
</main>
