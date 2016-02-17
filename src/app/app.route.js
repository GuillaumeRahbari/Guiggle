export function routerConfig ($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/', {
            template: '<home></home>'
        })
        .when('/fxmachine', {
            template: '<fxmachine></fxmachine>'
        })
        .when('/minigolf', {
            template: '<minigolf></minigolf>'
        })
        .otherwise({
                       redirectTo: '/'
                   });
}
