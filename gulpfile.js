const gulp = require('gulp')
const connect = require('gulp-connect')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')
const sasslint = require('gulp-sass-lint')
const imagemin = require('gulp-imagemin')
const ghPages = require('gulp-gh-pages')

gulp.task('sass', () => {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(connect.reload())
})

gulp.task('html', () => {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload())
})

gulp.task('eslint', () => {
  gulp.src(['./src/js/**/*.js'])
    .pipe(eslint({
      configFilea: './.eslintrc.yml'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('sasslint', () => {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sasslint({
      configFile: './.sasslint.yml'
    }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
})

gulp.task('js', () => {
  return gulp.src('./src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload())
})

gulp.task('imagemin', () => {
  gulp.src('./src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets/images'))
})

gulp.task('fonts', () => {
  gulp.src('./src/assets/fonts/**')
    .pipe(gulp.dest('./dist/assets/fonts'))
})

gulp.task('svg', () => {
  gulp.src('./src/assets/svgs/*')
    .pipe(gulp.dest('./dist/assets/svgs'))
})

gulp.task('serve', () =>
  connect.server({
    root: './dist',
    livereload: true
  })
)

gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.scss', ['sasslint', 'sass'])
  gulp.watch('./src/index.html', ['html'])
  gulp.watch('./src/js/**/*.js', ['js'])
})

gulp.task('ghpages', () => gulp.src('./dist/**/*').pipe(ghPages({ force: true })))

gulp.task('build', ['html', 'sasslint', 'sass', 'js', 'imagemin', 'svg', 'fonts'])

gulp.task('dev', ['build', 'watch', 'serve'])

gulp.task('deploy', ['build', 'ghpages'])
