// Moving files and Generating Folders
const { src, dest, series, parallel } = require('gulp');
const fs   = require('fs');
const log = require('fancy-log');
const zip = require('gulp-zip');


function createFolder() {

    log(`Creating the folder if not exist`)
    if(!fs.existsSync('dir2')) {
      fs.mkdirSync('dir2');
      log('📁  folder created:', 'dir2');
    }
    if(!fs.existsSync('dir3')) {
        fs.mkdirSync('dir3');
        log('📁  folder created:', 'dir3');
      }
    return Promise.resolve('the value is ignored');
}

function zipTask1() {
    return src('task2/**')
    .pipe(zip('task2.zip'))
    .pipe(dest('dir2'))
}

function zipTask2() {
    return src('task3/**')
    .pipe(zip('task3.zip'))
    .pipe(dest('dir3'))
}

exports.default = series(
    createFolder,
    parallel(zipTask1, zipTask2)
);