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