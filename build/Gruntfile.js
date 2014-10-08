module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            html: {
                files: ['index.html', 'partials/**/*.html'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            css: {
                files: ['css/*.css'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            js: {
                files: ['js/**/*.js', 'partials/**/*.js'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [])
};

