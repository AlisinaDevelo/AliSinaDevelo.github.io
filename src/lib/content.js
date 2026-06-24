// Bilingual site content. Locale-independent metadata (icons, accents, links,
// stacks, company names, tech tags) lives in the *Meta exports; translatable
// prose lives in `t[locale]`. Main.svelte merges them by name/index so the two
// languages can never drift on URLs or tech names.

export const projectMeta = [
    {
        name: "Chatster",
        icon: "fa-solid fa-comments",
        accent: "violet",
        github: "https://github.com/AliSinaDevelo/Chatster",
        stack: ["Go 1.22", "Gorilla WebSocket", "SQLite", "React 18", "Prometheus", "Docker", "GitHub Actions"],
    },
    {
        name: "Quorabust",
        icon: "fa-solid fa-layer-group",
        accent: "emerald",
        github: "https://github.com/AliSinaDevelo/Quorabust",
        stack: ["Python", "XGBoost", "TF–IDF", "HTTP API + /docs", "Prometheus", "Docker", "Pytest"],
    },
    {
        name: "news-api",
        icon: "fa-solid fa-bolt",
        accent: "sky",
        github: "https://github.com/AliSinaDevelo/news-api",
        stack: ["Node.js", "TypeScript", "Express", "Redis", "OpenAPI", "Prometheus", "Kubernetes"],
    },
    {
        name: "StreamHive",
        icon: "fa-solid fa-network-wired",
        accent: "amber",
        github: "https://github.com/AliSinaDevelo/StreamHive",
        stack: ["Go 1.22+", "TCP / TLS", "Custom framing (SHV1)", "BlobStore API", "Prometheus", "Docker"],
    },
    {
        name: "Forge",
        icon: "fa-solid fa-hammer",
        accent: "indigo",
        github: "https://github.com/AliSinaDevelo/md-files",
        stack: ["Claude Code", "Markdown", "Python", "Prompt evals", "Safety hooks", "Plugin"],
    },
    {
        name: "SignalForge",
        icon: "fa-solid fa-shield-halved",
        accent: "rose",
        private: true,
        stack: ["Claude Code / Codex", "Python", "Detection replay", "Eval harness", "Safety hooks", "DFIR / RE"],
    },
];

export const experienceMeta = [
    { company: "WineHub Commerce", period: "Nov 2024 — Present" },
    { company: "Moneyviz srl", period: "May 2024 — Nov 2024" },
    { company: "RUN Polito APS-ETS", period: "Sep 2022 — May 2024" },
    { company: "WEEEOpen", period: "May 2022 — Aug 2022" },
    { company: "Open source & freelance", period: "Sep 2021 — Present" },
];

export const skillItems = [
    ["Go", "Python", "PHP", "TypeScript", "JavaScript", "SQL", "C", "Java"],
    ["Symfony", "Laravel", "Express", "Django", "FastAPI", "Gin", "REST / OpenAPI", "WebSockets", "GraphQL"],
    ["React", "Vue.js", "Svelte / SvelteKit", "Tailwind CSS"],
    ["AWS", "EC2 / ASG / ALB", "Lambda", "SQS", "ElastiCache", "Terraform", "Packer", "Docker", "Kubernetes", "GitHub Actions", "Linux"],
    ["PostgreSQL", "MySQL / MariaDB", "SQLite", "MongoDB", "Redis / Valkey", "Kafka", "Prometheus", "Grafana", "OpenTelemetry", "slog / Pino"],
    ["LLM agents & tooling", "prompt evals", "scikit-learn", "XGBoost", "TF–IDF", "embeddings"],
];

