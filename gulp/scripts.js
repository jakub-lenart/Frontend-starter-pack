const
		gulp = require('gulp'),
		concat = require('gulp-concat'),
		gutil = require('gulp-util');
		babel = require('gulp-babel');

gulp.task('js', () =>
	gulp.src('src/js/**/*.js')
		.pipe(babel({
			presets: ['es2015'],
			minified: true,
			sourceMaps: true
		}))
		.pipe(concat('main.js'))
		.on('error', gutil.log)
		.pipe(gulp.dest('dist/js'))
);

gulp.task('watch:js', ['js'], () =>
	gulp.watch('src/js/**/*.js', ['js'])
);
