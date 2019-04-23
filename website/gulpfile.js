const gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  uncss = require("postcss-uncss");

gulp.task("default", function() {
  const plugins = [
    uncss({
      html: ["http://localhost:3000/"],
      ignore: []
    })
  ];

  return gulp
    .src("./static/css/custom.css")
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./static/css/"));
});
