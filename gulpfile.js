import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';

const sass = gulpSass(dartSass);

export function html(done) {
    src('index.html')
      .pipe(dest('build'));
  
    done();
  }

export function css(done) {
    src('src/scss/app.scss', { sourcemaps: true })
      .pipe(sass().on('error', sass.logError))
      .pipe(cleanCSS())
      .pipe(dest('build/css', { sourcemaps: '.' }));

    done();
}

export function js(done) {
  src('src/js/app.js')
    .pipe(terser())
    .pipe(dest('build/js'));

  done();
}

export function dev() {
  watch('src/scss/**/*.scss', css);
  watch('src/js/**/*.js', js);
}

export default series(js, css, dev);