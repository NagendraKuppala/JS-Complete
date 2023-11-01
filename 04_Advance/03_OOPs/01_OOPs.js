/** Object: collection of properties and methods
 * why use OOP in JS:   To make code more flexible and easier to maintain.
 *                      JavaScript is prototype-based procedural language, 
 *                      which means it supports both functional and object-oriented programming.
 * parts of OOP: Object literal, Constructor function, Prototypes, Classes, Instances (new, this)
 * 4 Pillars of OOPs: Abstraction, Encapsulation, Inheritance, Polymorphism */


const user = {
    username: "Nag",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log(`Username: ${this.username}`); //this keyword refers to the current context of the object(user).
        console.log(this); //this keyword refers to the current context of the object(user).
    }
}

console.log(user.getUserDetails());
console.log(this); //here 'this' keyword refers to the global context.

//Constructor function:-
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this //By default constructor function is returned
}

// A constructor gets called when an object is created using the 'new' keyword.
/** The new operator lets developers create an instance of a user-defined object type 
 * or of one of the built-in object types that has a constructor function. 
 * For ex:  new Date(); //where Date() is an contructor function and 'new' keyword create a new instance
 *          new promise() */
const userOne = new User("Nag", 12, true)
const userTwo = new User("Kup", 5, false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.greeting());
