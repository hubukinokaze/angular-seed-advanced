const config = {
  baseUrl: 'http://localhost:8080/',

  specs: [
    './dist/e2e/**/*.e2e-spec.js'
  ],

  exclude: [],

  // 'jasmine' by default will use the latest jasmine framework
  framework: 'jasmine',

  // allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    // showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    // defaultTimeoutInterval: 400000
  },

  directConnect: true,

  capabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
    require("zone.js/dist/zone-node");
    require("zone.js/dist/long-stack-trace-zone");
    require("zone.js/dist/async-test");
    require("zone.js/dist/fake-async-test");
    require("zone.js/dist/sync-test");
    require("zone.js/dist/proxy");
    require("zone.js/dist/jasmine-patch");
    browser.ignoreSynchronization = false;
  },


  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   */
  useAllAngular2AppRoots: true
};

if (process.env.TRAVIS) {
  config.capabilities = {
    browserName: 'firefox'
  };
}

exports.config = config;
