const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const fs=require('fs');
const replace = require('gulp-replace');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
 
//minify css
gulp.task('minify-css', () => {
  return gulp.src('dist/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('src/layout'));
});

// minify js 
gulp.task('compress', function() {
  gulp.src('src/test/renderCarousel.js')
    .pipe(minify())
    .pipe(gulp.dest('build/js'))
});


//task SASS
gulp.task('sassTask', function () {
    return src('src/sass/style.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(dest('dist', { sourcemaps: '.' }));
});

// replace
const cssContent = fs.readFileSync("src/layout/style.css","utf-8");

const htmlContent = fs.readFileSync("src/layout/layoutCarousel.html","utf-8");

const jsContent = fs.readFileSync("src/js/carouselJs.js", "utf8");

gulp.task('carouselJs',function(){
	return gulp.src(['src/js/renderCarousel.js'])
   	.pipe(replace('%%css%%', cssContent))
    .pipe(replace('%%html%%', htmlContent))
    .pipe(replace('%%js%%', jsContent))
    .pipe(gulp.dest('src/test'));
});