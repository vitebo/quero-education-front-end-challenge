const gulp = require('gulp')
const sass = require('gulp-sass')
const connect = require('gulp-connect')

gulp.task('styles', () => {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('serve', () =>
  connect.server({
    root: './dist/',
    livereload: true
  })
)
