<template>
    <div class="card">
        <img :src="image" :alt="image" />

        <h3>{{ title }}</h3>

        <p>{{ description }}</p>

        <div class="btn-wrap">

            <NuxtLink :to="` https://`+ live_url" target="_blank" >
                <GlassButton  text="Visit" variant="secondary" size="sm"/>
            </NuxtLink>

            <NuxtLink :to="case_page_url"  target="_blank">
                <GlassButton  text="case study" variant="ghost" size="sm" />
            </NuxtLink>

        </div>

    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    description: String,
    image: String,
    live_url: String,
    case_page_url: String,
});
</script>

<style scoped>
@reference "tailwindcss";

.card{
    backdrop-filter: blur(var(--blur));
    @apply min-w-[300px] gap-2 items-center overflow-hidden border border-[var(--gray)] py-10
}
h3, p, a{
    @apply ps-2 text-center
}
h3{
    @apply uppercase text-xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--100)] to-[var(--200)] font-bold
}
p{
    @apply text-[var(--gray)]
}
img{
    height: 330px;
    width: 250px;
    object-fit: cover;
    border-radius: 30px;
    filter: grayscale(1);
}
img:hover{
    filter: grayscale(0);
}
.btn-wrap{
    @apply gap-4
}
</style>