/*global module, require*/
module.exports = function (grunt) {

    "use strict";

    var jsBanner = '/*\n * jQuery Plugin to auto resize elements with constrain proportions enabled.\n * https://github.com/sandroweb/constrain-p\n */';

    grunt.initConfig({

        jslint: {
            client: {
                src: [
                    'Gruntfile.js',
                    'source/constrain-p.js'
                ],
                directives: {
                    predef: [
                        'jQuery',
                        'window',
                        'document',
                        'console',
                        'YT',
                        'setInterval',
                        'clearInterval'
                    ]
                },
                options: {
                    forin: true
                }
            }
        },

        uglify: {
            mainMin: {
                options: {
                    beautify: false,
                    sourceMap: true,
                    compress: {
                        drop_console: true
                    },
                    banner: jsBanner
                },
                files: {
                    'dist/constrain-p.min.js': ['source/constrain-p.js']
                }
            },
            main: {
                options: {
                    beautify: false,
                    sourceMap: false,
                    compress: {
                        drop_console: true
                    },
                    banner: jsBanner
                },
                files: {
                    'dist/constrain-p.js': ['source/constrain-p.js']
                }
            }
        },

        watch: {
            scripts: {
                files: ['Gruntfile.js', 'source/constrain-p.js'],
                tasks: ['jslint', 'uglify']
            }
        }
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask('w', ['jslint', 'uglify', 'watch']);
};