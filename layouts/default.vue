<template>
>
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