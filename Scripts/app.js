
/**
 * FileName: app.js
 * 
 * @author Joanne Jung
 * @date July 11, 2016
 * 
 * StudentID: 300432364
 * @description This file is the main javascript file for the web site
 * 
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    var name = "John";
    /** 
        var User = {
            ID: "1",
            Name: "admin",
            Email: "admin@example.com",
            Password: "123456",
            Courses: [
                {
                    ID: "1",
                    Name: "COMP123",
                    Description: "Programming 1"
                }, {
                    ID: "2",
                    Name: "COMP125",
                    Description: "Client-Side Web Development"
                }, {
                    ID: "3",
                    Name: "COMP397",
                    Description: "Web Game Programming"
                }, {
                    ID: "4",
                    Name: "COMP392",
                    Description: "Advanced Graphics"
                }],
            DropCourse: function (CourseIndex) {
                this.Courses.splice(CourseIndex, 1);
            }
        };
    */
    // User Class +++++++++++++++++++++++++++++++++++++++++++++
    var User = (function () {
        // CONSTRUCTOR METHOD +++++++++++++++++++
        var User = function (ID, username, password, email) {
            this.ID = ID;
            this.username = username;
            this.password = password;
            this.email = email;
        }
        User.prototype.LogToConsole = function(){
            console.log("User ID: {0}", this.ID);
            console.log("username : {0}", this.username);
            console.log("password : {0}", this.password);
            console.log("Email : {0}", this.email);
        };

        return User;
    })();
    // Person Class +++++++++++++++++++++++++++++++
    var Person = (function () {
        // Constructor ++++++++++++++++++++++++++++
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        // METHODS ++++++++++++++++++++++++++++++++
        Person.prototype.SaysHello = function () {
            console.log(this.name + " Says Hello!");
        };

        return Person;
    } ());
    // Animal Class
    var Animal = {
        numberOfLegs : null,
        hasHair : null,
        Animal:function(numberOfLegs,hasHair){
            this.numberOfLegs=numerOfLegs;
            this.hasHair=hasHair;
        },
        Speaks:function(){
console.log("The animal makes a noise");
        }
    }

    // app entry function
    function init() {
        var person = new Person("Tom", 45);

        person.SaysHello();

        var user1 = new User(1, "Joanne", "ahsflgahls", "hjung3@gmail.com");
        var user2 = new User(2, "John", "ahsflgahls", "john@gmail.com");
        var users = [new User(1, "Joanne", "ahsflgahls", "hjung3@gmail.com"),
                     new User(2, "John", "ahsflgahls", "john@gmail.com")];

        console.log(users);
        users[1].LogToConsole();
    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();