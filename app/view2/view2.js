'use strict';

angular.module('myApp.view2', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl',
      controllerAs: 'view2'
    });
  }])
  .controller('View2Ctrl', ['$log', function($log) {
    var customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre',
    };
    
    function aMethod() {
      $log.log('some text to the console');
    };
    
    this.method = function() {
      $log.log('some text to the console');
    };
    
    function aSecondMethod() {
      return 'some more text to the page';
    };
    
    // demonstrating private scope without using $scope
    // return {
    //   person: customer,
    //   method: aMethod,
    //   method2: aSecondMethod
    // };
  }]
);