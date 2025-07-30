<template>
  <div class="form-layout-container">
    <div class="form-content-half">
      <!-- Progress Bar -->
      <div class="progress-bar-section">
        <div class="progress-header">
          <span class="progress-step-text">Step {{ formStore.currentStep }} of {{ formStore.totalSteps }}</span>
        </div>
        <div class="progress-bar-track">
          <div
            class="progress-bar-fill"
            :style="{ width: `${formStore.progressPercentage}%` }"
          />
        </div>
      </div>

      <!-- Main content slot for each page -->
      <div class="page-slot-wrapper">
        <slot />
      </div>

      <!-- Back Button (conditionally displayed) -->
      <div class="navigation-buttons">
        <NuxtLink
          v-if="formStore.currentStep > 1 && formStore.currentStep < formStore.totalSteps"
          @click="formStore.prevStep()"
          :to="getPreviousStepPath()"
          class="back-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5"></path>
            <path d="m12 19-7-7 7-7"></path>
          </svg>
          Back
        </NuxtLink>
      </div>
    </div>

    <div class="design-display-half">
      <div class="design-content">
        <h2 class="design-title">Your Website Journey</h2>
        <p class="design-description">
          Follow these simple steps to define your perfect website.
          We'll guide you through the process, ensuring every detail is covered.
        </p>
        <img
          src="https://placehold.co/400x300/e0e0e0/333333?text=Your+Design+Visual"
          alt="Placeholder for design visual"
          class="design-image"
        />
      </div>

      <!-- Price Calculator Display -->
      <div class="price-calculator-display">
        <h3 class="price-title">Estimated Cost</h3>
        <p class="price-value">
          ${{ formStore.calculatedTotalPrice.toLocaleString() }}
        </p>
        <p class="price-note">
          This is an estimate. Final pricing depends on specific requirements.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
import { useFormStore } from '~/stores/form';
import { useRoute } from 'vue-router'; // Import useRoute to get current path

const formStore = useFormStore();
const route = useRoute();

/**
 * Dynamically determines the path for the previous step.
 * This needs to be manually mapped based on your route structure.
 * In a real app, you might have a more robust routing configuration.
 */
const getPreviousStepPath = () => {
  switch (formStore.currentStep) {
    case 2: return '/get-a-website/basic-info';
    case 3: return '/get-a-website/review-info';
    default: return '/'; // Fallback or handle error
  }
};
</script>

<style scoped>
@reference "tailwindcss";

.form-layout-container {
  @apply flex min-h-screen font-sans;
}

.form-content-half {
  @apply w-full md:w-1/2 p-4 sm:p-8 flex flex-col justify-between bg-white dark:bg-gray-900 overflow-y-auto;
}

.design-display-half {
  @apply hidden md:flex md:w-1/2 p-8 flex-col justify-between items-center bg-gray-100 dark:bg-gray-800;
}

/* Progress Bar Section */
.progress-bar-section {
  @apply mb-6 w-full max-w-md mx-auto; /* Center progress bar in its half */
}

.progress-header {
  @apply flex justify-between items-center mb-3;
}

.progress-step-text {
  @apply text-sm font-medium text-gray-900 dark:text-gray-100;
}

.progress-percentage {
  @apply text-sm text-gray-500 dark:text-gray-400;
}

.progress-bar-track {
  @apply w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden;
}

.progress-bar-fill {
  @apply bg-gray-900 dark:bg-gray-100 h-2 rounded-full transition-all duration-500 ease-out;
}

/* Page Content Slot Wrapper */
.page-slot-wrapper {
  @apply flex-grow flex items-center justify-center py-4; /* Ensure content is centered vertically */
}

/* Navigation Buttons */
.navigation-buttons {
  @apply w-full max-w-md mx-auto mt-auto pt-4; /* Push to bottom, center */
}

.back-button {
  @apply text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm font-medium flex items-center justify-center gap-2 w-full py-2;
}

/* Design/Display Half Styling */
.design-content {
  @apply text-center p-4;
}

.design-title {
  @apply text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4;
}

.design-description {
  @apply text-lg text-gray-600 dark:text-gray-400 mb-6;
}

.design-image {
  @apply rounded-lg shadow-lg max-w-full h-auto;
}

/* Price Calculator Display */
.price-calculator-display {
  @apply bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center w-full max-w-xs mt-auto; /* Push to bottom, center */
}

.price-title {
  @apply text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2;
}

.price-value {
  @apply text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2;
}

.price-note {
  @apply text-sm text-gray-600 dark:text-gray-300;
}
</style>
