/**
 * Created by grahbari on 17/02/2016.
 */

class ProfilListController {

    constructor (JsonService){
        'ngInject';
        JsonService.getJsonArray('profils.json').then(
            response => {
                this.profils = response.data;
            }
        );
    }

}

export var ProfilListComponent = {
    templateUrl: 'app/components/profil-list/profil-list.html',
    controller : ProfilListController
};
