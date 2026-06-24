import { writable } from "svelte/store";

/** Supported locales. */
export const LOCALES = ["en", "it"];
const STORAGE_KEY = "locale";

function getInitial() {
    if (typeof window === "undefined") return "en";
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && LOCALES.includes(stored)) return stored;
    } catch {
        /* storage unavailable */
    }
    // Fall back to the browser's preferred language.
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("it") ? "it" : "en";
}

export const locale = writable(getInitial());

locale.subscribe((value) => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("lang", value);
    try {
        localStorage.setItem(STORAGE_KEY, value);
    } catch {
        /* storage unavailable */
    }
});

/** Switch between English and Italian. */
export function toggleLocale() {
    locale.update((l) => (l === "it" ? "en" : "it"));
}
