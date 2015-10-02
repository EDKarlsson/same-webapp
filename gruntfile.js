module.exports = function (grunt) {
    var jsFiles = ['app/js/**/*.js', 'src/**/*.js', '!app/vendor/'];
    grunt.initConfig({

        'bower-install-simple': {
            options: {
                color: true,
                cwd: './',
                directory: 'app/bower_components'
            },
            prod: {
                options: {
                    production: true
                }
            }
        },
        concat: {
            options: {
                //separator: ';',
                banner: "'use strict';\n",
                process: function (src, filepath) {
                    return '// Source: ' + filepath + '\n' +
                           src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            },

            directives: {
                src: ['src/directives/*.js'],
                dest: 'build/same.directives.js'
            },
            same: {
                src: ['src/same.js', 'src/services/*.js'],
                dest: 'build/same.js'
            },
            controllers: {
                src: ['app/js/controllers/*.js'],
                dest: 'build/js/controllers.js'
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    src: 'app/css/style.scss',
                    dest: 'build/css/style.css'
                }]
            }
        }, // SASS
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 9000,
                    base: 'build/',
                    livereload: true
                }
            }
        },
        wiredep: {
            target: {
                src: [
                    'build/*.html'
                ]
            }
        },
        jshint: {
            beforeconcat: jsFiles,
            afterconcat: ['build/same.js', 'build/same.directives.js'],
            options: {
                globalstrict: true,
                globals: {
                    angular: true,
                    window: true,
                    console: true
                }
            }
        },
        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            scripts: {
                files: ['app/partials/**/*.html', 'app/js/**/*.js', 'app/css/**/*.css', 'app/index.html'],
                tasks: ['concat', 'copy:main']
            }
        },// End grunt watch
        copy: {
            main: {
                files: [

                    {
                        expand: true, src: '**', cwd: 'app/css/', dest: 'build/css/'
                    },
                    {
                        expand: true, src: '**', cwd: 'app/img/', dest: 'build/img/'
                    },
                    {
                        expand: true, src: '**', cwd: 'app/partials/', dest: 'build/partials/'
                    },
                    {
                        expand: true, src: '**', cwd: 'app/partials/templates/', dest: 'build/partials/templates/'
                    },
                    {
                        expand: true, src: '**', cwd: 'app/js/', dest: 'build/js/'
                    },
                    {
                        src: 'app/index.html', cwd: '.', dest: 'build/index.html'
                    }
                ]
            },
            bower: {
                files: [
                    {
                        expand: true, src: '**', cwd: 'app/bower_components/', dest: 'build/bower_components/'
                    }
                ]
            }

        }, clean: {
            all: ['app/bower_components', 'build/*'],
            bower: ['app/bower_components'],
            build: ['build/*']
        },// Clean files from build folder
        deploy: {
            clean: {
                deploy: ['deploy/']
            },
            copy: {
                main: {
                    files: [
                        {
                            expand: true, src: '**', cwd: 'app/bower_components/', dest: 'deploy/bower_components/'
                        },
                        {
                            expand: true, src: '**', cwd: 'app/css/', dest: 'deploy/css/'
                        },
                        {
                            expand: true, src: '**', cwd: 'app/img/', dest: 'deploy/img/'
                        },
                        {
                            expand: true, src: '**', cwd: 'app/partials/', dest: 'deploy/partials/'
                        }, {
                            expand: true, src: '**', cwd: 'app/js/', dest: 'deploy/js/'
                        },
                        {
                            src: 'app/index.html', cwd: '.', dest: 'deploy/index.html'
                        }
                    ]
                }
            }
        }
    }); // init config

    // Loads the tasks to be use
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower-install-simple');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('cleanBower', ['clean:bower']);
    grunt.registerTask('cleanAll', ['clean:all']);
    grunt.registerTask('cleanBuild', ['clean:build']);
    grunt.registerTask('install', ['bower-install-simple']);
    grunt.registerTask('compile', ['sass', 'copy:main', 'copy:bower']);
    grunt.registerTask('lint', ['jshint:beforeconcat']);
    grunt.registerTask('wire', ['wiredep']);

    // Registers tasks to be executed when the task name is called.
    grunt.registerTask('build', ['install', 'concat', 'copy:main', 'wire']);
    grunt.registerTask('dev', ['jshint', 'connect', 'watch']);
    grunt.registerTask('default', ['install', 'jshint']);
    grunt.registerTask('server', ['build', 'connect', 'watch']);
    grunt.registerTask('deploy', ['install', 'compile', 'build', 'connect'])


}; // Wrapper function