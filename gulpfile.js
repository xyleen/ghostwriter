const gulp = require('gulp');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('watch', () => {
    return gulp.watch('./assets/sass/**/*.scss', ['styles']);
});

gulp.task('styles', () => {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        // TODO: minify css
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('default', ['styles']);
