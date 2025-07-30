<template>
  <section>
    <div class="sect-text-wrap">
      <h1 class="sect-intro">Testimonials</h1>
      <p class="sect-desc">What our clients say about us</p>
    </div>
    <div class="wrapper">
      <div class="card-wrap">
        <testimonial_card v-for="(testimonial, index) in testimonials"
        :key="index"  
        :title="testimonial.title"
        :description="testimonial.description"
        :avatar_url="testimonial.avatar_url"
        :name="testimonial.name"
        :role="testimonial.role"
         />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { testimonial_card } from '~/components/cards/exporter';
import { testimonials } from '~/data/exporter';
</script>

<style scoped>
@reference "tailwindcss";

section{
  @apply bg-[var(--light)]
}
</style>
