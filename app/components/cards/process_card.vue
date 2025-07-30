<template>
    <div class="card">
        <div > <h1 class="count">{{ step }}</h1> </div>
        <div class="text-content">
            <h1>{{ title }}</h1>
            <p>{{ details }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    step: String,
    details: String,
    title: String
})
</script>

<style scoped>
@reference "tailwindcss";
.card{
    .count{
        @apply text-7xl text-[var(--60)]
    }
    h1{
        @apply font-normal text-xl text-[var(--30)]
    }
    p{
        @apply text-[var(--gray)]
    }
    @apply flex-row shadow-none
}
</style>