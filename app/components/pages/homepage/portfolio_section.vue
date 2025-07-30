<template>
  <section>
    <div class="wrapper">
      <div class="sect-text-wrap">
        <h1 class="sect-intro">Portfolio Summary</h1>
        <p class="sect-desc">Snippet of our most recent projects</p>
      </div>

        <div class="btn-wrap">
        <NuxtLink to="/portfolio">
          <GlassButton text="See all projects" variant="primary" size="md" />
        </NuxtLink>
      </div>

      <div class="card-wrap">
        <portfolio_card v-for="(portfolio, index) in portfolios"
          :key="portfolio.title || index"
          :title="portfolio.title || 'Untitled Project'"
          :description="portfolio.description || 'Project description coming soon'"
          :image="portfolio.image || '/portfolio/default.jpg'"
          :live_url="portfolio.live_url || '#'"
          :case_page_url="portfolio.case_page_url || '#'"/>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolio_card } from "~/components/cards/exporter";
import { portfolios } from "~/data/exporter";
</script>

<style scoped>
@reference "tailwindcss";
.card-wrap {
  @apply gap-14;
}
.btn-wrap {
  @apply mt-10;
}
</style>
