'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  fs: require('fs')
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task("default", $.gulp.series(
    "clean",
    $.gulp.parallel(
        "sass",
        "pug",
        "copy:image",
        "css:foundation",
        "copy:font",
        "js:foundation",
        "js:process",
        "sprite:png",
        "sprite:svg"
    ), $.gulp.parallel(
        "watch",
        "serve"
    )
))
