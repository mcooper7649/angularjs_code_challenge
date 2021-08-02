
var app = angular.module('reviewApp', []);
app.controller('MyController', ['$scope', function($scope){


    $scope.form = {};
    $scope.addReviews = function (){
        $scope.reviews.push($scope.form);
        $scope.form = {};
    }
    $scope.reviews =  [
        {
            comment: 'Could this BE more awesome?',
            by: 'Chandler.Bing@gmail.com'
        },
        {
            comment: 'How you doin?',
            by: 'Joey@gmail.com'
        }
    ]
}])

app.directive('userinformation', function(){
    return {
        restrict: 'E',
        templateUrl: 'userinfo.html'
    }
})