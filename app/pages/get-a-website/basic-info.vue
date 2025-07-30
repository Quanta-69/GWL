<template>
    <div class="page-content">
      <h1 class="page-title">Basic Site Information</h1>
      <p class="page-description">Let's start with the foundational details of your website.</p>

      <div class="input-group">
        <label for="siteName" class="input-label">Site Name</label>
        <input
          id="siteName"
          type="text"
          v-model="formStore.siteName"
          placeholder="e.g., My Awesome Blog"
          class="text-input"
        />
      </div>

      <div class="input-group">
        <label for="siteUrl" class="input-label">Site URL</label>
        <div class="relative">
          <span class="url-prefix">https://</span>
          <input
            id="siteUrl"
            type="text"
            v-model="formStore.siteUrl"
            placeholder="www.example.com"
            class="text-input url-input"
          />
        </div>
      </div>

      <div class="input-group">
        <label for="siteType" class="input-label">Site Type</label>
        <select
          id="siteType"
          v-model="formStore.siteType"
          class="select-input"
        >
          <option value="" disabled>Select a type</option>
          <!-- Use <template> to apply v-if correctly after v-for has established 'type' -->
          <template v-for="(price, type) in formStore.siteTypePrices" :key="type">
            <option :value="type" v-if="type !== ''">
              {{ formatSiteTypeName(type as string) }} (${{ price.toLocaleString() }})
            </option>
          </template>
        </select>
      </div>

      <button
        type="button"
        @click="handleNext"
        :disabled="!formStore.siteName || !formStore.siteUrl || !formStore.siteType"
        class="primary-button">Next Step<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'form-layout',
});
useHead({
    title: 'Step 1 | Basic Project Information',
    meta: [
        { name: 'description', content: 'Provide basic information for your project' }
    ]
})
import { useFormStore } from '~/stores/form';
import { navigateTo } from '#app';

const formStore = useFormStore();

onMounted(() => {
  formStore.updateFormField('currentStep', 1);
});

/**
 * Formats the site type key into a more readable name.
 */
const formatSiteTypeName = (key: string) => {
  if (!key) return '';
  return key.charAt(0).toUpperCase() + key.slice(1);
};

/**
 * Handles navigation to the next step (Contact & SEO Details page).
 */
const handleNext = () => {
  if (formStore.siteName && formStore.siteUrl && formStore.siteType) {
    formStore.nextStep();
    navigateTo('/get-a-website/review-info');
  }
};
</script>

<style scoped>
@import "tailwindcss";

.page-content {
  @apply w-full max-w-md space-y-6; /* Styling for content within the slot */
}

.page-title {
  @apply text-3xl font-bold text-gray-900 dark:text-gray-100 text-center;
}

.page-description {
  @apply text-gray-600 dark:text-gray-400 text-center mb-6;
}

.input-group {
  @apply space-y-2;
}

.input-label {
  @apply text-sm font-medium text-gray-900 dark:text-gray-100;
}

.text-input,
.select-input {
  @apply w-full px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200;
}

.text-input:focus,
.select-input:focus {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

.dark .text-input:focus,
.dark .select-input:focus {
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
}

.url-prefix {
  @apply absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500 text-sm;
}

.url-input {
  @apply pl-16;
}

.primary-button {
  @apply w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2;
}
</style>
