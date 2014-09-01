var myApp = angular.module('myApp',[]);

myApp.controller('DialogCtrl', ['$scope', function($scope) {
  $scope.model = [
    {
      title: 'First Thing'
    },
    {
      title: 'Second Thing'
    }
  ]

  $scope.open = function () {
    console.log("OPENING");
  }
}]);
