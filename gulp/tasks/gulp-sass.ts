import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {DEV_PATH, PROD_PATH, SASS_FILES} from '../gulp.conf';
import {getBrowserSync} from '../browsersync';

const plugins = <any>gulpLoadPlugins();

let bs = getBrowserSync();

/**
 * This function compiles SASS_FILES files into the destinationDirectory directory.
 *
 * @param {String} destinationDirectory - The destination directory.
 * @param {boolean} enableProdMode - A boolean to define if we are in production or development mode.
 */
function sassFn(destinationDirectory:string, enableProdMode:boolean = true) {
    return gulp.src(SASS_FILES, {base: 'src'})
        .pipe(plugins.if(!enableProdMode, plugins.sourcemaps.init()))
        .pipe(plugins.sass({includePaths: [destinationDirectory]}))
        .pipe(plugins.if(!enableProdMode, plugins.sourcemaps.write('./')))
        .pipe(gulp.dest(destinationDirectory))
        .pipe(bs.stream());
}

/**
 * This function compiles SASS_FILES into the DEV_PATH directory.
 */
function sassDev() {
    return sassFn(DEV_PATH, false);
}

/**
 * This function compiles SASS_FILES into the PROD_PATH directory.
 */
function sassProd() {
    return sassFn(PROD_PATH);
}

///////////////////// Sass Tasks /////////////////////

gulp.task('sass:dev', sassDev);
gulp.task('sass:prod', sassProd);