const
		gulp = require('gulp'),
		webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
    	fallback: 'index.html',
      livereload: true,
      port: '3000',
      open: true
    }));
});
