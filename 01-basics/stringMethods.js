const name = "Nagendra"
const age = 33

console.log(`Hello my name is ${name} and my age is ${age}`);

const fullName = new String('nag-kum-kup')

console.log(fullName[0]); //returns character at index 0
console.log(fullName.length); //returns the length of the string
console.log(fullName.toUpperCase()); //converts the string to upper case
console.log(fullName.charAt(2)); //returns the character at index 3
console.log(fullName.indexOf('k')); //returns the index of character in the string

const fName = fullName.substring(0, 3)
console.log(fName); //returns the sub-string of a string from start and end indexes given

const lName = fullName.slice(-3) //returns the sub-string of a string from the end
const mName = fullName.slice(4,7) //returns the sub-string of a string from start and end indexes given
console.log(lName);
console.log(mName);

console.log(fullName.split('-')); //returns the array of sub-strings using specific seperator


const myName = "   Nag    "
console.log(myName);
console.log(myName.trim()); //returns string without whitespaces

const url = "https://asap.com/nag%20kup"

console.log(url.replace('%20', '-')) //replace and returns the string with the replaced value in the string

console.log(url.includes('nag')) //return true if includes and false if not.
console.log(url.includes('kum'))
