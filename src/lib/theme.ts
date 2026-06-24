import { writable } from "svelte/store";

/** Theme preference: explicitly chosen, or null = follow the OS setting. */
export type Theme = "dark" | "light";
const STORAGE_KEY = "theme";

function getInitial(): Theme {
    // Server-side render: default to dark (the site's canonical look).
    if (typeof document === "undefined") return "dark";
    // app.html applies the class pre-paint via an inline script; trust it.
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export const theme = writable<Theme>(getInitial());

/** Apply the theme to <html> and persist the choice. */
function applyTheme(next: Theme) {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    try {
        localStorage.setItem(STORAGE_KEY, next);
    } catch {
        /* storage unavailable (private mode) — non-fatal */
    }
}

// Keep the DOM in sync whenever the store changes.
theme.subscribe(applyTheme);

/** Toggle between dark and light. */
export function toggleTheme() {
    theme.update((t) => (t === "dark" ? "light" : "dark"));
}
