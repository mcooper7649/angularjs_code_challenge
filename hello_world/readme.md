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

1. With the code below we are puling the review data from our controller. 
2. Form control we are connecting by adding by adding two p tags with form.comment and form.author
3. then we are adding the ng-model= and add the form.comment for text area
4. form.author for input
5. This is automatic binding!!

form template index.html
```
<div ng-controller="MyController">
        <h2>Reviews</h2>
        <div ng-repeat="review in reviews">
            <div style="background-color: #EEEEEE;">
            <p>{{review.comment}}</p>
            <p><b>{{review.by}}</b></p>
            </div>
        </div>
        <form name="reviewForm">
            <p>{{form.comment}}</p></br>
            <p>{{form.author}}</p>
            <label>Comment</label><br/>
            <textarea ng-model="form.comment"></textarea><br/>
            <label>Author</label><br/>
            <input ng-model="form.author" type="text"/>

        </form>
    </div>
```

form template app.js controller
```
var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.reviews =  [
        {
            comment: 'Could this BE more awesome?',
            by: 'Chandler Bing'
        },
        {
            comment: 'How you doin?',
            by: 'Joey Tribbiani'
        }
    ]
}])
```


##Submitting Forms
---

1. For this module were going to make some small changes to submit our form
   1. update our input to be ``<input ng-model="form.by" type="email"/>``

Change the Controller data to match below
```
var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
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

```

2. Now that we have our template ready, lets begin by adding a submit button
   ``<input type="submit" value="Add Review">``

3. Now that our button is added we can add ng-submit to our form tag
   - Submit will call another function, lets name it "addReview()"

4. Next we need to go to our controller, app.js and add two scope pieces.
   1. $scope.form = {}  // an object to store our form data
   2. $scope.addReviews // a function that pushes scope.form data to scope.reviews

5. Great now we can add our new comment and it will dispaly our comment and the author info. BUT one problem we are still displaying the previous data after submit. We can clear it or 're-initialize' it to fix that
   1. in the addReviews function of the controller re-initialize the form with an empty object AFTER you push the form data.

## Form Validations
--

1. We want to make it so we only accept valid comments and email addresses
2. we need to first add the flag novalidate to our form. This overrides other form validations, ie from the browser
3. required is another attribute we want to add to our email input
4. now we can see that we can submit the review without a email, ok thats by design but not what we want. 
5. lets add ``<p>Form valid? {{reviewForm.$valid}}</p>``
   1. this is a native property of Form. We can use it to help us develop

6. Next we can add ``<form name="reviewForm" ng-submit="reviewForm.$valid && addReviews()" novalidate>``
7. this reviewForm.$Valid will only allow us to addReviws if the form is valid

## ng-valid ng-invalid ng-dirty ng-pristine
--

These are classes that are automatically applied to a form input state. Pristine means its never been modified or edited
dirty means its been modified or typed into
invalid means it doens't mean requirements, like email for example.
valid means it meets requirements

1. if you add the style code below, you can see how the input fields change when their validity is modifted. 
 ```
    <style type="text/css">
    .ng-invalid.ng-dirty{
        border-color:red;
    }
    .ng-valid.ng-dirty {
        border-color: green;
    }
    input,textarea{
        border: 2px solid;
    }
    </style>
```

```
  <form name="reviewForm" ng-submit="reviewForm.$valid && addReviews()" novalidate>
            <p>{{form.comment}}</p></br>
            <p>{{form.author}}</p>
            <label>Comment</label><br/>
            <textarea ng-model="form.comment"></textarea><br/>
            <label>Author</label><br/>
            <input ng-model="form.by" type="email" required/><br/>
            <input type="submit" value="Add Review" />
            <p>Form valid? {{reviewForm.$valid}}</p>

    </form>
```

## ng-include directive
--

1. Lets first add a div to our index.html to have two p tags
   1. My Name is Mike
   2. I liek to Learn

2. If we wanted to add this to 10 pages we can do two things, manually copy and paste to each page every time, not recommend, OR use NG- include

3. OR you can just create a directive and add the ``<userinformation>`` tag where the div tag was


app.js controller
```
app.directive('userinformation', function(){
    return {
        restrict: 'E',
        templateUrl: 'userinfo.html'
    }
})
```
userinfo.html
```
<p>My Name is Mike</p>
<p>I Like to Learn</p>
```

## Dependencies
---

1. Sometimes we need many pages and that will lead to alot of directives
2. We can re-organize our code. we can create a review.js and copy all the rest of our logic to there from the app.js

review.js
```

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
```

app.js is clean now and only has 1 dependencies, reviewsApp
``var app = angular.module('myApp', ['reviewApp']);``