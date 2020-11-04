const {src, dest, parallel, series, watch} = require('gulp');
const browserSync   = require('browser-sync').create();
const concat        = require('gulp-concat');
const include       = require('gulp-file-include');
const htmlmin       = require('gulp-htmlmin');
const uglify        = require('gulp-uglify-es').default;
const scss          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const cleanCSS      = require('gulp-clean-css');
const imagemin      = require('gulp-imagemin');
const svgstore      = require('gulp-svgstore');
const rename        = require('gulp-rename');
const cheerio       = require('gulp-cheerio');
const newer         = require('gulp-newer');
const del           = require('del');
const inject        = require('gulp-inject');
const merge        = require('merge-stream');

let minifyJS        = uglify;
let fileswatch      = 'txt,json,md,woff2';

function browsersync(){
    browserSync.init({
        server: { baseDir: 'dist/'},
        notify: false,
        online: true
    })
}

function html() {
    return src('app/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(dest('dist/'))
}

function scripts(){
    return src([
        'app/libs/swiper/swiper-bundle.min.js',
        'app/js/mod-script.js',
    ])
    .pipe(concat('app.min.js'))
    .pipe(eval(minifyJS)())
    .pipe(dest('dist/js/'))
    .pipe(browserSync.stream())
}

function styles(){

    return src('app/css/style.css')
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({overrideBrowserslist: ['last 4 versions']}))
    .pipe(cleanCSS(
        {
            level: { 1: { specialComments: 0 } },
            //format: 'beautify'
        }
    ))
    .pipe(dest('dist/css/'))
    .pipe(browserSync.stream())
}

function styleszz(){
    const sassStram =  src('app/sass/style.sass')
    .pipe(scss())
    .pipe(concat('sass.css'))

    const cssStream = src([
        'app/libs/animate/animate.min.css',
        'app/libs/swiper/swiper-bundle.min.css',
    ])
    .pipe(concat('css.css'))

    return merge(sassStram, cssStream)
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({overrideBrowserslist: ['last 4 versions']}))
    .pipe(cleanCSS(
        {
            level: { 1: { specialComments: 0 } },
            //format: 'beautify'
        }
    ))
    .pipe(dest('dist/css/'))
    .pipe(browserSync.stream())
}

function images(){
    return src('app/img/**/*')
    .pipe(newer('dist/img/'))
    .pipe(imagemin())
    .pipe(dest('dist/img/'))
}

function fonts(){
    return src('app/fonts/**/*')
    .pipe(newer('dist/fonts/'))
    .pipe(dest('dist/fonts/'))
}


function cleanimg() {
    return del('dist/img/**/*', {force: true})
}


function cleandist() {
    return del('dist/**/*', {force: true})
}

function fileContents (filePath, file) {
    return file.contents.toString();
}

function startwatch(){
    watch('app/js/*.js', {usePolling: true}, scripts)
    watch('app/sass/**/*.sass', {usePolling: true}, styles)
    watch('app/**/*.html', {usePolling: true}, html).on('change', browserSync.reload)
    watch('app/**/*.{' + fileswatch + '}', {usePolling: true}).on('change', browserSync.reload)
    watch('app/images/**/*', {usePolling: true}, images).on('change', browserSync.reload)
}


exports.browsersync = browsersync;
exports.html        = html;
exports.scripts     = scripts;
exports.styles      = styles;
exports.images      = images;
exports.cleanimg    = cleanimg;
exports.cleandist   = cleandist;

exports.build       = series(cleandist, html, styles, scripts, fonts, images)
exports.default     = parallel(html, styles, scripts, images, fonts, browsersync, startwatch)