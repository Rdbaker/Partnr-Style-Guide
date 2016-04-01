var gulp = require('gulp');
var serve = require('gulp-connect');


gulp.task('heroku:production', function() {
  serve({
    root: ['static/shared', 'static/style-guide'],
    port: process.env.PORT || 9090,
    fallback: 'static/style-guide/index.html',
    livereload: false
  });
});
