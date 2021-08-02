##Creating a Module
--
Modules are like components. Below is how we create a module
Modules are containers for pieces of our angular application

app.js

1. var app = angular.module('myApp', []);
   1. var the name of module
   2. 1st argument will be actual name
   3. 2nd argument is an array of dependcies

2. Next we just got to import it ``<script type="text/javascript" src="app.js"></script>`` into the index.html

3. Then we can update the ``<body ng-app="myApp">`` to connet it to our module

4. This tells the ng-app directive to use "myApp"
   1. The body tag is now the owner of the angular-application "myApp"

## Expressions
--

1. ``{{}}`` double curly braces represent JS expressions in Angular
2. {{5+3}} evaluates to 8 for example
3. Concatenation works great


## Directives
--

These start with the prefix ng, the main use of hte ng directive is the app directive

other directive include

ng-init
    - Think of these as initial data
    - in our example we used ng-init inside our body with the values "a-5; b=6;"
    - Now we can use those variables in expressions
    - ``<p>The area is {{a * b}}</p>``

with basic math
```
<body ng-app="myApp" ng-init= "a=5; b=6;">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <div>{{"Hello" + " World"}}</div>
    <p>The area is {{a * b}}</p>
    <p>the area is <span ng-bind="a+b"></span></p>
</body>
```
  
ng-bind
    - we can bind new data using bind
    - use it in an expression after
    - ``<p>The area is <span ng-bind="a+b"></span></p>``
    - This ``<p>`` tag returns '11'



with arrays
```
<body ng-app="myApp" ng-init= "even=[2,4,6,8];">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <div>{{"Hello" + " World"}}</div>
    <p>The area is {{even[2]}}</p>
    <p>the area is <span ng-bind="even[1]"></span></p>
</body>
```



starting template
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AngularJS</title>
</head>
<body ng-app="myApp" ng-init= "numbers=[0,1,2,3,4,5,6,7,8,9];">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <p>Number is {{numbers[0]}}</p>
    <p>Number is {{numbers[1]}}</p>
</body>
</html>
```

ng-repeat
    - we want to use ng-repeat instead of manually typing all numbers in our numbers array
    - ``<p ng-repeat="number in numbers">Number is {{number}} </p>``
    - this iterates through every element in the numbers array. Each individual element is 'number'



## Controllers
---

starting template
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AngularJS</title>
</head>
<body ng-app="myApp" ng-init= "numbers=[0,1,2,3,4,5,6,7,8,9];">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <div ng-init="name='Chandler Bing'"></div>
</body>
</html>
```

1. Before we start notice that ng-init in our div tag
2. This is effective but not an ideal way of using angular. This is were controllers come into play
3. Controllers is where we define values and functions that make up our angular applications
4. lets create our first controller


app.js
```
var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.name = 'Ross Geller'
}])
```
Creating the Controller

1. In our app.js less add app.controller
   1. Our first argument is the name of the controller
   2. Our 2nd argument is an array
      1. first value is $scope, this is a JS object
      2. this is the glue between our controller and view
      3. 2nd value we need to add is a function($scope) with scope as the argument
         1. within our CONSTRUCTOR function we can type 
            1. $scope.name = 'Ross Gellar'

Telling the index to use the Controller

1. its a directive!
   1. ng-controller="MyController"
   2. replace the Chandler np-init
   3. try to add age to teh scope in our app controller
   4. then try to add it to the view on index.html
   5. try to add weight without the $scope variable
      1. doesn't work
      2. scope makes the variables accessible
      3. you also cannot use the variable outside of the controller, as its outside of the controllers scope


## Adding Functions to our controller 
--
1. Notice how we declare the function inside the controller as fullname
2. Then when we use an expression to call on it we use the brackets()

```

//app.js
var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.firstname = 'Chandler'
    $scope.lastname = 'Bing';
    $scope.fullname = function(){
        return $scope.firstname + " " + $scope.lastname;
    }
}])

//index.html
<body ng-app="myApp" ng-init= "numbers=[0,1,2,3,4,5,6,7,8,9];">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <div ng-controller="MyController">
        <p>Firstname is {{firstname}} </p>
        <p>Lastname is {{lastname}} </p>
        <p>Fullname is {{fullname()}} </p>
        
    </div>
</body>

```

