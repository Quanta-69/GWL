<template>
    <div>
        <hero/>
        <serviceoverview/>
        <portfoliosnippet/>
        <howitworks/>
        <wcu/>
        <testimonialsnippet/>
        <finalcta/>
    </div>
</template>

<script setup lang="ts">
import { finalcta, hero, howitworks, portfoliosnippet, serviceoverview, testimonialsnippet, wcu } from '~/components/pages/homepage/exporter'
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