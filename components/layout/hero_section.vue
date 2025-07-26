<template>
    <section class="new-page">
        <div :style="bg_style"/>
        <div class="wrapper">
      <div class="text-content">
        <h1>{{ intro }}</h1>
        <h2>{{ desc_start }} <mark>{{ mark }}</mark> {{ desc_end }}</h2>
      </div>
      <div class="btn-wrap">
        <NuxtLink :to="primary_link" >
            <GlassButton :text= btn_title_1 variant="primary" />
        </NuxtLink>
        <NuxtLink :to="secondary_link" >
            <GlassButton  :text= btn_title_2 variant="secondary" />
        </NuxtLink>
      </div>        
    </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    intro: {
        type:String,
        default: 'Default Hero Title'
    },
    desc_start: {
        type: String,
        default: 'Default description text that explains the purpose of this section.'
    },
    desc_end: {
        type: String,
        default: ' and the ending tag'
    },
    mark: {
        type: String,
        default: 'stand out'
    },
    btn_title_1: {
        type: String,
        default: 'Click Me'
    },
    btn_title_2: {
        type: String,
        default: 'Learn More'
    },
    bg_style: {
        type: String,
        default: () => ({}),
    },
    primary_link: {
        type: String,
        default: '/'
    },
    secondary_link: {
        type: String,
        default: '/'
    }
})
</script>

<style scoped>
@reference "tailwindcss";

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