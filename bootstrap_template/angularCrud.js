var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('myctrl', ['$scope', function ($scope) {

    // generates id 
    var empid = 1;
    
    // Search
    $scope.query = {}
    $scope.queryBy = '$'
    $scope.orderProp="name"; 


    // Default Dataset
    $scope.students = [{
            name: 'United States',
            amount: '123456',
            code: 'USD',
            type: 'Symbol',
            symbol: '$',
            place: 'true',
            cents: '2',
            delimiter: '#,###.##',
            id: '0',
        },
        {
            name: 'Argentina',
            amount: '4500',
            code: 'USD',
            type: 'Code',
            symbol: '$',
            place: 'false',
            cents: '0',
            delimiter: '#,###.##',
            id: '1',
        },
        {
            name: 'Spain',
            amount: '8995',
            code: 'EUR',
            type: 'Symbol',
            symbol: 'Є',
            place: 'false',
            cents: '0',
            delimiter: '#,###.##',
            id: '2'
        },
        {
            name: 'Germany',
            amount: '150056',
            code: 'EUR',
            type: 'Symbol',
            symbol: 'Є',
            place: 'true',
            cents: '0',
            delimiter: '#.###,##',
            id: '3'
        },
    ];

    // Options
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
            
                name: 'Code'
            },
            {
                name: 'Symbol'
            },
            
        ],
        placementOptions: [{
                name: 'true'
            },
            {
                name: 'false'
            }
        ]
    };

    // Sorting

    $scope.sort = {
        column: '',
        descending: false
    };

    $scope.myValue = true;

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


    //Create Record

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


    //Delete Record

    $scope.delete = function (id) {
        for (i in $scope.students) {
            if ($scope.students[i].id == id) {
                $scope.students.splice(i, 1);
                $scope.newStudent = {};
            }
        }
    }

    //Update Record
    $scope.edit = function (id) {
        for (i in $scope.students) {
            if ($scope.students[i].id == id) {
                $scope.newStudent = angular.copy($scope.students[i]);
            }
        }
    }

    //Download Indidiual Setting Format

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
    $scope.saveJSON = function () {
        $scope.toJSON = '';
        $scope.toJSON = angular.toJson($scope.students);
        var blob = new Blob([$scope.toJSON], { type:"application/json;charset=utf-8;" });			
        var downloadLink = angular.element('<a></a>');
                    downloadLink.attr('href',window.URL.createObjectURL(blob));
                    downloadLink.attr('download', 'fileName.json');
        downloadLink[0].click();
    };


}])

//Custom Currency Filter

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

//Comma to Decimal

app.filter('commaToDecimal', function(){
    return function(value) {
        return value ? parseFloat(value).toFixed(3).toString().replace('.', ',') : null;
    };
});

// Decimal to Comma
app.filter('decimal2comma', [
    function() {// should be altered to suit your needs
        return function(input) {
            var ret=(input)?input.toString().replace(".",","):null;
            if(ret){
                var decArr=ret.split(",");
                if(decArr.length>1){
                    var dec=decArr[1].length;
                    if(dec===1){ret+="0";}
                }//this is to show prices like 12,20 and not 12,2
            }
            return ret;
        };
    }]);
;