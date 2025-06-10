<template>
    <!-- Hero Section -->
    <section>

      <div class="wrapper animate-fade-in">
        <h1>
          Your Vision, <span>Beautifully Crafted</span>
        </h1>
        <p>Get a stunning website designed and developed with a transparent process and easy. <br> Ready to shine online?</p>
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
    </section>    
</template>

<script setup>
import hooks from '~/data/hooks.json'
</script>

<style scoped>
@reference "tailwindcss";

section{
    background:url('~/assets/images/hero.jpg') no-repeat center center fixed;
    border-image: fill 0 linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.5));
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
    @apply m-8 text-3xl md:text-xl leading-relaxed text-center
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
