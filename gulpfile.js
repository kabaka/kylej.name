const gulp = require('gulp');
const markdown = require('gulp-markdown');
const handlebars = require('Handlebars');
const rename = require('gulp-rename');
const tap = require('gulp-tap');
const path = require('path');
const titleCase = require('title-case');
const date = new Date();

// TODO: break this into multiple tasks.
exports.default = () => {
    // Start with the global template.
    gulp.src('src/templates/html.hbs')
        .pipe(tap(function(file) {
            // Compile it to a template to which we can later feed content.
            var template = handlebars.compile(file.contents.toString());

            // Render all Markdown files to HTML, then feed that to our template.
            gulp.src("src/pages/**.md")
                .pipe(markdown())
                .pipe(tap(function(file) {
                    var name = path.basename(file.path, ".html");

                    var data = {
                        title: titleCase(name),
                        contents: file.contents.toString(),
                        year: date.getFullYear()
                    };
                    
                    var html = template(data);
                    
                    file.contents = new Buffer(html, "utf-8");
                }))
                .pipe(gulp.dest('dist/'));
            }));

    return gulp.src("src/static-assets/*")
        .pipe(gulp.dest('dist/static-assets/'));
};
