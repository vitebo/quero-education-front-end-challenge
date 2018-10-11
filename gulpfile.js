const gulp = require('gulp')
const sass = require('gulp-sass')
const connect = require('gulp-connect')

gulp.task('styles', () => {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('html', () => {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'))
})

gulp.task('serve', () =>
  connect.server({
    root: './dist/',
    livereload: true
  })
)
