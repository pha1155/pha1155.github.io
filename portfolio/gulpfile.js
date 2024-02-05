const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// 일반 컴파일
gulp.task('sass', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// 런타임 중 파일 감시
gulp.task('sass:watch', function() {
  gulp.watch('./src/scss/*.scss', gulp.series('sass'));
});