<template>
  <SignupSection />
</template>

<script setup lang="ts">
import SignupSection from '~/components/pages/signuppage/signup-section.vue'

useHead({
  title: 'Signup | GlassWebLabs',
  meta: [
    { name: 'author', content: 'Quantoxt' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
definePageMeta({
    layout: 'auth',
});
</script>

<style scoped>
/* Optional page-specific styles */
</style>
