var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config.js').jade;

gulp.task('jade', function() {
  gulp.src(config.src)
    .pipe(jade())
    .pipe(gulp.dest(config.dest));
});
