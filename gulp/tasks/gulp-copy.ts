import * as gulp from 'gulp';
import {DEV_PATH, PROD_PATH, ALL_FILES, TYPESCRIPT_FILES, SASS_FILES} from '../gulp.conf';

/**
 * @constant The array of excludes files.
 */
const EXCLUDED_FILES:string[] = [
    '!' + TYPESCRIPT_FILES,
    '!' + SASS_FILES
];

/**
 * This function copies ALL_FILES excepts:
 * <ul>
 *   <li>Typescript files</li>
 *   <li>Sass files</li>
 * </ul>
 * into the destinationDirectory directory.
 *
 * @param {string} destinationDirectory - The destination directory.
 */
function copyDist(destinationDirectory:string) {

    const FILES:string[] = [ALL_FILES].concat(EXCLUDED_FILES);

    return gulp.src(FILES, {base: 'src'})
        .pipe(gulp.dest(destinationDirectory));
}

/**
 * This function copies ALL_FILES into the DEV_PATH directory.
 */
function copyDev() {
    return copyDist(DEV_PATH);
}

/**
 * This function copies ALL_FILES into the PROD_PATH directory.
 */
function copyProd() {
    return copyDist(PROD_PATH);
}

///////////////////// Copy Tasks /////////////////////

gulp.task('copy:dev', copyDev);
gulp.task('copy:prod', copyProd);