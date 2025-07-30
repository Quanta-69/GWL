<template>
  <article class="card">
    <div class="image-container">
      <img :src="image" :alt="`Screenshot of ${title} project`" />
    </div>

    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>

    <div class="btn-wrap">
      <NuxtLink :to="`https://${live_url}`" target="_blank" rel="noopener noreferrer">
        <GlassButton text="Visit Site" variant="primary" size="sm" />
      </NuxtLink>

      <NuxtLink :to="case_page_url" target="_blank" rel="noopener noreferrer">
        <GlassButton text="Case Study" variant="ghost" size="sm" />
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  live_url: string;
  case_page_url: string;
}

defineProps<PortfolioCardProps>();
</script>

<style scoped>
@reference "tailwindcss";

.card {
  backdrop-filter: blur(var(--blur));
  @apply min-w-[300px] gap-4 items-center overflow-hidden border border-[var(--gray)] py-8 px-6 rounded-xl;
  transition: all 0.3s ease;
}

.image-container {
  @apply flex justify-center;
}

.content {
  @apply flex flex-col gap-3 text-center;
}

.content h3 {
  @apply uppercase text-xl text-[var(--60)] font-bold;
}

.content p {
  @apply text-[var(--gray)] text-sm leading-relaxed;
}

img {
  height: 280px;
  width: 100vw;
  object-fit: cover;
  border-radius: 20px;
  filter: grayscale(1);
  transition: all 0.3s ease;
}

img:hover {
  filter: grayscale(0);
  transform: scale(1.05);
}

.btn-wrap {
  @apply flex gap-3 justify-center;
}

/* Responsive design */
@media (max-width: 768px) {
  .card {
    @apply min-w-[280px] py-6 px-4;
  }

  img {
    height: 240px;
    width: 180px;
  }

  .content h3 {
    @apply text-lg;
  }
}
</style>

