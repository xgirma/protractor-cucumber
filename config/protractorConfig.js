exports.config = {
    directConnect     : true

    // What tests to run
  , specs             : [
      'spec/*.feature.js'
  ]
  , capabilities      : {
      browserName : 'chrome'
  }

    // Global test information
  , baseUrl           : 'http://secpod.herokuapp.com'
  , rootElement       : 'body'
  , allScriptsTimeout : 11000
  , getPageTimeout    : 10000

    // The test framework
  , framework         : 'custom'
  , frameworkPath     : require.resolve('protractor-cucumber-framework')

    // Options to be passed to Cucumber (when set up as a custom framework).
  , cucumberOpts      : {
      // Require files before executing the features.
      require     : '../step_definitions/*.step.js'
      // Only execute the features or scenarios with tags matching @demo.
      // This may be an array of strings to specify multiple tags to include.
    , tags        : '@demo'
      // How to format features (default: progress)
      // Other options include `coffee`, `noSnippets`, and `dryRun`
    , format      : 'summary'
  }
};