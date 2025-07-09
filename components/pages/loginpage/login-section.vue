<template>
  <section>
    <div class="left">
      <div class="text-content">
        <h1>Welcome Back</h1>
        <h2>Log in to access your dashboard, manage your account and access the latest features of Glass Web Labs</h2>
      </div>
      <div class="btn-wrap">
        <NuxtLink to="/" >
          <GlassButton text="Go Home" variant="secondary" size="md"/>
        </NuxtLink>
      </div>
    </div>
    <div class="right"></div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "tailwindcss";

section {
  .left, .right {
    @apply h-screen w-full py-10 flex items-center justify-center flex-col gap-5
  }
  .left {
    .text-content{
      h1{
        @apply text-4xl sm:text-7xl text-[var(--60)] font-bold
      }
      h2{
        @apply text-xl text-center text-[var(--light)]
      }
      @apply flex items-center justify-center gap-5 flex-col max-w-[700px]
    }
    @apply bg-[var(--30)];
  }
  .right {
    @apply bg-[var(--light)];
  }
  @apply min-h-screen rounded-none flex-row m-0 p-0;
}
</style>
