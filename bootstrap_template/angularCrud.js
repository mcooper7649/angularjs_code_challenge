var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('myctrl', ['$scope', function ($scope) {
    // $scope.students = [];
    var empid = 1;
    $scope.students = [{
            name: 'United States',
            amount: '1234.56',
            code: 'USD',
            type: 'Symbol',
            symbol: '$',
            placement: 'Before Price',
            cents: '2',
            delimiter: 'Traditional',
            id: '0',
        },
        {
            name: 'Argentina',
            amount: '4500.56',
            code: 'USD',
            type: 'Code',
            symbol: '$',
            placement: 'Before Price',
            cents: '0',
            delimiter: 'Traditional',
            id: '1',
        },
        {
            name: 'Spain',
            amount: '899.56',
            code: 'EUR',
            type: 'Symbol',
            symbol: 'Є',
            placement: 'After Price',
            cents: '0',
            delimiter: 'Traditional',
            id: '2'
        },
        {
            name: 'Germany',
            amount: '1500.56',
            code: 'EUR',
            type: 'Symbol',
            symbol: 'Є',
            placement: 'Before Price',
            cents: '0',
            delimiter: 'Traditional',
            id: '3'
        },
    ];

    $scope.data = {
        settings: {},
        currencyOptions: [{
                name: 'USD'
            },
            {
                name: 'EUR'
            },
        ],
        typeOptions: [{
                name: 'symbol'
            },
            {
                name: 'code'
            }
        ],
        placementOptions: [{
                name: 'before'
            },
            {
                name: 'after'
            }
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

    $scope.sort = {
        column: '',
        descending: false
    };

    $scope.changeSorting = function (column) {

        var sort = $scope.sort;

        if (sort.column == column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    };

    $scope.selectedCls = function (column) {
        return column == scope.sort.column && 'sort-' + scope.sort.descending;
    };


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

    $scope.download = function (id) {
        for (i in $scope.students) {
            if ($scope.students[i].id == id) {
                var data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify($scope.students[i]));
                var downloader = document.createElement('a');

                downloader.setAttribute('href', data);
                downloader.setAttribute('download', 'settings.json');
                downloader.click();
            }
        }
    };
}])
app.filter('customCurrency', function(){
    return function(input, symbol, place){
      if(isNaN(input)){
        return input;
      } else {
        var symbol = symbol || '$';
        var place = place === undefined ? true : place;
        if(place === true){
          return symbol + input;
        } else{
          return input + symbol;
        }
      }
    }
  })
;