<template>
  <LoginSection />
</template>

<script setup lang="ts">
import LoginSection from '~/components/pages/loginpage/login-section.vue'

useHead({
  title: 'Login | GlassWebLabs',
  meta: [
    { name: 'author', content: 'Quantoxt' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
definePageMeta({
    layout: 'auth',
});
</script>

<style scoped></style>
