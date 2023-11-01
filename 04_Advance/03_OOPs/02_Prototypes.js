/** Prototypes are the mechanism by which JavaScript objects inherit features from one another.
 * All JavaScript objects inherit properties and methods from a prototype. 
 * Date objects inherit from Date.prototype
 * Array objects inherit from Array.prototype
 * The Object.prototype is on the top of the prototype inheritance chain
 * Can add new properties (or methods) to all existing objects of a given type.
 * Can add new properties (or methods) to an object constructor.*/

let heros = ["Thor", "Hulk", "Spider", "Ironman"] //Array
let superHero = "Superman" //String
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Power of Spiderman: ${this.spiderman}`);
    }
} //Object


// Add new properties (or methods) to an object constructor.
// Create a prototype 'firstValue' to object.prototype (This will provide access to all object types)
Object.prototype.firstValue = function(){
    console.log(`${this[0]}`);
}
// Add new properties (or methods) to all existing objects of an Array type.
// Create a prototype 'subTwo' for Array objects
Array.prototype.subTwoOf = function(){
    console.log(`${this.slice(0,2)}`);
}

heros.firstValue() //Expected 'Thor'
superHero.firstValue() //Expected 'S'
heroPower.firstValue() //Expected 'undefined' bcuz heros is object type

heros.subTwoOf() //Expected ["Thor", "Hulk"]
//heroPower.subTwoOf()//Expected 'subTwoOf' is not defined


/** Prototype Inheritance */
const user = {
    name: "Nag",
    email: "nag@asap.com"
}
const contact = {
    phone: "126345",
    address: "4321 Hyd",
    __proto__: user //user inheritance extended to contact object
}

console.log(contact.phone);
console.log(contact.name); //'name' is called using inheritance

const userAccounts = {
    socialAccounts: ["IG","FB","Google"]
}
userAccounts.__proto__ = contact //Another way to extend Inheritance
console.log(userAccounts.email);
console.log(userAccounts.address);

const devices = {
    device: ["Mobile","PC","Laptop"]
}
//Modern Syntax for Inheritance:
Object.setPrototypeOf(devices, userAccounts) //extends userAccounts to devices

console.log(devices.socialAccounts);