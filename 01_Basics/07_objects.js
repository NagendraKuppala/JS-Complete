const mySym = Symbol("key1") //declaring symbol to use in objects

const JsUser = {
    name: "Nag",
    "full name": "Nag Kup",
    [mySym]: "mykey1",
    age: 18,
    location: "Hyd",
    email: "nag@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) //access the object value (not recommended to use .key)
console.log(JsUser["email"]) //access the object value (recommended this way bcuz avoid whitespace issue in keys)
console.log(JsUser["full name"])
console.log(JsUser[mySym]) ////access the object value of symbol

JsUser["email"] = "nag@yahoo.com" //to change the object value
console.log(JsUser);
JsUser.email = "nag@asap.com" //another way to change the object value
console.log(JsUser);

// Object.freeze(JsUser) //freeze method is used to freeze the object from changes

// Adding a function to the object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, @ ${this.name}`);
} //'this' refers to this object

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


//*** Singleton object
const igUser = new Object()

//*** object literals (non-singleton object)
const fbUser = {}

igUser.id = "123abc"
igUser.name = "Sammy"
igUser.isLoggedIn = false

console.log(igUser);

const gmailUser = {
    email: "nag@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nag",
            lastname: "kup"
        }
    }
}

console.log(gmailUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //not recommended bcuz objects will be inserted into an object(nested object)
const obj4 = Object.assign({}, obj1, obj2, obj4) //assign method will return an merged objects
console.log(obj4)
const obj5 = {...obj1, ...obj2} //recommended - merge objects using spread operations (...)
console.log(obj5);


const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 2,
        email: "k@gmail.com"
    },
]

console.log(users[1].email);

console.log(Object.keys(igUser)); //returns an array of object keys
console.log(Object.values(igUser)); //returns an array of object values
console.log(Object.entries(igUser)); //returns an array of array object key value pairs

console.log(igUser.hasOwnProperty('isLoggedIn')); //return 'true' if property exist and 'false' if not

//*** Destructuring Objects:-
const course = {
    coursename: "JS Complete Series",
    coursePrice: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor, coursePrice: price} = course //destructuring course object

console.log(instructor, price);
