var gulp = require('gulp'),
sass = require('gulp-sass'),
browsersync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  browsersync.init({
    proxy: "sandbox.dev:8080/test"
  });
  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch("*.php").on('change', browsersync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(browsersync.stream());
});

gulp.task('default', ['serve']);