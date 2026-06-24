<script>
    import { locale } from "$lib/i18n";
    import { t } from "$lib/content";
    $: footer = t[$locale].footer;
</script>

<footer
    class="py-10 sm:py-12 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 justify-center items-center"
>
    <div class="flex items-center gap-5 text-lg text-slate-400">
        <a
            href="mailto:alisinakarimi.2003@gmail.com"
            class="hover:text-violet-300 transition-colors"
            aria-label="Email"
        >
            <i class="fa-solid fa-envelope" />
        </a>
        <a
            href="https://github.com/AliSinaDevelo/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-violet-300 transition-colors"
            aria-label="GitHub"
        >
            <i class="fa-brands fa-github" />
        </a>
        <a
            href="https://www.linkedin.com/in/alisina-karimi/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-violet-300 transition-colors"
            aria-label="LinkedIn"
        >
            <i class="fa-brands fa-linkedin-in" />
        </a>
    </div>
    <p class="mono text-xs text-slate-600">
        &copy; {new Date().getFullYear()} Alisina Karimi &middot; {footer.built}
    </p>
</footer>
