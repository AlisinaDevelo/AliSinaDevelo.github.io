<script>
    import { locale, toggleLocale } from "$lib/i18n";
</script>

<button
    type="button"
    on:click={toggleLocale}
    aria-label={$locale === "it" ? "Switch to English" : "Passa all'italiano"}
    title={$locale === "it" ? "Switch to English" : "Passa all'italiano"}
    class="mono grid h-9 min-w-9 place-items-center rounded-full border border-violet-500/40 px-2.5 text-xs font-medium text-violet-300 transition-colors hover:border-violet-400 hover:bg-violet-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
>
    {$locale === "it" ? "EN" : "IT"}
</button>
