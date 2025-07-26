<template>
  <section class="new-page" >
    <div class="radial"/>
    <div class="wrapper">
      <div class="text-content">
        <h1>All Completed Projects in One Place</h1>
        <h2>Carefully made projects that <mark>stand</mark> out</h2>
      </div>
      <div class="btn-wrap">
        <GlassButton text="I Want A Project" />
        <GlassButton  text="Learn More" variant="secondary" />
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
</script>

<style scoped>
@reference "tailwindcss";
section{
  .radial{
          background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom,  #e2e8f0 1px, transparent 1px); 
          background-size: 70px 70px;
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%);
          mask-image: radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%);
  }
    background-image: radial-gradient(125% 125% at 50% 90%, #ffffff 40%, var(--60) 100%);
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
  @apply  justify-center items-center gap-15
 }
</style>