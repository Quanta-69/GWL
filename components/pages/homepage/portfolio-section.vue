<template>
    <section class="hasfixed" >
        <div class="wrapper">
            <div class="fixed-bg-text">
                <h1>Portfolio</h1>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
@reference "tailwindcss";
section.hasfixed {
    z-index: -10;
}
.fixed-bg-text{
    z-index: -9;
}
</style>