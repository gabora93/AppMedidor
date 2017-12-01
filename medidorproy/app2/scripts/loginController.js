MedidorApp.controller('loginCtrl',['$scope','AuthenticationService','WebService', 
function($scope,AuthenticationService,WebService){
'use strict';

var vm = this;
console.log("entro al controlador de login");

(function initController() {
    // reset login status
    AuthenticationService.ClearCredentials();
})();

vm.login = function(username,password){
    console.log("entro funcion login");
    vm.dataLoading = true;
    AuthenticationService.Login(vm.username, vm.password, function (response) {
        if (response.success) {
            AuthenticationService.SetCredentials(vm.username, vm.password);
            $location.path('/');
        } else {
            // FlashService.Error(response.message);
            vm.dataLoading = false;
        }
    });
};


}]);