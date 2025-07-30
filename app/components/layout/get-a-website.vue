<template>
  <div class="form-container">
    <div class="form-card-wrapper">
      <!-- Progress Bar -->
      <div class="progress-bar-section">
        <div class="progress-header">
          <span class="progress-step-text">Step {{ step }} of 6</span>
          <span class="progress-percentage">{{ Math.round((step / 6) * 100) }}%</span>
        </div>
        <div class="progress-bar-track">
          <div
            class="progress-bar-fill"
            :style="{ width: `${(step / 6) * 100}%` }"
          />
        </div>
      </div>

      <!-- Main Card -->
      <div class="main-card">
        <!-- Header -->
        <div class="card-header">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <h1 class="card-title">
            {{ step === 1 ? 'Basic Site Information' : step === 2 ? 'Contact & SEO Details' : 'Review Your Site Details' }}
          </h1>
          <p class="card-description">
            <span v-if="step === 1">Let's start with the foundational details of your website.</span>
            <span v-else-if="step === 2">Now, provide contact information and optimize for search engines.</span>
            <span v-else-if="step === 3">Almost done! Please review the information you've entered.</span>
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="form-content">
          <!-- Step 1: Basic Site Information -->
          <div v-if="step === 1" class="form-step">
            <div class="input-group">
              <label htmlFor="siteName" class="input-label">
                Site Name
              </label>
              <input
                id="siteName"
                type="text"
                v-model="siteName"
                placeholder="e.g., My Awesome Blog"
                class="text-input"
              />
            </div>

            <div class="input-group">
              <label htmlFor="siteUrl" class="input-label">
                Site URL
              </label>
              <div class="relative">
                <span class="url-prefix">https://</span>
                <input
                  id="siteUrl"
                  type="text"
                  v-model="siteUrl"
                  placeholder="www.example.com"
                  class="text-input url-input"
                />
              </div>
            </div>

            <div class="input-group">
              <label htmlFor="siteType" class="input-label">
                Site Type
              </label>
              <select
                id="siteType"
                v-model="siteType"
                class="select-input"
              >
                <option value="" disabled>Select a type</option>
                <option value="blog">Blog</option>
                <option value="ecommerce">E-commerce</option>
                <option value="portfolio">Portfolio</option>
                <option value="service">Service Website</option>
                <option value="corporate">Corporate Site</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="button"
              @click="handleNext"
              :disabled="!siteName || !siteUrl || !siteType"
              class="primary-button"
            >
              Next Step
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <!-- Step 2: Contact & SEO Details -->
          <div v-if="step === 2" class="form-step">
            <div class="input-group">
              <label htmlFor="contactEmail" class="input-label">
                Contact Email
              </label>
              <input
                id="contactEmail"
                type="email"
                v-model="contactEmail"
                placeholder="contact@example.com"
                class="text-input"
              />
            </div>

            <div class="input-group">
              <label htmlFor="keywords" class="input-label">
                Keywords (comma-separated)
              </label>
              <textarea
                id="keywords"
                v-model="keywords"
                placeholder="e.g., web development, nuxt, supabase, blog"
                rows="3"
                class="textarea-input"
              ></textarea>
            </div>

            <div class="input-group">
              <label htmlFor="description" class="input-label">
                Site Description
              </label>
              <textarea
                id="description"
                v-model="description"
                placeholder="A brief description of your website for search engines."
                rows="4"
                class="textarea-input"
              ></textarea>
            </div>

            <button
              type="button"
              @click="handleNext"
              :disabled="!contactEmail || !keywords || !description"
              class="primary-button"
            >
              Next Step
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <!-- Step 3: Review & Submit -->
          <div v-if="step === 3" class="form-step">
            <div class="review-summary-card">
              <h3 class="review-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
                Review Details
              </h3>
              <div class="review-details-grid">
                <div class="review-item">
                  <span class="review-label">Site Name:</span>
                  <span class="review-value">{{ siteName }}</span>
                </div>
                <div class="review-item">
                  <span class="review-label">Site URL:</span>
                  <span class="review-value">https://{{ siteUrl }}</span>
                </div>
                <div class="review-item">
                  <span class="review-label">Site Type:</span>
                  <span class="review-value">{{ siteType }}</span>
                </div>
                <div class="review-item">
                  <span class="review-label">Contact Email:</span>
                  <span class="review-value">{{ contactEmail }}</span>
                </div>
                <div class="review-item">
                  <span class="review-label">Keywords:</span>
                  <span class="review-value">{{ keywords }}</span>
                </div>
                <div class="review-item">
                  <span class="review-label">Description:</span>
                  <span class="review-value">{{ description }}</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
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
        </form>

        <!-- Back Button -->
        <button
          v-if="step > 1 && step < 3"
          @click="step--"
          class="back-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5"></path>
            <path d="m12 19-7-7 7-7"></path>
          </svg>
          Back to previous step
        </button>

        <!-- Footer -->
        <div class="card-footer">
          <p class="footer-text">
            Need help?
            <a href="#" class="footer-link">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Form state
