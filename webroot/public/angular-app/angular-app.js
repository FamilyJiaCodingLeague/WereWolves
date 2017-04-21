angular.module('WereWolves', ['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'angular-app/login/login.html',
        controller: LoginController,
        controllerAs: 'vm'
    });
}
