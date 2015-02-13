module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jasmine_node: {
      all: ['spec/']
    },

    jshint: {
      all: ['Gruntfile.js', 'spec/*/**.js', 'src/*/**.js', 'tests/*/**.js']
    },

    mocha_casperjs: {
      options: {},
      files: {
        src: ['test/**/*']
      }
    },

    execute: {
      target: {
        src: ['./spec/*']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('default', ['jshint', 'mocha_casperjs', 'execute']);

};
