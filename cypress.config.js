const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  projectId: 'd3xie5',
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    on('task', {downloadFile})
    },
  },
});
