var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function () {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(header('//Hello <%= name %>\n\n', { name: 'frenchu' }))
        .pipe(tsProject())
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '..' }))
        .pipe(gulp.dest('dist'));
});