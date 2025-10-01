// wdio.conf.js
exports.config = {
    // Runner Configuration
    runner: 'local',
    
    // Specs Configuration
    specs: [
        './tests/**/bstack_test*.js'
    ],
    
    // Patterns to exclude
    exclude: [],
    
    // Maximum number of total parallel running workers
    maxInstances: 1,
    
    // Browser capabilities
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            // to run chrome in headless mode uncomment the below line
            // args: ['--headless'],
        }
    }],
    
    // Test Configurations
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    // Services
    services: ['chromedriver'],
    
    // Framework
    framework: 'mocha',
    
    // Test reporter
    reporters: ['spec'],
    
    // Options to be passed to Mocha
    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    },
    
    // Hooks
    before: function (capabilities, specs) {
        // Set implicit wait timeout
        browser.setTimeout({
            'implicit': 5000
        });
    },
    
    beforeTest: function (test, context) {
        // Maximize browser window
        browser.maximizeWindow();
    }
};
