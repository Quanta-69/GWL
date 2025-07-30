<template>
    <div>
        <Navbar/>
        <slot />
        <Footer/>
    </div>

</template>

<script setup lang="ts">
import {Navbar, Footer} from "~/components/mui/exporter";
</script>

<style scoped>
</style>