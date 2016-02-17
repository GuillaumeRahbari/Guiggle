/**
 * Created by grahbari on 17/02/2016.
 */

/**
 * This class is a service aimed to get a json file.
 */
export class JsonService {

    /**
     * Constructor
     * @param $http - The angular http service.
     */
    constructor ($http) {
        'ngInject';
        this.$http   = $http;
        this.baseUrl = '../../assets/json/';
    }

    /**
     * This function gets a json file
     * @param {String} fileName - The file's name we want.
     * @returns {*|Promise.<T>} Returns the $http promise with :
     * <ul>
     *     <li>either a json array</li>
     *     <li>either an error</li>
     * </ul>
     */
    getJsonArray (fileName) {
        return this.$http({
                              method : 'GET',
                              url    : this.baseUrl + fileName,
                              headers: {'Content-Type': 'application/json'}
                          });
    }

}
