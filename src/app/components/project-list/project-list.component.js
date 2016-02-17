/**
 * Created by grahbari on 17/02/2016.
 */

class ProjectListController {

    constructor (JsonService){
        'ngInject';
        JsonService.getJsonArray('projects.json').then(
            response => {
                this.projects = response.data;
            }
        );
    }

}

export var ProjectListComponent = {
    templateUrl: 'app/components/project-list/project-list.html',
    controller : ProjectListController
};
