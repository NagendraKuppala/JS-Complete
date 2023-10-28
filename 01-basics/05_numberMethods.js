const score = 400 //Number datatype is assigned to score based on the input value
console.log(score);

const balance = new Number(100) //Number datatype is assigned to balance by Number object
console.log(balance);

console.log(balance.toString().length); //toString coverts Number to String, .length will return the length of the string
console.log(balance.toFixed(2)); //Fix the decimal digits

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); //round off the Number to the nearest value with a specified number of digits.
console.log(otherNumber.toPrecision(4)); //

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //converts Number to country(defualt:US) standard for readability
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ JS Maths library+++++++++++++++++++++++++++++

console.log(Math.abs(-4)); //returns Absolute value
console.log(Math.abs(4)); 
console.log(Math.round(4.6)); //round off the Number to the nearest value
console.log(Math.ceil(4.2)); //round off the Number to the nearest higher value
console.log(Math.floor(4.9)); //round off the Number to the nearest lower value
console.log(Math.min(4, 3, 6, 8)); //returns min value
console.log(Math.max(4, 3, 6, 8)); //retuns max value

console.log(Math.random()); //random function returns random number between 0 to 1.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); //round off the Random Number to the nearest lower value

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)