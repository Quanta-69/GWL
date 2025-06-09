<template>
  <div class="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
    <!-- Navbar -->
    <header
      class="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-md border-b border-white/10 z-50 shadow-sm"
    >
      <h1 class="text-2xl font-black text-white tracking-wider">
        <span class="text-indigo-400">GWL</span>
      </h1>
      <nav class="flex gap-8 text-sm font-medium">
        <a href="#" class="hover:text-indigo-300 transition">Home</a>
        <a href="#" class="hover:text-indigo-300 transition">About</a>
        <a href="#" class="hover:text-indigo-300 transition">Services</a>
        <a href="#" class="hover:text-indigo-300 transition">Contact</a>
      </nav>
    </header>

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
          <button
            class="px-6 py-3 border border-white text-white hover:bg-white/10 transition-all duration-300 rounded-xl font-semibold"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>

    <!-- Sections -->
    <section class="py-24 px-6 text-center max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-4">Websites Tailored to Your Needs</h2>
      <p class="text-lg text-white/70">
        Explore our range of website services, from sleek business sites to dynamic online stores and captivating portfolios.
      </p>
    </section>

    <section class="py-24 px-6 text-center max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-4">The Clear Choice for Your Web Presence</h2>
      <p class="text-lg text-white/70">
        Experience transparent development, effortless management with your own dashboard, and websites that truly reflect your brand.
      </p>
    </section>

    <section class="py-24 px-6 text-center max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-4">See How Easy It Is to Get Your Website</h2>
      <p class="text-lg text-white/70">
        Our simple, step-by-step process ensures a smooth and stress-free journey to your new website.
      </p>
    </section>

    <section class="py-24 px-6 text-center max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-4">Glimpses of Our Craftsmanship</h2>
      <p class="text-lg text-white/70">
        Take a peek at some of the beautiful websites we've helped bring to life for our clients.
      </p>
    </section>

    <section class="py-24 px-6 text-center max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-4">What Our Clients Are Saying</h2>
      <p class="text-lg text-white/70">
        Hear from businesses and individuals who've experienced the GlassWebLabs difference.
      </p>
    </section>

    <section class="py-24 px-6 text-center bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700">
      <h2 class="text-4xl font-bold mb-4">Ready to Make Your Web Dreams a Reality?</h2>
      <p class="text-lg text-white/90 mb-6">
        Let's start building your perfect website today. Request a free quote and take the first step.
      </p>
      <button class="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-100 transition">
        Request a Quote
      </button>
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
