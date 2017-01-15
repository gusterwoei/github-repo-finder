var gulp = require('gulp');
var pug = require('gulp-pug');
var watch = require('gulp-watch');

gulp.task('pug', function(done) {
    gulp
        .src('src/pages/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('src/pages/'))
        .on('end', done);
});

gulp.task('watch', function() {
	watch([ 'src/pages/**/*.pug' ], function() { gulp.start('pug'); });
});

gulp.task('default', [ 'pug' ], function () {
	gulp.start('watch');
	gulp.start('pug');
});