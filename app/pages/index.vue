<template>
    <div>
        <hero/>
        <service_overview/>
        <how_it_works/>
        <portfolio_snippet/>
        <template_snippet/>
        <wcu/>
        <testimonial_snippet/>
        <final_cta/>
    </div>
</template>

<script setup lang="ts">
import { final_cta, hero, how_it_works, portfolio_snippet, service_overview, template_snippet, testimonial_snippet, wcu } from '~/components/pages/homepage/exporter'
useHead({
    title: 'Home | GlassWebLabs',
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