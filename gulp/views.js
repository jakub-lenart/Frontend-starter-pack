const
		gulp = require('gulp'),
		gutil = require('gulp-util'),
		pug = require('gulp-pug');

gulp.task('views', () => {
	gulp.src('src/views/**/!(_)*.pug')
		.pipe(pug({
			pretty: true
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest('dist'))
});    

gulp.task('watch:views', ['views'], () =>
		gulp.watch('src/views/**/*.pug', ['views'])
);
