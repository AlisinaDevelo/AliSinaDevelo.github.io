<script>
    import { theme, toggleTheme } from "$lib/theme";
</script>

<button
    type="button"
    on:click={toggleTheme}
    aria-label={$theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    title={$theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    class="grid h-9 w-9 place-items-center rounded-full border border-violet-500/40 text-violet-300 transition-colors hover:border-violet-400 hover:bg-violet-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
>
    {#if $theme === "dark"}
        <i class="fa-solid fa-sun text-sm" aria-hidden="true" />
    {:else}
        <i class="fa-solid fa-moon text-sm" aria-hidden="true" />
    {/if}
</button>
