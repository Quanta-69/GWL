<template>
    <section class="new-page" :class="page_title">
        <div class="radial" :class="page_title"/>
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
  /* FILL IN THE PAGE TITLES IN THE LIST THEN  APPLY THE STYLES */

    page_title: {
        type: String as () => 'portfolio' | 'get-started' | 'about' | 'contact', 
        default: 'start'
  },
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
const page_title = computed(() => [
    `${props.page_title}`
])
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
  @apply  justify-center items-center gap-14
}
/* PAGE TITLES AND THEIR UNIQUE STYLES */
section.portfolio{
  .radial.portfolio{
    background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom,  #e2e8f0 1px, transparent 1px); 
    background-size: 70px 70px;
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%);
    mask-image: radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%);
}
  background-image: radial-gradient(125% 125% at 50% 90%, #ffffff 40%, var(--60) 100%);
}

section.get-started{
 .radial.get-started{
  background: radial-gradient(ellipse 80% 60% at 50% 0%, var(--60), transparent 70%), var(--light);
      background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom,  #e2e8f0 1px, transparent 1px); 
    background-size: 70px 70px;
 }
}
</style>