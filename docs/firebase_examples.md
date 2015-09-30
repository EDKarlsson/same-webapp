# Documents

## Contents
### AngularFire Tutorial
#### 1. Install AngularFire

* Using CDN

insert

    <src="https://cdn.firebase.com/js/client/2.2.4/firebase.js"></script>
    <script src="https://cdn.firebase.com/libs/angularfire/1.1.2/angularfire.min.js"></script>

    <html>
        <head>
            <script // angular.min.js // ></script>
            [Add script tags here]
            <link // CSS // >
        ...
    </html

#### 2. Creating an angular module
Define Firebase as a dependency for you module
Allows you to access

1. $firebaseObject - Synchronized objects
2. $firebaseArray - Synchronized arrays
3. $firebaseAuth - Authentication services

    var myApp = angular.module("myApp",["firebase"]);

#### 3. Creating a Controller
To access data from a controller inject $firebaseObject or $firebaseArray services.

Example with $firebaseArray service

    myApp.controller("MyController", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray){
        // Code here
    }

#### 4. Binding a Model to Firebase
All data stored in Firebase can be referenced by a URL.

To bind an ng-model to a firebase location just invoke the $firebaseArray service with the right
Firebase reference.

    var ref = new Firebase("https://c59bag81grv.firebaseio-demo.com/");
    $scope.messages = $firebaseArray(ref);

#### 5. Reading Data
AngularFire will automaticall update the model as needed.
Once a model has been bound to a Firebase URL via $firebaseObject or $firebaseArray.

    <ul id="example-messages" class="example-chat-messages">
        <li ng-repeat="msg in messages">
            <strong class="example-chat-username">{{ msg.from }} </strong>
            {{ msg.body }}
        </li>
    </ul>

#### 6. Writing Data


### 1. Firebase
#### Examples

Add script dependencies

    <!-- Angular -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>

    <!-- Firebase -->
    <src="https://cdn.firebase.com/js/client/2.2.4/firebase.js"></script>

    <!-- AngularFire -->
    <script src="https://cdn.firebase.com/libs/angularfire/1.1.2/angularfire.min.js"></script>

## Example App

    <!doctype html>
    <html ng-app="myApp">
      <head>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
        <script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
        <script src="https://cdn.firebase.com/libs/angularfire/1.0.0/angularfire.min.js"></script>
        <link rel="stylesheet" href="/resources/tutorial/css/example.css"/>
      </head>

      <body ng-controller="MyController">

        <!-- CHAT MARKUP -->
        <div class="example-chat l-demo-container">
          <header>Firebase Chat Demo</header>

          <div class="example-chat-toolbar">
            <label for="nameInput">Username:</label>
            <input ng-model="name" type="text" id="nameInput" placeholder="enter a username...">
          </div>

          <ul id="example-messages" class="example-chat-messages">
            <li ng-repeat="msg in messages">
              <strong class="example-chat-username">{{ msg.from }}</strong>
              {{ msg.body }}
            </li>
          </ul>

          <footer>
            <input ng-model="msg" ng-keydown="addMessage($event)" type="text" id="messageInput"  placeholder="Type a message...">
          </footer>
        </div>

        <script>
          var myApp = angular.module("myApp", ["firebase"]);

          myApp.controller("MyController", ["$scope", "$firebaseArray",
            function($scope, $firebaseArray) {
              //CREATE A FIREBASE REFERENCE
              var ref = new Firebase("https://ryoeuniuayg.firebaseio-demo.com/");

              // GET MESSAGES AS AN ARRAY
              $scope.messages = $firebaseArray(ref);

              //ADD MESSAGE METHOD
              $scope.addMessage = function(e) {

                //LISTEN FOR RETURN KEY
                if (e.keyCode === 13 && $scope.msg) {
                  //ALLOW CUSTOM OR ANONYMOUS USER NAMES
                  var name = $scope.name || "anonymous";

                  //ADD TO FIREBASE
                  $scope.messages.$add({
                    from: name,
                    body: $scope.msg
                  });

                  //RESET MESSAGE
                  $scope.msg = "";
                }
              }
            }
          ]);
        </script>
      </body>
    </html>