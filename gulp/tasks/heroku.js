var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('heroku:production', function() {
  connect.server({
    root: ['static/shared', 'static/style-guide'],
    port: process.env.PORT || 9090,
    fallback: 'static/style-guide/index.html',
    livereload: false
  });
});
