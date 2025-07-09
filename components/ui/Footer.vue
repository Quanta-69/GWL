<template>
    <footer>
        <div class="wrapper">
            <div class="link-box"></div>
            <div class="link-box"></div>
            <div class="link-box"></div>
            <div class="bottom-links">
                <p>© 2025 Glass Web Labs</p>
                <NuxtLink>Privacy Policy</NuxtLink>
                <NuxtLink>Terms of Service</NuxtLink>
                <NuxtLink>Guidelines</NuxtLink>
        </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
@reference "tailwindcss";

footer{
    @apply min-h-[30vh] bg-[var(--light)] flex items-end justify-center pb-5
}
.wrapper{
    
}
.bottom-links{
    a{
        @apply font-semibold underline
    }
    @apply flex gap-2 
}
</style>