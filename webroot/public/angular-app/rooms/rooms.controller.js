angular.module('WereWolves').controller('RoomsController', RoomsController);

function RoomsController($http) {
    var vm = this;
    $http.get('/rooms').then(function(response) {
        vm.rooms = response.data.rooms;
    })
};