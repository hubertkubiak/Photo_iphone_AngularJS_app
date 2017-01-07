var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

var paths = {
    app: 'app/',
    dev: 'dev/'
};

gulp.task('reload', function(){
    browserSync.reload();
});

gulp.task('serve', function(){
    
    browserSync({
        server: '.'
    });

    gulp.watch('*.html', ['reload']);

})

gulp.task('default', ['serve']);