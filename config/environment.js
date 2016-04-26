'use strict';

module.exports = {
  capabilities: {
      'browserName' : (process.env.TEST_BROWSER_NAME || 'chrome')
    , 'version'     : (process.env.TEST_BROWSER_VERSION || 'ANY')
  }
};