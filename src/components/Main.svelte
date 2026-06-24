<script>
    import { base } from "$app/paths";
    import ProjectShowcase from "./ProjectShowcase.svelte";
    import TerminalHero from "./TerminalHero.svelte";
    import { locale } from "$lib/i18n";
    import { projectMeta, experienceMeta, skillItems, t } from "$lib/content";

    $: cvHref = `${base}/assets/cv/output/CurriculumVitae.pdf`;
    $: c = t[$locale];
    $: projects = projectMeta.map((m) => ({ ...m, ...c.projects_text[m.name] }));
    $: experience = experienceMeta.map((m, i) => ({ ...m, ...c.experience_text[i] }));
    $: skillGroups = skillItems.map((items, i) => ({ items, title: c.skills.titles[i] }));
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
                {c.hero.loc}
            </p>
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
                <span class="poppins text-violet-400">Alisina</span> Karimi
                <br />
                <span class="text-white">{c.hero.role}</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {c.hero.desc}
            </p>
            <div class="mono flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xs text-slate-400">
                <span class="text-emerald-300/90">{c.hero.availA}</span>
                <span class="text-slate-600">·</span>
                <span>{c.hero.availB}</span>
            </div>
            <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                    href="#contact"
                    class="blueShadow text-base sm:text-lg poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 font-medium"
                >
                    <span
                        class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                    />
                    <span class="relative z-[1]">{c.hero.getInTouch} &rarr;</span>
                </a>
                <a
                    href={cvHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-base sm:text-lg poppins px-6 py-3 rounded-full border border-violet-500/50 text-violet-200 hover:bg-violet-500/10 hover:border-violet-400 duration-200 font-medium"
                >
                    {c.hero.downloadCv}
                </a>
            </div>
        </div>
        <TerminalHero />
    </section>

    <div class="tech-grid border-y border-violet-900/40 bg-slate-950/40">
        <div
            class="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 text-xs sm:text-sm sm:flex-row sm:items-center sm:justify-between"
        >
            <p class="mono flex items-center gap-2 text-slate-400">
                <span class="relative flex h-2 w-2">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span class="text-emerald-300/90">{c.now.label}</span>
                <span class="text-slate-500">·</span>
                <span>{c.now.role}</span>
            </p>
            <p class="mono flex items-center gap-2 text-slate-400">
                <i class="fa-regular fa-clock text-slate-500" aria-hidden="true" />
                <span>CET</span>
                <span class="text-slate-600">·</span>
                <span class="text-violet-300/90">{c.now.remote}</span>
            </p>
        </div>
    </div>

    <section id="experience" class="py-16 lg:py-24 scroll-mt-24">
        <div class="max-w-3xl mx-auto text-center mb-14">
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90 mb-2">{c.experience.eyebrow}</p>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                {c.experience.headA}<span class="poppins text-violet-400">{c.experience.headEm}</span>{c.experience.headB}
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
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90">{c.projects.eyebrow}</p>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                {c.projects.headA}<span class="poppins text-violet-400">{c.projects.headEm}</span>{c.projects.headB}
            </h3>
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
                {c.projects.intro}
            </p>
        </div>

        <div class="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:gap-12">
            {#each projects as project}
                <ProjectShowcase {project} />
            {/each}
        </div>
        <p class="text-center text-slate-500 text-sm">
            {c.projects.more}
            <a class="text-violet-400 hover:underline font-medium" href="https://github.com/AliSinaDevelo"
                >github.com/AliSinaDevelo</a
            >.
        </p>
    </section>

    <section id="skills" class="py-16 lg:py-24 scroll-mt-24">
        <div class="max-w-4xl mx-auto text-center mb-12">
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90 mb-2">{c.skills.eyebrow}</p>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                {c.skills.headA}<span class="poppins text-violet-400">{c.skills.headEm}</span>{c.skills.headB}
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
            {c.skills.certs}
        </p>
    </section>

    <section
        id="about"
        class="py-16 lg:py-24 flex flex-col gap-10 scroll-mt-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1 before:bg-violet-700/80 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1 after:bg-violet-700/80 py-6"
        >
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90">{c.about.eyebrow}</p>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                {c.about.headA}<span class="poppins text-violet-400">{c.about.headEm}</span>{c.about.headB}
            </h3>
        </div>
        <div class="max-w-2xl mx-auto space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>{c.about.p1}</p>
            <p>
                {c.about.p2pre}<strong class="text-white font-medium">{c.about.p2em}</strong>{c.about.p2post}
            </p>
            <p class="text-slate-400 text-sm sm:text-base">
                {c.about.langs}
            </p>
        </div>
    </section>

    <section id="contact" class="py-16 lg:py-24 scroll-mt-24">
        <div class="max-w-3xl mx-auto text-center mb-12">
            <p class="text-xs uppercase tracking-[0.2em] text-violet-400/90 mb-2">{c.contact.eyebrow}</p>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                {c.contact.headA}<span class="poppins text-violet-400">{c.contact.headEm}</span>{c.contact.headB}
            </h3>
            <p class="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                {c.contact.intro}
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
                    href="https://www.linkedin.com/in/alisina-karimi-43a834224/"
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
                    <span>{c.contact.bookChat}</span>
                </a>
                <a
                    href={cvHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/50 px-6 py-3 text-violet-200 font-medium transition-colors hover:bg-violet-500/10 hover:border-violet-400"
                >
                    <i class="fa-solid fa-file-arrow-down" aria-hidden="true" />
                    <span>{c.contact.downloadCv}</span>
                </a>
            </div>
        </div>
    </section>
</main>
