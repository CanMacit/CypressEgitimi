const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1bffd6",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false,
    viewportWidth:1920,
    viewportHeight:1080,
    pageLoadTimeout:20000,
    defaultCommandTimeout:10000,
    video:true
  },
});
