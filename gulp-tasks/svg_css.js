import { paths } from "../gulpfile.babel";
import gulp from "gulp";

const svgCss = require('gulp-svg-css-pseudo');

gulp.task("svg_css", () => {
    return gulp.src(paths.sprites.src)
	.pipe(svgCss({
		fileName: '_svg_sprite',
		fileExt: 'scss',
		cssPrefix: 'icon-',
		addSize: false
	}))
	.pipe(gulp.dest('./src/styles/base'))
})