export const t = {
    en: {
        nav: { experience: "Experience", projects: "Projects", skills: "Skills", about: "About", resume: "Résumé", contact: "Contact" },
        hero: {
            loc: "Turin, Italy · open to remote roles",
            role: "Software Engineer",
            desc: "I build and optimize scalable backends, data-heavy products, and integrations that hold up in production—currently shipping Go services, PostgreSQL migrations, and AWS platform work remotely for an Australia-based commerce company.",
            availA: "▸ EU-based contractor (partita IVA) or EOR",
            availB: "no visa sponsorship needed",
            getInTouch: "Get in touch",
            downloadCv: "Download résumé (PDF)",
        },
        now: { label: "now", role: "backend / platform @ WineHub (Adelaide, AU)", remote: "open to remote (EU contractor / EOR)" },
        experience: { eyebrow: "Experience", headA: "Where I have ", headEm: "shipped", headB: " value" },
        projects: {
            eyebrow: "Projects",
            headA: "Code you can ", headEm: "inspect", headB: "",
            intro: "Five public repositories spanning real-time messaging, ML serving, hardened HTTP APIs, low-level distributed systems, and AI developer tooling—each with tests, containers or CI, and documentation meant for reviewers and operators—plus a private cross-LLM security lab.",
            more: "More work on",
        },
        skills: {
            eyebrow: "Skills",
            headA: "Stack aligned with ", headEm: "my résumé", headB: "",
            titles: ["Programming", "Backend & APIs", "Frontend", "Cloud & Platform", "Data & observability", "AI / ML"],
            certs: "Certifications (high level): Stanford Algorithms Specialization, DeepLearning.AI Machine Learning, Meta Back-end and Front-end Developer programs.",
        },
        about: {
            eyebrow: "About",
            headA: "Beyond the ", headEm: "job title", headB: "",
            p1: "Computer Engineering background from Politecnico di Torino. My professional roles are where I learned to trade off latency, cost, and maintainability under real constraints.",
            p2pre: "I play the ", p2em: "violin", p2post: " and contribute to open source when I can—both keep me honest about practice, feedback, and iteration.",
            langs: "Languages: English and Persian (bilingual), German (professional), Italian and French (fluent).",
        },
        contact: {
            eyebrow: "Contact",
            headA: "Let’s ", headEm: "talk", headB: "",
            intro: "Open to remote backend / platform roles (EU-based contractor via partita IVA, or EOR). No visa sponsorship needed. Based in Turin (CET) — happy to align with US/AU/NZ time zones.",
            bookChat: "Book a chat",
            downloadCv: "Download résumé (PDF)",
        },
        projectCard: { seeOnGithub: "See on GitHub", liveDemo: "Live demo", private: "Private · walkthrough on request" },
        footer: { built: "built with SvelteKit & Tailwind" },
        projects_text: {
            SignalForge: {
                tagline: "Cross-LLM security lab: specialist agents, methodology skills, executable adapters, detection replay, and scope-aware safety hooks.",
                body: "An open-lane security toolkit that lets multiple LLMs operate from one auditable security contract—offense is always paired with matching detection and remediation, behind fast scope gates. Private for now; happy to walk through it.",
                highlights: [
                    "Specialist agents for red, blue, purple, DFIR, reverse engineering, and detection engineering.",
                    "Executable parsers and tool adapters—real inputs in, normalized findings out—not just prompts.",
                    "Detection replay over recorded telemetry plus an eval harness that scores agent behavior.",
                    "Scope-aware safety hooks (.cy-lab / .cy-scope) so high-impact actions require explicit authorization.",
                ],
            },
            Chatster: {
                tagline: "Real-time chat reference stack: Go WebSocket hub, SQLite history, React UI, Docker, and portfolio-grade ops docs.",
                body: "End-to-end stack meant to read like production work: structured logging, metrics, health checks, rate limits, and explicit security controls—not a weekend demo with a README stub.",
                highlights: [
                    "Buffered hub with per-client write serialization for safe concurrent WebSocket writes.",
                    "Replays the last 50 messages on connect; SQLite persistence with tolerant timestamp parsing.",
                    "GET /health with DB ping (503 when degraded) and GET /metrics for Prometheus scraping.",
                    "Abuse controls: max username/message size, per-IP WebSocket upgrade rate limit, optional Origin allowlist.",
                    "slog JSON logs, graceful shutdown, CI for Go + frontend tests, coverage, ESLint, and Docker Compose.",
                ],
            },
            Quorabust: {
                tagline: "Installable Python library for Quora-style duplicate detection—features, training CLI, HTTP API, and observability.",
                body: "Goes beyond a Kaggle notebook: packaged preprocessing, model training and persistence, a served prediction API with metrics and optional A/B artifacts, plus docs for load testing and Grafana.",
                highlights: [
                    "clean_text → feature builders → XGBoost; optional embedding backend instead of classic TF–IDF.",
                    "quorabust-train and quorabust-serve CLIs; GET /metrics, POST /predict, variant header for A/B, interactive /docs.",
                    "Saved pickles include meta: training size, metrics, CSV checksum, git revision, feature means for drift awareness.",
                    "Ruff, mypy, pytest with coverage gates, pre-commit; enterprise/scaling notes and container-friendly layout.",
                ],
            },
            "news-api": {
                tagline: "Express + TypeScript news search API on top of GNews—caching, hardening, and full ops surface.",
                body: "Designed like something you could run behind a load balancer: upstream timeouts, response validation, optional API keys, Redis-backed deduplication of identical searches, and CI that ships SBOMs and provenance—not only npm test.",
                highlights: [
                    "Helmet, configurable rate limits, optional CLIENT_API_KEYS + X-API-Key on /api/*, TRUST_PROXY for real client IPs.",
                    "Pino JSON logs, x-request-id, GET /metrics; optional OpenTelemetry export to OTLP.",
                    "GET /health and GET /ready; contract published at GET /openapi.yaml; graceful shutdown on SIGTERM/SIGINT.",
                    "Multi-stage Docker (non-root + healthcheck), Compose, example K8s manifests; CodeQL, dependency review, lockfile attestation in CI.",
                ],
            },
            StreamHive: {
                tagline: "Go library and CLI for experimenting with distributed, content-addressed storage over TCP.",
                body: "Focuses on the unglamorous layer: connection handling, framing, metrics, and health endpoints before global replication exists—public API versioned in CHANGELOG (v0.2.0, pre-1.0) with honest architecture docs.",
                highlights: [
                    "TCPTransport with context-aware listen/dial, TLS hooks, length-prefixed SHV1 frames, peer caps, and metrics.",
                    "MemoryStore implements BlobStore; wire handshake version constant for app-level protocols.",
                    "HTTP /livez, /readyz, /metrics alongside the TCP surface for orchestrator-friendly deployments.",
                    "Makefile and golangci-lint; CI pins Actions to commit SHAs, uploads coverage and CycloneDX SBOM.",
                ],
            },
            Forge: {
                tagline: "Installable Claude Code toolkit: specialist agents, progressive-disclosure skills, slash commands, safety hooks, and prompt evals.",
                body: "Packages the patterns that make an AI coding agent genuinely effective—clear roles, disciplined methodology, scoped tools, and guardrails—into one installable plugin. Every artifact is plain Markdown or a small auditable script: no build step, nothing hidden.",
                highlights: [
                    "Specialist agents, progressive-disclosure skills, and slash commands wired into one installable plugin.",
                    "Skills load only what each task needs, keeping the agent's context lean.",
                    "Safety hooks plus a prompt-eval and hook-test harness that keep behavior in check.",
                    "Plain Markdown and small scripts—auditable, with no build step or hidden magic.",
                ],
            },
        },
        experience_text: [
            { role: "Full Stack / Backend Engineer", where: "Adelaide, Australia (remote)", highlights: [
                "3×–10× query and workload improvements on critical paths.",
                "MariaDB → PostgreSQL migration; ~60% infrastructure cost reduction.",
                "Go microservices for analytics, billing, and webhooks; BI dashboards and reporting.",
                "Integrations: Sovos ShipCompliant, Avalara, VinoShipper, WineDirect; automated compliance and reporting.",
            ] },
            { role: "Full Stack Developer", where: "Turin, Italy", highlights: [
                "Financial analytics in Laravel and Vue.js—portfolio tracking and visualization.",
                "Faster analytical queries by tightening ingestion and transformation pipelines.",
                "Aligned backend and UI with product stakeholders for consistent reporting.",
            ] },
            { role: "Software Developer", where: "Turin, Italy", highlights: [
                "Internal tooling in Go and JavaScript for a multi-team student organization.",
                "Automation that cut manual coordination and sped up internal requests.",
                "Legacy refactors for reliability and easier feature work.",
            ] },
            { role: "Back-end Developer", where: "Turin, Italy", highlights: [
                "Django backend performance and stability; React integration for cleaner API → UI data flow.",
            ] },
            { role: "Software Developer", where: "Remote", highlights: [
                "Event-driven prototypes with Kafka and Node.js; contributions focused on APIs, docs, and developer experience.",
                "Independent scoping and delivery across small end-to-end projects.",
            ] },
        ],
        terminal: {
            title: "alisina@workbench: ~",
            whoami: "software engineer · backend / platform · remote · Turin, Italy",
            whoamiBoot: "software engineer · backend / platform · remote",
        },
    },

    it: {
        nav: { experience: "Esperienza", projects: "Progetti", skills: "Competenze", about: "Chi sono", resume: "CV", contact: "Contatti" },
        hero: {
            loc: "Torino, Italia · disponibile per ruoli da remoto",
            role: "Software Engineer",
            desc: "Progetto e ottimizzo backend scalabili, prodotti data-intensive e integrazioni che reggono in produzione—attualmente lavoro da remoto su servizi Go, migrazioni PostgreSQL e infrastruttura AWS per un'azienda di e-commerce australiana.",
            availA: "▸ Contratto come libero professionista UE (partita IVA) o EOR",
            availB: "nessuna sponsorizzazione del visto richiesta",
            getInTouch: "Contattami",
            downloadCv: "Scarica il CV (PDF)",
        },
        now: { label: "ora", role: "backend / platform @ WineHub (Adelaide, AU)", remote: "disponibile da remoto (libero professionista UE / EOR)" },
        experience: { eyebrow: "Esperienza", headA: "Dove ho ", headEm: "prodotto", headB: " valore" },
        projects: {
            eyebrow: "Progetti",
            headA: "Codice che puoi ", headEm: "ispezionare", headB: "",
            intro: "Cinque repository pubblici che spaziano da messaggistica in tempo reale, serving ML, API HTTP irrobustite, sistemi distribuiti a basso livello e strumenti per sviluppatori basati su AI—ciascuno con test, container o CI e documentazione pensata per revisori e operatori—più un laboratorio di sicurezza cross-LLM privato.",
            more: "Altro lavoro su",
        },
        skills: {
            eyebrow: "Competenze",
            headA: "Stack allineato al ", headEm: "mio CV", headB: "",
            titles: ["Programmazione", "Backend & API", "Frontend", "Cloud & Platform", "Dati & osservabilità", "AI / ML"],
            certs: "Certificazioni (in sintesi): Stanford Algorithms Specialization, DeepLearning.AI Machine Learning, programmi Meta Back-end e Front-end Developer.",
        },
        about: {
            eyebrow: "Chi sono",
            headA: "Oltre il ", headEm: "ruolo", headB: "",
            p1: "Formazione in Ingegneria Informatica al Politecnico di Torino. È nei ruoli professionali che ho imparato a bilanciare latenza, costi e manutenibilità sotto vincoli reali.",
            p2pre: "Suono il ", p2em: "violino", p2post: " e contribuisco all'open source quando posso—entrambi mi tengono onesto su pratica, feedback e iterazione.",
            langs: "Lingue: inglese e persiano (bilingue), tedesco (professionale), italiano e francese (fluente).",
        },
        contact: {
            eyebrow: "Contatti",
            headA: "", headEm: "Parliamone", headB: "",
            intro: "Disponibile per ruoli backend / platform da remoto (libero professionista UE con partita IVA, oppure EOR). Nessuna sponsorizzazione del visto richiesta. Con base a Torino (CET) — felice di allinearmi ai fusi orari di USA/Australia/Nuova Zelanda.",
            bookChat: "Prenota una chiamata",
            downloadCv: "Scarica il CV (PDF)",
        },
        projectCard: { seeOnGithub: "Vedi su GitHub", liveDemo: "Demo live", private: "Privato · presentazione su richiesta" },
        footer: { built: "realizzato con SvelteKit & Tailwind" },
        projects_text: {
            SignalForge: {
                tagline: "Laboratorio di sicurezza cross-LLM: agenti specializzati, skill metodologiche, adapter eseguibili, replay delle detection e hook di sicurezza consapevoli dello scope.",
                body: "Un toolkit di sicurezza \"a cielo aperto\" che permette a più LLM di operare da un unico contratto di sicurezza verificabile—l'offesa è sempre abbinata a detection e remediation corrispondenti, dietro rapidi controlli di scope. Per ora privato; volentieri lo illustro.",
                highlights: [
                    "Agenti specializzati per red, blue, purple, DFIR, reverse engineering e detection engineering.",
                    "Parser e adapter eseguibili—input reali in ingresso, findings normalizzati in uscita—non solo prompt.",
                    "Replay delle detection su telemetria registrata più un harness di valutazione che misura il comportamento degli agenti.",
                    "Hook di sicurezza consapevoli dello scope (.cy-lab / .cy-scope): le azioni ad alto impatto richiedono autorizzazione esplicita.",
                ],
            },
            Chatster: {
                tagline: "Stack di riferimento per chat in tempo reale: hub WebSocket in Go, storico su SQLite, UI React, Docker e documentazione operativa di livello portfolio.",
                body: "Stack end-to-end pensato per leggersi come lavoro di produzione: logging strutturato, metriche, health check, rate limit e controlli di sicurezza espliciti—non una demo da weekend con un README abbozzato.",
                highlights: [
                    "Hub bufferizzato con serializzazione delle scritture per client, per scritture WebSocket concorrenti sicure.",
                    "Riproduce gli ultimi 50 messaggi alla connessione; persistenza SQLite con parsing tollerante dei timestamp.",
                    "GET /health con ping al DB (503 se degradato) e GET /metrics per lo scraping Prometheus.",
                    "Controlli anti-abuso: dimensione massima di username/messaggio, rate limit dell'upgrade WebSocket per IP, allowlist Origin opzionale.",
                    "Log JSON con slog, shutdown controllato, CI per test Go + frontend, coverage, ESLint e Docker Compose.",
                ],
            },
            Quorabust: {
                tagline: "Libreria Python installabile per il rilevamento di domande duplicate stile Quora—feature, CLI di training, API HTTP e osservabilità.",
                body: "Va oltre un notebook Kaggle: preprocessing pacchettizzato, training e persistenza del modello, un'API di predizione servita con metriche e artefatti A/B opzionali, più documentazione per load test e Grafana.",
                highlights: [
                    "clean_text → costruttori di feature → XGBoost; backend a embedding opzionale al posto del classico TF–IDF.",
                    "CLI quorabust-train e quorabust-serve; GET /metrics, POST /predict, header variant per A/B, /docs interattiva.",
                    "I pickle salvati includono metadati: dimensione del training, metriche, checksum del CSV, revisione git, medie delle feature per il monitoraggio del drift.",
                    "Ruff, mypy, pytest con soglie di coverage, pre-commit; note su enterprise/scaling e layout container-friendly.",
                ],
            },
            "news-api": {
                tagline: "API di ricerca notizie in Express + TypeScript basata su GNews—caching, hardening e superficie operativa completa.",
                body: "Progettata come qualcosa da mettere dietro un load balancer: timeout verso l'upstream, validazione delle risposte, API key opzionali, deduplica su Redis delle ricerche identiche e CI che produce SBOM e provenance—non solo npm test.",
                highlights: [
                    "Helmet, rate limit configurabili, CLIENT_API_KEYS + X-API-Key opzionali su /api/*, TRUST_PROXY per gli IP client reali.",
                    "Log JSON con Pino, x-request-id, GET /metrics; export OpenTelemetry opzionale verso OTLP.",
                    "GET /health e GET /ready; contratto pubblicato su GET /openapi.yaml; shutdown controllato su SIGTERM/SIGINT.",
                    "Docker multi-stage (non-root + healthcheck), Compose, manifest K8s di esempio; CodeQL, dependency review, attestazione del lockfile in CI.",
                ],
            },
            StreamHive: {
                tagline: "Libreria e CLI in Go per sperimentare storage distribuito e content-addressed su TCP.",
                body: "Si concentra sullo strato meno appariscente: gestione delle connessioni, framing, metriche ed endpoint di health prima che esista la replica globale—API pubblica versionata nel CHANGELOG (v0.2.0, pre-1.0) con documentazione di architettura onesta.",
                highlights: [
                    "TCPTransport con listen/dial sensibili al context, hook TLS, frame SHV1 con prefisso di lunghezza, limiti sui peer e metriche.",
                    "MemoryStore implementa BlobStore; costante di versione dell'handshake di rete per protocolli a livello applicativo.",
                    "HTTP /livez, /readyz, /metrics accanto alla superficie TCP, per deployment orchestrator-friendly.",
                    "Makefile e golangci-lint; la CI fissa le Action ai commit SHA, carica coverage e SBOM CycloneDX.",
                ],
            },
            Forge: {
                tagline: "Toolkit installabile per Claude Code: agenti specializzati, skill a divulgazione progressiva, slash command, hook di sicurezza ed eval dei prompt.",
                body: "Raccoglie in un unico plugin installabile i pattern che rendono davvero efficace un agente di coding AI—ruoli chiari, metodologia disciplinata, strumenti mirati e guardrail. Ogni artefatto è semplice Markdown o un piccolo script verificabile: nessuno step di build, niente di nascosto.",
                highlights: [
                    "Agenti specializzati, skill a divulgazione progressiva e slash command in un unico plugin installabile.",
                    "Le skill caricano solo ciò che serve a ciascun task, mantenendo snello il contesto dell'agente.",
                    "Hook di sicurezza più un harness di eval dei prompt e test degli hook che tengono sotto controllo il comportamento.",
                    "Semplice Markdown e piccoli script—verificabili, senza step di build né magie nascoste.",
                ],
            },
        },
        experience_text: [
            { role: "Full Stack / Backend Engineer", where: "Adelaide, Australia (remoto)", highlights: [
                "Miglioramenti 3×–10× su query e carichi di lavoro nei percorsi critici.",
                "Migrazione MariaDB → PostgreSQL; riduzione dei costi infrastrutturali di circa il 60%.",
                "Microservizi Go per analytics, fatturazione e webhook; dashboard di BI e reportistica.",
                "Integrazioni: Sovos ShipCompliant, Avalara, VinoShipper, WineDirect; compliance e reportistica automatizzate.",
            ] },
            { role: "Full Stack Developer", where: "Torino, Italia", highlights: [
                "Analytics finanziaria in Laravel e Vue.js—monitoraggio e visualizzazione di portafogli.",
                "Query analitiche più rapide ottimizzando le pipeline di ingestione e trasformazione.",
                "Allineamento di backend e UI con gli stakeholder di prodotto per una reportistica coerente.",
            ] },
            { role: "Software Developer", where: "Torino, Italia", highlights: [
                "Strumenti interni in Go e JavaScript per un'organizzazione studentesca multi-team.",
                "Automazioni che hanno ridotto il coordinamento manuale e velocizzato le richieste interne.",
                "Refactoring di sistemi legacy per affidabilità e sviluppo più agevole.",
            ] },
            { role: "Sviluppatore Back-end", where: "Torino, Italia", highlights: [
                "Performance e stabilità del backend Django; integrazione React per un flusso dati API → UI più pulito.",
            ] },
            { role: "Software Developer", where: "Remoto", highlights: [
                "Prototipi event-driven con Kafka e Node.js; contributi focalizzati su API, documentazione e developer experience.",
                "Scoping e consegna in autonomia su piccoli progetti end-to-end.",
            ] },
        ],
        terminal: {
            title: "alisina@workbench: ~",
            whoami: "software engineer · backend / platform · remoto · Torino, Italia",
            whoamiBoot: "software engineer · backend / platform · remoto",
        },
    },
};
