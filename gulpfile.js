var gulp = require('gulp');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');

var config = {
  bower: 'src/vendor',
}

gulp.task('bower', function() {
    return bower()
      .pipe(gulp.dest(config.bower)) // Possibly rework this to install to './src/bower/' would need to update sass includePaths and add '.bowerrc' for gulp-bower
});

