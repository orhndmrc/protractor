const HtmlReporter = require('protractor-beautiful-reporter')
const SpecReporter = require('jasmine-spec-reporter').SpecReporter
exports.config = {
  directConnect: true,
  specs: ['./test/specs/*.js'],
  framework: 'jasmine',
  capabilities: {
    browserName: 'edge',
    'goog:chromeOptions': {
      // Disable headless mode if screen recordings are enabled:
      args: ['--disable-gpu', '--disable-extensions', 'log-level=3',
        '--proxy-bypass-list=*', '--start-maximized', '--disable-dev-shm-usage', '--no-sandbox',
        '--ignore-certificate-errors', '--disable-background-networking']
    }
  },
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    realtimeFailure: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  },
  onPrepare: async function () {
    require('@babel/register')
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'reports/screenshots'
    }).getJasmine2Reporter())

    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }))
  }
}
