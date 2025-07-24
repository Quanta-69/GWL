<template>
    <section>
        <div class="wrapper">
            <div class="text-content">
                <h1>Recent Projects From The Team</h1>
                <h2>View recent projects that were just launched and rate</h2>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
@reference "tailwindcss";
section{
  background:url(~/assets/images/svg-bgs/wave-2.svg) center/cover fixed no-repeat;
    @apply min-h-[90vh] my-0
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