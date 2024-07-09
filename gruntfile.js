module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dist/styles/main.css': 'src/less/main.less'
                }
            }
        },
        
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/scripts/main.min.js': ['src/js/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);

};
