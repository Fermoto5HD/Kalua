var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
 
gulp.task('bower', function() {
	return gulp.src(mainBowerFiles())
		.pipe(gulp.dest('dist'))
});