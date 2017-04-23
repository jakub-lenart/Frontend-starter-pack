const
    gulp = require('gulp'),
    fs = require('fs');

fs.readdirSync(__dirname + '/gulp').forEach( (task) =>
    require('./gulp/' + task)
);

gulp.task('build', ['js', 'css', 'views', 'img']);
gulp.task('dev', ['watch:js', 'watch:css', 'watch:views', 'watch:img', 'webserver']);
