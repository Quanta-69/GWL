<template>
    <h1>Nav</h1>

    <div>
        <slot/>
    </div>

    <h1>Footer</h1>
</template>

<script setup lang="ts">

</script>

<style scoped>
@reference "tailwindcss";
h1{
    @apply text-red-500 text-2xl
}
</style>