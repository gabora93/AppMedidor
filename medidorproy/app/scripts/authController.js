MedidorApp.controller('AuthCtrl',['$scope','WebService','UserResource', 
function($scope,WebService,UserResource){
'use strict';

var vm = this;
console.log("controlador de auth");
vm.login = function() {
    
                var credentials = {
                    email: vm.email,
                    password: vm.password
                }
    
                // Use Satellizer's $auth service to login
                $auth.login(credentials).then(function(data) {
    
                    // If login is successful, redirect to the users state
                    $state.go('usuarios', {});
                });
            }

}]);