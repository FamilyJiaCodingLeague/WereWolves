angular.module('WereWolves', ['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'angular-app/login/login.html',
        controller: LoginController,
        controllerAs: 'vm'
    })
    .when('/rooms', {
        templateUrl: 'angular-app/rooms/rooms.html',
        controller: RoomsController,
        controllerAs: 'vm'
    });
}
