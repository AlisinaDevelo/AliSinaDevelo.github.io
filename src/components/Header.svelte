<script>
    import { base } from "$app/paths";

    export let y;

    $: cvHref = `${base}/assets/cv/output/CurriculumVitae.pdf`;
    $: tabs = [
        { name: "Experience", link: "#experience" },
        { name: "Projects", link: "#projects" },
        { name: "Skills", link: "#skills" },
        { name: "About", link: "#about" },
        { name: "Résumé", link: cvHref, external: true },
    ];
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-slate-950/95 backdrop-blur-md border-violet-950/80"
            : " py-6 bg-transparent border-transparent")}
>
    <a href="{base}/#introPage" class="font-medium hover:text-violet-300 duration-200">
        <b class="font-bold poppins">AliSina</b> Karimi
    </a>
    <nav class="sm:flex items-center gap-5 hidden" aria-label="Primary">
        {#each tabs as tab}
            <a
                href={tab.link}
                class="duration-200 hover:text-violet-400 text-sm"
                target={tab.external ? "_blank" : undefined}
                rel={tab.external ? "noopener noreferrer" : undefined}
            >
                <p>{tab.name}</p>
            </a>
        {/each}
        <a
            href="#contact"
            class="text-sm rounded-full border border-violet-500/50 px-4 py-1.5 hover:bg-violet-500/10 hover:border-violet-400 duration-200"
        >
            Contact
        </a>
    </nav>
</header>
