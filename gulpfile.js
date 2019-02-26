'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const watch = require('gulp-watch');
const runSequence = require('run-sequence');

gulp.task('html', e=>{
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(reload({stream: true}));
});

gulp.task('fonts', e=>{
    return gulp.src('./src/css/fonts/*.ttf')
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({stream: true}));
});


gulp.task('js', e=>{
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./build/js'))
    .pipe(reload({stream: true}));
});

gulp.task('sass', function () {
    return gulp.src('./src/css/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/css'));
  });

gulp.task('clean', e=>{
    return del('./build');
});

gulp.task('server', e=>{
    browserSync.init ({
        server: {
            baseDir: 'build'
        },
        open: true
    });
});
gulp.task('watch', e=>{
    gulp.watch('./src/*.html', e =>{
        gulp.start('html');
    });
    gulp.watch('./src/css/*.scss', e =>{
        gulp.start('sass');
    });
    gulp.watch('./src/js/**', e =>{
        gulp.start('js');
    });
    gulp.watch('./src/css/layout/fonts/**', e =>{
        gulp.start('fonts');
    });
});
gulp.task('default', e => {
    runSequence(
        'clean',
        'fonts',
        'html',
        'sass',
        'js',
        'watch',
        'server'
    )
});