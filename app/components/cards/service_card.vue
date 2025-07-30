<template>
        <div class="card">
            <div class="card-svg" v-html="icon" ></div>
            <div class="card-header">
                <h3>{{ title }}</h3>
            </div>
            <div class="card-body">
                <p>{{ description }}</p>
            </div>
        </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    description: String,
    icon: String,
});
</script>

<style scoped>
@reference "tailwindcss";

.card {
    @apply shadow-none items-start gap-3
}
h3{
    @apply text-xl text-[var(--30)]
}
p{
    @apply text-[var()] 
}
</style>