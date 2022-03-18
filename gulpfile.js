const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const fs = require('fs');
const replace = require('gulp-replace');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const replaceData = require('gulp-batch-replace');

//minify css
gulp.task('minify-css', () => {
  return gulp.src('dist/style.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('src/layout'));
});

//Minify css box1
gulp.task('minify-css-box1', () => {
  return gulp.src('dist/styleBox1.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('src/layout/Box1'));
});


// minify js 
gulp.task('compress', function () {
  gulp.src('src/replaceData/renderBox1.js')
    .pipe(minify())
    .pipe(gulp.dest('build/js'))
});



//task SASS
gulp.task('sassTask', function () {
  return src('src/sass/BoxTuThuoc/styleBox2.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(dest('dist', { sourcemaps: '.' }));
});
//task SASS Box 1
gulp.task('sassTaskBox1', function () {
  return src('src/sass/styleBox1.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(dest('dist', { sourcemaps: '.' }));
});

// replace
const cssContent = fs.readFileSync("src/layout/style.css", "utf-8");

const htmlContent = fs.readFileSync("src/layout/layoutCarousel.html", "utf-8");

const jsContent = fs.readFileSync("src/js/carouselJs.js", "utf8");

gulp.task('carouselJs', function () {
  return gulp.src(['src/js/renderCarousel.js'])
    .pipe(replace('%%css%%', cssContent))
    .pipe(replace('%%html%%', htmlContent))
    .pipe(replace('%%js%%', jsContent))
    .pipe(gulp.dest('src/test'));
});

//replace box1
const cssContent1 = fs.readFileSync("src/layout/Box1/styleBox1.css", "utf-8");

const htmlContent1 = fs.readFileSync("src/layout/Box1/layout.html", "utf-8");

// const jsContent1 = fs.readFileSync("src/js/renderBox1.js", "utf8");

gulp.task('renderBox1', function () {
  return gulp.src(['src/js/renderBox1.js'])
    .pipe(replace('%%css%%', cssContent1))
    .pipe(replace('%%html%%', htmlContent1))
    .pipe(gulp.dest('src/test'));
});

//replace data

gulp.task('replaceBox', function () {
  //array is dynamic
  var strData = (fs.readFileSync("src/data/data.json", "utf8"));
  // console.log(data);
  eval('var data=' + strData);
  // var replaceThis = [];
  // console.log(data)y

  var arrdata = [];
  var data = data[0];
  for (let i in data) { arrdata.push(['%' + i + '%', data[i]]) }

  gulp.src(['src/test/renderBox1.js'])
    .pipe(replaceData(arrdata))
    .pipe(gulp.dest('./src/replaceData'));
});