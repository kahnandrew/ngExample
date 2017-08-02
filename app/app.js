'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // 'ngRoute',
  // 'myApp.view1',
  // 'myApp.view2'
]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');

  // $routeProvider.otherwise({redirectTo: '/view2'});
// }])
controller('ctrler', ['$scope', '$log', function($scope, $log) {
  $scope.method = function() {
    $log.log('some text to the console');
  };
}]);
