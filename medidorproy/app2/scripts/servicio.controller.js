MedidorApp.controller('ServicioCtrl',['$scope','WebService', 'ServicioService','$location','ClientesService',
function($scope,WebService,ServicioService,$location,ClientesService){
'use strict';

var vm = this;

vm.serviceList=[];

vm.clientsList=[];

vm.serviceObject ={};


vm.holi="hola loco";
vm.model = {multipleDemo :[]};

vm.goToCreate = function(){
    console.log("gotocreateService");
    $location.path('nuevoServicio');
};

vm.getClientes = function(){
    console.log("getClientes");
    ClientesService.getClientes().then(function(response){
        vm.clientsList = response;
        console.log("lista de clientes de ClientesService desde serviciocontroller",vm.clientsList);
    });
};

vm.getServicios = function(){
    ServicioService.getServicios().then(function(response){
        console.log(response);
        vm.serviceList=response;
        console.log("lista de Servicios de ServicioService",vm.serviceList);
    });
};

vm.crearServicio = function(){
    console.log("entro a crear Servicio");
    ServicioService.insertService(vm.serviceObject).then(function(response){
        console.log(response);
        console.log("Servicio creado");
        console.log("servicioObjcto",vm.serviceObject);
        $location.path('servicio');
    })
};

vm.crearServicio = function(){
    console.log("entro a crear Servicio");
    ServicioService.insertService(vm.serviceObject).then(function(response){
        console.log(response);
        console.log("Servicio creado");
        console.log("servicioObjcto",vm.serviceObject);
    },function(data){
        console.log(data);
    });
};




vm.getServicebyId = function(id){
    ServicioService.getServicios(id).then(function(response){
        console.log("servicio:"+response.usuario,response);

    })
};

console.log("servicioObjcto",vm.serviceObject);



console.log("hola");

vm.getServicios();
vm.getClientes();

}]);