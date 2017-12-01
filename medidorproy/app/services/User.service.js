var MedidorApp = angular.module('MedidorApp')
    .factory("UserService",['$http','WebService',function($http,WebService){
    
        var UserService = {};
            //Obtener todos losusuarios
        UserService.getUsers = function(){
            return $http.get(WebService.APIREST + '/usuarios')
            .then(handleSuccess, handleError('Error updating user'));
        };
            //Obtener usuario por ID
        UserService.getUser = function(id){
            return $http.get(WebService.APIREST + '/usuario/' + id)
            .then(handleSuccess, handleError('Error updating user'));
        };
            //Obtener usuario por nombre de usuario
        UserService.GetByUsername = function(username){
            return $http.get(WebService.APIREST + '/usuarios/'+username)
            .then(handleSuccess, handleError('Error getting user by username'));
        }
            //Crear un usuario
        UserService.insertUser = function(user){
            return $http.post(WebService.APIREST + '/usuario',user)
            .then(handleSuccess, handleError('Error updating user'));
        };
            //Eliminar un usuario
        UserService.deleteUser = function(id){
            return $http.get(WebService.APIREST + '/usuario' + id)
            .then(handleSuccess, handleError('Error updating user'));
        };
            //Actualizar un usuario
        UserService.udpateUser = function(id){
            return $http.post(WebService.APIREST + '/usuario' + id)
        .then(handleSuccess, handleError('Error updating user'));
        };

         // funciones privadas que manejan el exito(donde se accede al arreglo data del 
        // response) y errores
         // de las funciones que serviran usuarios.

         function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    
        return UserService;
    }]);

    