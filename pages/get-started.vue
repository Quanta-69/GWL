<template>
    <hero/>
    <process/>
    <core_benefits/>
    <target_solutions/>
    <faq/>
    <final_cta/>
</template>

<script setup lang="ts">
import { core_benefits, faq, final_cta, hero, process, target_solutions } from '~/components/pages/getstartedpage/exporter';
useHead({
    title: 'Get Started | GlassWebLabs',
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