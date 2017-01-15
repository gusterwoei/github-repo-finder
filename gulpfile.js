// grab our gulp packages
var gulp  = require('gulp'),
   gutil = require('gulp-util'),
   pug = require('gulp-pug');

// create a default task and just log a message
gulp.task('default', function() {
   return gutil.log('Gulp is running!')
});

// pug task (run: gulp pug in CLI)
gulp.task('pug', function(done) {
    return gulp.src('src/**/*.pug')
         .pipe(pug()) // pipe to pug plugin
         .pipe(gulp.dest('src/pages/'))
         .on('end', done); // tell gulp our output folder
});

// watchers
gulp.task('watch', function () {
   gulp.watch('gulp-pug', ['pug']);
});