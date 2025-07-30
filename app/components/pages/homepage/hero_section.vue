<template>
  <section class="new-page"> 
    <div class="radial"/>
    <div class="wrapper">
      <div class="text-content">
        <h1>Tired of Slow, Generic Websites?</h1>
        <h2>
          We build <mark>custom solutions</mark> that actually convert visitors into customers
        </h2>
      </div>

      <div class="card-wrap">
        <div class="card" v-for="hook in typedHooks" :key="hook.title">
          <div class="card-svg" v-html="hook.icon"></div>
          <div class="content">
            <h3>{{ hook.title }}</h3>
            <p>{{ hook.desc }}</p>
          </div>
        </div>
      </div>

      <div class="btn-wrap">
        <NuxtLink to="/get-a-website">
          <GlassButton
            text="Get A Custom Website"
            variant="primary"
            size="md"
          />
        </NuxtLink>

        <NuxtLink to="/templates">
          <GlassButton text="Explore Templates" variant="secondary" size="md" />
        </NuxtLink>
      </div>
    </div> 
  </section>
</template>

<script setup lang="ts">
import hooks from "~/data/hooks.json";

// Type the hooks data
interface Hook {
  title: string;
  desc: string;
  icon: string;
}

// Ensure hooks is properly typed
const typedHooks = hooks as Hook[];
</script>

<style scoped>
@reference "tailwindcss";

section{
  .radial{
    background-image: linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px);
    background-size: 70px 70px;
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%);
    mask-image: radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%);
  }
    background-image: radial-gradient(125% 125% at 50% 90%, #ffffff 40%, var(--light) 100%);
}

.wrapper {
  @apply justify-center items-center gap-14;
}

.text-content {
  @apply flex flex-col justify-center items-center gap-3;
}

.text-content h1 {
  font-size: var(--text);
  @apply text-[var(--30)] text-center;
}

.text-content h2 {
  @apply text-3xl text-center px-8;
}

.text-content h2 mark {
  @apply bg-[var(--60)] rounded-sm px-1 py-0.5;
}

.card-wrap {
  @apply w-full flex items-center justify-center gap-10 flex-wrap mt-10;
}

.card {
  @apply shadow-none border-l rounded-none border-[var(--gray)] flex-row max-w-[350px];
}

.card .content h3 {
  @apply text-xl text-[var(--30)];
}

.card-svg {
  @apply h-11 w-11 rounded-full bg-[var(--alpha-bg)] inline-flex justify-center items-center shadow-sm p-1.5;
}

.card-svg * {
  fill: currentColor;
  @apply p-1 w-12
}

.btn-wrap {
  @apply flex flex-wrap justify-center gap-4 mt-5;
}

/* Responsive design */
@media (max-width: 768px) {
  .text-content h1 {
    font-size: 2.5rem;
  }

  .text-content h2 {
    @apply text-xl;
  }

  .card-wrap {
    @apply gap-3;
  }
}
</style>
