<template>
        <hero/>
        <portfolio_section/>
        <final_cta/>
</template>

<script setup lang="ts">
import { hero, portfolio_section, final_cta } from '~/components/pages/portfoliopage/exporter';
useHead({
    title: 'Portfolio | GlassWebLabs',
    meta: [
        { name: 'description', content: 'A brief description of your homepage content for SEO.' },
        { name: 'keywords', content: 'web design, website development, glassmorphism, transparent platform' },
        { name: 'author', content: 'Quantoxt' },
        { name: 'robots', content: 'index, follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
})
</script>

<style scoped></style>