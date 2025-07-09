<template>
  <section>
    <div class="wrapper">
      <div class="sect-text-wrap">
      <h1 class="sect-intro">Service Overview</h1>
      <p class="sect-desc">A summary of the services we offer here at glass web labs</p>
    </div>
      <div class="card-wrap">
        <service_card v-for="(service, index) in services" :key="index"  :icon="service.icon" :title="service.title" :description="service.description" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import services from '~/data/services.json';
import {service_card} from '~/components/cards/exporter'
</script>

<style scoped>
@reference "tailwindcss";
section{
  @apply bg-[var(--60)]
}
.wrapper{
  @apply  bg-[var(--light)] p-10 gap-10
}

</style>