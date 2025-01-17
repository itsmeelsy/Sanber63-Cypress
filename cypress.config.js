const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    env:{
      userstg: "user stg",
      userprod: "user prod"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 650,
    viewportWidth: 950,
    defaultCommandTimeout: 4500,
    screenshotOnRunFailure: false
  },
};
