## AngularJS Features
---

[live-site](https://mcooper7649.github.io/angularjs_code_challenge/bootstrap_template/index.html)]


https://mcooper7649.github.io/angularjs_code_challenge/bootstrap_template/index.html

[download-json-tutorial](https://medium.com/@mancebo128/download-a-in-memory-variable-json-into-a-file-with-angular-js-2475e4c47df9)




Angular has the following key features which makes it one of the powerful frameworks in the market.

MVC – The framework is built on the famous concept of MVC (Model-View-Controller). This is a design pattern used in all modern day web applications. This pattern is based on splitting the business logic layer, the data layer, and presentation layer into separate sections. The division into different sections is done so that each one could be managed more easily.

Data Model Binding – You don't need to write special code to bind data to the HTML controls. This can be done by Angular by just adding a few snippets of code.

Writing less code – When carrying out DOM manipulation a lot of JavaScript was required to be written to design any application. But with Angular, you will be amazed with the lesser amount of code you need to write for DOM manipulation.

Unit Testing ready – The designers at Google not only developed Angular but also developed a testing framework called "Karma" which helps in designing unit tests for AngularJS applications.

AngularJS Architecture
Angular.js follows the MVC architecture, the diagram of the MVC framework as shown below.

The Controller represents the layer that has the business logic. User events trigger the functions which are stored inside your controller. The user events are part of the controller.

Views are used to represent the presentation layer which is provided to the end users

Models are used to represent your data. The data in your model can be as simple as just having primitive declarations. For example, if you are maintaining a student application, your data model could just have a student id and a name. Or it can also be complex by having a structured data model. If you are maintaining a car ownership application, you can have structures to define the vehicle itself in terms of its engine capacity, seating capacity, etc.

AngularJS Advantages
Since it's an open source framework, you can expect the number of errors or issues to be minimal.

Two-way binding – Angular.js keeps the data and presentation layer in sync. Now you don't need to write additional JavaScript code to keep the data in your HTML code and your data later in sync. Angular.js will automatically do this for you. You just need to specify which control is bound to which part of your model.

Routing – Angular can take care of routing which means moving from one view to another. This is the key fundamental of single page applications; wherein you can move to different functionalities in your web application based on user interaction but still stay on the same page.

Angular supports testing, both Unit Testing, and Integration Testing.

It extends HTML by providing its own elements called directives. At a high level, directives are markers on a DOM element (such as an attribute, element name, and comment or CSS class) that tell AngularJS's HTML compiler to attach a specified behavior to that DOM element. These directives help in extending the functionality of existing HTML elements to give more power to your web application.

index.html "hello world"

```
<!DOCTYPE html>  
<html ng-app="app">  
<head>  
    <meta charset="utf 8">
    <title>Guru99</title>     
</head>  
<body>
<h1 ng-controller="HelloWorldCtrl">{{message}}</h1>
<script src="https://code.angularjs.org/1.6.9/angular.js"></script>
<script>  
    angular.module("app", []).controller("HelloWorldCtrl", function($scope) {  
    $scope.message="Hello World" 
    } )
</script> 

</body>  
</html>
```
Code Explanation:

The "ng-app" keyword is used to denote that this application should be considered as an angular js application. Any name can be given to this application.
The controller is what is used to hold the business logic. In the h1 tag, we want to access the controller, which will have the logic to display "HelloWorld", so we can say, in this tag we want to access the controller named "HelloWorldCtrl".
We are using a member variable called "message" which is nothing but a placeholder to display the "Hello World" message.
The "script tag" is used to reference the angular.js script which has all the necessary functionality for angular js. Without this reference, if we try to use any AngularJS functions, they will not work.
"Controller" is the place where we are actually creating our business logic, which is our controller. The specifics of each keyword will be explained in the subsequent chapters. What is important to note that we are defining a controller method called 'HelloWorldCtrl' which is being referenced in Step2.
We are creating a "function" which will be called when our code calls this controller. The $scope object is a special object in AngularJS which is a global object used within Angular.js. The $scope object is used to manage the data between the controller and the view.
We are creating a member variable called "message", assigning it the value of "HelloWorld" and attaching the member variable to the scope object.
NOTE: The ng-controller directive is a keyword defined in AngularJS (step#2) and is used to define controllers in your application. Here in our application, we have used the ng-controller keyword to define a controller named 'HelloWorldCtrl'. The actual logic for the controller will be created in (step#5).

## What Controller does from Angular's perspective
--

The controller's primary responsibility is to control the data which gets passed to the view. The scope and the view have two-way communication.
The properties of the view can call "functions" on the scope. Moreover events on the view can call "methods" on the scope. The below code snippet gives a simple example of a function.
The function($scope) which is defined when defining the controller and an internal function which is used to return the concatenation of the $scope.firstName and $scope.lastName.
In AngularJS when you define a function as a variable, it is known as a Method.
AngularJS Controller: Learn in 10 Minutes!

Data in this way pass from the controller to the scope, and then the data passes back and forth from the scope to the view.
The scope is used to expose the model to the view. The model can be modified via methods defined in the scope which could be triggered via events from the view. We can define two way model binding from the scope to the model.
Controllers should not ideally be used for manipulating the DOM. This should be done by the directives which we will see later on.
Best practice is to have controller's based on functionality. For example, if you have a form for input and you need a controller for that, create a controller called "form controller".


## How to build a basic Controller
--
Before we start with the creation of a controller, we need to first have our basic HTML page setup in place.

The below code snippet is a simple HTML page which has a title of "Event Registration" and has references to important libraries such as Bootstrap, jquery and Angular.

We are adding references to the bootstrap CSS stylesheets, which will be used in conjunction with the bootstrap libraries.
We are adding references to the angularjs libraries. So now whatever we do with angular.js going forward will be referenced from this library.
We are adding references to the bootstrap library to make our web page more responsive for certain controls.
We have added references to jquery libraries which will be used for DOM manipulation. This is required by Angular because some of the functionality in Angular is dependent on this library.
By default the above code snippet will be present in all of our examples, so that we can show just the specific angularJS code in the subsequent sections.

Secondly let's look at our files and file structure which we are going to start with for the duration of our course.

Code Explanation:

The ng-app keyword is used to denote that this application should be considered as an angular application. Anything that starts with the prefix 'ng' is known as a directive. "DemoApp" is the name given to our Angular.JS application.
We have created a div tag and in this tag we have added an ng-controller directive along with the name of our Controller "DemoController". This basically makes our div tag the ability to access the contents of the Demo Controller. You need to mention the name of the controller under the directive to ensure that you are able to access the functionality defined within the controller.
We are creating a model binding using the ng-model directive. What this does is that it binds the text box for Tutorial Name to be bound to the member variable "tutorialName".
We are creating a member variable called "tutorialName" which will be used to display the information which the user types in the text box for Tutorial Name.
We are creating a module which will attach to our DemoApp application. So this module now becomes part of our application.
In the module, we define a function which assigns a default value of "AngularJS" to our tutorialName variable.
If the command is executed successfully, the following Output will be shown when you run your code in the browser.

## How to define Methods in Controller
--
Normally, one would want to define multiple methods in the controller to separate the business logic.

For example, suppose if you wanted to have your controller do 2 basic things,

Perform the addition of 2 numbers
Perform the subtraction of 2 numbers
You would then ideally create 2 methods inside of your controller, one to perform the addition and the other to perform the subtraction.

Let's see a simple example of how you can define custom methods within an Angular.JS controller. The controller will simply return a string.

Code Explanation:

Here, we are just defining a function which returns a string of "AngularJS". The function is attached to the scope object via a member variable called tutorialName.
If the command is executed successfully, the following Output will be shown when you run your code in the browser.

Using ng-controller in External Files
Let's look at an example of "HelloWorld" where all of the functionality was placed in a single file. Now it's time to place the code for the controller in separate files.

Let's follow the steps below to do this.

Step 1) In the app.js file, add the following code for your controller The above code does the following things,

Define a module called "app" which will hold the controller along with the controller functionality.
Create a controller with the name "HelloWorldCtrl". This controller will be used to have a functionality to display a "Hello World" message.
The scope object is used to pass information from the controller to the view. So in our case, the scope object will be used to hold a variable called "message".
We are defining the variable message and assigning the value "Hello World" to it.
Step 2) Now, in your Sample.html file add a div class which will contain the ng-controller directive and then add a reference to the member variable "message"
```
<div class="container">
	<div ng-controller="HelloWorldCtrl">{{message}}</div>
</div>
```

Also don't forget to add a reference to the script file app.js which has the source code for your controller.
``<script src="app.js"></script>``


