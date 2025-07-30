<template>
  <section>
    <div class="wrapper">
      <div class="sect-text-wrap">
        <h1 class="sect-intro">starter templates</h1>
        <p class="sect-desc">
          Purchase and own a template of your own to kickstart your project!
        </p>
        <div class="btn-wrap">
          <NuxtLink to="/templates">
            <GlassButton text="See all templates" variant="primary" size="md" />
          </NuxtLink>
        </div>
      </div>

      <div class="card-wrap">
        <template_card
          v-for="(template, index) in templates"
          :key="template.title ? template.title : index"
          :title="template.title ? template.title : 'Untitled Template'"
          :description="
            template.description
              ? template.description
              : 'Template description coming soon'
          "
          :image="template.image ? template.image : '/template/default.jpg'"
          :live_url="template.live_url ? template.live_url : '#'"
          :price="template.price ? template.price : 'Free'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { template_card } from "~/components/cards/exporter";
import { templates } from "~/data/exporter";
</script>

<style scoped>
@reference "tailwindcss";

section {
  @apply bg-[var(--60)];
}
.wrapper {
  @apply bg-[var(--light)] p-10 gap-10;
}
.card-wrap {
  @apply gap-14;
}
.btn-wrap {
  @apply mt-10;
}
</style>
