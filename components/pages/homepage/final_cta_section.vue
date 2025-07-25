<template>
<section>
  <div class="wrapper">
    <div class="text-content">
      <h1>Ready To Bring Your Dreams To Life?</h1>
      <h2>it's one click away!</h2>
    </div>
    <div class="btn-wrap">
      <NuxtLink to="/get-started">
        <GlassButton text="Start My Project" variant="secondary" size="lg" />
      </NuxtLink>
    </div>
  </div>
</section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "tailwindcss";

section{
  @apply bg-[var(--60)]
}
.text-content{
  h1{
    @apply text-4xl sm:text-8xl text-[var(--30)] text-center
  }
  h2{
    @apply text-center text-4xl sm:text-5xl uppercase
  }
  @apply flex flex-col gap-10
}
.btn-wrap{
  @apply mt-5
}
</style>
