var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('build:js', function(){
  return gulp.src('src/**/*.{js,jsx}')
    .pipe($.babel())
    .pipe(gulp.dest('build'));
});
gulp.task('build:assets', function(){
  return gulp.src('src/assets/**/*', { base: 'src/assets/' })
    .pipe( gulp.dest('build/assets/'));
});

gulp.task('build', ['build:js', 'build:assets']);
