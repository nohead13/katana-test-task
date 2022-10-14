const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'e18nz4',
  e2e: {
    setupNodeEvents(on, config) {
      name: 'chrome'
    },
    baseUrl: 'https://factory.katanamrp.com/'
  },
  defaultCommandTimeout: 10000,
  viewportWidth: 1366,
  viewportHeight: 768
});
