'use strict';

angular.module('myApp.view1', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      templateUrl: 'view1/my-customer.html',
      controller: 'View1Ctrl',
      controllerAs: 'view1'
    };
  })
  .controller('View1Ctrl', ['$scope', function($scope) {
    this.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre',
      output: function(value){
        if(value == 'name'){
          return 'Mark';
        }
        else{
          return '100 Standing Way';
        }
      }
    };

    this.output = function(value){
      if(value == 'name'){
        return 'Melissa';
      }
      else {
        return '1500 Mystery Ct';
      }
    };
    $scope.output = function(value){
      if(value == 'name'){
        return 'Melissa';
      }
      else {
        return '1500 Mystery Ct';
      }
    };
    
  }]
);