const siteName = ref('');
const siteUrl = ref('');
const siteType = ref('');
const contactEmail = ref('');
const keywords = ref('');
const description = ref('');

// UI state
const isLoading = ref(false);
const step = ref(1); // Current step of the form (1, 2, or 3 for review)

/**
 * Advances the form to the next step.
 */
const handleNext = () => {
  if (step.value < 3) {
    step.value++;
  }
};

/**
 * Handles the form submission on the final step.
 * Simulates an asynchronous operation.
 */
const handleSubmit = () => {
  isLoading.value = true;
  // Simulate an API call or data submission process
  setTimeout(() => {
    isLoading.value = false;
    alert('Site details submitted successfully!'); // Use a custom modal in a real app
    // Optionally reset the form or navigate away
    resetForm();
  }, 2000);
};

/**
 * Resets all form fields and returns to the first step.
 */
const resetForm = () => {
  siteName.value = '';
  siteUrl.value = '';
  siteType.value = '';
  contactEmail.value = '';
  keywords.value = '';
  description.value = '';
  step.value = 1;
};
</script>

<style scoped>
@reference "tailwindcss";

.form-container {
  @apply flex items-center justify-center p-4 min-h-screen font-sans;
}

/* Wrapper for the main card, ensures max width */
.form-card-wrapper {
  @apply w-full max-w-md;
}

/* Progress Bar Section */
.progress-bar-section {
  @apply mb-6;
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

/* Main Card Styling */
.main-card {
  @apply bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6;
  /* Add a subtle animation for card entry */
  animation: fadeIn 0.3s ease-out;
}

/* Card Header */
.card-header {
  @apply text-center mb-6;
}

.icon-wrapper {
  @apply inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-full mb-4 text-gray-900 dark:text-gray-100;
}

.card-title {
  @apply text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2;
}

.card-description {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

/* Form Content and Steps */
.form-content {
  @apply space-y-4;
}

.form-step {
  @apply space-y-4;
  /* Add a subtle animation for step transitions */
  animation: slideIn 0.3s ease-out;
}

.input-group {
  @apply space-y-2;
}

.input-label {
  @apply text-sm font-medium text-gray-900 dark:text-gray-100;
}

.text-input,
.select-input,
.textarea-input {
  @apply w-full px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200;
}

.text-input:focus,
.select-input:focus,
.textarea-input:focus {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1); /* Custom focus ring for light mode */
}

.dark .text-input:focus,
.dark .select-input:focus,
.dark .textarea-input:focus {
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1); /* Custom focus ring for dark mode */
}

.url-prefix {
  @apply absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500 text-sm;
}

.url-input {
  @apply pl-16; /* Adjust padding for the prefix */
}

/* Buttons */
.primary-button {
  @apply w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2;
}

.primary-button:hover {
  transform: translateY(-1px); /* Subtle lift on hover */
}

.back-button {
  @apply mt-4 w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm font-medium flex items-center justify-center gap-2;
}

/* Loading Spinner */
.loading-spinner-wrapper {
  @apply flex items-center justify-center gap-2;
}

.loading-spinner {
  @apply animate-spin rounded-full h-4 w-4 border-2 border-white dark:border-gray-900 border-t-transparent;
}

/* Review Summary Card */
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
  @apply text-gray-900 dark:text-gray-100 font-medium break-all text-right; /* break-all for long URLs/keywords */
}

/* Card Footer */
.card-footer {
  @apply mt-6 text-center;
}

.footer-text {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.footer-link {
  @apply text-gray-900 dark:text-gray-100 font-medium hover:underline;
}

/* Custom Animations (not purely Tailwind, but enhance UX) */
@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.form-step {
  animation: slideIn 0.3s ease-out forwards; /* Use forwards to keep the final state */
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.main-card {
  animation: fadeIn 0.3s ease-out forwards; /* Use forwards to keep the final state */
}
</style>
