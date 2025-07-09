<template>
    <section>
        <div class="wrapper">
            <div class="text-content">
                <h1>Recent Projects From The Team</h1>
                <h2>View recent projects that were just launched and rate</h2>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F1B604" fill-opacity="1" d="M0,160L26.7,181.3C53.3,203,107,245,160,224C213.3,203,267,117,320,112C373.3,107,427,181,480,176C533.3,171,587,85,640,58.7C693.3,32,747,64,800,74.7C853.3,85,907,75,960,112C1013.3,149,1067,235,1120,272C1173.3,309,1227,299,1280,272C1333.3,245,1387,203,1413,181.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
@reference "tailwindcss";
section{
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