var MedidorApp = angular.module('MedidorApp')
.factory("ServicioService",['$http','WebService',function($http,WebService){

    var ServicioService = {};
        //Obtener todos los servicios
    ServicioService.getServicios = function(){
        return $http.get(WebService.APIREST + '/servicios')
        .then(handleSuccess, handleError('Error updating service'));
    };
        //Obtener servicio por ID
    ServicioService.getServiciobyId = function(id){
        return $http.get(WebService.APIREST + '/servicio/' + id)
        .then(handleSuccess, handleError('Error updating service'));
    };
        //Obtener servicio por nombre de servicio
    ServicioService.GetByUsername = function(service){
        return $http.get(WebService.APIREST + '/servicio/'+service)
        .then(handleSuccess, handleError('Error getting user by username'));
    }
        //Crear un servicio
    ServicioService.insertService = function(servicio){
        return $http.post(WebService.APIREST + '/servicio',servicio)
        .then(handleSuccess, handleError('Error updating servicio'));
    };
        //Eliminar un servicio
    ServicioService.deleteService = function(id){
        return $http.get(WebService.APIREST + '/servicio' + id)
        .then(handleSuccess, handleError('Error updating servicio'));
    };
        //Actualizar un servicio
    ServicioService.udpateService = function(id){
        return $http.post(WebService.APIREST + '/servicio' + id)
    .then(handleSuccess, handleError('Error updating servicio'));
    };

     // funciones privadas que manejan el exito(donde se accede al arreglo data del 
    // response) y errores
     // de las funciones que serviran servicios.

     function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }

    return ServicioService;
}]);