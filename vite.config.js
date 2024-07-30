import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('tailwindcss').Config} */

export default defineConfig({
	plugins: [sveltekit()],
	preprocess: vitePreprocess()
});
