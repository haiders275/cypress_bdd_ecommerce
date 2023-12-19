const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;



// module.exports = (on, config) => {

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    charts:true,
    quiet: true,
    reportPageTitle:'custom-title',
    embeddedScreenshos:true,
    inlineAssets: true,
    saveAllAttempts:false,
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
    title: "Smoke Test Iteration of eCommerce Product"
  },

  viewportWidth: 1200,
  viewportHeight: 920,

  e2e: {
      // implement node event listeners here
    async  setupNodeEvents(on, config) {
      
      // require('cypress-mochawesome-reporter/plugin')(on);

      require('cypress-mochawesome-reporter')
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
        });
        
        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);
        return config;
    
  },
  
  
  specPattern: "cypress/e2e/features/*.feature",
  }, 
});




