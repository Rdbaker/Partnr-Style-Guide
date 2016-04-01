var gulp = require('gulp');
var config = require('../config.js');

gulp.task('watch', function() {
  if(config.env === 'local') {
    gulp.watch(config.jade.src, ['jade']);
    gulp.watch(config.sass.src, ['sass']);
    gulp.watch(config.coffee.src, ['coffee']);
  }
});
