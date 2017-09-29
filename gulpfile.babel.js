import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';

// SASS
gulp.task('sass', () => {
  gulp.src('./scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      sourceMap: true
    }))
    .pipe(autoprefixer({
      versions: ['las 2 browsers']
    }))
    .pipe(gulp.dest('./css'))
});

// Javascript ES6 to ES5
gulp.task('es6', () => {
  gulp.src('./es6/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./es5'))
});

// WATCH
gulp.task('default', () => {
  gulp.watch('./scss/*.scss', ['sass'])
})