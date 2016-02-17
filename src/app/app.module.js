import { config } from './app.config';
import { runBlock } from './app.run';
import { GuiggleComponents } from './app.components';
//import { GuiggleControllers } from './app.controllers';
//import { GuiggleServices } from './app.services';
//import { GuiggleDirectives } from './app.directives';
//import { } from './app.constants';
//import { GuiggleClasses } from './app.classes';

angular.module('Guiggle', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria'])

       ////////////////////////////////////////            CONFIG               ////////////////////////////////////////

       .config(config)

       ////////////////////////////////////////              RUN                ////////////////////////////////////////

       .run(runBlock)

       ////////////////////////////////////////          COMPONENTS             ////////////////////////////////////////

       .component('profilList', GuiggleComponents.ProfilListComponent)
       .component('profil', GuiggleComponents.ProfilComponent)
       .component('projectList', GuiggleComponents.ProjectListComponent)
       .component('project', GuiggleComponents.ProjectComponent)

    ////////////////////////////////////////         CONTROLLERS             ////////////////////////////////////////

    ////////////////////////////////////////           SERVICES              ////////////////////////////////////////

    ////////////////////////////////////////           CLASSES               ////////////////////////////////////////

    ////////////////////////////////////////          DIRECTIVES             ////////////////////////////////////////

    ////////////////////////////////////////          CONSTANTS              ////////////////////////////////////////

;
