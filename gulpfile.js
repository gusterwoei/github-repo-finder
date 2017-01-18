var gulp = require('gulp');
var pug = require('gulp-pug');
var watch = require('gulp-watch');
var rename = require('gulp-rename');

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

gulp.task('build-dev', function() {
    gulp.src('app-settings.dev.json')
    .pipe(rename('app-settings.json'))
    .pipe(gulp.dest('./'));
});

gulp.task('build-prod', function() {
    gulp.src('app-settings.prod.json')
    .pipe(rename('app-settings.json'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', [ 'pug' ], function () {
	gulp.start('watch');
	gulp.start('pug');
});