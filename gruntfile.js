module.exports = function (grunt) {
    var jsFiles = ['app/js/**/*.js', 'src/**/*.js', '!app/vendor/'];
    grunt.initConfig({
            pkg: grunt.file.readJSON('./package.json'),
            'bower-install-simple': {
                options: {
                    color: true,
                    cwd: './',
                    directory: 'bower_components'
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
                    src: ['build/*.html']
                }
            },
            jshint: {
                beforeconcat: jsFiles,
                afterconcat: ['build/same.js', 'build/same.directives.js'],
                options: {
                    globalstrict: true,
                    globals: {
                        jQuery: true,
                        document: true,
                        angular: true,
                        window: true,
                        console: true,
                        Firebase: true
                    }
                }
            },
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    beautify: true,
                    preserveComments: false,
                    mingleProperties: true,
                    sourceMap: true
                },
                build: {
                    files: {
                        'build/js/same.min.js': ['build/js/app.js', 'build/js/controllers.js'],
                        'build/js/same.directives.min.js': ['build/js/directives.js']
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
                        {expand: true, src: '**', cwd: 'app/css/', dest: 'build/css/'},
                        {expand: true, src: '**', cwd: 'app/img/', dest: 'build/img/'},
                        {expand: true, src: '**', cwd: 'app/partials/', dest: 'build/partials/'},
                        {expand: true, src: '**', cwd: 'app/partials/templates/', dest: 'build/partials/templates/'},
                        {expand: true, src: '**', cwd: 'app/js/', dest: 'build/js/'},
                        {src: 'app/index.html', cwd: '.', dest: 'build/index.html'}
                    ]
                },
                bower_css: {
                    files: [

                        {
                            flatten: true,
                            cwd: '.',
                            src: 'app/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
                            dest: 'build/vendor/glyphicons-halflings-regular.svg'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-material/angular-material.min.css',
                            dest: 'build/vendor/angular-material.min.css'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-bootstrap/ui-bootstrap-csp.css',
                            dest: 'build/vendor/ui-bootstrap-csp.css'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                            dest: 'build/vendor/bootstrap-theme.min.css'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/bootstrap/dist/css/bootstrap.min.css',
                            dest: 'build/vendor/bootstrap.min.css'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-ui/build/angular-ui.min.css',
                            dest: 'build/vendor/angular-ui.min.css'
                        }
                    ]
                },
                bower_js: {
                    files: [
                        {
                            flatten: true,
                            cwd: '.',
                            src: 'app/bower_components/firebase/firebase.js',
                            dest: 'build/vendor/firebase.js'
                        },
                        {
                            flatten: true,
                            cwd: '.', src: 'app/bower_components/bootstrap/dist/js/bootstrap-theme.min.js',
                            dest: 'build/vendor/bootstrap-theme.min.js'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
                            dest: 'build/vendor/bootstrap.min.js'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/jquery/dist/jquery.min.js',
                            dest: 'build/vendor/jquery.min.js'
                        }
                    ]
                },
                ui_js: {
                    files: [
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-bootstrap/ui-bootstrap-csp.js',
                            dest: 'build/vendor/ui-bootstrap-csp.js'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-ui/build/angular-ui.min.js',
                            dest: 'build/vendor/angular-ui.min.js'
                        },

                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                            dest: 'build/vendor/ui-bootstrap-csp.js'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-bootstrap/ui-bootstrap.min.js',
                            dest: 'build/vendor/ui-bootstrap.min.js'
                        },
                        {
                            flatten: true,
                            cwd: '.',
                            src: 'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
                            dest: 'build/vendor/angular-ui-router.min.js'
                        }
                    ]
                },
                angular_js: {
                    files: [
                        {
                            flatten: true, cwd: '.',
                            src: 'app/bower_components/angular/angular.min.js',
                            dest: 'build/vendor/angular.min.js'
                        },
                        {
                            flatten: true, cwd: '.',
                            src: 'app/bower_components/angular-material/angular-material.min.js',
                            dest: 'build/vendor/angular-material.min.js'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-messages/angular-messages.min.js',
                            dest: 'build/vendor/angular-messages.min.js'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angularfire/dist/angularfire.min.js',
                            dest: 'build/vendor/angularfire.min.js'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-aria/angular-aria.min.js',
                            dest: 'build/vendor/angular-aria.min.js'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-animate/angular-animate.min.js',
                            dest: 'build/vendor/angular-animate.min.js'
                        },
                    ]
                },
                bower_maps: {
                    files: [
                        {
                            flatten: true, cwd: '.',
                            src: 'app/bower_components/angular/angular.min.js.map',
                            dest: 'build/vendor/angular.min.js.map'
                        },
                        {
                            flatten: true,
                            cwd: '.', src: 'app/bower_components/bootstrap/dist/css/bootstrap-theme.css.map',
                            dest: 'build/vendor/bootstrap-theme.min.css.map'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/bootstrap/dist/css/bootstrap.css.map',
                            dest: 'build/vendor/bootstrap.min.css.map'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/jquery/dist/jquery.min.map',
                            dest: 'build/vendor/jquery.min.js'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-messages/angular-messages.min.js.map',
                            dest: 'build/vendor/angular-messages.min.js.map'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-aria/angular-aria.min.js.map',
                            dest: 'build/vendor/angular-aria.min.js.map'
                        },
                        {
                            flatten: true, cwd: '.', src: 'app/bower_components/angular-animate/angular-animate.min.js.map',
                            dest: 'build/vendor/angular-animate.min.js.map'
                        }
                       ]
                }
            }, // Copy tasks: main(app), bower_css, bower_js,angular_js,bower_maps
            clean: {
                all: ['app/bower_components', 'build/*'],
                bower: ['app/bower_components'],
                build: ['build/*']
            },// Clean files from build folder
            deploy: {
                clean: {
                    deploy: ['deploy/']
                }
                ,
                copy: {
                    main: {
                        files: [
                            {expand: true, src: '**', cwd: 'build/css/', dest: 'deploy/css/'},
                            {expand: true, src: '**', cwd: 'build/img/', dest: 'deploy/img/'},
                            {expand: true, src: '**', cwd: 'build/partials/', dest: 'deploy/partials/'},
                            {expand: true, src: '**', cwd: 'build/js/', dest: 'deploy/js/'},
                            {src: 'build/index.html', cwd: '.', dest: 'deploy/same.html'}
                        ]
                    }
                }
                ,
                bower: {
                    files: [
                        {expand: true, src: '**', cwd: 'css/'}

                    ]
                }
            }
        }
    ); // init config

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
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('copyBower', ['copy:bower']);
    grunt.registerTask('cleanBower', ['clean:bower']);
    grunt.registerTask('cleanAll', ['clean:all']);
    grunt.registerTask('cleanBuild', ['clean:build']);
    grunt.registerTask('install', ['bower-install-simple']);
    grunt.registerTask('compile', ['copy:main']);
    grunt.registerTask('lint', ['jshint:beforeconcat']);
    grunt.registerTask('wire', ['wiredep']);
//    grunt.registerTask('uglify', ['uglify']);

// Registers tasks to be executed when the task name is called.
    grunt.registerTask('build', ['jshint', 'concat', 'copy:main', 'wire']);
    grunt.registerTask('dev', ['jshint', 'connect', 'watch']);
    grunt.registerTask('default', ['install', 'jshint']);
    grunt.registerTask('server', ['build', 'connect', 'watch']);
    grunt.registerTask('deploy', ['install', 'build', 'deploy'])
}
; // Wrapper function