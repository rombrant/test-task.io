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