<template>
    <!-- Hero Section -->
    <section>

      <div class="wrapper animate-fade-in">
        <h1>
          Your Vision, <span>Beautifully Crafted</span>
        </h1>
        <p>Get a stunning website designed and developed with a transparent process and easy. <br> Ready to shine online?</p>

        <div class="btn-wrap">
          <GlassButton text="Get Started" variant="primary"/>
          <GlassButton text="Learn More" variant="secondary"/>
        </div>

      </div>
    </section>    
</template>

<script setup>
// No script needed for this static hero section
</script>

<style scoped>
@reference "tailwindcss";

section{
    background:url('~/assets/images/hero.jpg') no-repeat center center fixed;
    border-image: fill 0 linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.5));
    @apply py-0 min-h-[100vh] justify-center;
}
.wrapper{
    backdrop-filter: blur(10px);
    @apply bg-[var(--alpha-bg)] rounded-xl py-10 gap-2
}
h1{
    span{
        @apply text-[var(--200)]
    }
    @apply text-[var(--light)] text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl
}
p{
    @apply mt-8 text-3xl md:text-xl leading-relaxed text-center
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}
</style>
