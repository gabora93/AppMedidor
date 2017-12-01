MedidorApp.controller('ClientCtrl',['$scope','WebService', 'ClientesService','$location',
function($scope,WebService,ClientesService,$location){
'use strict';

var vm = this;

vm.clientsList=[];

vm.clientObject ={};

vm.goToCreate = function(){
    console.log("gotocreate");
    $location.path('Nuevocliente');
}

vm.getClientes = function(){
    ClientesService.getClientes().then(function(response){
        console.log(response);
        vm.clientsList=response;
        console.log("lista de Clientes de ClientesService",vm.clientsList);
    });
};

vm.crearCliente = function(){
    console.log("entro a crear Cliente");
    vm.dataLoading = true;
    ClientesService.insertClient(vm.clientObject).then(function(response){
        console.log(response);
        console.log("Cliente creado");
    })
};


vm.getClientebyId = function(id){
    ClientesService.getClientes(id).then(function(response){
        console.log("cliente:"+response.usuario,response);

    })
};





console.log("hola");

vm.getClientes();

}]);