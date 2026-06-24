<script>
    export let y = 0;
    export let docHeight = 0;

    // Ring geometry (must match the SVG viewport below)
    const R = 22;
    const CIRCUMFERENCE = 2 * Math.PI * R;

    $: visible = y > 400;
    $: denom = Math.max(docHeight - 1, 1);
    // progress 0 → 1 across the whole document
    $: progress = Math.min(Math.max(y / denom, 0), 1);
    $: dashOffset = CIRCUMFERENCE * (1 - progress);

    function goTop() {
        document.body.scrollIntoView({ behavior: "smooth" });
    }
</script>

<div
    class="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[10] transition-all duration-300 {visible
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 translate-y-3 pointer-events-none'}"
>
    <button
        type="button"
        on:click={goTop}
        aria-label="Scroll back to top"
        class="group relative grid place-items-center rounded-full border border-violet-500/30 bg-slate-900/90 text-violet-300 shadow-[0_8px_30px_-8px_rgba(109,40,217,0.6)] backdrop-blur-sm transition-colors hover:border-violet-400/60 hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
        <!-- Scroll-progress ring: dashes fill clockwise as you read down the page -->
        <svg
            class="absolute inset-0 -rotate-90"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            aria-hidden="true"
        >
            <circle
                cx="28"
                cy="28"
                r={R}
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="text-violet-500/20"
            />
            <circle
                cx="28"
                cy="28"
                r={R}
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                class="text-violet-400 transition-[stroke-dashoffset] duration-150 ease-out"
                style="stroke-dasharray: {CIRCUMFERENCE}; stroke-dashoffset: {dashOffset};"
            />
        </svg>
        <i class="fa-solid fa-arrow-up text-sm transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
    </button>
</div>
