<template>
    <section>
        <div class="sidebar">
            <div class="side-links">
                <div class="up">
                    <NuxtLink to="/dashboard/admin">Overview</NuxtLink>
                    <NuxtLink to="/dashboard/admin/users">Users</NuxtLink>
                    <NuxtLink to="/dashboard/admin/projects" >Projects</NuxtLink>
                </div>
                <div class="down">
                    <NuxtLink to="/dashboard/admin/settings">Settings</NuxtLink>
                </div>
            </div>
        </div>
        <div class="display">
            <slot/>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
@reference "tailwindcss";
.router-link-active {
    @apply  bg-[var(--60)];
}
.router-link-active:hover{
    background: var(--60) !important;
}
section{
    @apply flex-row items-center justify-center gap-10 min-h-[100vh] p-0 m-0
}
.sidebar{
    .side-links{
        .up, .down{
            a {
                @apply w-full h-10 rounded-lg inline-flex items-center justify-start mx-4 px-4 text-lg;
            }
            a:hover{
                @apply bg-[var(--alpha-bg)];
            }
           @apply flex flex-col items-start gap-5 w-[100%];
        }
        .up{
            @apply h-[50vh] mt-10
        }
        .down{
            @apply pb-6 w-full
        }

        @apply flex flex-col items-center justify-between w-[90%] min-h-[inherit]
    }

    @apply  w-[15vw] bg-[var(--alpha-bg)] min-h-[inherit] flex flex-col
}
.display{
    @apply border w-full
}
</style>