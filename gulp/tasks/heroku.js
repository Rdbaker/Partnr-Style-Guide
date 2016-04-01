var gulp = require('gulp');
var serve = require('gulp-serve');


gulp.task('heroku:production', function() {
  serve({
    root: ['static/style-guide/index.html']
    port: process.env.PORT || 9090
  });
});
