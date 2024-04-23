import { defineConfig } from 'vite';

export default defineConfig({
    external: ['gsap', '@greensock/gsap-core', '@greensock/scrolltrigger'],
});