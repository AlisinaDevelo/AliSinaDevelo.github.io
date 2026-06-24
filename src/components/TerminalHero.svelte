<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import { locale } from "$lib/i18n";
    import { t } from "$lib/content";

    $: cvHref = `${base}/assets/cv/output/CurriculumVitae.pdf`;
    $: term = t[$locale].terminal;

    // Each command prints a short, honest block. Kept tiny on purpose — this is a
    // hook for recruiters, not a real shell. Only the whoami line carries
    // locale-specific text; the rest is code/tech, identical across languages.
    $: commands = {
        whoami: [
            { prompt: "whoami", out: [term.whoami] },
        ],
        stack: [
            {
                prompt: "cat stack.txt",
                out: [
                    "Go · PHP/Symfony · TypeScript · Python",
                    "AWS · Terraform · Packer · Docker · k8s",
                    "PostgreSQL · Redis/Valkey · SQS · Prometheus",
                ],
            },
        ],
        log: [
            {
                prompt: "git log --oneline -3",
                out: [
                    { kind: "perf", text: "perf  3×–10× faster production queries" },
                    { kind: "perf", text: "infra ~60% cost cut · MariaDB → PostgreSQL" },
                    { kind: "perf", text: "scale sessions + async work externalized" },
                ],
            },
        ],
        contact: [
            {
                prompt: "contact --remote",
                out: [
                    { kind: "link", text: "alisinakarimi.2003@gmail.com", href: "mailto:alisinakarimi.2003@gmail.com" },
                    { kind: "link", text: "github.com/AliSinaDevelo", href: "https://github.com/AliSinaDevelo" },
                    { kind: "link", text: "linkedin.com/in/alisina-karimi-43a834224", href: "https://www.linkedin.com/in/alisina-karimi-43a834224/" },
                ],
            },
        ],
    };

    $: bootSequence = [
        { prompt: "whoami", out: [term.whoamiBoot] },
        { prompt: "cat stack.txt", out: [
            "Go · PHP/Symfony · TypeScript · Python",
            "AWS · Terraform · Packer · Docker · k8s",
            "PostgreSQL · Redis/Valkey · SQS · Prometheus",
        ]},
        { prompt: "git log --oneline -3", out: [
            { kind: "perf", text: "perf  3×–10× faster production queries" },
            { kind: "perf", text: "infra ~60% cost cut · MariaDB → PostgreSQL" },
            { kind: "perf", text: "scale sessions + async work externalized" },
        ]},
    ];

    let lines = [];
    let booted = false;

    function pushLine(line) {
        lines = [...lines, line];
    }

    // Type a boot sequence on mount so the terminal feels alive, then hand
    // control to the clickable command chips.
    onMount(() => {
        let cancelled = false;
        let i = 0;
        const step = () => {
            if (cancelled || i >= bootSequence.length) {
                if (!cancelled) booted = true;
                return;
            }
            const block = bootSequence[i];
            pushLine({ prompt: block.prompt, out: [] });
            const idx = lines.length - 1;
            let j = 0;
            const typeLine = () => {
                if (cancelled) return;
                if (j >= block.out.length) {
                    i += 1;
                    setTimeout(step, 420);
                    return;
                }
                const next = block.out[j];
                lines = lines.map((l, k) =>
                    k === idx ? { ...l, out: [...l.out, next] } : l,
                );
                j += 1;
                setTimeout(typeLine, 160);
            };
            setTimeout(typeLine, 220);
        };
        const t = setTimeout(step, 450);
        return () => {
            cancelled = true;
            clearTimeout(t);
        };
    });

    function run(key) {
        // Re-run a canned command and append its output.
        const block = commands[key][0];
        pushLine({ prompt: block.prompt, out: block.out });
    }
</script>

<div
    class="mono rounded-2xl border border-violet-800/60 bg-slate-950/70 backdrop-blur-sm overflow-hidden shadow-[0_20px_60px_-30px_rgba(109,40,217,0.5)]"
>
    <div class="flex items-center gap-2 border-b border-violet-900/50 bg-slate-900/60 px-4 py-3">
        <span class="h-3 w-3 rounded-full bg-rose-500/80" aria-hidden="true"></span>
        <span class="h-3 w-3 rounded-full bg-amber-400/80" aria-hidden="true"></span>
        <span class="h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden="true"></span>
        <span class="ml-2 text-xs text-slate-400">alisina@workbench: ~</span>
    </div>

    <div class="p-5 sm:p-6 text-[13px] leading-relaxed text-slate-300 min-h-[260px]">
        <!-- Screen-reader-friendly live region: appended output is announced -->
        <div class="sr-only" aria-live="polite">
            {#each lines as line}{line.prompt}: {#each line.out as o}{typeof o === "string" ? o : o.text} {/each}{/each}
        </div>

        {#each lines as line}
            <p class="mt-3 first:mt-0"><span class="text-violet-400">$</span> {line.prompt}</p>
            {#each line.out as entry}
                {#if typeof entry === "string"}
                    <p class="pl-3 text-slate-400">{entry}</p>
                {:else if entry.kind === "perf"}
                    <p class="pl-3 text-emerald-300/90">{entry.text}</p>
                {:else if entry.kind === "link" && entry.href}
                    <p class="pl-3">
                        <a
                            href={entry.href}
                            target={entry.href.startsWith("http") ? "_blank" : undefined}
                            rel={entry.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            class="text-sky-300/90 hover:text-sky-200 hover:underline"
                        >{entry.text}</a>
                    </p>
                {/if}
            {/each}
        {/each}

        {#if booted}
            <p class="mt-3"><span class="text-violet-400">$</span> <span class="caret"></span></p>
            <div class="mt-4 flex flex-wrap gap-2">
                <button
                    type="button"
                    on:click={() => run("whoami")}
                    class="rounded-md border border-violet-800/60 bg-slate-900/60 px-2.5 py-1 text-xs text-violet-200/90 hover:border-violet-500 hover:bg-violet-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >whoami</button>
                <button
                    type="button"
                    on:click={() => run("stack")}
                    class="rounded-md border border-violet-800/60 bg-slate-900/60 px-2.5 py-1 text-xs text-violet-200/90 hover:border-violet-500 hover:bg-violet-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >cat stack.txt</button>
                <button
                    type="button"
                    on:click={() => run("log")}
                    class="rounded-md border border-violet-800/60 bg-slate-900/60 px-2.5 py-1 text-xs text-violet-200/90 hover:border-violet-500 hover:bg-violet-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >git log --oneline -3</button>
                <button
                    type="button"
                    on:click={() => run("contact")}
                    class="rounded-md border border-emerald-800/60 bg-emerald-950/30 px-2.5 py-1 text-xs text-emerald-200/90 hover:border-emerald-500 hover:bg-emerald-950/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >contact --remote</button>
            </div>
        {/if}
    </div>
</div>
