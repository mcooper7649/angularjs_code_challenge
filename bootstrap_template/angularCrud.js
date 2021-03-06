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
            place: true,
            cents: 2,
            delimiter: false,
            id: '0',
        },
        {
            name: 'Argentina',
            amount: '4500',
            code: 'USD',
            type: 'Code',
            symbol: '$',
            place: false,
            cents: 0,
            delimiter: false,
            id: '1',
        },
        {
            name: 'Spain',
            amount: '8995',
            code: 'EUR',
            type: 'Symbol',
            symbol: 'Є',
            place: false,
            cents: 0,
            delimiter: false,
            id: '2'
        },
        {
            name: 'Germany',
            amount: '150056',
            code: 'EUR',
            type: 'Symbol',
            symbol: 'Є',
            place: true,
            cents: 0,
            delimiter: true,
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
                name: true
            },
            {
                name: false
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
        return column == $scope.sort.column && 'sort-' + $scope.sort.descending;
    };


    //Create Record

    $scope.saveRecord = function () {
        var audio = new Audio('./audio/writing.mp3');
            audio.play();
        if ($scope.newStudent.id == null) {
            $scope.newStudent.id = $scope.newStudent.name;
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
        var audio = new Audio('./audio/trash.mp3');
        audio.play();
    }

    //Update Record
    $scope.edit = function (id) {
        
        for (i in $scope.students) {
            if ($scope.students[i].id == id) {
                $scope.newStudent = angular.copy($scope.students[i]);
            }
        }
        var audio = new Audio('./audio/edit.mp3');
            audio.play();
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
        var audio = new Audio('./audio/mouseclick.mp3');
            audio.play();
    };
    $scope.saveJSON = function () {
        var audio = new Audio('./audio/edit.mp3');
            audio.play();
        $scope.toJSON = '';
        $scope.toJSON = angular.toJson($scope.students);
        var blob = new Blob([$scope.toJSON], { type:"application/json;charset=utf-8;" });			
        var downloadLink = angular.element('<a></a>');
                    downloadLink.attr('href',window.URL.createObjectURL(blob));
                    downloadLink.attr('download', 'fileName.json');
        downloadLink[0].click();
    };

        // Audio Sounds

        $scope.playDev= function() {
            var audio = new Audio('./audio/mouseclick.mp3');
            audio.play();
        };
        // $scope.playTrash= function() {
        //     var audio = new Audio('./audio/trash.mp3');
        //     audio.play();
        // };
        // $scope.playEdit= function() {
        //     var audio = new Audio('./audio/edit.mp3');
        //     audio.play();
        // };


}])

//Custom Currency Filter 

app.filter('customCurrency', function(){
    return function(input, symbol, code, place, type, cents, delimiter){
      if(isNaN(input)){
        return input;
      } else {
        var symbol = symbol || '$';
        var code = code || 'USD';
        var place = place === undefined ? true : place;
        if(place === true){
           
          if (cents == 2 && type == 'Symbol')
          return symbol + input + ".00";
        } if (cents == 2 && type == 'Code'){
          return code + input  + ".00";
        }
        if (type = "Code" && cents == 0){
            return code + input;
        } 
         if (type = "Symbol" && cents == 0){
            return symbol + input;
         }
        }
      }
    }
  )

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

