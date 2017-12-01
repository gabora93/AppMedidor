MedidorApp.controller('UserCtrl',['$scope','WebService', 'UserService','$location','$routeParams',
function($scope,WebService,UserService,$location,$routeParams){
'use strict';

var vm = this;

vm.userList=[];

vm.userObject ={};

vm.goToCreate = function(){
    console.log("gotocreateService");
    $location.path('nuevoUsuario');
};


vm.getUsuarios = function(){
    UserService.getUsers().then(function(response){
        console.log(response);
        vm.userList=response;
        console.log("lista de usuarios de userservice",vm.userList);
    });
};

vm.crearUsuario = function(){
    console.log("entro a crear usuario");
    UserService.insertUser(vm.userObject).then(function(response){
        console.log(response);
        console.log("usuario creado");
    })
};


vm.getUserbyId = function(id){
    UserService.getUser(id).then(function(response){
        console.log("usuario:"+response.usuario,response);

    })
};


vm.getUserbyId(17);



console.log("hola");

vm.getUsuarios();

}]);