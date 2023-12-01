const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPatter: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
    },
  },
  e2e: {
    hideXHRInCommandLog: true
  }

});
