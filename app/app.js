'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // same dependency injection, different style
  // 'ngRoute',
  // 'myApp.view1',
  // 'myApp.view2'
]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');

  // $routeProvider.otherwise({redirectTo: '/view2'});
// }])
run(function ($rootScope, $log, $location) {
    $location.path('/');//Add this
    // continue code here
    $log.log('first log to console');
}).
controller('ctrler', ['$scope', '$log', function($scope, $log) {
  $log.log('second text to the console');

  $scope.method = function() {
    $log.log('some text to the console');
  };
}]);
