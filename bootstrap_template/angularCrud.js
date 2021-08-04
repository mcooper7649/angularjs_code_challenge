var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('myctrl', ['$scope', function ($scope) {
    // $scope.students = [];
    var empid = 1;
    $scope.students = [
        {
            name: 'United States',
            address: '1234.56',
            currency: 'USD',
            type: 'Symbol',
            placement: 'Before Price',
            cents: 'Showing',
            delimiter: 'Traditional',
            id: '1',
        },
        {
            name: 'Argentina',
            address: '4500.56',
            currency: 'USD',
            type: 'Code',
            placement: 'Before Price',
            cents: 'None',
            delimiter: 'Traditional',
            id: '2',
        },
        {
            name: 'Spain',
            address: '899.56',
            currency: 'EUR',
            type: 'Symbol',
            placement: 'After Price',
            cents: 'None',
            delimiter: 'Traditional',
            id: '3'
        },
        {
            name: 'Germany',
            address: '1500.56',
            currency: 'EUR',
            type: 'Symbol',
            placement: 'Before Price',
            cents: 'None',
            delimiter: 'Traditional',
        },
    ];

    $scope.data = {
        settings: {},
        currencyOptions: [
          {name: 'USD'},
          {name: 'EUR'},
        ],
        typeOptions: [
            {name: 'symbol'},
            {name: 'code'}
        ],
        placementOptions: [
            {name: 'before'},
            {name: 'after'}
        ]
       };

    $scope.saveRecord = function () {
        if ($scope.newStudent.id == null) {
            $scope.newStudent.id = empid++;
            $scope.students.push($scope.newStudent);
        } else {
            for (i in $scope.students) {
                if ($scope.students[i].id == $scope.newStudent.id) {
                    $scope.students[i] = $scope.newStudent;
                }
            }
        }
        $scope.newStudent = {};
    }
    $scope.delete = function (id) {
        for (i in $scope.students) {
            if ($scope.students[i].id == id) {
                $scope.students.splice(i, 1);
                $scope.newStudent = {};
            }
        }
    }
    $scope.edit = function (id) {
        for (i in $scope.students) {
            if ($scope.students[i].id == id) {
                $scope.newStudent = angular.copy($scope.students[i]);
            }
        }
    }
    // $scope.defaultdelete = function (id) {
    //     for (i in $scope.defaults) {
    //         if ($scope.defaults[i].id == id) {
    //             $scope.defaults.splice(i, 1);
    //             $scope.newStudent = {};
    //         }
    //     }
    // }
    // $scope.defaultedit = function (id) {
    //     for (i in $scope.defaults) {
    //         if ($scope.defaults[i].id == id) {
    //             $scope.newStudent = angular.copy($scope.defaults[i]);
    //         }
    //     }
    // }
}]);