<template>
  <div class="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans px-4">
    <section class="py-24 px-6 text-center">
  <h2 class="text-4xl font-bold mb-4">Websites Tailored to Your Needs</h2>
  <p class="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
    From sleek business sites to dynamic stores and stunning portfolios, we’ve got the tools to build your perfect online presence.
  </p>

  <!-- Correct Centering Starts Here -->
  <div class="flex justify-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full justify-items-center">
      <!-- Business Website Card -->
      <div class="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-lg w-72">
        <div class="text-white text-3xl mb-3"><i class="fas fa-briefcase"></i></div>
        <h3 class="text-xl font-bold mb-2">Business Websites</h3>
        <p class="text-white/80 text-sm">Fast, responsive, and crafted to showcase your business like a pro.</p>
      </div>

      <!-- E-commerce Card -->
      <div class="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-lg w-72">
        <div class="text-white text-3xl mb-3"><i class="fas fa-store"></i></div>
        <h3 class="text-xl font-bold mb-2">E-commerce Stores</h3>
        <p class="text-white/80 text-sm">Product pages, carts, payments and sleek designs for any shop.</p>
      </div>

      <!-- Portfolio Card -->
      <div class="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-lg w-72">
        <div class="text-white text-3xl mb-3"><i class="fas fa-laptop-code"></i></div>
        <h3 class="text-xl font-bold mb-2">Portfolio Sites</h3>
        <p class="text-white/80 text-sm">Beautiful layouts to highlight your work, optimized for every screen.</p>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

<script setup>
// No script needed
</script>

<style scoped>
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 300% 300%;
  animation: gradientBG 6s ease infinite;
}
</style>
