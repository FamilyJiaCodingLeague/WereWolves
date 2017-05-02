angular.module('WereWolves').controller('LoginController', LoginController);

function LoginController($http, $location) {
    var vm = this;
    vm.title = "WereWolves";
    vm.promptText = "Please enter your nickname:"
    vm.confirmButtonText = "Confirm";

    vm.submitNickname = function() {
        if (vm.nickname) {
            $http.post('/login', {
                uid: Math.random(),
                nickname: vm.nickname
            }).then(
                function(response) {
                    // success
                    $location.path('/rooms');
                }, 
                function(response) {
                    window.alert("Error: " + response.data.message);
                    vm.nickname = "";
                }
            );
        }
    };
}