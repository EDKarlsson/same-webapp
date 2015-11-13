# Javascript Classes

### Class declaration

    var User = function(name, age) { // constructor
    }

    User.prototype = {}
    Instance variables (members)

    var User = function(name, age) {
        this.name = name;
        this.age = age;
    }

    User.prototype = {}

### Static variables

    var User = function(name, age) {
        this.name = name;
        this.age = age;
    }

    User.prototype = {
        staticVar: 15,
        anotherStaticVar: 'text'
    }

Here are two static variables. <br>
Each User instance has access to this two variables.

> Note, that we can initialize it with value;

    Instance functions (methods)

    var User = function(name, age) {
        this.name = name;
        this.age = age;
    }

    User.prototype = {
        getName: function() {
            return this.name;
        },

        setName: function(name) {
            this.name = name;
        }
    }
### Usage example:


    var user = new User('Mike', 29);
    user.setName('John');
    alert(user.getName()); //should be 'John'
### Static functions

    var User = function(name, age) {
        this.name = name;
        this.age = age;
    }

    User.create = function(name, age) {
        return new User(name, age);
    }

    User.prototype = {}