import { config } from './app.config';
import { routerConfig } from './app.route';
import { runBlock } from './app.run';
import { GuiggleComponents } from './app.components';
//import { GuiggleControllers } from './app.controllers';
//import { GuiggleServices } from './app.services';
//import { GuiggleDirectives } from './app.directives';
//import { } from './app.constants';
//import { GuiggleClasses } from './app.classes';

angular.module('Guiggle', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngRoute'])

       ////////////////////////////////////////            CONFIG               ////////////////////////////////////////

       .config(config)
       .config(routerConfig)

       ////////////////////////////////////////              RUN                ////////////////////////////////////////

       .run(runBlock)

       ////////////////////////////////////////          COMPONENTS             ////////////////////////////////////////

       .component('home', GuiggleComponents.HomeComponent)
       .component('navbar', GuiggleComponents.NavBarComponent)

       ////////////////////////////////////////         CONTROLLERS             ////////////////////////////////////////


       ////////////////////////////////////////           SERVICES              ////////////////////////////////////////

       ////////////////////////////////////////           CLASSES               ////////////////////////////////////////


       ////////////////////////////////////////          DIRECTIVES             ////////////////////////////////////////

       ////////////////////////////////////////          CONSTANTS              ////////////////////////////////////////

;
