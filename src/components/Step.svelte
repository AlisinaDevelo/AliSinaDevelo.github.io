<script>
    export let step;

    const cardClass =
        "p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700/80 text-center group hover:border-violet-400 duration-200 bg-slate-950/40 backdrop-blur-sm";
</script>

{#if step.href}
    <a
        href={step.href}
        target="_blank"
        rel="noopener noreferrer"
        class="{cardClass} cursor-pointer"
    >
        <div
            class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200 text-violet-300 group-hover:text-violet-200"
        >
            <i class={step.icon} />
        </div>
        <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
            {step.name}
        </h3>
        <slot />
        <div class="flex-1 flex justify-betweeen gap-4 items-end">
            <div
                class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
            >
                <p class="z-4">View on GitHub &rarr;</p>
            </div>
        </div>
    </a>
{:else}
    <article class={cardClass}>
        <div
            class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200 text-violet-300"
        >
            <i class={step.icon} />
        </div>
        <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
            {step.name}
        </h3>
        <slot />
    </article>
{/if}
