var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config').server;


gulp.task('heroku:production', function() {
  connect.server(config);
});
