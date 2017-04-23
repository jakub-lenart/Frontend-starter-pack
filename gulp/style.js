const
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	sassLint = require('gulp-sass-lint');

gulp.task('css', () =>
	gulp.src('src/sass/**/*.sass')
		.pipe(sassLint({
			files: {
				ignore: 'src/sass/assets/_reset.sass'
			},
			rules: {
				'property-sort-order': 0,
				'indentation': 0,
				'no-ids': 0,
				'single-line-per-selector': 0
			}
		}))
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css'))
);

gulp.task('watch:css', ['css'], () =>
	gulp.watch('src/sass/**/*.sass', ['css'])
);
