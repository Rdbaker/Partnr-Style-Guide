var gulp = require('gulp');
var serve = require('gulp-serve');


gulp.task('heroku:production', function() {
  serve({
    root: ['static/shared', 'static/style-guide'],
    port: process.env.PORT || 9090
  });
});
