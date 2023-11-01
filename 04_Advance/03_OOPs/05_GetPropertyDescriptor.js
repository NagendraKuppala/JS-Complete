/** The Object.getOwnPropertyDescriptor() static method returns an object describing 
 * the configuration of a specific property on a given object.
 * 
 * JS predefined constants like Math.PI, Math.E, Number.EPSILON can not be changed.
 * Bcuz their values are predefined constants and their properties(writable,enumerable,configurable) 
 * are set to false.
 */
//getOwnPropertyDescriptor(Math, "PI") returns the Math.PI predefined property description.
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

//Expected {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
console.log(descriptor); 

console.log(Math.PI);
Math.PI = 4 //Not possible bcuz 'writable' is hard coded to 'false', Math.PI would change.
console.log(Math.PI);

//custom Object
let user = {
    username: "Nag",
    email: "nag@asap.com"
}

const userDescriptor = Object.getOwnPropertyDescriptor(user, "username")
//Expected {value: 3.141592653589793, writable: ture, enumerable: true, configurable: ture}
console.log(userDescriptor);

/** The Object.defineProperty() static method defines a new property directly on an object, 
 * or modifies an existing property on an object, and returns the object. */
Object.defineProperty(user, 'username', {
    writable: false, //username property in user object is set to constant
    //enumerable: false, //the property won't show up during enumeration/iternation of the object's properties.   
})
user.username = "kup" //username wont change as user object writable property is set to false
console.log(user); //Expected: { username: 'Nag', email: 'nag@asap.com' }

Object.defineProperty(user, 'username', {
    //writable: false, //username property in user object is set to constant
    enumerable: false, //the property won't show up during enumeration/iternation of the object's properties.   
})
console.log(user); //Expected: { email: 'nag@asap.com' }, as username enumerable is set to false.
