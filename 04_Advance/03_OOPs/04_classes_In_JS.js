/** Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
 * Classes are in fact "special functions", 
 * and just as you can define function expressions and function declarations
 */
//Declare User class
class User {
    constructor(username, email, password){ //constructor function
        this.username = username;
        this.email = email;
        this.password = password
    }
    
    //method
    encryptPassword(){
        return `${this.password}abc`
    }
    //method
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
// Creating a new User instance
const nag = new User("Nag", "nag@gmail.com", "123")

console.log(nag.encryptPassword());
console.log(nag.changeUsername());

// How class works behind the scene:
function jsUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
// Adding prototype to User function object
jsUser.prototype.encryptPassword = function(){
    return `${this.password}js`
}
// Adding prototype to User function object
jsUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
// Creating a new User instance
const kup = new jsUser("Kup", "kup@gmail.com", "123")

console.log(kup.encryptPassword());
console.log(kup.changeUsername());

/** Inheritance: A class created with a class inheritance inherits all the methods from another class 
 * The super() method refers to the parent class.
 * By calling the super() method in the constructor method, we call the parent's constructor method 
 * and gets access to the parent's properties and methods.
 * Static class methods are defined on the class itself.
 * Cannot call a static method on a class object.
*/
class UserInheritance{
    constructor(username){ //constructor method
        this.username = username
    }

    //static method- Static properties cannot be directly accessed on instances of the class
    static verifyUser(){ 
        console.log(`${this.username} verified!`);
    }

    //method
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Student extends UserInheritance{ //with extends keyeord a class inherits all the params and methods from parent class
    constructor(username, email, password){ //constructor method
        super(username) //super() method calls the parent's constructor method and gets access
        this.email = email
        this.password = password
    }
    //method
    addCourse(){
        console.log(`New course added to ${this.username}`);
    }
}

const kum = new Student("Kum","kum@gmail.com","1234")
kum.addCourse()
kum.logMe() //kum instance will have all the access to User class methods and params
//kum.verifyUser() //Error: Bcuz its a static method class instance cannot access static method.

const nkup = new UserInheritance("NKup")
nkup.logMe()
//nkup.verifyUser() //Error: Bcuz its a static method class instance cannot access static method.
//nkup.addCourse() //Error: nkup instance will not have access to child class methods and params
