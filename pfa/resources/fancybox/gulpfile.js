/* jshint node: true */
/* global $: true */
"use strict";

var gulp = require("gulp"),
    $ = require("gulp-load-plugins")();
var config = {
        js: [
            "pfa/resources/fancybox/lib/jquery.mousewheel.pack.js",
            "pfa/resources/fancybox/source/jquery.fancybox.pack.js",
            "pfa/resources/fancybox/source/helpers/jquery.fancybox-buttons.js",
            "pfa/resources/fancybox/source/helpers/jquery.fancybox-thumbs.js",
            "pfa/resources/fancybox/source/helpers/jquery.fancybox-media.js"
        ],
        css: [
            "pfa/resources/fancybox/source/jquery.fancybox.css",
            "pfa/resources/fancybox/source/helpers/jquery.fancybox-buttons.css",
            "pfa/resources/fancybox/source/helpers/jquery.fancybox-thumbs.css"
        ],
        images: [
            "pfa/resources/fancybox/source/helpers/**/*.{jpg,png,svg,gif,webp,ico}",
            "pfa/resources/fancybox/source/*.{jpg,png,svg,gif,webp,ico}"
        ]
    },
    dist = {
        images: "dist/images/fancybox",
        css: "dist/css",
        js: "dist/js"
    };


/*
 - |--------------------------------------------------------------------------
 - | Gulp Front Tasks
 - |--------------------------------------------------------------------------
 - |
 + *
 + *
 */

gulp.task("clean", function () {
    return gulp.src("dist", {read: false})
        .pipe($.clean());
});

gulp.task("scripts", function () {
    return gulp.src(config.js)
        .pipe($.plumberNotifier())
        .pipe($.concat("jquery.fancybox.min.js"))
        .pipe($.uglify())
        .pipe(gulp.dest(dist.js));
});

gulp.task("styles", function () {
    return gulp.src(config.css)
        .pipe($.plumberNotifier())
        .pipe($.concat("jquery.fancybox.min.css"))
        .pipe($.autoprefixer("last 5 version"))
        .pipe($.replace(/url\('?(.*)'?\)/g, "url('../images/fancybox/$1')"))
        .pipe($.replace("''", "'"))
        .pipe($.cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(dist.css))
});

gulp.task("images", function () {
    return gulp.src(config.images)
        .pipe($.newer(dist.images))
        .pipe(gulp.dest(dist.images));
});


gulp.task('default', ["images", "styles", "scripts"]);



 