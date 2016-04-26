'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json')
    , protractor: {
      options: {
          keepAlive: false
        , configFile: './config/protractorConfig.js'
      }
      , run: {}
    }
  });

  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.registerTask('default'
    , ['protractor:run']);
};
