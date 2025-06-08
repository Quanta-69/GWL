<template>
    <div class="error-page">
        <h1 class="error-title">Oops! Quantoxt didn't make this page</h1>
        <p class="error-message">
            Sorry, Quantoxt didn't make this page.
        </p>
        <NuxtLink to="/" class="error-button">
            Back to Homepage
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    error: Object
});

console.log(props.error); // You can log the error object to see more details

// You can add custom logic here if needed, e.g., checking the error status code
// if (props.error.statusCode === 404) {
//   // Specific message for 404 errors
// }
</script>

<style scoped>
.error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    padding: 2rem;
}

.error-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
    word-spacing: 5px;
    /* Adjust color as needed */
}

.error-message {
    font-size: 1.1rem;
    color: #666;
    /* Adjust color as needed */
    margin-bottom: 2rem;
}

.error-button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: #007bff;
    /* Adjust color to your brand */
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.error-button:hover {
    background-color: #0056b3;
    /* Darker shade for hover effect */
}
</style>