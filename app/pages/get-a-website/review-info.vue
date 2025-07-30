<template>
    <div class="page-content">
      <h1 class="page-title">Review Your Site Details</h1>
      <p class="page-description">Almost done! Please review the information you've entered.</p>

      <div class="review-summary-card">
        <h3 class="review-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
          Your Details
        </h3>
        <div class="review-details-grid">
          <div class="review-item">
            <span class="review-label">Site Name:</span>
            <span class="review-value">{{ formStore.siteName }}</span>
          </div>
          <div class="review-item">
            <span class="review-label">Site URL:</span>
            <span class="review-value">https://{{ formStore.siteUrl }}</span>
          </div>
          <div class="review-item">
            <span class="review-label">Site Type:</span>
            <span class="review-value">{{ formatSiteType(formStore.siteType) }}</span>
          </div>
          <div class="review-item">
            <span class="review-label">Contact Email:</span>
            <span class="review-value">{{ formStore.contactEmail }}</span>
          </div>
          <div class="review-item">
            <span class="review-label">Keywords:</span>
            <span class="review-value">{{ formStore.keywords }}</span>
          </div>
          <div class="review-item">
            <span class="review-label">Description:</span>
            <span class="review-value">{{ formStore.description }}</span>
          </div>
          <div class="review-item">
            <span class="review-label">Estimated Price:</span>
            <span class="review-value price-highlight">${{ formStore.calculatedTotalPrice.toLocaleString() }}</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        @click="handleSubmit"
        :disabled="isLoading"
        class="primary-button"
      >
        <div v-if="isLoading" class="loading-spinner-wrapper">
          <div class="loading-spinner"></div>
          Submitting details...
        </div>
        <span v-else>
          Submit Site Details
        </span>
      </button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'form-layout',
});

import { ref } from 'vue';
import { useFormStore } from '~/stores/form';
import { navigateTo } from '#app';

const formStore = useFormStore();
const isLoading = ref(false);

// Set the current step when this page is loaded
onMounted(() => {
  formStore.updateFormField('currentStep', 2);
});

/**
 * Formats the site type key into a more readable name.
 */
const formatSiteType = (key: string) => {
  if (!key) return '';
  return key.charAt(0).toUpperCase() + key.slice(1);
};

/**
 * Handles the form submission on the final step.
 * Simulates an asynchronous operation.
 */
const handleSubmit = async () => {
  isLoading.value = true;
  // In a real application, you would send formStore.$state to your backend (e.g., Supabase)
  console.log('Submitting form data:', formStore.$state);

  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call

  isLoading.value = false;
  alert('Site details submitted successfully!'); // Replace with a custom modal or success page
  formStore.resetForm(); // Reset the form state in Pinia
  navigateTo('/'); // Redirect to home or a success page
};
</script>

<style scoped>
@reference "tainwildcss";

.page-content {
  @apply w-full max-w-md space-y-6;
}

.page-title {
  @apply text-3xl font-bold text-gray-900 dark:text-gray-100 text-center;
}

.page-description {
  @apply text-gray-600 dark:text-gray-400 text-center mb-6;
}

.review-summary-card {
  @apply bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 rounded-md;
}

.review-header {
  @apply font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2;
}

.review-details-grid {
  @apply space-y-2 text-sm;
}

.review-item {
  @apply flex justify-between items-center py-1;
}

.review-label {
  @apply text-gray-600 dark:text-gray-400;
}

.review-value {
  @apply text-gray-900 dark:text-gray-100 font-medium break-all text-right;
}

.price-highlight {
  @apply text-blue-600 dark:text-blue-400 font-extrabold text-lg;
}

.primary-button {
  @apply w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2;
}

.loading-spinner-wrapper {
  @apply flex items-center justify-center gap-2;
}

.loading-spinner {
  @apply animate-spin rounded-full h-4 w-4 border-2 border-white dark:border-gray-900 border-t-transparent;
}
</style>
