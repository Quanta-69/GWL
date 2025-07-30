<template>
  <section>
    <div class="sect-text-wrap">
      <h1 class="sect-intro">How It Works</h1>
      <p class="sect-desc">blah blah blah</p>
    </div>
    <div class="wrapper">
      <div class="card-wrap">
        <process_card
        v-for="(process, index) in processes"
        :key="index"
        :step="process.step"
        :title="process.title"
        :details="process.details"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { processes } from '~/data/exporter';
import  {process_card} from '~/components/cards/exporter'
</script>

<style scoped>
@reference "tailwindcss";

section{
  @apply bg-[var(--light)]
}
</style>