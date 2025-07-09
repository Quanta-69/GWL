<template>
    <div class="card">
        <img :src="image" alt="">
        <div class="text-content">
            <h1>{{ title }}</h1>
            <h2>{{ price }}</h2>        
        </div>
        <p>{{ description }}</p>
        <div class="btn-wrap">
            <NuxtLink to="/get-a-website" >
                <GlassButton text="Use Template" size="sm" variant="primary" />
            </NuxtLink>
            <NuxtLink :to="`https://`+ live_url" target="_blank">
                <GlassButton text="Live demo" size="sm" variant="secondary" />
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
    price: String
});
</script>

<style scoped>
@reference "tailwindcss";
.card{
    @apply min-w-[430px] items-start pb-8 pt-0 pl-0 pr-0 border border-[var(--gray)]
}
.text-content{
    @apply flex items-start justify-between  w-full pe-5
}
h1, p, a{
    @apply ps-2 text-left 
}
h1{
    @apply uppercase text-2xl  font-bold
}
h2{
    @apply font-bold text-xl text-[var(--10)]
}
p{
    @apply text-[var(--gray)]
}
img{
    height: 330px;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
}
</style>