angular.module('WereWolves').controller('LoginController', LoginController);

function LoginController() {
    var vm = this;
    vm.title = "WereWolves";
    vm.promptText = "Please enter your nickname:"
    vm.confirmButtonText = "Confirm";
}