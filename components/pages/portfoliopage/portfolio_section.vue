<template>
    <section>
        <div class="wrapper">

            <div class="sect-text-wrap">
                <h1 class="sect-intro">All Our Projects</h1>
                <p class="sect-desc">All Projects Ever Launched By Glass Web Labs</p>
            </div>

            <div class="card-wrap">
        <portfolio_card
          v-for="(portfolio, index) in portfolios"
          :key="portfolio.title || index"
          :title="portfolio.title || 'Untitled Project'"
          :description="
            portfolio.description || 'Project description coming soon'
          "
          :image="portfolio.image || '/portfolio/default.jpg'"
          :live_url="portfolio.live_url || '#'"
          :case_page_url="portfolio.case_page_url || '#'"
        />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { portfolio_card } from '~/components/cards/exporter';
import { portfolios } from '~/data/exporter';
</script>

<style scoped>
@reference "tailwindcss";

section{
    @apply bg-[var(--light)]
}
</style>