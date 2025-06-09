<template>
  <div class="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">

    <!-- Hero Section -->
    <section
      class="flex items-center justify-center min-h-screen w-full bg-cover bg-center px-4 pt-24 md:pt-32 text-white"
      style="background-image: linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(75,0,130,0.4)), url('/images/hero.jpg')"
    >
      <div
        class="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 max-w-2xl text-center animate-fade-in"
      >
        <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
          Your Vision, <span class="text-indigo-300">Beautifully Crafted</span>
        </h1>
        <p class="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
          Get a stunning website designed and developed with a transparent process and easy management. Ready to shine online?
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <button
            class="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 text-white rounded-xl font-semibold shadow-lg"
          >
            Get Started
          </button>
          <button class="px-6 py-3 border border-white text-white hover:bg-white/10 transition-all duration-300 rounded-xl font-semibold">Learn More</button>
          <GlassButton text="Learn More"/>
        </div>
      </div>
    </section>

    
  </div>
</template>

<script setup>
// No script needed for this static hero section
</script>

<style scoped>
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
