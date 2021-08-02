var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.count = 0;
    $scope.show = true;
    $scope.toggleshow = function(){
        $scope.show = !$scope.show;
    }
}])