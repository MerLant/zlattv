import gulp from 'gulp'
import pug from 'gulp-pug'
import sass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

const paths = {
  pug: {
    src: 'src/**/*.pug',
    dest: 'src'
  },
  scss: {
    src: 'src/assets/scss/**/*.scss',
    dest: 'src/assets/css'
  }
}

const compilePug = () => {
  return gulp.src(paths.pug.src).pipe(pug()).pipe(gulp.dest(paths.pug.dest))
}

const compileSass = () => {
  return gulp
    .src(paths.scss.src)
    .pipe(sass(dartSass).on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.scss.dest))
}

const watchFiles = () => {
  gulp.watch(paths.pug.src, compilePug)
  gulp.watch(paths.scss.src, compileSass)
}

const build = gulp.series(compilePug, compileSass)
const dev = gulp.series(build, watchFiles)

export { compilePug, compileSass, build, dev }
