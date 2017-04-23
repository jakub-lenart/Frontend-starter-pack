const 
		gulp = require('gulp'),
		image = require('gulp-image');
 
gulp.task('img', function () {
  gulp.src('src/img/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('watch:img', ['img'], () =>
    gulp.watch('src/img/*', ['img'])
);