ng-show
 - add `$scope.isSpy = 'True'; $scope.codename = 'Chancy'`` to the app.js controller
 - add ``<p ng-show="isSpy">Codename is {{codename}} </p>``
     - This translates to angular show only if isSpy is true


ng-hide
    - if we add ng-hide="isSpy" to our first ``<p>`` tag
    - it will hide now because isSpy is true



## Filters
---

1. Filters let your format your expressions that you use with directives


default app.js

we created employees array with our first 3 employees as objects

```
var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.employees = [
        {
            fname: 'Chandler',
            lname: 'Bing',
            salary: 50000
        },
        {
            fname: 'Ross',
            lname: 'Gellar',
            salary: 40000
        },
        {
            fname: 'Joey',
            lname: 'Tribbiani',
            salary: 30000
        }
    ]
}])

```

index.html to display our data

```
<body ng-app="myApp" ng-init= "numbers=[0,1,2,3,4,5,6,7,8,9];">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.js"></script>
    <script type="text/javascript" src="app.js"></script>
    
    <div ng-controller="MyController">
        <div ng-repeat="employee in employees">
            <p>First name is {{employee.fname}}</p>
            <p>Last name is {{employee.lname}}</p>
            <p>Salary is {{employee.salary}}</p>
        </div>
    </div>
</body>
```

How do we use filters with our template now?

## Uppercase filter
1. If we add ``<p>First name is {{employee.fname | uppercase }}</p>``

Our firstnames are returned as capital

## Lowercase Filter
1. If we add ``<p>Last name is {{employee.lname | lowercase }}</p>``

Our lastnames are returned as lowercase

## Currency Filter

1. if we add ``<p>Salary is {{employee.salary | currency}}</p>``

Our $ dollar sign is added and .00 is added to the end

## limitTo

1. If we add ``<p>First name is {{employee.fname | limitTo:3 }}</p>``

This will only return 3 characters of the first name

## Chaining Filters

1. if we add ``<p>First name is {{employee.fname | uppercase |limitTo:3}}</p>``

This allows us to use multiple filters


## Filters inside our directives

1. inside the div add ``<div ng-repeat="employee in employees | limitTo:2">``
2. Now our repeat only does 2 iterations

## orderBy: Directive

1. change our filter directive to ``<div ng-repeat="employee in employees | orderBy:'salary'">``
2. This will orderBy lowest salary first
3. if we add a hyphen, it will sort by larger value
4. `` <div ng-repeat="employee in employees | orderBy:'-salary'">``


## ng-click
--

1. We are going to implement a small click counter that goes up everytime its clicked
2. lets first start by adding a button to our index
3. inside add ng-click="count=count+1"

index.html
```
<div ng-controller="MyController">
        <button ng-click="count=count+1">Click</button>
        <p>Count is {{count}}</p>
</div>
```
4. now we can go to our controller and initialize count

app.js controller
```
var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.count = 0;
}])
```

ToggleShow
--

1. sometimes we want to toggle visibility when a butotn is clicked. or do anything when a button is clicked. This is how it works

app.js controller
```
var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.count = 0;
    $scope.show = true;
    $scope.toggleshow = function(){
        $scope.show = !$scope.show;
    }
}])
```

index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AngularJS</title>
</head>
<body ng-app="myApp" ng-init= "numbers=[0,1,2,3,4,5,6,7,8,9];">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.js"></script>
    <script type="text/javascript" src="app.js"></script>
    
    <div ng-controller="MyController">
        <button ng-click="count=count+1;toggleshow()">Click</button>
        <p ng-show="show">Count is {{count}}</p>
    </div>
</body>
</html>
```

2. Notice how the button will execute the toggleshow function
3. Notice how the p tag ng-show="show" and toggle changes that



## Forms and Ng-Model
---

1. 
