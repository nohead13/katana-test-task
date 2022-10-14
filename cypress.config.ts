import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '115iao',
  e2e: {
    setupNodeEvents(on, config) {
      name: 'chrome'
    },
    baseUrl: 'https://factory.katanamrp.com/',
    specPattern: 'cypress/e2e/**/*cy.{js,ts}'
  },
  defaultCommandTimeout: 10000,
  viewportWidth: 1366,
  viewportHeight: 768
});
