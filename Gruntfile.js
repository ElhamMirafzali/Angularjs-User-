module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            dist: {
                options: {
                    sourceMap: true,
                    banner: '/*! MyLib.js 1.0.0 | Aurelio De Rosa (@AurelioDeRosa) | MIT Licensed */'
                },
                files: {
                    'public/js/build/js-build.min.js': [
                        'public/bower_components/jquery/dist/jquery.min.js',
                        'public/bower_components/bootstrap/dist/js/bootstrap.min.js',
                        'public/bower_components/angular-bootstrap/ui-bootstrap.min.js',
                        'public/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                        'public/bower_components/ajax/dist/ajax.min.js']
                }
            }
        }
        ,
        cssmin: {
            dist: {
                options: {
                    banner: '/*! MyLib.js 1.0.0 | Aurelio De Rosa (@AurelioDeRosa) | MIT Licensed */'
                },
                files: {
                    'public/css/build/css-build.min.js': ['public/bower_components/bootstrap/dist/css/bootstrap.min.css',
                        'public/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                        'public/css/styles.css'
                    ]
                }
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'public/img',
                    src: ['**/*.{png,jpg,gif,jpeg,JPG}'],
                    dest: 'public/img/build'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['cssmin']);

};

