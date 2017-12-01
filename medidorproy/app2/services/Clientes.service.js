var MedidorApp = angular.module('MedidorApp')
.factory("ClientesService",['$http','WebService',function($http,WebService){

    var ClientesService = {};
        //Obtener todos los clientes
    ClientesService.getClientes = function(){
        return $http.get(WebService.APIREST + '/clientes')
        .then(handleSuccess, handleError('Error updating client'));
    };
        //Obtener cliente por ID
    ClientesService.getclientebyId = function(id){
        return $http.get(WebService.APIREST + '/cliente/' + id)
        .then(handleSuccess, handleError('Error getting client'));
    };
        //Obtener cliente por nombre de cliente
    ClientesService.GetByUsername = function(username){
        return $http.get(WebService.APIREST + '/cliente/'+username)
        .then(handleSuccess, handleError('Error getting user by username'));
    }
        //Crear un cliente
    ClientesService.insertClient = function(cliente){
        return $http.post(WebService.APIREST + '/cliente',cliente)
        .then(handleSuccess, handleError('Error creating client'));
    };
        //Eliminar un cliente
    ClientesService.deleteClient = function(id){
        return $http.get(WebService.APIREST + '/cliente' + id)
        .then(handleSuccess, handleError('Error updating cliente'));
    };
        //Actualizar un cliente
    ClientesService.udpateClient = function(id){
        return $http.post(WebService.APIREST + '/cliente' + id)
    .then(handleSuccess, handleError('Error updating client'));
    };

     // funciones privadas que manejan el exito(donde se accede al arreglo data del 
    // response) y errores
     // de las funciones que serviran clientes.

     function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }

    return ClientesService;
}]);