var MedidorApp = angular.module('MedidorApp')
.factory("ConsumoService",['$http','WebService',function($http,WebService){

    var ConsumoService = {};
        //Obtener todos los Consumos
    ConsumoService.getConsumos = function(){
        return $http.get(WebService.APIREST + '/consumo')
        .then(handleSuccess, handleError('Error updating user'));
    };
        //Obtener consumo por ID
    ConsumoService.getConsumobyId = function(id){
        return $http.get(WebService.APIREST + '/consumo/' + id)
        .then(handleSuccess, handleError('Error updating user'));
    };
        //Obtener consumo por nombre de consumo
    ConsumoService.GetByUsername = function(username){
        return $http.get(WebService.APIREST + '/consumo/'+username)
        .then(handleSuccess, handleError('Error getting user by username'));
    }
        //Crear un consumo
    ConsumoService.insertUser = function(consumo){
        return $http.post(WebService.APIREST + '/consumo',consumo)
        .then(handleSuccess, handleError('Error updating user'));
    };
        //Eliminar un consumo
    ConsumoService.deleteUser = function(id){
        return $http.get(WebService.APIREST + '/consumo' + id)
        .then(handleSuccess, handleError('Error updating consumo'));
    };
        //Actualizar un consumo
    ConsumoService.udpateUser = function(id){
        return $http.post(WebService.APIREST + '/consumo' + id)
    .then(handleSuccess, handleError('Error updating user'));
    };

     // funciones privadas que manejan el exito(donde se accede al arreglo data del 
    // response) y errores
     // de las funciones que serviran consumos.

     function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }

    return ConsumoService;
}]);