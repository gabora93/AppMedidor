MedidorApp.controller('ConsumoCtrl',['$scope','WebService', 
function($scope,WebService){
'use strict';

var vm = this;
console.log("entro al controlador de consumo");
vm.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
vm.series = ['Consumo Actual', 'Consumo Anterior','tata'];

vm.data = [
  [65, 59, 80, 81, 56, 55, 40],
  [28, 48, 40, 19, 86, 27, 90],
  [28, 48, 40, 19, 86, 27, 90]
];

console.log("hola");



}]);