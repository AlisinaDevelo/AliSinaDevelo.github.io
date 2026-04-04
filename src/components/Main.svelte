<script>
    import { base } from "$app/paths";
    import Step from "./Step.svelte";

    $: cvHref = `${base}/assets/cv/output/CurriculumVitae.pdf`;

    const projects = [
        {
            name: "Chatster",
            icon: "fa-solid fa-comments",
            href: "https://github.com/AliSinaDevelo/Chatster",
            stack: "Go · React · SQLite · Gorilla WebSockets",
            blurb:
                "Real-time chat with connection management, heartbeats, and SQLite WAL mode for low-latency message persistence—built as a foundation you can adapt for team or product chat.",
        },
        {
            name: "Quorabust",
            icon: "fa-solid fa-magnifying-glass",
            href: "https://github.com/AliSinaDevelo/Quorabust",
            stack: "Python · scikit-learn",
            blurb:
                "Similar-question discovery for Quora-style datasets using BoW, TF-IDF, and gradient-boosted models—useful NLP and retrieval practice beyond toy tutorials.",
        },
        {
            name: "Newsact",
            icon: "fa-solid fa-newspaper",
            href: "https://github.com/AliSinaDevelo/Newsact",
            stack: "Python · scikit-learn",
            blurb:
                "Classifier pipeline to separate credible reporting from misinformation—earlier ML work that sharpened feature engineering and evaluation habits.",
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
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90 font-medium">
                Turin, Italy · Remote-friendly
            </p>
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
                <span class="poppins text-violet-400">Alisina</span> Karimi
                <br />
                <span class="text-white">Software Engineer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I build and optimize <span class="text-white font-medium">scalable backends</span>,
                <span class="text-white font-medium">data-heavy products</span>, and
                <span class="text-white font-medium">integrations</span> that hold up in production. Recent work
                includes PostgreSQL migrations, Go microservices, and BI tooling for commerce and finance teams.
            </p>
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
        <div
            class="rounded-2xl border border-violet-800/60 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm text-left"
        >
            <h3 class="poppins text-sm uppercase tracking-widest text-violet-400 mb-4">At a glance</h3>
            <ul class="space-y-3 text-slate-300 text-sm sm:text-base">
                <li class="flex gap-2">
                    <span class="text-violet-400 shrink-0">▹</span>
                    Production impact: performance wins, cost reduction, and automation—not only greenfield demos.
                </li>
                <li class="flex gap-2">
                    <span class="text-violet-400 shrink-0">▹</span>
                    Comfortable owning features end-to-end across Go, PHP/Laravel, and modern frontends (React, Vue).
                </li>
                <li class="flex gap-2">
                    <span class="text-violet-400 shrink-0">▹</span>
                    High-autonomy remote collaboration across time zones (current role, Australia-based company).
                </li>
            </ul>
        </div>
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

    <section class="py-16 lg:py-24 flex flex-col gap-14 scroll-mt-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90">Projects</p>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Code you can <span class="poppins text-violet-400">inspect</span>
            </h3>
            <p class="text-slate-400 max-w-xl mx-auto mt-2">
                Open source and personal builds—Chatster reflects production-style backend design; the ML repos are
                earlier experiments that still show how I reason about data and models.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {#each projects as p}
                <Step step={{ name: p.name, icon: p.icon, href: p.href }}>
                    <p class="text-xs uppercase tracking-wider text-violet-400/80 mb-1">{p.stack}</p>
                    <p class="text-slate-300 text-sm sm:text-base leading-relaxed">{p.blurb}</p>
                </Step>
            {/each}
        </div>
        <p class="text-center text-slate-500 text-sm">
            More repositories on
            <a class="text-violet-400 hover:underline" href="https://github.com/AliSinaDevelo">GitHub</a>.
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
                I am pursuing an <strong class="text-white font-medium">M.Sc. in Computer Engineering</strong> at
                Politecnico di Torino (B.Sc. completed 2025). School sharpened the fundamentals; my professional
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
</main>
