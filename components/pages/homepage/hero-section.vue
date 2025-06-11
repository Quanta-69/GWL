<template>
    <!-- Hero Section -->
    <section>

      <div class="gradient">
        <div class="wrapper animate-fade-in">

          <div class="head-wrap">
            <h2>We Are Creative</h2>
            <h1>Your Vision, <span>Beautifully Crafted</span></h1>
            <p>Get a stunning website designed and developed with a transparent process and easy. <br> <span>Ready to shine online ?</span></p>
          </div>

          <div class="card-wrap">
              <div class="card" v-for="(hook, index) in hooks" :key="index">
                  <div class="svg" v-html="hook.icon"></div>
                  <div class="text-wrap">
                      <h1>{{ hook.title }}</h1>
                      <p>{{ hook.desc }}</p>
                  </div>
              </div>
          </div>
          <div class="btn-wrap">
            <GlassButton text="Get Started" variant="primary"/>
            <GlassButton text="Learn More" variant="secondary"/>
          </div>
        </div>
      </div>

    </section>    
</template>

<script setup>
import hooks from '~/data/hooks.json'
</script>

<style scoped>
@reference "tailwindcss";

.gradient{
  background:conic-gradient(from 180deg, rgba(255, 0, 0, 0.1), rgba(0, 128, 0, 0.1), rgba(0, 0, 255, 0.2), rgba(255, 166, 0, 0.1));
  @apply min-h-[80dvh] rounded-xl
}
section{
    background:url('~/assets/images/hero.jpg') no-repeat center center fixed;
    border-image: fill 0 linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.5));
    @apply py-0 min-h-[100vh] justify-center;
}
.wrapper{
    backdrop-filter: blur(var(--blur));
    @apply bg-[var(--alpha-bg)] rounded-xl min-h-[80dvh] gap-2 border border-[var(--alpha-border)]
}
.head-wrap{
  h2{
    letter-spacing: 5px;
    @apply text-3xl
  }
  h1 {
      @apply  text-[var(--light)] text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl
    }
    span {
      @apply text-[var(--200)]
    }
    p {
      @apply m-8 text-4xl md:text-xl leading-relaxed text-center
    }
  @apply flex flex-col items-center justify-center gap-6 p-2
}

.card{
    .text-wrap{
        @apply flex flex-col  gap-1
    }
    .svg{
        @apply h-10 w-10 rounded-full bg-[var(--alpha-bg)] p-1 
    }
    h1{
        @apply text-xl p-0 m-0 text-[var(--200)]
    }
    p{
        @apply text-base p-0 m-0
    }
    @apply flex-row max-w-[350px] border border-[var(--alpha-border)] rounded-lg bg-[var(--alpha-bg)]
}
.btn-wrap{
  @apply mt-8
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
