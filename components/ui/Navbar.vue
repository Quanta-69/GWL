<template>
    <header :class="{ 'scrolled': scrolled, 'static': !scrolled }">

        <div class="logo">
            <h1>
                <NuxtLink to="/">GWL</NuxtLink>
            </h1>
        </div>

        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/portfolio">Portfolio</NuxtLink>
            <NuxtLink to="/get-started">Get Started</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>

            <NuxtLink>More</NuxtLink>
            <div class="dropdown-content">
                <NuxtLink to="/faq">FAQ</NuxtLink>
                <NuxtLink to="/how-it-works">How it Works</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </div>
        </nav>

        <div class="auth btn-wrap">
            <NuxtLink to="/login">
                <GlassButton size="sm" variant="primary" text="Login" />
            </NuxtLink>
            <NuxtLink to="/signup">
                <GlassButton size="sm" variant="secondary" text="Sign Up" />
            </NuxtLink>
        </div>

    </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)

const handleScroll = () => {
    scrolled.value = window.scrollY > 20 
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@reference "tailwindcss";
.static{
    opacity: 0;
    max-width: 1200px;
}
.scrolled {
    opacity: 1;
    max-width: 1500px;
    @apply bg-[var(--light)]
}
.router-link-active {
    @apply text-[var(--60)]
}
.router-link-active:hover{
    @apply text-[var(--60)]
}

header{
    z-index: 100;
    backdrop-filter: blur(var(--blur));
    @apply border-2 border-[var(--60)] rounded-xl flex items-center justify-evenly p-4 mt-5 w-full max-w-[var(--max-w)] mx-auto  fixed left-0 right-0  top-0
}
.logo{
    h1{
        @apply text-[var(--200)] text-2xl
    }
}
nav{
    a{
        @apply text-xl
    }
    @apply flex items-center justify-center gap-5 
}
</style>