// Moving files and Generating Folders
const { src, dest, series } = require('gulp');
const fs   = require('fs');
var exec = require('child_process').exec;
const log = require('fancy-log');
const del = require('del');


function createFile(cb) {

    return exec('touch index.js', function (err, stdout, stderr) {
        log(stdout);
        log(stderr);
        cb(err);
    })
}

function createFolder() {

    const dir = 'dir1'
    log(`Creating the folder if not exist  ${dir}`)
    if(!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      log('📁  folder created:', dir);
    }
    return Promise.resolve('the value is ignored');
}

function moveFiles() {
    log('copying Angular code into the directory')
    return src('index.js')
            .pipe(dest('dir1'));
}

function cleanUpFile() {
    return del('index.js', {force:true});
}

exports.default = series(
    createFile,
    createFolder,
    moveFiles,
    cleanUpFile
);