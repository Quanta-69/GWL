<template>
    <header
        class="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-md border-b border-white/10 z-50 shadow-sm">
        <h1 class="text-2xl font-black text-white tracking-wider">
            <span class="text-indigo-400">GWL</span>
        </h1>
        <nav class="flex gap-8 text-sm font-medium">
            <a href="#" class="hover:text-indigo-300 transition">Home</a>
            <a href="#" class="hover:text-indigo-300 transition">About</a>
            <a href="#" class="hover:text-indigo-300 transition">Services</a>
            <a href="#" class="hover:text-indigo-300 transition">Contact</a>
        </nav>
    </header>
    <div>
        <navbar/>
        <slot />
        <footer/>
    </div>

</template>

<script setup lang="ts">
import {navbar, footer} from "~/components/ui/exporter";
</script>

<style scoped>
</style>