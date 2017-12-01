var MedidorApp = angular.module('MedidorApp')
.factory("MedidorService",['$http','WebService',function($http,WebService){

    var MedidorService = {};
        //Obtener todos los medidors
    MedidorService.getMedidores = function(){
        return $http.get(WebService.APIREST + '/medidores')
        .then(handleSuccess, handleError('Error getting Medidor'));
    };
        //Obtener medidor por ID
    MedidorService.getMedidorbyId = function(id){
        return $http.get(WebService.APIREST + '/medidor/' + id)
        .then(handleSuccess, handleError('Error getting Medidor'));
    };
        //Obtener medidor por nombre de medidor
    MedidorService.GetByUsername = function(username){
        return $http.get(WebService.APIREST + '/medidor/'+username)
        .then(handleSuccess, handleError('Error getting user by username'));
    }
        //Crear un medidor
    MedidorService.insertMedidor = function(medidor){
        return $http.post(WebService.APIREST + '/medidor',medidor)
        .then(handleSuccess, handleError('Error creating Medidor'));
    };
        //Eliminar un medidor
    MedidorService.deleteMedidor = function(id){
        return $http.get(WebService.APIREST + '/medidor' + id)
        .then(handleSuccess, handleError('Error deleting Medidor'));
    };
        //Actualizar un medidor
    MedidorService.udpateMedidor = function(id){
        return $http.post(WebService.APIREST + '/medidor' + id)
    .then(handleSuccess, handleError('Error updating medidor'));
    };

     // funciones privadas que manejan el exito(donde se accede al arreglo data del 
    // response) y errores
     // de las funciones que serviran medidors.

     function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }

    return MedidorService;
}]);