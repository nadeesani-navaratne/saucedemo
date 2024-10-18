const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // keep cookies between tests to avoild logging out
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    baseUrl: 'https://www.saucedemo.com',
    env: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
    retries: {
      runMode: 2,  
      openMode: 2, 
    },
  },
});
