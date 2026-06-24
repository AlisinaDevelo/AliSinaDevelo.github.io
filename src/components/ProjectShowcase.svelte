<script>
    /** @type {{ name: string; icon: string; accent: keyof typeof accentBar; tagline: string; stack: string[]; body: string; highlights: string[]; github?: string; demo?: string; private?: boolean }} */
    export let project;

    import { locale } from "$lib/i18n";
    import { t } from "$lib/content";
    $: labels = t[$locale].projectCard;

    const accentBar = {
        violet: "bg-gradient-to-b from-violet-400 via-violet-500 to-indigo-600",
        emerald: "bg-gradient-to-b from-emerald-400 via-teal-500 to-cyan-700",
        sky: "bg-gradient-to-b from-sky-400 via-cyan-500 to-blue-600",
        amber: "bg-gradient-to-b from-amber-400 via-orange-500 to-rose-700",
        rose: "bg-gradient-to-b from-rose-400 via-pink-500 to-fuchsia-700",
        indigo: "bg-gradient-to-b from-indigo-400 via-indigo-500 to-violet-700",
    };

    $: bar = accentBar[project.accent] ?? accentBar.violet;
</script>

<article
    class="group relative flex flex-col rounded-2xl border border-violet-900/40 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-950 p-6 sm:p-8 shadow-[0_0_0_1px_rgba(139,92,246,0.06)] transition-all duration-300 hover:border-violet-500/35 hover:shadow-[0_20px_50px_-20px_rgba(109,40,217,0.35)] overflow-hidden"
>
    <div
        class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl transition-opacity duration-500 group-hover:bg-violet-500/15"
        aria-hidden="true"
    />
    <div
        class="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-90 {bar}"
        aria-hidden="true"
    />

    <div class="relative flex flex-col gap-5 pl-3 sm:pl-4">
        <header class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex gap-4">
                <div
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-slate-900/80 text-2xl text-violet-300 shadow-inner"
                >
                    <i class={project.icon} aria-hidden="true" />
                </div>
                <div>
                    <h4 class="poppins text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {project.name}
                    </h4>
                    <p class="mt-1 max-w-prose text-sm leading-relaxed text-slate-400 sm:text-base">
                        {project.tagline}
                    </p>
                </div>
            </div>
            <div class="flex shrink-0 flex-wrap items-center gap-2 self-start">
                {#if project.private}
                    <span
                        class="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-950/40 px-4 py-2.5 text-sm font-medium text-rose-200"
                    >
                        <i class="fa-solid fa-lock text-xs" aria-hidden="true" />
                        <span>{labels.private}</span>
                    </span>
                {:else}
                    {#if project.demo}
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-4 py-2.5 text-sm font-medium text-emerald-200 transition-colors hover:border-emerald-400 hover:bg-emerald-600/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        >
                            <i class="fa-solid fa-circle-play text-base" aria-hidden="true" />
                            <span>{labels.liveDemo}</span>
                        </a>
                    {/if}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/40 bg-violet-950/50 px-4 py-2.5 text-sm font-medium text-violet-200 transition-colors hover:border-violet-400 hover:bg-violet-600/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                        <i class="fa-brands fa-github text-base" aria-hidden="true" />
                        <span>{labels.seeOnGithub}</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-70" aria-hidden="true" />
                    </a>
                {/if}
            </div>
        </header>

        <p class="text-sm leading-relaxed text-slate-300 sm:text-base max-w-3xl">
            {project.body}
        </p>

        <div class="flex flex-wrap gap-2">
            {#each project.stack as tech}
                <span
                    class="rounded-md border border-violet-800/50 bg-slate-900/60 px-2.5 py-1 text-xs font-medium tracking-wide text-violet-200/90"
                >
                    {tech}
                </span>
            {/each}
        </div>

        <ul class="grid gap-2.5 sm:grid-cols-1 lg:grid-cols-2 text-sm text-slate-400">
            {#each project.highlights as point}
                <li class="flex gap-2.5 leading-snug">
                    <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden="true" />
                    <span>{point}</span>
                </li>
            {/each}
        </ul>
    </div>
</article>
