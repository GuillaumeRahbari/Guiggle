export function routerConfig ($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/', {
            template: '<home></home>'
        })
        .otherwise({
            redirectTo: '/'
        });
}
