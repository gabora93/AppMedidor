var MedidorApp = angular.module('MedidorApp', ['chart.js','ui.router','ngRoute','satellizer','ngCookies','ui.select','ngSanitize']);

MedidorApp.config(function($routeProvider, $stateProvider, $urlRouterProvider, $authProvider) {
  
              // Satellizer configuration that specifies which API
              // route the JWT should be retrieved from
              // $authProvider.loginUrl = '/api/authenticate';
  
              // // Redirect to the auth state if any other states
              // // are requested other than users
              // $urlRouterProvider.otherwise('/auth');
  
                $routeProvider
    .when('/',{
      redirectTo:'/auth',
      templateUrl:'views/authView.html',
      controller: 'AuthCtrl as auth'
    })
    .when('/nuevoUsuario',{
      templateUrl:'views/crearUsuario.html',
      controller: 'UserCtrl',
      controllerAs: 'users'
    })
    .when('/nuevoServicio',{
      templateUrl:'views/crearservicio.html',
      controller: 'ServicioCtrl',
      controllerAs: 'services'
    })
    .when('/nuevoService',{
      templateUrl:'views/crearService.html',
      controller: 'ServicioCtrl',
      controllerAs: 'services'
    })
    .when('/servicio',{
      templateUrl:'views/servicio.html',
      controller: 'ServicioCtrl',
      controllerAs: 'services'
    })
    .when('/usuarios',{
      templateUrl: 'views/usuario.html',
      controller: 'UserCtrl',
      controllerAs: 'users'
    })
    .when('/clientes',{
      templateUrl: 'views/cliente.html',
      controller: 'ClientCtrl',
      controllerAs: 'clients'
    })
        .when('/Nuevocliente',{
      templateUrl: 'views/Crearcliente.html',
      controller: 'ClientCtrl',
      controllerAs: 'clients'
    })
    .when('/login',{
      templateUrl: 'views/login.html',
      controller: 'loginCtrl',
      controllerAs: 'login'
    })
    .when('/consumo',{
      templateUrl: 'views/consumo.html',
      controller:'ConsumoCtrl',
      controllerAs: 'consumos'
    });
  
}).constant('WebService',
{
    APIREST: "http://35.184.107.146",
    APILOCAL: "http://localhost:4040"
});
//     $routeProvider
//     .when('/',{
//       redirectTo:'/home',
//       templateUrl:'index.html'
//     })
//     .when('/usuarios',{
//       templateUrl: 'views/usuario.html',
//       controller: 'UserCtrl',
//       controllerAs: 'users'
//     })
//     .when('/consumo',{
//       templateUrl: 'views/consumo.html',
//       controller:'UserCtrl',
//       controllerAs: 'users'
//     });
  
// }).constant('WebService',
// {
//     APIREST: "http://35.184.107.146",
// });

// $stateProvider
// .state('/auth', {
//     url: '/auth',
//     templateUrl: 'views/authView.html',
//     controller: 'AuthController as auth'
// })
// .state('users', {
//     url: '/users',
//     templateUrl: '/views/userView.html',
//     controller: 'UserCtrl',
//     controllerAs: 'users'
// });

// }).constant('WebService',
// {
// APIREST: "http://35.184.107.146",
// });