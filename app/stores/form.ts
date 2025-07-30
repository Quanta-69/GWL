// stores/form.ts
import { defineStore } from "pinia";

interface FormState {
  // Site Details
  siteName: string;
  siteUrl: string;
  siteType: string;
  contactEmail: string;
  keywords: string;
  description: string;

  // Price Calculator
  basePrice: number; // This will now be a base price *before* site type
  siteTypePrices: { [key: string]: number }; // NEW: Prices for each site type
  selectedAddons: string[];
  addonPrices: { [key: string]: number };

  // Form Progress
  currentStep: number;
  totalSteps: number;
}

export const useFormStore = defineStore("form", {
  state: (): FormState => ({
    // Site Details (initial empty state)
    siteName: "",
    siteUrl: "",
    siteType: "", // This will hold the key, e.g., 'blog', 'ecommerce'
    contactEmail: "",
    keywords: "",
    description: "",

    // Price Calculator (initial values)
    basePrice: 0, // Set basePrice to 0 as siteType will now determine the initial cost
    siteTypePrices: {
      // NEW: Define prices for each site type
      "": 0, // Default for "Select a type"
      blog: 800,
      ecommerce: 1500,
      portfolio: 700,
      service: 1200,
      corporate: 2000,
      other: 600,
    },
    selectedAddons: [],
    addonPrices: {
      "premium-support": 150,
      "custom-design": 300,
      "e-commerce-integration": 250,
      "seo-package": 100,
    },

    // Form Progress
    currentStep: 1,
    totalSteps: 2,
  }),

  getters: {
    /**
     * Calculates the total price based on base price, selected site type, and selected addons.
     * @returns {number} The total calculated price.
     */
    calculatedTotalPrice: (state) => {
      let total = state.basePrice; // Start with the base price (which is 0 now)

      // Add price based on selected site type
      total += state.siteTypePrices[state.siteType] || 0;

      // Add prices for selected addons
      for (const addon of state.selectedAddons) {
        total += state.addonPrices[addon] || 0;
      }
      return total;
    },
    /**
     * Gets the progress percentage for the progress bar.
     * @returns {number} Progress percentage (0-100).
     */
    progressPercentage: (state) => {
      return Math.round((state.currentStep / state.totalSteps) * 100);
    },
  },

  actions: {
    /**
     * Updates a specific form field.
     * @param {keyof FormState} field - The name of the field to update.
     * @param {any} value - The new value for the field.
     */
    updateFormField<T extends keyof FormState>(field: T, value: FormState[T]) {
      (this as any)[field] = value;
    },

    /**
     * Advances the form to the next step.
     */
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },

    /**
     * Moves the form back to the previous step.
     */
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    /**
     * Adds or removes an addon from the selected list.
     * @param {string} addonKey - The key of the addon to toggle.
     */
    toggleAddon(addonKey: string) {
      const index = this.selectedAddons.indexOf(addonKey);
      if (index > -1) {
        this.selectedAddons.splice(index, 1); // Remove addon
      } else {
        this.selectedAddons.push(addonKey); // Add addon
      }
    },

    /**
     * Resets all form data and returns to the first step.
     */
    resetForm() {
      this.siteName = "";
      this.siteUrl = "";
      this.siteType = "";
      this.contactEmail = "";
      this.keywords = "";
      this.description = "";
      this.selectedAddons = [];
      this.currentStep = 1;
    },
  },
});
