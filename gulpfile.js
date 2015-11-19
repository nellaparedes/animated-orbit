var gulp = require('gulp');

gulp.task('copy', function () {
  gulp.src(['./bower_components/foundation/js/foundation.min.js',
  	'./bower_components/foundation/js/vendor/*',
    './bower_components/animated-orbit/dist/*',
  	])
    .pipe(gulp.dest('./js'));

    gulp.src(['./bower_components/foundation/css/foundation.min.css',
  	'./bower_components/foundation/css/normalize.min.css',
  	'./bower_components/animate.css/animate.min.css'
  	])
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
    gulp.start('copy');
});
