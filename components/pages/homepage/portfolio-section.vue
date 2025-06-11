<template>
    <section>
        <div class="wrapper">
            <div class="fixed-bg-text">
                <h1>Portfolio</h1>
            </div>
            <h1>Scroll</h1>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
@reference "tailwindcss";
section{
    @apply min-h-[100vh]
}
.wrapper{
    @apply relative min-h-[100vh]
}
.fixed-bg-text{
    h1{
        @apply text-9xl text-white
    }
    z-index: -1;
    @apply flex items-center justify-center w-full max-w-[var(--max-w)] h-full fixed left-0 right-0 mx-auto bottom-0 border border-red-400
}
h1{
    backdrop-filter: blur(10px);
    @apply text-3xl text-emerald-400 relative h-30 border
}
</style>