<template>
    <div class="fixed-bg-text" :class="bgClasses">
        <h1>{{ text }}</h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: 'Default Text'
    },
    variant: {
        type: String as () => 'start' | 'end' | 'center', 
        default: 'start'
    }
});
const bgClasses = computed(() => [
    `${props.variant}`
])
</script>

<style lang="css" scoped>
@reference "tailwindcss";

.fixed-bg-text {
    h1 {
        font-size: var(--text-bg);
        background: linear-gradient(45deg, var(--100), var(--400));
        @apply text-transparent bg-clip-text
    }

    z-index: -10;
    @apply flex items-center w-full max-w-[var(--max-w)] h-full fixed left-0 right-0 mx-auto bottom-0
}

.fixed-bg-text.end {
    @apply justify-end
}
.fixed-bg-text.center{
    @apply justify-center
}

.fixed-bg-text.start {
    @apply justify-start
}
</style>