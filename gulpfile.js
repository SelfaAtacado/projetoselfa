var gulp = required('gulp');
var sass = required('gulp-ruby-sass');

//task para o sass
gulp.task('sass', function(){
	return sass('sass/*.sass').pipe(gulp.dest('css'))
});

//task default gulp
gulp.task('default', function(){
	
});