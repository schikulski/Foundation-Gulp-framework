var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');




gulp.task('styles', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass({style: 'compressed', errLogToConsole: true}))
    .pipe(concat('main.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});








gulp.task('javascripts', function(){
  gulp.src([
    'bower_components/jquery/dist/jquery.js',      // Gets jquery

    'bower_components/fastclick/lib/fastclick.js',      // Gets fastclick

    // Gets Foundation JS change to only include the scripts you'll need
    'bower_components/foundation/js/foundation/foundation.js',
    'bower_components/foundation/js/foundation/foundation.abide.js',
    'bower_components/foundation/js/foundation/foundation.accordion.js',
    'bower_components/foundation/js/foundation/foundation.alert.js',
    'bower_components/foundation/js/foundation/foundation.clearing.js',
    'bower_components/foundation/js/foundation/foundation.dropdown.js',
    'bower_components/foundation/js/foundation/foundation.equalizer.js',
    'bower_components/foundation/js/foundation/foundation.interchange.js',
    'bower_components/foundation/js/foundation/foundation.joyride.js',
    'bower_components/foundation/js/foundation/foundation.magellan.js',
    'bower_components/foundation/js/foundation/foundation.offcanvas.js',
    'bower_components/foundation/js/foundation/foundation.orbit.js',
    'bower_components/foundation/js/foundation/foundation.reveal.js',
    'bower_components/foundation/js/foundation/foundation.slider.js',
    'bower_components/foundation/js/foundation/foundation.tab.js',
    'bower_components/foundation/js/foundation/foundation.tooltip.js',
    'bower_components/foundation/js/foundation/foundation.topbar.js',

    // moving on...
    'src/js/*.js'])                   // Gets all the user JS _*.js from assets/js
    .pipe(concat('scripts.js'))               // Concat all the scripts
    .pipe(rename({suffix: '.min'}))             // Rename it
    .pipe(uglify())                     // Uglify(minify)
    .pipe(gulp.dest('js'));              // Set destination to assets/js
});




gulp.task('copy-modernizr', function(){
  return gulp.src('bower_components/modernizr/modernizr.js')  // Gets Modernizr
  .pipe(uglify())                                       // Uglify(minify)
  .pipe(rename({suffix: '.min'}))                 // Rename it
  .pipe(gulp.dest('js'));              // Set destination to assets/js
});








gulp.task('watch', function(){


    // Create LiveReload server
    livereload.listen();

    // Watch
    gulp.watch('src/scss/*.scss', ['styles']);
    gulp.watch('src/js/*.js', ['javascripts']);


    // Watch any files in dist/, reload on change
    gulp.watch(['css/*', 'js/*', '*.html']).on('change', livereload.changed);

});




