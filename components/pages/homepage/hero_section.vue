<template>
<section>
<div class="wrapper">

  <div class="text-content">
    <h1>Transparency At Your Finger Tips</h1>
    <h2>Custom-Built Websites Designed by a <mark>Team of Specialists</mark></h2>
  </div>

  <div class="card-wrap">
    <div class="card" v-for="hook in hooks">
      <div class="card-svg" v-html="icon"></div>
      <div class="content">
        <h2>{{ hook.title }}</h2>
        <p>{{ hook.desc }}</p>
      </div>
    </div>
  </div>

  <div class="btn-wrap">

    <NuxtLink to="/get-a-website" >
      <GlassButton text="Get A Custom Website" variant="primary" size="md"/>
    </NuxtLink>

    <NuxtLink to="/templates" >
      <GlassButton text="Explore Templates" variant="secondary" size="md"/>
    </NuxtLink>
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
  @apply min-h-[95vh] my-0
}
.wrapper{
  .text-content{
    h1{
      font-size: var(--text);
      @apply  text-[var(--30)] text-center
    }
    h2{
      mark{
        @apply bg-[var(--60)] rounded-sm px-1 py-0.5
      }
      @apply text-3xl
    }
    @apply flex flex-col justify-center items-center gap-3 
  }

  .card{
      @apply shadow-none border-l rounded-none border-[var(--gray)] flex-row
  }

  .card > .content > h2{
      @apply text-xl text-[var(--30)]
  }

  @apply  justify-center items-center gap-15
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
