## Links Used
(download-json-tutorial)[https://medium.com/@mancebo128/download-a-in-memory-variable-json-into-a-file-with-angular-js-2475e4c47df9]

(https://mcooper7649.github.io/angularjs_code_challenge/bootstrap_template/index.html)[https://mcooper7649.github.io/angularjs_code_challenge/bootstrap_template/index.html]

The Problem with Bootstrap JavaScript and Angular
This problem goes back to the rule that you shouldn't use jQuery in your projects. The way jQuery works to manipulate data in your views fights directly with how you use Angular to manipulate your views.

Why You Shouldn't Use jQuery
The way you manipulate data with jQuery is essentially grabbing and injecting into your DOM based on events. So when we use the Bootstrap JavaScript components, like a button, we are saying "when this button is clicked, toggle this button to active". This will set the button to active by adding an .active class and checking an input box (if your button is an input checkbox).

With Angular, manipulating data isn't a grab and inject sort of affair. Things are data-bound so we don't need to do all that barbaric grab and inject stuff. We should be able to bind a variable to each component (button or collapse) and then toggle it based on the true/false nature of that variable.

This is why we can't just use Bootstrap JavaScript. It relies on jQuery and we don't want jQuery rummaging around our Angular projects. If we try to bind variables to the components, it won't work.

Now we could totally create a couple Angular functions like toggleButton() and then call that on an ng-click but we shouldn't have to do hacky things like that. Angular's data binding should allow us to set a variable and watch it mirror to all the places the variable is referenced.

The Solution: UI Bootstrap
So what is the solution? We are taught in Angular that whenever we want to bind data to a certain component, we should build a directive. This will let Angular know that a specific part of our site should be watched for data changes.

The solution is a project called UI Bootstrap. These are built by the AngularUI team that adds many components to extend Angular. The UI Bootstrap doesn't use jQuery and are directives built from the ground up for each of the Bootstrap JS components.

The requirements for UI Bootstrap (unlike BootstrapJS) are:

no requirement for jQuery
requires Angular
requires Bootstrap CSS file
That's it. Now how do we integrate it into our projects?

Our Angular App
Let's take a look at what our setup is to make this work. If you already looked at the JavaScript code, you'll see that we created an Angular module and controller. Then we created variables for the buttons and for the collapse.

The next step for this is to grab the UI Bootstrap file and include that in our project. Then we are able to inject ui.bootstrap into our Angular module. Just like that, we have all the directives we need to mimic the Bootstrap JS components!


AngularJS and ui.bootstrap Boilerplate
---

1. Make sure to import the 'ui.bootstrap' inside our moduel too.
``var app = angular.module('myApp',['ui.bootstrap']);``


index.html
```
<!DOCTYPE html>
<html>

  <head>
    <link data-require="bootstrap-css@3.3.7" data-semver="3.3.7" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css" />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body ng-app="demo">
    <demo></demo>
    
    <script data-require="angular.js@1.6.2" data-semver="1.6.2" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular.js"></script>
    <script data-require="ui-bootstrap@2.3.1" data-semver="2.3.1" src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.3.1/ui-bootstrap-tpls.min.js"></script>
    <script src="script.js"></script>
  </body>

</html>
```


