import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    appDir: 'app',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Specify the fallback file
      precompress: false,
      strict: true
    }),
    paths: {
      // `username.github.io` repos are served at https://username.github.io/ (root).
      // A subpath base breaks asset URLs and returns index.html for *.js → MIME type errors.
      // If you ever deploy as a *project* site (e.g. username.github.io/other-repo/), set:
      //   base: '/other-repo'
      // and build with that path, or use SVELTEKIT_BASE_PATH below.
      base:
        process.env.SVELTEKIT_BASE_PATH ??
        (process.env.NODE_ENV === 'production' ? '' : ''),
    }
  },
  preprocess: vitePreprocess()
};

export default config;
