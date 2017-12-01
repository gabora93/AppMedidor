var MedidorApp = angular.module('MedidorApp')
.factory("MedicionesService",['$http','WebService',function($http,WebService){

    var MedicionesService = {};
        //Obtener todos los Medicions
    MedicionesService.getMediciones = function(){
        return $http.get(WebService.APIREST + '/medicion')
        .then(handleSuccess, handleError('Error updating user'));
    };
        //Obtener Medicion por ID
    MedicionesService.getMedicionbyId = function(id){
        return $http.get(WebService.APIREST + '/medicion/' + id)
        .then(handleSuccess, handleError('Error updating user'));
    };
        //Obtener Medicion por nombre de Medicion
    MedicionesService.GetByUsername = function(username){
        return $http.get(WebService.APIREST + '/medicion/'+username)
        .then(handleSuccess, handleError('Error getting user by username'));
    }
        //Crear un Medicion
    MedicionesService.insertMedicion = function(Medicion){
        return $http.post(WebService.APIREST + '/medicion',Medicion)
        .then(handleSuccess, handleError('Error updating user'));
    };
        //Eliminar un Medicion
    MedicionesService.deleteMedicion = function(id){
        return $http.get(WebService.APIREST + '/medicion' + id)
        .then(handleSuccess, handleError('Error updating Medicion'));
    };
        //Actualizar un Medicion
    MedicionesService.udpateMedicion = function(id){
        return $http.post(WebService.APIREST + '/medicion' + id)
    .then(handleSuccess, handleError('Error updating user'));
    };

     // funciones privadas que manejan el exito(donde se accede al arreglo data del 
    // response) y errores
     // de las funciones que serviran Medicions.

     function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }

    return MedicionesService;
}]);