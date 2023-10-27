"use strict"; //Treat all JS code as newer version/standards

//Primitive datatypes:- (7 => Number, String, Boolean, BigInt, Null, Undefined, Symbol)
let fname = "Nag"; //String
let age = 33; //number
let isMale = true; //boolean - true or false
let salary; //undefined
let vacation = null; //null datatype => standalone value => object datatype
//symbol datatype => unique, used to add unique property keys.
let key1 = Symbol("Nag");
let key2 = Symbol("Nag");

console.log(key1 === key2); //returns false, because symbol value is always unique.

//Non-Primitive(reference) datatypes:- (3 => Objects, Arrays, Functions)
let person = { fname: "Nag", age: 33, isMale: true }; //object datatype
let people = ["Nag", "Kum", "Kup", "Nav", "Tej"]; //array datatype (object array)

let addPerson = function () {}; // function datatype (object function)

console.log(
  typeof fname,
  typeof age,
  typeof isMale,
  typeof salary,
  typeof null,
  typeof key1,
  typeof person,
  typeof people,
  typeof addPerson
);

//Stack Memory (Primitive Datatypes) | Heap Memory (Non-Primitive Datatypes)
let user1 = "Nag"
let user2 = user1 //copy of user1 will be allocated to user2 in stack memory
console.log(`user1: ${user1} | user2: ${user2}`);

user2="Kum" //updating the user2 will not impact user1 because of Stack memory
console.log(`user1: ${user1} | user2: ${user2}`);

let person1 ={
    name:"Nag",
    age: 33
}
let person2 = person1 //person2 will get reference to person1 in Heap memory
console.log(person1,person2);

person2.age = 32 //As person2 is referring to person in heap memeory, person1 will also get updated
console.log(person1,person2);
